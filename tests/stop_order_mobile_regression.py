from pathlib import Path
import json
import re
import sys

html_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "index.html"
html = html_path.read_text()
root = Path(__file__).resolve().parents[1]
data = json.loads((root / "data" / "roteiro.json").read_text(encoding="utf-8"))
start = html.rfind(".stop-head:has(.stop-date){")
assert start >= 0, "mobile stop-header rules not found"
mobile = html[start:]

def declaration(selector, prop):
    rule = re.search(re.escape(selector) + r"\{([^}]*)\}", mobile)
    assert rule, f"missing mobile rule for {selector}"
    value = re.search(r"(?:^|;)\s*" + re.escape(prop) + r"\s*:\s*([^;]+)", rule.group(1))
    return value.group(1).strip() if value else None

assert declaration(".stop-head:has(.stop-date) .stop-date", "grid-column") == "3/5", "date should stay in the content columns"
assert declaration(".stop-head:has(.stop-date) .stop-date", "grid-row") == "2", "date should be on the second row"
assert declaration(".stop-head:has(.stop-date) .reorder-actions", "grid-column") == "1/3", "reorder arrows should align under the drag handle and order number"
assert declaration(".stop-head:has(.stop-date) .reorder-actions", "grid-row") == "2", "reorder arrows should share the date row"
assert declaration(".stop-head:has(.stop-date) .reorder-actions button", "width") == "30px", "arrow buttons must fit the two-column order-control rail"

return_head = re.search(r"\.return-stop \.stop-head\s*\{([^}]*)\}", html)
assert return_head, "return card needs a dedicated grid layout"
assert re.search(r"grid-template-columns\s*:\s*32px\s+minmax\(0,1fr\)", return_head.group(1)), "return icon must have its own leading column"

move = re.search(r"function moveSameDay\(id,step\)\{(.*?)\}\s*function totalEnd", html, re.S)
assert move, "stop reorder handler not found"
assert "dates.set(current.id,nextDate)" in move.group(1), "reorder must cross date groups"
assert "dates.set(adjacent.id,currentDate)" in move.group(1), "reorder must preserve the adjacent stop's date"

layers = re.findall(r"\.side\s*\{([^}]*)\}", html)
assert layers, "sidebar stacking rule not found"
assert re.search(r"position\s*:\s*relative", layers[-1]), "sidebar must create a stacking context above map markers"
assert re.search(r"z-index\s*:\s*1000", layers[-1]), "sidebar must stack above Leaflet's marker pane"

fixed_head = re.search(r"\.fixed-day \.stop-head\s*\{([^}]*)\}", html)
assert fixed_head, "fixed destination card needs its own grid layout"
assert re.search(r"grid-template-columns\s*:\s*32px\s+minmax\(0,1fr\)", fixed_head.group(1)), "destination number must have its own leading column"

assert "const attractionStops=stops.flatMap" in html, "geolocated attractions must become independent route stops"
assert "const routeStops=[...stops,...attractionStops]" in html, "city and attraction stops must share routing"
assert "function effectiveRouteStops(allStops,selectedIds)" in html and "parentsWithTours" in html, "selected attractions should replace their selected city group in the route"
assert "attractionStops.forEach(addAttractionMarker)" in html, "attractions need clickable map markers"
assert "function routeableAttractionInfo(s)" in html and "Idade mínima oficial:" in html and "confirme com o operador" in html, "natural route stops must retain effort and minimum-age guidance"
assert "Tempo estimado de visita:" in html, "attraction stops must label their own visit duration, not a city stay"
assert "s.parentId&&(dates.get(s.parentId)||fixedDates.get(s.parentId))" in html, "attractions should inherit their selected city's or fixed parent date"
assert "fixedDates=new Map([[origin.id,'2026-10-07'],[destination.id,'2026-10-09']])" in html, "fixed stop dates should be available to child attractions"
assert "dates.get(s.parentId)||fixedDates.get(s.parentId)" in html, "child attractions should inherit fixed parent dates"
assert "d!=='2026-10-09'||d===selectedDate" in html, "child attractions should be able to select their fixed parent date"
assert "candidates(date).map" in html, "date options should include the inherited date"
assert "routeStops.forEach(s=>" in html, "selected attractions must update markers and popups"
assert "selected.add('araxa')" in html, "Araxá must be preselected in the route"
assert "dates.set('araxa','2026-10-07')" in html, "Araxá must be the first stop before Diamantina"
assert "String(stopsInOrder.indexOf(s))" in html, "map sequence markers must number the first intermediate stop as 1"
assert "String(stopsInOrder.indexOf(s)+1)" not in html, "map marker numbering must not count the origin as a numbered stop"
assert "setMapIcon(s,'M','2026-10-07')" in html, "Mirassol origin marker should identify the city, not look like stop 1"
assert "n=s===origin?'M':seq++" in html, "origin card should use the Mirassol marker"
assert "s===origin?'MIRASSOL · ORIGEM'" in html, "origin card should name Mirassol as the origin rather than show its city category"
assert "setMapIcon(s,'I','2026-10-07')" not in html, "origin map marker should not use the ambiguous I label"
assert "MIRASSOL · ORIGEM" in html, "origin card and popup should identify Mirassol instead of misclassifying it as history"
assert "M = Mirassol" in html, "marker legend should explain the origin symbol"
assert re.search(r"\.day-group\[data-day=\"2026-10-07\"\] \.stop-head:not\(:has\(\.stop-date\)\)", html), "origin icon needs its own card column"
route_stops = {stop["id"]: stop for stop in data["routeStops"]}
for name in ('Museu Calmon Barreto / Memorial de Araxá','Igreja de São Domingos','Parque do Cristo','Fontes Dona Beja e Andrade Júnior'):
    assert name in [attraction["name"] for attraction in route_stops["araxa"]["attractions"]], f"missing routable Araxá attraction: {name}"
assert "peiro" in route_stops, "Peirópolis should remain an available city from the latest stop catalog"
print("route, attraction, and card alignment regressions: PASS")
