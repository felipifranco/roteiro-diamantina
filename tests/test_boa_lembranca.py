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
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        restaurants = [stop for stop in data["routeStops"] if stop["kind"] == "restaurante"]
        self.assertEqual(len(restaurants), 8)
        self.assertEqual(len({(stop["lat"], stop["lon"]) for stop in restaurants}), 8)
        self.assertEqual(
            {stop["dish2026"]["name"] for stop in restaurants},
            {
                "Cumé que Podi", 'Ravioli de Pato "In Brodo"', "Filé Oriental",
                "Ndunderi Alla Sorrentina", "Entre Ossos e Raízes",
                "Filet à Baronesa", "Bavette en Sauce", "Cheirin no Cangote",
            },
        )
        for stop in restaurants:
            with self.subTest(restaurant=stop["name"]):
                dish = stop["dish2026"]
                self.assertIn(dish["name"], stop["guideBriefing"])
                self.assertTrue(dish["url"].startswith("https://boalembranca.com.br/pratos/"))
                self.assertTrue((ROOT / dish["image"]).read_bytes().startswith(b"\x89PNG\r\n\x1a\n"))
                self.assertTrue(stop["address"])

    def test_dish_photo_replaces_agency_star(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("if(s.kind==='restaurante')return `<div class=\"dish-pin\"", page)
        self.assertIn("routeStops.filter(s=>s.selectedByDefault).map(s=>s.id)", page)
        self.assertIn("Prato 2026: ${s.dish2026.name}", page)

    def test_restaurant_enters_route_as_its_own_stop(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for route behavior")
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        helper = re.search(r"function effectiveRouteStops\(allStops,selectedIds\)\{.*?^\s*\}", page, re.S | re.M)
        self.assertIsNotNone(helper)
        script = helper.group(0) + """
const restaurant={id:'boa-relicario-gastronomia',kind:'restaurante'};
const city={id:'diamantina',kind:'destino'};
const stops=[city,restaurant];
console.log(JSON.stringify([
 effectiveRouteStops(stops,new Set(['diamantina'])).map(s=>s.id),
 effectiveRouteStops(stops,new Set(['diamantina','boa-relicario-gastronomia'])).map(s=>s.id)
]));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), [["diamantina"], ["diamantina", "boa-relicario-gastronomia"]])


if __name__ == "__main__":
    unittest.main()
