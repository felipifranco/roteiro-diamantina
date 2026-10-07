import json
import pathlib
import unittest
from scripts.generate_route_data import load_data

ROOT = pathlib.Path(__file__).resolve().parents[1]

class LunchMapTests(unittest.TestCase):
    def test_lunch_pins_use_canonical_records_without_duplicate_layer(self):
        data = load_data()
        research = json.loads((ROOT / 'data/locais-almoco.json').read_text())
        page = (ROOT / 'index.html').read_text()
        self.assertNotIn('MapLunch.attach', page)
        self.assertNotIn('assets/map-lunch.js', page)
        stops = {s['id']: s for s in data['routeStops']}
        for original in research['places']:
            record = stops[original['id']]
            self.assertEqual(record['kind'], 'restaurante')
            for field in ('name', 'lat', 'lon', 'address', 'phone', 'food', 'hours', 'sources', 'availabilityNote'):
                self.assertEqual(record[field], original[field])
            self.assertFalse(record.get('selectedByDefault', False))
