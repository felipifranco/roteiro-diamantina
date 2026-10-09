"""Restaurant service periods stay visible without expanding Info."""
import json
import re
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class RestaurantHoursTests(unittest.TestCase):
    def test_service_and_weekly_hours_have_safe_visible_markup(self):
        page = (ROOT / 'index.html').read_text(encoding='utf-8')
        function = re.search(r'function restaurantHoursMarkup\(s\)\{[^\n]+', page)
        self.assertIsNotNone(function, 'Restaurant hours need reusable visible markup')
        escape = re.search(r'function escapeCardText\(value\)\{[^\n]+', page)
        assert function is not None and escape is not None
        script = escape.group() + '\n' + function.group() + '\n' + """
console.log(JSON.stringify([
 restaurantHoursMarkup({kind:'restaurante',mealService:'Almoço e jantar',hours:'Ter–sáb: 12h–15h e 19h–23h'}),
 restaurantHoursMarkup({kind:'cidade',hours:'não se aplica'}),
 restaurantHoursMarkup({kind:'restaurante',mealService:'<script>',hours:'<img src=x>'})
]));
"""
        result = subprocess.run(['node'], input=script, capture_output=True, text=True, check=True)
        rendered, city, escaped = json.loads(result.stdout)
        self.assertIn('Almoço e jantar', rendered)
        self.assertIn('12h–15h e 19h–23h', rendered)
        self.assertIn('restaurant-hours', rendered)
        self.assertEqual(city, '')
        self.assertNotIn('<script>', escaped)
        self.assertNotIn('<img', escaped)
        card_function = page.split('function createCard(')[1].split('function moveBefore(')[0]
        self.assertIn('restaurantHoursMarkup(s)', card_function.split('const details=')[0],
                      'Hours must be in the card header, not hidden under Info')


    def test_every_boa_lembranca_restaurant_has_sourced_hours(self):
        data = json.loads((ROOT / 'data/pontos-de-parada.json').read_text(encoding='utf-8'))
        restaurants = [s for s in data['routeStops'] if s['kind'] == 'restaurante' and 'dish' in s]
        self.assertEqual(len(restaurants), 8)
        for stop in restaurants:
            with self.subTest(restaurant=stop['name']):
                self.assertTrue(stop.get('mealService'), 'Meal service missing')
                self.assertTrue(stop.get('hours'), 'Weekly opening hours missing')
                self.assertTrue(stop.get('hoursSources'), 'Published hours need evidence')
                self.assertRegex(stop.get('hoursCheckedAt', ''), r'^\d{4}-\d{2}-\d{2}$')
                for source in stop['hoursSources']:
                    self.assertTrue(source['url'].startswith('https://'))
                    self.assertTrue(source['evidence'])


if __name__ == '__main__':
    unittest.main()
