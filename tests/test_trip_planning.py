import copy
import contextlib
import io
import json
import os
import re
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest
from unittest.mock import patch

from scripts import generate_route_data as generator
from scripts.generate_route_data import assemble_data

ROOT = Path(__file__).resolve().parents[1]


class TripPlanningTests(unittest.TestCase):
    def setUp(self):
        self.catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        self.plan = json.loads((ROOT / 'data/roteiro.json').read_text())

    def test_changing_trip_plan_does_not_rewrite_place_catalog(self):
        with tempfile.TemporaryDirectory(dir=ROOT) as directory:
            root = Path(directory)
            catalog_path, plan_path = root / 'catalog.json', root / 'plan.json'
            app_path, markdown_path = root / 'app.js', root / 'catalog.md'
            catalog_path.write_text(json.dumps(self.catalog))
            plan_path.write_text(json.dumps(self.plan))
            with patch.multiple(generator, SOURCE=plan_path,
                                CATALOG_SOURCE=catalog_path, APP_OUTPUT=app_path,
                                MARKDOWN_OUTPUT=markdown_path), \
                    contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(generator.main([]), 0)
                catalog_content = markdown_path.read_bytes()
                original_app = app_path.read_bytes()
                sentinel = 1_700_000_000_000_000_000
                os.utime(markdown_path, ns=(sentinel, sentinel))
                self.plan['stays'][-1]['checkOut'] = '2026-10-13'
                plan_path.write_text(json.dumps(self.plan))
                self.assertEqual(generator.main([]), 0)
                self.assertNotEqual(app_path.read_bytes(), original_app)
                self.assertEqual(markdown_path.read_bytes(), catalog_content)
                self.assertEqual(markdown_path.stat().st_mtime_ns, sentinel)
                self.assertEqual(generator.main(['--check']), 0)

    def test_catalog_is_independent_of_trip_planning(self):
        self.assertNotIn('schedule', self.catalog)
        self.assertNotIn('routeStops', self.plan)
        for stop in self.catalog['routeStops']:
            for field in ('initialDate', 'overnight', 'selectedByDefault'):
                self.assertNotIn(field, stop)
            for attraction in stop.get('attractions', []):
                self.assertNotIn('selectedByDefault', attraction)
        original = copy.deepcopy(self.catalog)
        self.plan['stays'][-1]['checkOut'] = '2026-10-13'
        data = assemble_data(self.catalog, self.plan)
        self.assertEqual(self.catalog, original)
        self.assertEqual(data['schedule']['stays'][-1]['checkOut'], '2026-10-13')
        self.assertNotIn('overnight', data['routeStops'][0])

    def test_lodging_can_be_repeated_and_does_not_require_a_visit(self):
        self.plan['stays'] = [
            {'stopId': 'araxa', 'checkIn': '2026-10-07', 'checkOut': '2026-10-09'},
            {'stopId': 'araxa', 'checkIn': '2026-10-11', 'checkOut': '2026-10-13'},
        ]
        self.plan['visits'] = []
        data = assemble_data(self.catalog, self.plan)
        self.assertEqual(data['schedule']['stays'], self.plan['stays'])
        self.assertEqual(data['schedule']['initialStopOrder'], [])

    def test_invalid_references_dates_and_overlaps_are_rejected(self):
        invalid = [
            ('visits', [{'stopId': 'missing', 'date': '2026-10-08'}]),
            ('visits', [{'stopId': 'araxa', 'date': '2026-02-30'}]),
            ('visits', [{'stopId': 'araxa', 'date': '2026-11-01'}]),
            ('visits', [{'stopId': 'araxa', 'date': '2026-10-08'}] * 2),
            ('stays', [{'stopId': 'missing', 'checkIn': '2026-10-07', 'checkOut': '2026-10-09'}]),
            ('stays', [{'stopId': 'araxa', 'checkIn': '2026-10-07', 'checkOut': '2026-10-07'}]),
            ('stays', [{'stopId': 'araxa', 'checkIn': '2026-10-30', 'checkOut': '2026-11-01'}]),
            ('stays', [
                {'stopId': 'araxa', 'checkIn': '2026-10-07', 'checkOut': '2026-10-09'},
                {'stopId': 'camposaltos', 'checkIn': '2026-10-08', 'checkOut': '2026-10-10'},
            ]),
            ('selectedAttractions', [{'stopId': 'araxa', 'name': 'missing'}]),
        ]
        for field, value in invalid:
            with self.subTest(field=field, value=value), self.assertRaises(ValueError):
                plan = copy.deepcopy(self.plan)
                plan[field] = value
                assemble_data(self.catalog, plan)

    @unittest.skipUnless(shutil.which('node'), 'Node.js is required')
    def test_calendar_keeps_days_12_and_13_without_showing_the_month(self):
        page = (ROOT / 'index.html').read_text()
        helper = re.search(r'const dayKeys=.*?;', page).group(0)
        script = "const TripCalendar=require('./assets/trip-calendar.js');" \
            + 'const schedule=' + json.dumps(self.plan['schedule']) + ';' \
            + helper + """
const assert=require('node:assert/strict');
assert.deepEqual(dayKeys,['2026-10-07','2026-10-08','2026-10-09','2026-10-10','2026-10-11','2026-10-12','2026-10-13']);
"""
        subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True, check=True)

    def test_visits_and_stays_cannot_fall_outside_calendar(self):
        for field, items in (
            ('visits', [{'stopId': 'araxa', 'date': '2026-10-14'}]),
            ('stays', [{'stopId': 'araxa', 'checkIn': '2026-10-13', 'checkOut': '2026-10-14'}]),
            ('dayNotes', [{'date': '2026-10-14', 'text': 'Outside trip'}]),
        ):
            with self.subTest(field=field), self.assertRaises(ValueError):
                plan = copy.deepcopy(self.plan)
                plan[field] = items
                assemble_data(self.catalog, plan)

    @unittest.skipUnless(shutil.which('node'), 'Node.js is required')
    def test_return_estimate_uses_planned_nights_instead_of_visit_suggestions(self):
        page = (ROOT / 'index.html').read_text()
        helper = re.search(r'function totalEnd\(order\)\{.*?\n', page).group(0)
        script = """
const assert=require('node:assert/strict');
const {addDays:add}=require('./assets/trip-calendar.js');
const schedule={destinationDate:'2026-10-09'},routeDate=stop=>stop.date;
let stays=[{stopId:'city',checkIn:'2026-10-11',checkOut:'2026-10-13'}];
""" + helper + """
const visits=[{date:'2026-10-11',stayDays:[1,10]}];
assert.equal(totalEnd(visits),'2026-10-12');
stays=[];
assert.equal(totalEnd(visits),'2026-10-11');
assert.equal(totalEnd([]),'2026-10-09');
"""
        subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True, check=True)

    @unittest.skipUnless(shutil.which('node'), 'Node.js is required')
    def test_nightly_choices_merge_and_preserve_other_nights(self):
        script = """
const assert=require('node:assert/strict');
const {calendarDays,stayOnDay,nightCount,changeNight}=require('./assets/trip-calendar.js');
assert.deepEqual(calendarDays('2026-10-07','2026-10-09'),['2026-10-07','2026-10-08','2026-10-09']);
assert.deepEqual(calendarDays('2026-10-30','2026-11-02'),['2026-10-30','2026-10-31','2026-11-01','2026-11-02']);
const first=changeNight([], '2026-10-07','camposaltos','2026-10-13');
const stays=changeNight(first,'2026-10-08','camposaltos','2026-10-13');
assert.equal(stays.length,1);
assert.equal(nightCount(stays[0]),2);
assert.equal(stayOnDay(stays,'2026-10-08').stopId,'camposaltos');
assert.equal(stayOnDay(stays,'2026-10-09'),undefined);
const longer=changeNight(stays,'2026-10-09','camposaltos','2026-10-13');
const split=changeNight(longer,'2026-10-08','araxa','2026-10-13');
assert.deepEqual(split,[
 {stopId:'camposaltos',checkIn:'2026-10-07',checkOut:'2026-10-08'},
 {stopId:'araxa',checkIn:'2026-10-08',checkOut:'2026-10-09'},
 {stopId:'camposaltos',checkIn:'2026-10-09',checkOut:'2026-10-10'}
]);
const removed=changeNight(longer,'2026-10-08','','2026-10-13');
assert.equal(removed.length,2);
assert.equal(stayOnDay(removed,'2026-10-08'),undefined);
assert.equal(stayOnDay(removed,'2026-10-09').stopId,'camposaltos');
assert.deepEqual(changeNight(split,'2026-10-08','camposaltos','2026-10-13'),longer);
assert.throws(()=>changeNight(stays,'2026-10-13','araxa','2026-10-13'),/período/);
assert.equal(first[0].checkOut,'2026-10-08');
assert.equal(longer[0].checkOut,'2026-10-10');
"""
        subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True, check=True)


if __name__ == '__main__':
    unittest.main()
