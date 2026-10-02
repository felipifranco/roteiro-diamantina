"""Keep destination highlights tied to real map points."""

import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class TouristLocationTests(unittest.TestCase):
    def test_campos_altos_visits_have_verified_individual_destinations(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        city = next(stop for stop in data["routeStops"] if stop["id"] == "camposaltos")
        visits = city["attractions"]
        self.assertEqual(len(visits), 5)
        coordinates = set()
        for visit in visits[:4]:
            with self.subTest(name=visit["name"]):
                self.assertEqual(visit["locationAccuracy"], "exact")
                self.assertTrue(visit["locationSourceUrl"].startswith("https://www.google.com/maps/"))
                self.assertRegex(visit["locationPlusCode"], r"^58GM[A-Z0-9]{4}\+[A-Z0-9]{2}$")
                point = (visit["lat"], visit["lon"])
                self.assertNotEqual(point, (city["lat"], city["lon"]))
                self.assertNotIn(point, coordinates)
                coordinates.add(point)
                self.assertFalse(visit["selectedByDefault"])
        self.assertEqual(visits[4]["locationAccuracy"], "city-center")
        self.assertIn("Entrada de visitantes não confirmada", visits[4]["locationNote"])
        self.assertEqual(city["overnight"]["nights"], 1)
        self.assertEqual(city["initialDate"], "2026-10-07")

    def test_municipal_groups_preserve_district_visits_and_locations(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        groups = {stop["id"]: stop for stop in data["routeStops"]}
        self.assertEqual(sum(len(stop.get("attractions", [])) for stop in groups.values()), 174)
        for old_id in ("curralinho", "biribiri", "mendanha", "vau", "milhoverde", "saogoncalo", "amarantina", "caraca"):
            self.assertNotIn(old_id, groups)
        expected = {
            "diamantina": {"Extração / Curralinho": 2, "Biribiri": 3, "Mendanha": 1, "Vau": 1},
            "serro": {"Milho Verde": 3, "São Gonçalo do Rio das Pedras": 4},
            "ouropreto": {"Amarantina": 1},
            "catasaltas": {"Caraça": 4},
        }
        for group_id, localities in expected.items():
            for locality, count in localities.items():
                visits = [a for a in groups[group_id]["attractions"] if a.get("locality") == locality]
                self.assertEqual(len(visits), count)
                for visit in visits:
                    self.assertIn(locality, visit["name"])
                    self.assertIn(visit["name"], groups[group_id]["sights"])
                    self.assertFalse(visit.get("selectedByDefault", False))
                    self.assertIn("mapQuery", visit)
        diam = {a["name"]: a for a in groups["diamantina"]["attractions"]}
        salitre = diam["Gruta do Salitre · Extração / Curralinho"]
        self.assertEqual((salitre["lat"], salitre["lon"]), (-18.27952, -43.53615))
        self.assertEqual(salitre["locationAccuracy"], "exact")
        self.assertEqual(salitre["ticket"]["status"], "agendamento")
        self.assertIn("Garimpo Real", diam)
        self.assertIn("Experiência de garimpo · Extração / Curralinho", diam)

    def test_memorial_has_its_own_map_point(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        city = next(stop for stop in data["routeStops"] if stop["id"] == "setelagoas")
        memorial = next(item for item in city["attractions"] if item["name"] == "Memorial do Humorista Zacarias")
        self.assertEqual(memorial["locationAccuracy"], "exact")
        self.assertNotEqual((memorial["lat"], memorial["lon"]), (city["lat"], city["lon"]))

    def test_unverified_city_references_do_not_get_individual_markers(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("kind:'atracao',routeable:a.locationAccuracy!=='city-center'&&!a.sameSiteAs", page)
        self.assertIn("attractionStops.filter(s=>s.routeable).forEach(addAttractionMarker)", page)

    def test_casa_da_gloria_combines_the_visit_and_links(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        cities = {city["id"]: {item["name"]: item for item in city.get("attractions", [])} for city in data["routeStops"]}
        diam = cities["diamantina"]
        self.assertNotIn("Passadiço da Glória", diam)
        self.assertNotIn("Casa da Glória", diam)
        combined = diam["Casa da Glória e Passadiço da Glória"]
        self.assertIn("dois casarões", combined["guideBriefing"])
        self.assertIn("Passadiço da Glória", combined["guideBriefing"])
        self.assertIn("Casa da Glória", combined["mapQuery"])
        self.assertEqual(len(combined["visitLinks"]), 3)
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
