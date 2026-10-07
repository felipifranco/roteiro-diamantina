import unittest
from scripts.generate_route_data import load_data

class GenericRestaurantTests(unittest.TestCase):
    def test_uberaba_lunch_options_are_regular_optional_restaurants(self):
        data = load_data()
        restaurants = [s for s in data['routeStops'] if s.get('city') == 'Uberaba' and s['kind'] == 'restaurante']
        self.assertEqual(len(restaurants), 3)
        for s in restaurants:
            self.assertNotIn('dish', s)
            self.assertTrue(s['food'])
            self.assertTrue(s['address'])
            self.assertFalse(s.get('selectedByDefault', False))
