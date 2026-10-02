import copy
import json
import subprocess
import unittest
from pathlib import Path

from scripts.generate_route_data import assemble_data, load_data

ROOT = Path(__file__).resolve().parents[1]


class DestinationDaysTests(unittest.TestCase):
    def test_belo_horizonte_keeps_arrival_on_10_and_tours_on_11(self):
        data = load_data()
        city = next(s for s in data['routeStops'] if s['id'] == 'belohorizonte')
        self.assertEqual(city['initialDate'], '2026-10-10')
        self.assertEqual(city['availableDates'], ['2026-10-11'])
        self.assertEqual(data['schedule']['stays'][-1], {
            'stopId': 'belohorizonte', 'checkIn': '2026-10-10',
            'checkOut': '2026-10-11',
        })

    def test_extra_visit_days_must_be_valid_and_inside_the_trip(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        for dates in ['2026-10-11', ['2026-10-32'], ['2026-10-14'], [None]]:
            with self.subTest(dates=dates), self.assertRaises(ValueError):
                invalid = copy.deepcopy(plan)
                invalid['availableDates']['belohorizonte'] = dates
                assemble_data(catalog, invalid)

    def test_availability_is_independent_of_overnights_and_selected_tours(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        plan['stays'] = []
        plan['selectedAttractions'] = []
        data = assemble_data(catalog, plan)
        places = {s['id']: s for s in data['routeStops']}
        self.assertEqual(places['diamantina']['availableDates'], ['2026-10-09'])
        self.assertEqual(places['belohorizonte']['availableDates'], ['2026-10-11'])

    def test_availability_rejects_unknown_places_and_legacy_visit_config(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        for value in [[], {'missing': ['2026-10-09']}]:
            with self.subTest(value=value), self.assertRaises(ValueError):
                invalid = copy.deepcopy(plan)
                invalid['availableDates'] = value
                assemble_data(catalog, invalid)
        with self.assertRaises(ValueError):
            plan['visits'][-1]['availableDates'] = ['2026-10-11']
            assemble_data(catalog, plan)

    def test_arrival_and_vesperata_have_separate_dates(self):
        data = load_data()
        self.assertEqual(data['schedule']['destinationDate'], '2026-10-08')
        city = next(s for s in data['routeStops'] if s['id'] == 'diamantina')
        self.assertEqual(city['availableDates'], ['2026-10-09'])
        event = next(t for t in city['attractions'] if t['name'] == 'Vesperata')
        self.assertEqual(event['initialDate'], '2026-10-09')
        self.assertTrue(event['required'])

    def test_tour_dates_must_be_valid_and_inside_the_trip(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        for date in ['2026-10-32', '2026-10-14', '2026-10-06', None]:
            with self.subTest(date=date), self.assertRaises(ValueError):
                invalid = copy.deepcopy(plan)
                invalid['selectedAttractions'][0]['date'] = date
                assemble_data(catalog, invalid)

    def test_both_days_offer_tours_and_route_respects_their_dates(self):
        subprocess.run(['node', '-e', """
const assert=require('node:assert/strict'),P=require('./assets/trip-calendar.js');
const schedule={startDate:'2026-10-07',endDate:'2026-10-13',destinationId:'d'};
const destinationStop={id:'d',availableDates:['2026-10-09']};
const city={id:'c',availableDates:['2026-10-11']};
assert.deepEqual(P.visitDays(destinationStop,'2026-10-08',[],schedule),['2026-10-08','2026-10-09']);
assert.deepEqual(P.visitDays(city,'2026-10-10',[],schedule),['2026-10-10','2026-10-11']);
assert.deepEqual(P.visitDays({id:'d'},'2026-10-08',[],schedule),['2026-10-08']);
assert.deepEqual(P.visitDays({id:'d'},'2026-10-08',['2026-10-09'],schedule),['2026-10-08','2026-10-09']);
assert.equal(P.destinationDays,undefined);
const origin={id:'o'},destination={id:'d'},other={id:'c',date:'2026-10-08'};
const event={id:'event',kind:'atracao',parentId:'d',date:'2026-10-09'};
const tour={id:'tour',kind:'atracao',parentId:'d',date:'2026-10-08'};
const dates=new Map([['event',event.date],['tour',tour.date],['c',other.date]]);
const fixed=new Map([['o','2026-10-07'],['d','2026-10-08']]);
const date=s=>P.routeDate(s,dates,fixed);
const tours=s=>s===destination?[event,tour]:[];
const plan=P.planRoute([other],origin,destination,date,tours,new Set(['d','c','event','tour']),{sameDayOrder:'before'},true);
assert.deepEqual(plan.routePoints.map(s=>s.id),['o','d','tour','c','event','o']);
assert.deepEqual(plan.sameDay.map(s=>s.id),['tour','c']);
assert.deepEqual(plan.afterPoints.map(s=>s.id),['event']);
assert.equal(plan.routePoints.filter(s=>s.id==='d').length,1);
assert.equal(plan.labels.get('tour'),'1a');
assert.equal(plan.labels.get('event'),'1b');
"""], cwd=ROOT, check=True)
