import json
import unittest
from pathlib import Path

from scripts.generate_route_data import validate


ROOT = Path(__file__).resolve().parents[1]


class VisitRulesTests(unittest.TestCase):
    def test_every_point_has_age_and_ticket_state(self):
        data = json.loads((ROOT / "data/roteiro.json").read_text(encoding="utf-8"))
        validate(data)
        for stop in data["routeStops"]:
            self.assertIn("ageClassification", stop)
            self.assertIn("ticket", stop)
            for attraction in stop.get("attractions", []):
                self.assertIn("ageClassification", attraction)
                self.assertIn("ticket", attraction)

    def test_researched_child_decisions_and_ticket_sources(self):
        data = json.loads((ROOT / "data/roteiro.json").read_text(encoding="utf-8"))
        stops = {stop["id"]: stop for stop in data["routeStops"]}
        cases = [
            ("setelagoas", "Monumento Natural Estadual Gruta Rei do Mato", "idade_minima", 6),
            ("cordisburgo", "Gruta do Maquiné", "idade_minima", 4),
            ("brumadinho", "Instituto Inhotim", "livre", None),
            ("mariana", "Mina da Passagem", "livre", None),
        ]
        for stop_id, name, status, minimum in cases:
            attraction = next(a for a in stops[stop_id]["attractions"] if a["name"] == name)
            self.assertEqual(attraction["ageClassification"]["status"], status)
            self.assertEqual(attraction["ageClassification"].get("minimumAge"), minimum)
            self.assertTrue(attraction["ageClassification"]["sourceUrl"].startswith("https://"))
            self.assertTrue(attraction["ticket"]["url"].startswith("https://"))


if __name__ == "__main__":
    unittest.main()
