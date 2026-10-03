from scripts.generate_route_data import load_data
"""Restaurant stops keep the 2026 dish and a durable local photo."""

import json
import re
import shutil
import subprocess
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class BoaLembrancaTests(unittest.TestCase):
    def test_eight_independent_restaurant_stops(self):
        data = load_data()
        restaurants = [stop for stop in data["routeStops"] if stop["kind"] == "restaurante"]
        self.assertEqual(len(restaurants), 8)
        self.assertEqual(len({(stop["lat"], stop["lon"]) for stop in restaurants}), 8)
        self.assertEqual(
            {stop["dish"]["name"] for stop in restaurants},
            {
                "Cumé que Podi", 'Ravioli de Pato "In Brodo"', "Filé Oriental",
                "Ndunderi Alla Sorrentina", "Entre Ossos e Raízes",
                "Filet à Baronesa", "Bavette en Sauce", "Cheirin no Cangote",
            },
        )
        for stop in restaurants:
            with self.subTest(restaurant=stop["name"]):
                dish = stop["dish"]
                self.assertIn(dish["name"], stop["guideBriefing"])
                self.assertTrue(dish["url"].startswith("https://boalembranca.com.br/pratos/"))
                self.assertTrue((ROOT / dish["image"]).read_bytes().startswith(b"\x89PNG\r\n\x1a\n"))
                self.assertTrue(stop["address"])

    def test_restaurants_group_by_catalog_city_without_selecting(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        function = re.search(r"function restaurantsForCity\(city\)\{[^}]*\}", page)
        self.assertIsNotNone(function, "restaurants must be grouped with their own city")
        assert function is not None
        stops = load_data()["routeStops"]
        expected = [s["id"] for s in stops if s["kind"] == "restaurante" and s.get("city") == "Belo Horizonte"]
        already_selected = expected[:1]
        script = "const stops=" + json.dumps(stops) + ";const selected=new Set(" + json.dumps(already_selected) + ");const inTrip=s=>selected.has(s.id);" + function.group() + "console.log(JSON.stringify(Object.fromEntries(stops.filter(s=>s.kind==='cidade').map(city=>[city.id,restaurantsForCity(city).map(s=>s.id)]))));"
        result = subprocess.run(["node"], input=script, capture_output=True, text=True, check=True)
        grouped = {city['id']: [s['id'] for s in stops if s['kind'] == 'restaurante' and s.get('city') == city['name'].split(' · ')[0] and s['id'] not in already_selected] for city in stops if city['kind'] == 'cidade'}
        self.assertEqual(json.loads(result.stdout), grouped)

    def test_dish_photo_replaces_agency_star(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("if(s.kind==='restaurante')return `<div class=\"dish-pin\"", page)
        self.assertIn("routeStops.filter(s=>s.selectedByDefault).map(s=>s.id)", page)
        self.assertIn("Prato: ${s.dish.name}", page)

    def test_restaurant_enters_route_as_its_own_stop(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for route behavior")
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        script = "const TripRoute=require(" + json.dumps(str(ROOT / "assets/trip-route.js")) + ");" + """
const schedule={destinationId:'diamantina'};
const restaurant={id:'boa-relicario-gastronomia',kind:'restaurante'};
const city={id:'diamantina',kind:'cidade'};
const stops=[city,restaurant];
console.log(JSON.stringify([
 TripRoute.effectiveRouteStops(stops,new Set(['diamantina']),schedule).map(s=>s.id),
 TripRoute.effectiveRouteStops(stops,new Set(['diamantina','boa-relicario-gastronomia']),schedule).map(s=>s.id)
]));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), [["diamantina"], ["diamantina", "boa-relicario-gastronomia"]])


if __name__ == "__main__":
    unittest.main()
