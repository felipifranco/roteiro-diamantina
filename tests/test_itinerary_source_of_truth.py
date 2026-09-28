import json
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

EXPECTED_ROUTE_STOP_IDS = (
    "mirassol", "canastra", "capitolio", "congonhas", "ouropreto", "mariana",
    "cipo", "tabuleiro", "serro", "milhoverde", "saogoncalo", "diamantina",
    "biribiri", "peruacu", "delfinopolis", "cordisburgo", "belohorizonte",
    "brumadinho", "saojoaodelrei", "tiradentes", "bichinho", "curralinho",
    "catasaltas", "santabarbara", "caraca", "sabara", "caete", "araxa",
    "itabirito", "amarantina",
)


class ItinerarySourceOfTruthTests(unittest.TestCase):
    def test_canonical_json_contains_route_and_catalog(self):
        source = ROOT / "data" / "roteiro.json"
        self.assertTrue(source.is_file(), "data/roteiro.json must be the canonical dataset")
        data = json.loads(source.read_text(encoding="utf-8"))
        self.assertIn("routeStops", data)
        self.assertIn("catalog", data)
        self.assertEqual(
            tuple(stop["id"] for stop in data["routeStops"]), EXPECTED_ROUTE_STOP_IDS
        )
        self.assertGreater(len(data["catalog"]["cities"]), 0)

    def test_route_coordinates_stay_within_geographic_ranges(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        original = json.loads(source.read_text(encoding="utf-8"))
        invalid_values = (
            ("lat", 91),
            ("lat", -91),
            ("lon", 181),
            ("lon", -181),
            ("lat", float("nan")),
            ("lon", float("inf")),
            ("lat", True),
        )
        for field, value in invalid_values:
            with self.subTest(field=field, value=value):
                data = json.loads(json.dumps(original))
                data["routeStops"][0][field] = value
                with self.assertRaisesRegex(
                    ValueError, "coordinates must be valid latitude and longitude values"
                ):
                    validate(data)

    def test_application_uses_generated_route_data(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn('<script src="./data/route-data.generated.js"></script>', page)
        self.assertIn("const stops=window.ROTEIRO_DATA.routeStops;", page)
        self.assertNotRegex(page, r"const stops\s*=\s*\[")

    def test_generated_markdown_and_app_data_are_current(self):
        generator = ROOT / "scripts" / "generate_route_data.py"
        self.assertTrue(generator.is_file(), "the source generator must exist")
        result = subprocess.run(
            [sys.executable, str(generator), "--check"],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
