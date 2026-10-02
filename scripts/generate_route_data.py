#!/usr/bin/env python3
"""Generate app data and the catalog from the place catalog and trip plan."""

import argparse
import copy
from datetime import date
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "roteiro.json"
CATALOG_SOURCE = ROOT / "data" / "pontos-de-parada.json"
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
    "Classificação etária / 1 ano",
    "Ingressos / agendamento",
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
STOP_KINDS = {"cidade", "regiao", "atracao", "alerta", "restaurante"}
STOP_TYPES = {"natureza", "historia", "gastronomia"}
LOCATION_ACCURACIES = {"exact", "street-center", "trail-point", "city-center"}
AGE_STATUSES = {"livre", "idade_minima", "indeterminada"}
TICKET_STATUSES = {"online", "bilheteria", "agendamento", "gratuito", "por_passeio", "reserva_indeterminada", "indeterminado"}


def planning_date(value, path):
    if not isinstance(value, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        raise ValueError(f"{path} must be a YYYY-MM-DD date")
    try:
        return date.fromisoformat(value)
    except ValueError as error:
        raise ValueError(f"{path} must be a real calendar date") from error


def assemble_data(catalog, plan):
    """Resolve place references; date/selection fields exist only in the app adapter."""
    if not isinstance(catalog, dict) or not isinstance(plan, dict):
        raise ValueError("catalog and trip plan must be objects")
    if type(plan.get("version")) is not int or plan["version"] != 1:
        raise ValueError("trip plan version must be the integer 1")
    data = copy.deepcopy(catalog)
    schedule = copy.deepcopy(plan.get("schedule"))
    if not isinstance(schedule, dict):
        raise ValueError("schedule must be an object")
    for field in ("startDate", "destinationDate", "endDate", "dateRangeEnd"):
        planning_date(schedule.get(field), f"schedule.{field}")
    stops = data.get("routeStops")
    if not isinstance(stops, list) or any(not isinstance(stop, dict) for stop in stops):
        raise ValueError("routeStops must contain objects")
    ids = [stop.get("id") for stop in stops]
    if any(not isinstance(stop_id, str) or not stop_id for stop_id in ids) or len(set(ids)) != len(ids):
        raise ValueError("catalog place IDs must be unique non-empty strings")
    by_id = dict(zip(ids, stops))
    for stop in stops:
        if any(field in stop for field in ("initialDate", "overnight", "selectedByDefault")):
            raise ValueError("catalog places must not contain trip dates, overnight or selection")
        if not isinstance(stop.get("attractions", []), list):
            raise ValueError("catalog attractions must be a list")
        for attraction in stop.get("attractions", []):
            if isinstance(attraction, dict) and "selectedByDefault" in attraction:
                raise ValueError("catalog attractions must not contain trip selection")
    selected_attractions = plan.get("selectedAttractions", [])
    if not isinstance(selected_attractions, list):
        raise ValueError("selectedAttractions must be a list")
    selected_keys = set()
    for item in selected_attractions:
        if not isinstance(item, dict) or not isinstance(item.get("stopId"), str) or not isinstance(item.get("name"), str):
            raise ValueError("selectedAttractions must contain stopId and name")
        key = (item["stopId"], item["name"])
        city = by_id.get(item["stopId"])
        attraction = next((a for a in city.get("attractions", []) if isinstance(a, dict) and a.get("name") == item["name"]), None) if city else None
        if attraction is None or key in selected_keys:
            raise ValueError("selectedAttractions must reference unique catalog attractions")
        selected_keys.add(key)
        attraction["selectedByDefault"] = True
    visits, stays = plan.get("visits"), plan.get("stays")
    if not isinstance(visits, list) or not isinstance(stays, list):
        raise ValueError("visits and stays must be lists")
    schedule["initialStopOrder"] = []
    for visit in visits:
        if not isinstance(visit, dict) or not isinstance(visit.get("stopId"), str) or visit["stopId"] not in by_id:
            raise ValueError("visits.stopId must refer to a catalog place")
        stop_id = visit["stopId"]
        if stop_id in schedule["initialStopOrder"] or stop_id in (schedule.get("originId"), schedule.get("destinationId")):
            raise ValueError("visits must not repeat places or include fixed endpoints")
        planning_date(visit.get("date"), "visits.date")
        if not schedule["startDate"] <= visit["date"] <= schedule["endDate"]:
            raise ValueError("visits.date must be within the trip")
        by_id[stop_id]["initialDate"] = visit["date"]
        by_id[stop_id]["selectedByDefault"] = True
        schedule["initialStopOrder"].append(stop_id)
    for stop_id in (schedule.get("originId"), schedule.get("destinationId")):
        if isinstance(stop_id, str) and stop_id in by_id:
            by_id[stop_id]["selectedByDefault"] = True
    previous_end = None
    for stay in sorted(stays, key=lambda item: str(item.get("checkIn", "")) if isinstance(item, dict) else ""):
        if not isinstance(stay, dict) or not isinstance(stay.get("stopId"), str) or stay["stopId"] not in by_id:
            raise ValueError("stays.stopId must refer to a catalog place")
        if by_id[stay["stopId"]].get("kind") not in {"cidade", "regiao"}:
            raise ValueError("stays must refer to a city or region")
        check_in = planning_date(stay.get("checkIn"), "stays.checkIn")
        check_out = planning_date(stay.get("checkOut"), "stays.checkOut")
        if check_out <= check_in:
            raise ValueError("stays.checkOut must be after checkIn")
        if not schedule["startDate"] <= stay["checkIn"] < stay["checkOut"] <= schedule["endDate"]:
            raise ValueError("stays dates must be within the trip")
        if previous_end and stay["checkIn"] < previous_end:
            raise ValueError("stays must not overlap")
        previous_end = stay["checkOut"]
    schedule["stays"] = copy.deepcopy(stays)
    schedule["dayNotes"] = copy.deepcopy(plan.get("dayNotes", []))
    data["schedule"] = schedule
    validate(data)
    return data


def load_data():
    return assemble_data(json.loads(CATALOG_SOURCE.read_text(encoding="utf-8")),
                         json.loads(SOURCE.read_text(encoding="utf-8")))


def validate_visit_rules(item, path):
    if not isinstance(item, dict):
        raise ValueError(f"{path} must be an object")
    effort = item.get("accessEffort")
    if effort is not None and (
        not isinstance(effort, dict)
        or effort.get("level") not in {"easy", "moderate", "hard", "unknown"}
        or any(not isinstance(effort.get(field), str) or not effort[field].strip() for field in ("label", "note"))
    ):
        raise ValueError(f"{path}.accessEffort must have a valid level, label, and note")
    age = item.get("ageClassification")
    ticket = item.get("ticket")
    if not isinstance(age, dict) or age.get("status") not in AGE_STATUSES:
        raise ValueError(f"{path}.ageClassification must have a valid status")
    if age["status"] == "idade_minima" and (type(age.get("minimumAge")) is not int or age["minimumAge"] < 1):
        raise ValueError(f"{path}.ageClassification requires a positive minimumAge")
    if age["status"] != "indeterminada" and not str(age.get("sourceUrl", "")).startswith("https://"):
        raise ValueError(f"{path}.ageClassification requires an official sourceUrl")
    if not isinstance(ticket, dict) or ticket.get("status") not in TICKET_STATUSES:
        raise ValueError(f"{path}.ticket must have a valid status")
    if ticket["status"] in {"online", "bilheteria", "agendamento", "gratuito"} and not str(ticket.get("url", "")).startswith("https://"):
        raise ValueError(f"{path}.ticket requires a source or ticket URL")


def age_cell(item):
    age = item["ageClassification"]
    if age["status"] == "livre":
        label = "Livre — 1 ano permitido com responsável"
    elif age["status"] == "idade_minima":
        label = f"Mínimo {age['minimumAge']} anos — 1 ano não permitido"
    else:
        label = "Indeterminada"
    return f"{label} ([fonte]({age['sourceUrl']}))" if age.get("sourceUrl") else label


def ticket_cell(item):
    ticket = item["ticket"]
    labels = {"online": "Ingressos on-line", "bilheteria": "Bilheteria local", "agendamento": "Agendamento obrigatório", "gratuito": "Entrada gratuita", "por_passeio": "Ingressos variam por passeio", "reserva_indeterminada": "Reserva não confirmada", "indeterminado": "Ingresso/agendamento não confirmado"}
    label = labels[ticket["status"]]
    return f"[{label}]({ticket['url']})" if ticket.get("url") else label


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
    schedule = data.get("schedule")
    if not isinstance(schedule, dict):
        raise ValueError("schedule must be an object")
    for field in ("startDate", "destinationDate", "endDate", "dateRangeEnd"):
        value = schedule.get(field)
        if not isinstance(value, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
            raise ValueError(f"schedule.{field} must be a YYYY-MM-DD date")
        try:
            date.fromisoformat(value)
        except ValueError as error:
            raise ValueError(f"schedule.{field} must be a real calendar date") from error
    if not schedule["startDate"] <= schedule["destinationDate"] <= schedule["endDate"] <= schedule["dateRangeEnd"]:
        raise ValueError("schedule dates must be ordered startDate <= destinationDate <= endDate <= dateRangeEnd")
    if any(not isinstance(schedule.get(field), str) for field in ("originId", "destinationId")) or not isinstance(schedule.get("initialStopOrder"), list):
        raise ValueError("schedule must have originId, destinationId, and initialStopOrder")
    day_notes = schedule.get("dayNotes", [])
    if not isinstance(day_notes, list):
        raise ValueError("schedule.dayNotes must be a list")
    note_dates = set()
    for note in day_notes:
        if not isinstance(note, dict) or not isinstance(note.get("date"), str):
            raise ValueError("schedule.dayNotes must contain dated notes")
        try:
            date.fromisoformat(note["date"])
        except ValueError as error:
            raise ValueError("schedule.dayNotes requires real calendar dates") from error
        if note["date"] in note_dates or not schedule["startDate"] <= note["date"] <= schedule["endDate"]:
            raise ValueError("schedule.dayNotes dates must be unique and within the trip")
        note_dates.add(note["date"])
        if not isinstance(note.get("text"), str) or not isinstance(note.get("replaces", []), list) or any(not isinstance(value, str) for value in note.get("replaces", [])):
            raise ValueError("schedule.dayNotes requires text and optional replacement strings")
    for field, labels in (("accessAlerts", ("title", "text", "linkLabel")), ("sources", ("label",))):
        items = data.get(field, [])
        if not isinstance(items, list) or any(
            not isinstance(item, dict)
            or not isinstance(item.get("url"), str) or not item["url"].startswith("https://")
            or any(not isinstance(item.get(label), str) or not item[label].strip() for label in labels)
            for item in items
        ):
            raise ValueError(f"{field} must contain labeled HTTPS links")
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
        initial_date = stop.get("initialDate")
        if initial_date is not None and (not isinstance(initial_date, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", initial_date)):
            raise ValueError(f"routeStops[{index}].initialDate must be a YYYY-MM-DD date")
        if initial_date is not None:
            try:
                date.fromisoformat(initial_date)
            except ValueError as error:
                raise ValueError(f"routeStops[{index}].initialDate must be a real calendar date") from error
        stay_days = stop.get("stayDays")
        if stay_days is not None and (
            not isinstance(stay_days, list) or len(stay_days) != 2
            or any(type(days) not in (int, float) or days < 0 for days in stay_days)
            or stay_days[0] > stay_days[1]
        ):
            raise ValueError(f"routeStops[{index}].stayDays must be an ordered pair of non-negative numbers")
        validate_visit_rules(stop, f"routeStops[{index}]")
        if not isinstance(stop["name"], str) or not stop["name"].strip():
            raise ValueError(f"routeStops[{index}].name must be a non-empty string")
        if not isinstance(stop["kind"], str) or stop["kind"] not in STOP_KINDS:
            raise ValueError(f"routeStops[{index}].kind must be one of {sorted(STOP_KINDS)}")
        if not isinstance(stop["type"], str) or stop["type"] not in STOP_TYPES:
            raise ValueError(f"routeStops[{index}].type must be one of {sorted(STOP_TYPES)}")
        if stop["kind"] == "restaurante":
            dish = stop.get("dish2026")
            if stop["type"] != "gastronomia" or not isinstance(dish, dict) or any(
                not isinstance(dish.get(field), str) or not dish[field].strip()
                for field in ("name", "description", "url", "image", "credit")
            ):
                raise ValueError(f"routeStops[{index}] restaurant must have a 2026 dish")
            if not dish["url"].startswith("https://boalembranca.com.br/pratos/") or not dish["image"].startswith("assets/dishes/2026/") or not (ROOT / dish["image"]).is_file():
                raise ValueError(f"routeStops[{index}] restaurant dish links or image are invalid")
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
            validate_visit_rules(attraction, f"routeStops[{index}].attractions[{attraction_index}]")
            if not isinstance(attraction, dict):
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}] must be an object"
                )
            if attraction.get("kind") != "atracao":
                raise ValueError(f"routeStops[{index}].attractions[{attraction_index}].kind must be atracao")
            if not isinstance(attraction.get("type"), str) or attraction["type"] not in STOP_TYPES:
                raise ValueError(f"routeStops[{index}].attractions[{attraction_index}].type must be one of {sorted(STOP_TYPES)}")
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
        attraction_by_name = {attraction["name"]: attraction for attraction in mapped_attractions}
        for attraction_index, attraction in enumerate(mapped_attractions):
            if "sameSiteAs" not in attraction:
                continue
            site_name = attraction["sameSiteAs"]
            site = attraction_by_name.get(site_name) if isinstance(site_name, str) else None
            if site is None or site is attraction or site.get("sameSiteAs") or site.get("locationAccuracy") == "city-center":
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}].sameSiteAs "
                    "must name another mapped site in the same stop"
                )
        for attraction_index, attraction in enumerate(mapped_attractions):
            if "visitLinks" not in attraction:
                continue
            links = attraction["visitLinks"]
            if not isinstance(links, list) or any(
                not isinstance(link, dict)
                or not isinstance(link.get("label"), str)
                or not link["label"].strip()
                or not isinstance(link.get("url"), str)
                or not link["url"].startswith("https://")
                for link in links
            ):
                raise ValueError(
                    f"routeStops[{index}].attractions[{attraction_index}].visitLinks "
                    "must contain labeled HTTPS links"
                )

    if schedule["originId"] not in ids or schedule["destinationId"] not in ids:
        raise ValueError("schedule originId and destinationId must refer to route stops")
    if len(set(schedule["initialStopOrder"])) != len(schedule["initialStopOrder"]):
        raise ValueError("schedule.initialStopOrder must not repeat stop IDs")
    if any(not isinstance(stop_id, str) or stop_id not in ids for stop_id in schedule["initialStopOrder"]):
        raise ValueError("schedule.initialStopOrder must contain route stop IDs")


