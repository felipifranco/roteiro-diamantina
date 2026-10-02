from pathlib import Path
import json
import re
import sys

html_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "index.html"
html = html_path.read_text()
root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root))
from scripts.generate_route_data import load_data
data = load_data()
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
assert "TripCalendar.reorderVisit(orderedSelected(),id,step,dates,manual)" in move.group(1), "reorder must cross date groups"
assert "dates.set(adjacent.id,currentDate)" in (root / "assets/trip-calendar.js").read_text(), "reorder must preserve the adjacent stop's date"

layers = re.findall(r"\.side\s*\{([^}]*)\}", html)
assert layers, "sidebar stacking rule not found"
assert re.search(r"position\s*:\s*relative", layers[-1]), "sidebar must create a stacking context above map markers"
assert re.search(r"z-index\s*:\s*1000", layers[-1]), "sidebar must stack above Leaflet's marker pane"

fixed_head = re.search(r"\.fixed-day \.stop-head\s*\{([^}]*)\}", html)
assert fixed_head, "fixed destination card needs its own grid layout"
assert re.search(r"grid-template-columns\s*:\s*32px\s+minmax\(0,1fr\)", fixed_head.group(1)), "destination number must have its own leading column"

assert "const attractionStops=stops.flatMap" in html, "geolocated attractions must become independent route stops"
assert "const routeStops=[...stops,...attractionStops.filter(s=>s.routeable)]" in html, "city and attraction stops must share routing"
assert "function effectiveRouteStops(allStops,selectedIds)" in html and "parentsWithTours" in html, "selected attractions should replace their selected city group in the route"
assert "attractionStops.filter(s=>s.routeable).forEach(addAttractionMarker)" in html, "attractions need clickable map markers"
assert "function routeableAttractionInfo(s)" in html and "ageSummaryMarkup(tour)" in html and "knownAge=age.status==='livre'||age.status==='idade_minima'" in html, "tour cards must show brief age rules while popups retain visit details"
assert "Tempo estimado de visita:" in html, "attraction stops must label their own visit duration, not a city stay"
assert "fixedDates=new Map([[origin.id,schedule.startDate],[destination.id,schedule.destinationDate]])" in html, "fixed stop dates should come from itinerary data"
assert "const routeDate=s=>dates.get(s.id)||(s.kind==='atracao'?dates.get(s.parentId)||fixedDates.get(s.parentId):fixedDates.get(s.id))" in html, "attraction markers should prefer their own date, then inherit their city's or fixed parent's date"
assert "TripCalendar.calendarDays(schedule.startDate,schedule.endDate)" in html, "visits can share the fixed destination day"
assert "candidates(date).map" in html, "date options should include the inherited date"
assert "routeStops.forEach(s=>" in html, "selected attractions must update markers and popups"
schedule = data["schedule"]
assert schedule["initialStopOrder"] == ['peiro', 'araxa', 'camposaltos', 'cordisburgo', 'setelagoas', 'belohorizonte'], "initial stop order should be configured in the JSON"
assert "const initialStops=schedule.initialStopOrder" in html, "the page should read the initial stop order from generated data"
assert "if(s.initialDate)dates.set(s.id,s.initialDate)" in html, "initial stop dates should come from the JSON"
defaults = {stop["id"]: stop.get("selectedByDefault", False) for stop in data["routeStops"]}
assert all(defaults.get(stop_id) for stop_id in ('mirassol', 'diamantina', 'peiro', 'araxa', 'camposaltos', 'cordisburgo', 'setelagoas', 'belohorizonte')), "origin, destination, and the selected route cities must be configured in the JSON"
attractions = {stop["id"]: {item["name"]: item.get("selectedByDefault", False) for item in stop.get("attractions", [])} for stop in data["routeStops"]}
assert all(attractions['peiro'].values()), "both Peirópolis tours must start selected"
assert all(selected for name, selected in attractions['cordisburgo'].items() if name != 'Gruta do Maquiné'), "Cordisburgo attractions except Gruta do Maquiné must start selected"
assert not any(attractions['setelagoas'].values()), "Sete Lagoas attractions must not start selected"
assert "structuredClone(schedule.stays||[])" in html, "lodging should come from the trip plan"
assert "TripCalendar.nightCount(stay)" in html, "nights should use the lodging dates"
assert "Pernoite" not in html and "PERNOITE" not in html, "overnight text must come from the JSON"
assert "if(routed.has(city.id))labels.set(city.id,String(i+1))" in (root / "assets/trip-calendar.js").read_text(), "map sequence markers must number the first intermediate stop as 1"
assert "`${i+1}${String.fromCharCode(97+j)}`" in (root / "assets/trip-calendar.js").read_text(), "tour markers should share their city's number (3a, 3b…)"
assert "String(stopsInOrder.indexOf(s)+1)" not in html, "map marker numbering must not count the origin as a numbered stop"
assert "setMapIcon(s,'M',schedule.startDate)" in html, "Mirassol origin marker should identify the city, not look like stop 1"
assert "const icon=routeIcon(s,plan)" in html and "createCard(s,icon,plan,!plan.labels.has(s.id)&&hasSelectedTours(s))" in html, "cards should use the same route marker icon as the map"
assert "s===origin?`${origin.name.split(' · ')[0].toUpperCase()} · ORIGEM`" in html, "origin card should name Mirassol as the origin rather than show its city category"
assert "setMapIcon(s,'I',schedule.startDate)" not in html, "origin map marker should not use the ambiguous I label"
assert "s.id===schedule.originId?`${s.name.split(' · ')[0].toUpperCase()} · ORIGEM`" in html, "origin card and popup should identify Mirassol instead of misclassifying it as history"
assert "M é a origem" in html, "marker legend should explain the origin symbol"
route_stops = {stop["id"]: stop for stop in data["routeStops"]}
for name in ('Museu Calmon Barreto / Memorial de Araxá','Igreja de São Domingos','Parque do Cristo','Fontes Dona Beja e Andrade Júnior'):
    assert name in [attraction["name"] for attraction in route_stops["araxa"]["attractions"]], f"missing routable Araxá attraction: {name}"
assert "peiro" in route_stops, "Peirópolis should remain an available city from the latest stop catalog"
assert "setelagoas" in route_stops and "cordisburgo" in route_stops, "new itinerary cities must remain in the catalog"
print("route, attraction, and card alignment regressions: PASS")
