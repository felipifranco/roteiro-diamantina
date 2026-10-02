from scripts.generate_route_data import load_data
import json
import re
import shutil
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

EXPECTED_ROUTE_STOP_IDS = (
    "mirassol", "canastra", "capitolio", "congonhas", "ouropreto", "mariana",
    "cipo", "tabuleiro", "serro", "diamantina",
    "peruacu", "delfinopolis", "cordisburgo", "belohorizonte",
    "brumadinho", "saojoaodelrei", "tiradentes", "bichinho",
    "catasaltas", "santabarbara", "sabara", "caete", "peiro", "araxa", "camposaltos",
    "itabirito", "ourobranco", "setelagoas",
    "presidentekubitschek", "ipoema", "itambemato", "raposos", "novalima", "rioacima",
    "boa-casa-do-rei-bistro", "boa-dartagnan", "boa-divinorestaurante",
    "boa-domenico-pizzeria-e-trattoria", "boa-maria-das-trancas",
    "boa-relicario-gastronomia", "boa-taste-vin", "boa-xapuri-2",
)


class ItinerarySourceOfTruthTests(unittest.TestCase):
    def test_lodging_labels_use_dates_independently_of_visit_selection(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required")
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        helper = re.search(r"const overnightLabel=.*?;\n", page).group(0)
        script = "const TripCalendar=require('./assets/trip-calendar.js');" + """
const stays=[{stopId:'city',checkIn:'2026-10-07',checkOut:'2026-10-09'}];
const fmt=date=>date.slice(8,10)+'/'+date.slice(5,7);
""" + helper + """
console.log(JSON.stringify([overnightLabel({id:'city'}),overnightLabel({id:'other'})]));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), ["🛏 07/10 → 09/10 · 2 noites", ""])

    def test_attraction_access_uses_its_record_independently_of_city_and_name(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the access metadata runtime test")
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        helpers = re.search(r"function effortFor\(item\)\{.*?\}\n", page).group(0)
        helpers += re.search(r"function tourCardMeta\(tour,city,inRoute=false,date=''\)\{.*?\n\}", page, re.S).group(0)
        script = helpers + """
const knownDuration=()=>'',tourLocation=()=>'';
const city={id:'cipo',accessEffort:{level:'hard',label:'Cidade exigente',note:'Nota da cidade'}};
const tour={name:'Cachoeira do Tabuleiro',accessEffort:{level:'easy',label:'Acesso próprio',note:'Nota do passeio'}};
console.log(JSON.stringify([tourCardMeta(tour,city),tourCardMeta({name:tour.name},city),effortFor(tour)]));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        label, unknown, effort = json.loads(result.stdout)
        self.assertIn("Acesso próprio", label)
        self.assertIn("effort easy", label)
        self.assertNotIn("Cidade exigente", label)
        self.assertEqual(unknown, "")
        self.assertEqual(effort, ["Acesso próprio", "Nota do passeio", "easy"])

    def test_itinerary_notes_alerts_and_sources_are_in_json(self):
        data = load_data()
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        for note in data["schedule"]["dayNotes"]:
            self.assertNotIn(note["text"], page)
        for alert in data["accessAlerts"]:
            self.assertNotIn(alert["text"], page)
        for source in data["sources"]:
            self.assertNotIn(source["url"], page)
        self.assertNotIn("const accessNotes=", page)
        self.assertNotIn("s.id==='cipo'", page)
        from scripts.generate_route_data import render_app_data
        generated = render_app_data(data)
        for field in ("accessAlerts", "sources"):
            self.assertIn(f'"{field}"', generated)

    def test_validator_rejects_invalid_individual_access_metadata(self):
        from scripts.generate_route_data import validate
        original = load_data()
        for value in ("easy", {}, {"level": "wrong", "label": "Teste", "note": "Teste"}, {"level": "easy", "label": "Teste", "note": 1}):
            for target in ("stop", "attraction"):
                with self.subTest(value=value, target=target):
                    data = json.loads(json.dumps(original))
                    item = next(s for s in data["routeStops"] if s.get("attractions"))
                    if target == "attraction":
                        item = item["attractions"][0]
                    item["accessEffort"] = value
                    with self.assertRaisesRegex(ValueError, "accessEffort"):
                        validate(data)

    def test_canonical_json_contains_unified_route_stops(self):
        source = ROOT / "data" / "roteiro.json"
        self.assertTrue(source.is_file(), "data/roteiro.json must be the trip plan")
        data = load_data()
        self.assertIn("routeStops", data)
        self.assertNotIn("catalog", data)
        self.assertTrue(data["intro"])
        self.assertEqual(
            tuple(stop["id"] for stop in data["routeStops"]), EXPECTED_ROUTE_STOP_IDS
        )
        self.assertTrue(all("attractions" in stop and "profile" in stop for stop in data["routeStops"] if stop["id"] not in {"mirassol", "cipo", "peruacu", "delfinopolis"}))

    def test_schedule_and_default_stop_dates_are_in_canonical_data(self):
        data = load_data()
        schedule = data["schedule"]
        self.assertEqual(schedule["startDate"], "2026-10-07")
        self.assertEqual(schedule["destinationId"], "diamantina")
        self.assertEqual(schedule["destinationDate"], "2026-10-09")
        self.assertEqual(schedule["initialStopOrder"], ["peiro", "araxa", "camposaltos", "cordisburgo", "setelagoas", "belohorizonte"])
        stops = {stop["id"]: stop for stop in data["routeStops"]}
        self.assertEqual(stops["peiro"]["initialDate"], "2026-10-07")
        self.assertEqual(stops["araxa"]["initialDate"], "2026-10-07")
        self.assertEqual(stops["cordisburgo"]["initialDate"], "2026-10-11")
        self.assertEqual(stops["setelagoas"]["initialDate"], "2026-10-11")
        self.assertEqual(stops["belohorizonte"]["initialDate"], "2026-10-11")
        self.assertTrue(stops["cordisburgo"]["selectedByDefault"])
        self.assertTrue(stops["setelagoas"]["selectedByDefault"])
        self.assertTrue(stops["belohorizonte"]["selectedByDefault"])
        self.assertNotIn("overnight", stops["araxa"])
        self.assertNotIn("overnight", stops["cordisburgo"])
        self.assertIn({"stopId": "camposaltos", "checkIn": "2026-10-07", "checkOut": "2026-10-08"}, schedule["stays"])
        self.assertEqual(stops["camposaltos"]["initialDate"], "2026-10-07")
        self.assertTrue(stops["camposaltos"]["selectedByDefault"])
        self.assertIn({"stopId": "belohorizonte", "checkIn": "2026-10-11", "checkOut": "2026-10-12"}, schedule["stays"])
        self.assertEqual(stops["araxa"]["stayDays"], [1, 1])
        generated = (ROOT / "data" / "route-data.generated.js").read_text(encoding="utf-8")
        self.assertIn('"schedule"', generated)
        self.assertIn('"initialDate": "2026-10-11"', generated)
        self.assertEqual(schedule["dayNotes"], [])

    def test_araxa_and_peiropolis_research_is_embedded_in_route_stops(self):
        data = load_data()
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
        self.assertIn("const routeStops=[...stops,...attractionStops.filter(s=>s.routeable)]", page)

    def test_route_coordinates_stay_within_geographic_ranges(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        original = load_data()
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
        original = load_data()
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
        data = load_data()
        data["routeStops"][0]["name"] = None

        with self.assertRaisesRegex(ValueError, r"routeStops\[0\]\.name must be a non-empty string"):
            validate(data)

    def test_validator_rejects_unknown_route_stop_kind(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        data = load_data()
        data["routeStops"][0]["kind"] = "unknown"

        with self.assertRaisesRegex(ValueError, r"routeStops\[0\]\.kind must be one of"):
            validate(data)

    def test_validator_rejects_invalid_required_route_stop_field_types(self):
        from scripts.generate_route_data import validate

        source = ROOT / "data" / "roteiro.json"
        original = load_data()
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
