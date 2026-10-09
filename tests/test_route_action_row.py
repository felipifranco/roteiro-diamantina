"""The Waze link shares the editable card's existing controls row."""
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class RouteActionRowTests(unittest.TestCase):
    def test_date_info_reorder_and_waze_are_moved_into_one_row(self):
        page = (ROOT / 'index.html').read_text(encoding='utf-8')
        card = page.split('function createCard(')[1].split('function moveBefore(')[0]
        self.assertIn("actions.className='route-card-actions'", card)
        self.assertIn("head.querySelector('.stop-date'),toggle,head.querySelector('.reorder-actions'),navigation", card)
        self.assertIn('head.appendChild(actions)', card)
        self.assertIn('actions.appendChild(element)', card)
        self.assertIn('flex-wrap:nowrap', page)


if __name__ == '__main__':
    unittest.main()