def _js_json(value):
    return (
        json.dumps(value, ensure_ascii=False, indent=2)
        .replace("\u2028", "\\u2028")
        .replace("\u2029", "\\u2029")
    )


def render_app_data(data):
    route_stops = copy.deepcopy(data["routeStops"])
    payload = {"schedule": copy.deepcopy(data["schedule"]), "routeStops": route_stops,
               "accessAlerts": copy.deepcopy(data.get("accessAlerts", [])),
               "sources": copy.deepcopy(data.get("sources", []))}
    return (
        "// Generated from data/pontos-de-parada.json and data/roteiro.json by scripts/generate_route_data.py. Do not edit.\n"
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
        "<!-- Gerado por scripts/generate_route_data.py a partir de data/pontos-de-parada.json. Não edite manualmente. -->",
        "",
        data["intro"],
        "",
        "A classificação é de cada passeio. **Livre** indica fonte oficial que admite crianças de 0 a 5 anos; **idade mínima** reproduz a regra publicada; **indeterminada** significa que não foi encontrada regra etária verificável. Paradas que agrupam passeios não herdam automaticamente a restrição de um deles. Links de ingresso aparecem somente quando existe uma página oficial identificada; os demais casos ficam marcados sem link confirmado.",
        "",
        _row(HEADERS),
        "|---|---|---|---|---|---|---:|---:|---|---|---|",
    ]
    for city in data["routeStops"]:
        if city["kind"] == "restaurante":
            dish = city["dish2026"]
            lines.append(_row([
                f"**{city['name']}**", city["address"],
                f"**{dish['name']} (Boa Lembrança 2026)**",
                f"{dish['description']} [Prato e imagem]({dish['url']})",
                "—", "Restaurante / refeição", city["days"], "—", age_cell(city), ticket_cell(city), "A confirmar",
            ]))
            continue
        lines.append(_row([
            f"**{city['name']}**", city.get("profile", ""), "**Parada / grupo**",
            city.get("guideBriefing", ""), "—", "Parada de referência",
            city["days"], "—", age_cell(city), ticket_cell(city), "—",
        ]))
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
                age_cell(attraction),
                ticket_cell(attraction),
                attraction["accessibility"],
            ]
            lines.append(_row(values))
            detailed_index += 1
    return "\n".join(lines) + "\n"


def outputs(data, catalog):
    return {
        APP_OUTPUT: render_app_data(data),
        MARKDOWN_OUTPUT: render_markdown(catalog),
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="fail if generated files are stale")
    args = parser.parse_args(argv)
    try:
        catalog = json.loads(CATALOG_SOURCE.read_text(encoding="utf-8"))
        data = assemble_data(catalog, json.loads(SOURCE.read_text(encoding="utf-8")))
        generated = outputs(data, catalog)
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
        if path.is_file() and path.read_text(encoding="utf-8") == content:
            print(f"Unchanged {path.relative_to(ROOT)}")
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print(f"Generated {path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
