from scripts.generate_route_data import load_data
import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = (ROOT / "index.html").read_text(encoding="utf-8")
ROUTE_MODULE = (ROOT / "assets/trip-route.js").read_text(encoding="utf-8")
FINAL_ROUTING = PAGE.rsplit("// Datas individuais, estadias sugeridas e reordenação dos cartões.", 1)[1]


class RouteInteractionControlsTests(unittest.TestCase):
    def test_generated_routeable_attractions_use_catalog_estimates(self):
        generated = (ROOT / "data" / "route-data.generated.js").read_text(encoding="utf-8")
        serialized = generated.split("window.ROTEIRO_DATA = ", 1)[1].rsplit(";", 1)[0]
        payload = json.loads(serialized)
        stops = {stop["id"]: stop for stop in payload["routeStops"]}
        self.assertNotIn("catalogVisitDurations", payload)
        expected = {
            "canastra": ("Casca d’Anta", "meio dia"),
            "congonhas": ("Santuário do Bom Jesus", "1 h"),
            "mariana": ("Praça Minas Gerais", "30 min"),
            "diamantina": ("Casa de JK", "1 h"),
        }
        for stop_id, (name, duration) in expected.items():
            attraction = next(a for a in stops[stop_id]["attractions"] if a["name"] == name)
            self.assertEqual(attraction.get("estimatedDuration", attraction.get("days")), duration)

    def test_generated_route_attractions_preserve_source_fields_and_unknowns(self):
        source = load_data()
        generated = (ROOT / "data" / "route-data.generated.js").read_text(encoding="utf-8")
        payload = json.loads(generated.split("window.ROTEIRO_DATA = ", 1)[1].rsplit(";", 1)[0])
        source_stops = {stop["id"]: stop for stop in source["routeStops"]}
        generated_stops = {stop["id"]: stop for stop in payload["routeStops"]}
        self.assertEqual(set(source_stops), set(generated_stops))
        for stop_id, source_stop in source_stops.items():
            generated_stop = generated_stops[stop_id]
            for key, value in source_stop.items():
                if key != "attractions":
                    self.assertEqual(generated_stop.get(key), value, (stop_id, key))
            generated_by_name = {a["name"]: a for a in generated_stop.get("attractions", [])}
            for source_attraction in source_stop.get("attractions", []):
                generated_attraction = generated_by_name.get(source_attraction["name"]) or next(
                    a for a in generated_stop.get("attractions", [])
                    if a.get("routeOverrides", {}).get("name") == source_attraction["name"]
                )
                for key, value in source_attraction.items():
                    if generated_attraction.get(key) != value:
                        self.assertEqual(
                            generated_attraction.get("routeOverrides", {}).get(key),
                            value, (stop_id, key),
                        )
                self.assertEqual(
                    generated_attraction.get("locationAccuracy"),
                    source_attraction.get("locationAccuracy", "exact"),
                )
        # The generated adapter may add researched attractions without route coordinates.
        # They must keep all details and be explicit when using the city
        # coordinate until an exact attraction coordinate is surveyed.
        for stop in generated_stops.values():
            for attraction in stop.get("attractions", []):
                self.assertIn(attraction.get("locationAccuracy"), {"exact", "street-center", "trail-point", "city-center"})
                if attraction["locationAccuracy"] == "city-center":
                    for field in (
                        "description", "agencyRationale", "visitType",
                        "publishedDuration", "oneYearOld", "accessibility",
                    ):
                        self.assertIn(field, attraction)
        mirante = next(
            attraction
            for attraction in generated_stops["capitolio"]["attractions"]
            if attraction["name"] == "Mirante dos Canyons"
        )
        self.assertEqual(mirante["locationAccuracy"], "exact")

    def test_attraction_popup_helper_is_defined_before_markers_are_created(self):
        marker_creation = PAGE.index("attractionStops.filter(s=>s.routeable).forEach(addAttractionMarker)")
        popup_helper = PAGE.index("function routeableAttractionInfo(s)")
        self.assertLess(popup_helper, marker_creation, "attraction popup helper must exist before marker creation")

    def test_city_popup_helper_is_defined_before_city_markers_are_created(self):
        marker_creation = PAGE.index("stops.forEach(addMarker)")
        popup_helper = PAGE.index("function visitRuleMarkup(s,compact=false)")
        self.assertLess(popup_helper, marker_creation, "city popup helper must exist before marker creation")

    def test_tour_controls_have_explicit_add_and_remove_actions(self):
        self.assertIn("function tourActionButton(tour)", FINAL_ROUTING, "tour action helper is missing")
        self.assertIn("＋ Adicionar ao roteiro", FINAL_ROUTING, "inactive tours need a clear add action")
        self.assertIn("− Remover do roteiro", FINAL_ROUTING, "active tours need a clear remove action")
        self.assertIn("setAttractionActive(tour", FINAL_ROUTING, "tour actions must update route state")

    def test_attraction_markers_remain_visible_with_synchronized_route_icons(self):
        self.assertIn("attractionStops.filter(s=>s.routeable).forEach(addAttractionMarker)", PAGE)
        self.assertIn("m.addTo(map);markers[s.id]=m", PAGE)
        self.assertIn("function routeIcon(s,plan)", FINAL_ROUTING)
        self.assertIn("syncAttractionVisibility(plan);", FINAL_ROUTING)
        self.assertIn("if(s.kind==='atracao'&&!selected.has(s.parentId)&&!openCards.has(s.parentId)){hideMarker(s);return}syncMarker(s);", FINAL_ROUTING)
        self.assertIn("setMapIcon(s,icon,routed?date:null)", FINAL_ROUTING)

    def test_reorder_updates_the_list_before_route_network_finishes(self):
        move = re.search(r"function moveSameDay\(id,step\)\{(.*?)\}\s*function totalEnd", PAGE, re.S)
        self.assertIsNotNone(move, "stop reorder handler not found")
        move_body = move.group(1) if move else ""
        self.assertTrue("window.renderList()" in move_body, "reorder handler does not render immediately")
        self.assertLess(move_body.index("window.renderList()"), move_body.index("window.drawLine()"))

    def test_final_route_draw_has_local_request_counter_and_bounded_fetch(self):
        self.assertIn("await router.calculate(plan)", FINAL_ROUTING)
        self.assertIn("let sequence=0,controller=null", ROUTE_MODULE)
        for part in ("new AbortController()", "setTimeout", "signal:current.signal", "response.ok"):
            self.assertIn(part, ROUTE_MODULE)

    def test_attraction_cards_show_visit_duration_or_explicit_unknown(self):
        self.assertIn("days:a.days||'Duração a confirmar'", ROUTE_MODULE)
        self.assertIn("Tempo estimado de visita: ${time}", PAGE)

    def test_fixed_diamantina_day_tours_are_included_in_the_route(self):
        draw_start = FINAL_ROUTING.index("window.drawLine=async function(){")
        draw = FINAL_ROUTING[draw_start:]
        self.assertIn("TripCalendar.planRoute(groups,origin,destination,routeDate,toursFor,routed,policies.destination,inTrip(destination))", FINAL_ROUTING)
        self.assertIn("stopsInOrder=plan.routePoints", draw)

    def test_route_request_is_invalidated_before_aborting_previous_fetch(self):
        request_id = ROUTE_MODULE.index("request=++sequence")
        previous_abort = ROUTE_MODULE.index("if(controller)controller.abort()")
        self.assertLess(request_id, previous_abort, "mark the previous request stale before aborting it")


if __name__ == "__main__":
    unittest.main()
