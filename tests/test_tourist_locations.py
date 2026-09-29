"""Keep destination highlights tied to real map points."""

import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class TouristLocationTests(unittest.TestCase):
    def test_memorial_has_its_own_map_point(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        city = next(stop for stop in data["routeStops"] if stop["id"] == "setelagoas")
        memorial = next(item for item in city["attractions"] if item["name"] == "Memorial do Humorista Zacarias")
        self.assertEqual(memorial["locationAccuracy"], "exact")
        self.assertNotEqual((memorial["lat"], memorial["lon"]), (city["lat"], city["lon"]))

    def test_unverified_city_references_do_not_get_individual_markers(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("kind:a.locationAccuracy==='city-center'||a.sameSiteAs?'passeio':'atracao'", page)
        self.assertIn("attractionStops.filter(s=>s.kind==='atracao').forEach(addAttractionMarker)", page)

    def test_components_share_a_site_without_losing_their_entries(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        cities = {city["id"]: {item["name"]: item for item in city.get("attractions", [])} for city in data["routeStops"]}
        self.assertEqual(cities["diamantina"]["Passadiço da Glória"]["sameSiteAs"], "Casa da Glória")
        self.assertEqual(cities["mariana"]["Órgão Arp Schnitger"]["sameSiteAs"], "Catedral da Sé")
        self.assertNotEqual(
            (cities["ouropreto"]["Praça Tiradentes"]["lat"], cities["ouropreto"]["Praça Tiradentes"]["lon"]),
            (cities["ouropreto"]["Museu da Inconfidência"]["lat"], cities["ouropreto"]["Museu da Inconfidência"]["lon"]),
        )

    def test_diamantina_highlights_have_individual_attractions(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        city = next(stop for stop in data["routeStops"] if stop["id"] == "diamantina")
        names = {item["name"].casefold() for item in city["attractions"]}
        self.assertTrue(all(sight.casefold() in names for sight in city["sights"]))
        self.assertNotIn("Chica da Silva e igrejas", city["sights"])

        vesperata = next(item for item in city["attractions"] if item["name"] == "Vesperata")
        self.assertNotEqual((vesperata["lat"], vesperata["lon"]), (city["lat"], city["lon"]))
        self.assertEqual(vesperata["locationAccuracy"], "street-center")
        self.assertIn("Rua da Quitanda", vesperata["mapQuery"])


if __name__ == "__main__":
    unittest.main()
