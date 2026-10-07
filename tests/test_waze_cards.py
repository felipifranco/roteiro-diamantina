from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]

class WazeCardTests(unittest.TestCase):
    def test_cards_tours_and_leg_connectors_offer_waze(self):
        html = (ROOT / 'index.html').read_text()
        for start, end, call in [('function createCard(', 'function moveBefore(', 'wazeNavigationMarkup(s)'), ('function tourRow(', 'function travelText(', 'wazeNavigationMarkup(tour)'), ('function legConnector(', 'function setMapIcon(', 'wazeNavigationMarkup(leg.to)')]:
            body = html[html.index(start):html.index(end)]
            self.assertIn(call, body, start)
        self.assertIn("event.target.closest('button,a,input,select", html)
