#!/usr/bin/env python3
"""Generate the app adapter and human-readable catalog from data/roteiro.json.

Edit only data/roteiro.json, then run `python3 scripts/generate_route_data.py`.
"""

import argparse
import copy
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "roteiro.json"
APP_OUTPUT = ROOT / "data" / "route-data.generated.js"
MARKDOWN_OUTPUT = ROOT / "PONTOS-DE-PARADA.md"

HEADERS = [
    "Cidade / parada",
    "Perfil",
    "Ponto turístico",
    "O que é e por que visitar",
    "Por que as agências incluem a parada",
    "Tipo de visita",
    "Estimativa de tempo",
    "Tempo real publicado",
    "Criança de 1 ano",
    "Idoso / mobilidade reduzida",
]
ATTRACTION_FIELDS = (
    "name",
    "description",
    "agencyRationale",
    "visitType",
    "estimatedDuration",
    "publishedDuration",
    "oneYearOld",
    "accessibility",
)
STOP_KINDS = {"inicio", "destino", "natureza", "historia", "opcional", "alerta"}
STOP_TYPES = {"natureza", "historia"}
LOCATION_ACCURACIES = {"exact", "street-center", "city-center"}


def _valid_coordinates(lat, lon):
    if (
        isinstance(lat, bool)
        or isinstance(lon, bool)
        or not isinstance(lat, (int, float))
        or not isinstance(lon, (int, float))
    ):
        return False
    try:
        return -90 <= lat <= 90 and -180 <= lon <= 180
    except OverflowError:
        return False


def validate(data):
    if not isinstance(data, dict):
        raise ValueError("route data must be an object")
    if type(data.get("version")) is not int or data["version"] != 2:
        raise ValueError("version must be the integer 2")
    if not isinstance(data.get("intro"), str) or not data["intro"].strip():
        raise ValueError("intro must be a non-empty string")
    route_stops = data.get("routeStops")
    if not isinstance(route_stops, list) or not route_stops:
        raise ValueError("routeStops must be a non-empty list")
    ids = set()
    required_stop_fields = ("id", "name", "lat", "lon", "kind", "type", "days", "sights", "kid", "url")
    for index, stop in enumerate(route_stops):
        if not isinstance(stop, dict):
            raise ValueError(f"routeStops[{index}] must be an object")
        missing = [field for field in required_stop_fields if field not in stop]
        if missing:
            raise ValueError(f"routeStops[{index}] missing fields: {', '.join(missing)}")
        if not isinstance(stop["id"], str) or not stop["id"] or stop["id"] in ids:
            raise ValueError(f"routeStops[{index}].id must be unique and non-empty")
        ids.add(stop["id"])
        if not isinstance(stop["name"], str) or not stop["name"].strip():
            raise ValueError(f"routeStops[{index}].name must be a non-empty string")
        if not isinstance(stop["kind"], str) or stop["kind"] not in STOP_KINDS:
            raise ValueError(f"routeStops[{index}].kind must be one of {sorted(STOP_KINDS)}")
        if not isinstance(stop["type"], str) or stop["type"] not in STOP_TYPES:
            raise ValueError(f"routeStops[{index}].type must be one of {sorted(STOP_TYPES)}")
        for field in ("days", "kid", "url"):
            if not isinstance(stop[field], str):
                raise ValueError(f"routeStops[{index}].{field} must be a string")
        lat, lon = stop["lat"], stop["lon"]
        if not _valid_coordinates(lat, lon):
            raise ValueError(
                f"routeStops[{index}] coordinates must be valid latitude and longitude values"
            )
        if "profile" in stop and not isinstance(stop["profile"], str):
            raise ValueError(f"routeStops[{index}].profile must be a string")
        if not isinstance(stop["sights"], list):
            raise ValueError(f"routeStops[{index}].sights must be a list")
        if any(not isinstance(sight, str) for sight in stop["sights"]):
            raise ValueError(f"routeStops[{index}].sights must contain only strings")
        mapped_attractions = stop.get("attractions", [])
        if not isinstance(mapped_attractions, list):
            raise ValueError(f"routeStops[{index}].attractions must be a list")
        for attraction_index, attraction in enumerate(mapped_attractions):
            if not isinstance(attraction, dict):
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}] must be an object"
                )
            if not _valid_coordinates(attraction.get("lat"), attraction.get("lon")):
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}] "
                    "coordinates must be valid latitude and longitude values"
                )
            if attraction.get("locationAccuracy") not in LOCATION_ACCURACIES:
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}].locationAccuracy "
                    f"must be one of {sorted(LOCATION_ACCURACIES)}"
                )

        for attraction_index, attraction in enumerate(mapped_attractions):
            if not isinstance(attraction.get("name"), str) or not attraction["name"].strip():
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}].name must be non-empty"
                )
            if "estimatedDuration" in attraction and not isinstance(attraction["estimatedDuration"], str):
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}].estimatedDuration must be a string"
                )
            missing = [field for field in ATTRACTION_FIELDS if field not in attraction]
            if missing and "description" in attraction:
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}] missing fields: {', '.join(missing)}"
                )


