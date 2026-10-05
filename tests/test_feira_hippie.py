from datetime import date
import unittest
from scripts.generate_route_data import load_data


class FeiraHippieTests(unittest.TestCase):
    def test_feira_is_belo_horizonte_tour_selected_on_sunday(self):
        data = load_data()
        city = next(s for s in data['routeStops'] if s['id'] == 'belohorizonte')
        matches = [a for a in city['attractions'] if a['name'] == 'Feira Hippie (Feira da Afonso Pena)']
        self.assertEqual(len(matches), 1)
        fair = matches[0]
        self.assertIn(fair['name'], city['sights'])
        self.assertEqual(fair['kind'], 'atracao')
        self.assertTrue(fair['selectedByDefault'])
        self.assertEqual(fair['initialDate'], '2026-10-11')
        self.assertEqual(date.fromisoformat(fair['initialDate']).weekday(), 6)
        self.assertIn('domingos', fair['scheduleNote'])
        self.assertIn('8h', fair['scheduleNote'])
        self.assertIn('14h', fair['scheduleNote'])
        self.assertEqual(fair['publishedDuration'], '—')
        self.assertIn('prefeitura.pbh.gov.br', fair['visitLinks'][0]['url'])
        market = next(a for a in city['attractions'] if a['name'] == 'Mercado Central')
        self.assertTrue(market['selectedByDefault'])
        self.assertEqual(market['initialDate'], '2026-10-11')
        self.assertEqual(data['schedule']['destinationDate'], '2026-10-08')
