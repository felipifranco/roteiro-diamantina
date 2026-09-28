#!/usr/bin/env python3
"""Generate the app adapter and human-readable catalog from data/roteiro.json.

Edit only data/roteiro.json, then run `python3 scripts/generate_route_data.py`.
"""

import argparse
import json
import math
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


def validate(data):
    if data.get("version") != 1:
        raise ValueError("version must be 1")
    route_stops = data.get("routeStops")
    if not isinstance(route_stops, list) or not route_stops:
        raise ValueError("routeStops must be a non-empty list")
    ids = set()
    required_stop_fields = ("id", "name", "lat", "lon", "kind", "type", "days", "sights", "kid", "url")
    for index, stop in enumerate(route_stops):
        missing = [field for field in required_stop_fields if field not in stop]
        if missing:
            raise ValueError(f"routeStops[{index}] missing fields: {', '.join(missing)}")
        if not isinstance(stop["id"], str) or not stop["id"] or stop["id"] in ids:
            raise ValueError(f"routeStops[{index}].id must be unique and non-empty")
        ids.add(stop["id"])
        lat, lon = stop["lat"], stop["lon"]
        if (
            isinstance(lat, bool)
            or isinstance(lon, bool)
            or not isinstance(lat, (int, float))
            or not isinstance(lon, (int, float))
            or not math.isfinite(lat)
            or not math.isfinite(lon)
            or not -90 <= lat <= 90
            or not -180 <= lon <= 180
        ):
            raise ValueError(
                f"routeStops[{index}] coordinates must be valid latitude and longitude values"
            )
        if not isinstance(stop["sights"], list):
            raise ValueError(f"routeStops[{index}].sights must be a list")
        if not isinstance(stop.get("attractions", []), list):
            raise ValueError(f"routeStops[{index}].attractions must be a list")

    catalog = data.get("catalog", {})
    if not isinstance(catalog.get("intro"), str) or not catalog["intro"].strip():
        raise ValueError("catalog.intro must be a non-empty string")
    cities = catalog.get("cities")
    if not isinstance(cities, list) or not cities:
        raise ValueError("catalog.cities must be a non-empty list")
    city_names = set()
    for city_index, city in enumerate(cities):
        if not isinstance(city.get("name"), str) or not city["name"].strip():
            raise ValueError(f"catalog.cities[{city_index}].name must be non-empty")
        if city["name"] in city_names:
            raise ValueError(f"duplicate catalog city: {city['name']}")
        city_names.add(city["name"])
        if not isinstance(city.get("profile"), str):
            raise ValueError(f"catalog.cities[{city_index}].profile must be a string")
        attractions = city.get("attractions")
        if not isinstance(attractions, list) or not attractions:
            raise ValueError(f"catalog.cities[{city_index}].attractions must be non-empty")
        for attraction_index, attraction in enumerate(attractions):
            missing = [field for field in ATTRACTION_FIELDS if field not in attraction]
            if missing:
                raise ValueError(
                    f"catalog.cities[{city_index}].attractions[{attraction_index}] "
                    f"missing fields: {', '.join(missing)}"
                )


def _js_json(value):
    return (
        json.dumps(value, ensure_ascii=False, indent=2)
        .replace("\u2028", "\\u2028")
        .replace("\u2029", "\\u2029")
    )


def render_app_data(data):
    payload = {"routeStops": data["routeStops"]}
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
        data["catalog"]["intro"],
        "",
        _row(HEADERS),
        "|---|---|---|---|---|---|---:|---:|---|---|",
    ]
    for city in data["catalog"]["cities"]:
        for index, attraction in enumerate(city["attractions"]):
            values = [
                f"**{city['name']}**" if index == 0 else "",
                city["profile"] if index == 0 else "",
                f"**{attraction['name']}**",
                attraction["description"],
                attraction["agencyRationale"],
                attraction["visitType"],
                attraction["estimatedDuration"],
                attraction["publishedDuration"],
                attraction["oneYearOld"],
                attraction["accessibility"],
            ]
            lines.append(_row(values))
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
