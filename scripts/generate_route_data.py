#!/usr/bin/env python3
"""Generate the app adapter and human-readable catalog from data/roteiro.json.

Edit only data/roteiro.json, then run `python3 scripts/generate_route_data.py`.
"""

import argparse
import copy
import json
import re
import sys
import unicodedata
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
    if type(data.get("version")) is not int or data["version"] != 1:
        raise ValueError("version must be the integer 1")
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

    catalog = data.get("catalog")
    if not isinstance(catalog, dict):
        raise ValueError("catalog must be an object")
    if not isinstance(catalog.get("intro"), str) or not catalog["intro"].strip():
        raise ValueError("catalog.intro must be a non-empty string")
    cities = catalog.get("cities")
    if not isinstance(cities, list) or not cities:
        raise ValueError("catalog.cities must be a non-empty list")
    city_names = set()
    for city_index, city in enumerate(cities):
        if not isinstance(city, dict):
            raise ValueError(f"catalog.cities[{city_index}] must be an object")
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
            if not isinstance(attraction, dict):
                raise ValueError(
                    f"catalog.cities[{city_index}].attractions[{attraction_index}] must be an object"
                )
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


CATALOG_ATTRACTION_ALIASES = {
    "casa de jk": "casa de juscelino kubitschek",
    "santuario do bom jesus": "santuario do bom jesus de matosinhos",
}


def _normalized_name(value):
    normalized_punctuation = value.translate(
        str.maketrans({"’": "'", "‘": "'", "ʼ": "'"})
    )
    ascii_name = (
        unicodedata.normalize("NFKD", normalized_punctuation)
        .encode("ascii", "ignore")
        .decode("ascii")
        .lower()
    )
    return " ".join(re.findall(r"[a-z0-9]+", ascii_name))


def _catalog_city_match_score(stop_name, catalog_name):
    stop = _normalized_name(stop_name)
    city = _normalized_name(catalog_name)
    if stop == city:
        return 3
    if stop.startswith(city + " ") or city.startswith(stop + " "):
        return 2
    if f" {stop} " in f" {city} " or f" {city} " in f" {stop} ":
        return 1
    return 0


def _matching_catalog_city(stop_name, catalog_cities):
    scored = [
        (_catalog_city_match_score(stop_name, city["name"]), city)
        for city in catalog_cities
    ]
    highest = max((score for score, _ in scored), default=0)
    matches = [city for score, city in scored if score == highest and score > 0]
    return matches[0] if len(matches) == 1 else None


def _enrich_route_attraction_durations(route_stops, catalog_cities):
    for stop in route_stops:
        attractions = stop.get("attractions", [])
        if not attractions:
            continue
        city = _matching_catalog_city(stop["name"], catalog_cities)
        if city is None:
            continue
        catalog_attractions = {
            _normalized_name(item["name"]): item for item in city["attractions"]
        }
        for attraction in attractions:
            if attraction.get("days") and attraction["days"] != "Duração a confirmar":
                continue
            route_name = _normalized_name(attraction["name"])
            catalog_name = _normalized_name(
                CATALOG_ATTRACTION_ALIASES.get(route_name, attraction["name"])
            )
            match = catalog_attractions.get(catalog_name)
            duration = match.get("estimatedDuration") if match else None
            if duration and duration != "—":
                attraction["days"] = duration


def _merge_catalog_attractions(route_stops, catalog_cities):
    """Expose every catalog attraction to the map without duplicating catalog content.

    Explicit routeStops[].attractions coordinates remain authoritative. Catalog
    attractions that do not yet have a surveyed coordinate inherit the city
    coordinate and are marked locationAccuracy='city-center'. This keeps every
    researched attraction selectable while making coordinate quality explicit.
    """
    for stop in route_stops:
        city = _matching_catalog_city(stop["name"], catalog_cities)
        if city is None:
            continue
        mapped = stop.setdefault("attractions", [])
        by_name = {}
        for attraction in mapped:
            key = _normalized_name(attraction["name"])
            key = _normalized_name(CATALOG_ATTRACTION_ALIASES.get(key, attraction["name"]))
            by_name[key] = attraction
            attraction.setdefault("locationAccuracy", "exact")
        for catalog_attraction in city["attractions"]:
            key = _normalized_name(catalog_attraction["name"])
            existing = by_name.get(key)
            if existing is None:
                existing = {
                    "name": catalog_attraction["name"],
                    "lat": stop["lat"],
                    "lon": stop["lon"],
                    "locationAccuracy": "city-center",
                }
                mapped.append(existing)
                by_name[key] = existing
            existing.setdefault("days", catalog_attraction["estimatedDuration"])
            existing.setdefault("description", catalog_attraction["description"])
            existing.setdefault("agencyRationale", catalog_attraction["agencyRationale"])
            existing.setdefault("visitType", catalog_attraction["visitType"])
            existing.setdefault("publishedDuration", catalog_attraction["publishedDuration"])
            existing.setdefault("oneYearOld", catalog_attraction["oneYearOld"])
            existing.setdefault("accessibility", catalog_attraction["accessibility"])


def render_app_data(data):
    route_stops = copy.deepcopy(data["routeStops"])
    _merge_catalog_attractions(route_stops, data["catalog"]["cities"])
    _enrich_route_attraction_durations(route_stops, data["catalog"]["cities"])
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