def _js_json(value):
    return (
        json.dumps(value, ensure_ascii=False, indent=2)
        .replace("\u2028", "\\u2028")
        .replace("\u2029", "\\u2029")
    )


def render_app_data(data):
    route_stops = copy.deepcopy(data["routeStops"])
    payload = {"routeStops": route_stops}
    return (
        "// Generated from data/roteiro.json by scripts/generate_route_data.py. Do not edit.\n"
        "window.ROTEIRO_DATA = " + _js_json(payload) + ";\n"
    )


def _cell(value):
    return str(value).replace("|", r"\|").replace("\n", "<br>")


def _row(values):
    return "| " + " | ".join(_cell(value) for value in values) + " |"


def render_markdown(data):
    lines = [
        "# Pontos de parada",
        "",
        "<!-- Gerado por scripts/generate_route_data.py a partir de data/roteiro.json. Não edite manualmente. -->",
        "",
        data["intro"],
        "",
        _row(HEADERS),
        "|---|---|---|---|---|---|---:|---:|---|---|",
    ]
    for city in data["routeStops"]:
        detailed_index = 0
        for attraction in city.get("attractions", []):
            if "description" not in attraction:
                continue
            values = [
                f"**{city['name']}**" if detailed_index == 0 else "",
                city.get("profile", "") if detailed_index == 0 else "",
                f"**{attraction.get('catalogName', attraction['name'])}**",
                attraction["description"],
                attraction["agencyRationale"],
                attraction["visitType"],
                attraction.get("estimatedDuration", attraction.get("days", "—")),
                attraction["publishedDuration"],
                attraction["oneYearOld"],
                attraction["accessibility"],
            ]
            lines.append(_row(values))
            detailed_index += 1
    return "\n".join(lines) + "\n"


def outputs(data):
    return {
        APP_OUTPUT: render_app_data(data),
        MARKDOWN_OUTPUT: render_markdown(data),
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="fail if generated files are stale")
    args = parser.parse_args(argv)
    try:
        data = json.loads(SOURCE.read_text(encoding="utf-8"))
        validate(data)
        generated = outputs(data)
    except (OSError, json.JSONDecodeError, ValueError) as error:
        print(f"Invalid route data: {error}", file=sys.stderr)
        return 1

    if args.check:
        stale = [path.relative_to(ROOT) for path, content in generated.items()
                 if not path.is_file() or path.read_text(encoding="utf-8") != content]
        if stale:
            print("Generated files are stale: " + ", ".join(map(str, stale)), file=sys.stderr)
            print("Run: python3 scripts/generate_route_data.py", file=sys.stderr)
            return 1
        print("Route data outputs are current.")
        return 0

    for path, content in generated.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print(f"Generated {path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
