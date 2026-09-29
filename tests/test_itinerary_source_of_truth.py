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
    "catasaltas", "santabarbara", "caraca", "sabara", "caete", "peiro", "araxa",
    "itabirito", "amarantina", "ourobranco", "setelagoas", "mendanha", "vau",
    "presidentekubitschek", "ipoema", "itambemato", "raposos", "novalima", "rioacima",
)


class ItinerarySourceOfTruthTests(unittest.TestCase):
    def test_canonical_json_contains_unified_route_stops(self):
        source = ROOT / "data" / "roteiro.json"
        self.assertTrue(source.is_file(), "data/roteiro.json must be the canonical dataset")
        data = json.loads(source.read_text(encoding="utf-8"))
        self.assertIn("routeStops", data)
        self.assertNotIn("catalog", data)
        self.assertTrue(data["intro"])
        self.assertEqual(
            tuple(stop["id"] for stop in data["routeStops"]), EXPECTED_ROUTE_STOP_IDS
        )
        self.assertTrue(all("attractions" in stop and "profile" in stop for stop in data["routeStops"] if stop["id"] not in {"mirassol", "cipo", "peruacu", "delfinopolis"}))

    def test_araxa_and_peiropolis_research_is_embedded_in_route_stops(self):
        data = json.loads((ROOT / "data" / "roteiro.json").read_text(encoding="utf-8"))
        route_stops = {stop["id"]: stop for stop in data["routeStops"]}
        expected_araxa = (
            "Grande Hotel e Termas de Araxá",
            "Complexo do Barreiro",
            "Museu Dona Beja",
            "Museu Calmon Barreto / Memorial de Araxá",
            "Igreja de São Domingos",
            "Parque do Cristo",
            "Fontes Dona Beja e Andrade Júnior",
        )
        self.assertEqual(
            [item["name"] for item in route_stops["araxa"]["attractions"]],
            list(expected_araxa),
        )
        peiro = route_stops["peiro"]
        self.assertEqual(
            [item["name"] for item in peiro["attractions"]],
            [
                "Museu dos Dinossauros / Complexo Cultural e Científico de Peirópolis",
                "Geossítio de Peirópolis",
            ],
        )
        self.assertTrue(route_stops["peiro"]["profile"])
        self.assertTrue(all("description" in item and "estimatedDuration" in item for item in peiro["attractions"]))
        self.assertTrue(
            all("lat" in item and "lon" in item for item in route_stops["araxa"]["attractions"] + peiro["attractions"])
        )
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("const attractionStops=stops.flatMap", page)
        self.assertIn("const routeStops=[...stops,...attractionStops.filter(s=>s.kind==='atracao')]", page)

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
            ("lon", float("nan")),
            ("lat", float("inf")),
            ("lon", float("inf")),
            ("lat", float("-inf")),
            ("lon", float("-inf")),
            ("lat", True),
            ("lon", True),
            ("lat", "-20.8"),
            ("lon", None),
            ("lat", 10**400),
            ("lon", 10**400),
        )
        for field, value in invalid_values:
            with self.subTest(field=field, value=value):
                data = json.loads(json.dumps(original))
                data["routeStops"][0][field] = value
                with self.assertRaisesRegex(
                    ValueError, "coordinates must be valid latitude and longitude values"
                ):
                    validate(data)

        for field, value in invalid_values:
            with self.subTest(attraction_field=field, value=value):
                data = json.loads(json.dumps(original))
                stop = next(stop for stop in data["routeStops"] if stop.get("attractions"))
                stop["attractions"][0][field] = value
                with self.assertRaisesRegex(
                    ValueError, "coordinates must be valid latitude and longitude values"
                ):
                    validate(data)

        for field, value in (("lat", -90), ("lat", 90), ("lon", -180), ("lon", 180)):
            with self.subTest(valid_route_boundary=field, value=value):
                data = json.loads(json.dumps(original))
                data["routeStops"][0][field] = value
                validate(data)
            with self.subTest(valid_attraction_boundary=field, value=value):
                data = json.loads(json.dumps(original))
                stop = next(stop for stop in data["routeStops"] if stop.get("attractions"))
                stop["attractions"][0][field] = value
                validate(data)

        class OverflowingCoordinate(int):
            def __ge__(self, other):
                raise OverflowError("simulated numeric comparison overflow")

            def __le__(self, other):
                raise OverflowError("simulated numeric comparison overflow")

        data = json.loads(json.dumps(original))
        data["routeStops"][0]["lat"] = OverflowingCoordinate(0)
        with self.assertRaisesRegex(
            ValueError, "coordinates must be valid latitude and longitude values"
        ):
            validate(data)

    def test_validator_rejects_malformed_json_objects(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        original = json.loads(source.read_text(encoding="utf-8"))
        malformed = [("top-level", [])]
        invalid_version = json.loads(json.dumps(original))
        invalid_version["version"] = True
        malformed.append(("boolean version", invalid_version))
        invalid_float_version = json.loads(json.dumps(original))
        invalid_float_version["version"] = 1.0
        malformed.append(("float version", invalid_float_version))
        mapped_index = next(
            index for index, stop in enumerate(original["routeStops"]) if stop.get("attractions")
        )
        for label, path in (
            ("route stop", ("routeStops", 0)),
            ("mapped route attraction", ("routeStops", mapped_index, "attractions", 0)),
        ):
            data = json.loads(json.dumps(original))
            target = data
            for key in path[:-1]:
                target = target[key]
            target[path[-1]] = None
            malformed.append((label, data))

        for field in ("lat", "lon"):
            missing_coordinate = json.loads(json.dumps(original))
            missing_coordinate["routeStops"][mapped_index]["attractions"][0].pop(field)
            malformed.append((f"mapped attraction missing {field}", missing_coordinate))

        for label, data in malformed:
            with self.subTest(label=label), self.assertRaises(ValueError):
                validate(data)

    def test_validator_rejects_non_string_route_stop_name(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        data = json.loads(source.read_text(encoding="utf-8"))
        data["routeStops"][0]["name"] = None

        with self.assertRaisesRegex(ValueError, r"routeStops\[0\]\.name must be a non-empty string"):
            validate(data)

    def test_validator_rejects_unknown_route_stop_kind(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        data = json.loads(source.read_text(encoding="utf-8"))
        data["routeStops"][0]["kind"] = "unknown"

        with self.assertRaisesRegex(ValueError, r"routeStops\[0\]\.kind must be one of"):
            validate(data)

    def test_validator_rejects_invalid_required_route_stop_field_types(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        original = json.loads(source.read_text(encoding="utf-8"))
        invalid_values = (
            ("type", None),
            ("type", "unknown"),
            ("days", None),
            ("kid", None),
            ("url", None),
            ("sights", [None]),
        )
        for field, value in invalid_values:
            with self.subTest(field=field, value=value):
                data = json.loads(json.dumps(original))
                data["routeStops"][0][field] = value
                with self.assertRaises(ValueError):
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
