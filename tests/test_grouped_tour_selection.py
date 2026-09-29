import json
import re
import shutil
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = (ROOT / "index.html").read_text(encoding="utf-8")
FINAL_ROUTING = PAGE.rsplit("// Datas individuais, estadias sugeridas e reordenação dos cartões.", 1)[1]


class GroupedTourSelectionTests(unittest.TestCase):
    def test_optional_city_groups_with_tours_are_selectable_groups(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the group-classification runtime test")
        helper = re.search(r"function isMapGroup\(s\)\{([^}]*)\}", PAGE)
        assert helper is not None, "city/tour groups must be classified explicitly"
        script = f"function isMapGroup(s){{{helper.group(1)}}}; console.log(JSON.stringify([isMapGroup({{kind:'opcional',attractions:[{{name:'tour'}}]}}),isMapGroup({{kind:'opcional',attractions:[]}}),isMapGroup({{kind:'natureza'}})]))"
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), [True, False, True])

    def test_route_replaces_selected_city_with_its_active_tours(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the route-selection runtime test")
        helper = re.search(
            r"function effectiveRouteStops\(allStops,selectedIds\)\{.*?^\s*\}",
            PAGE,
            re.S | re.M,
        )
        self.assertIsNotNone(helper, "route selection must account for grouped attractions")
        script = helper.group(0) + """
const stops=[
 {id:'cidade',kind:'natureza'},
 {id:'passeio',kind:'atracao',parentId:'cidade'},
 {id:'diamantina',kind:'destino'},
 {id:'casa-jk',kind:'atracao',parentId:'diamantina'}
];
const ids=values=>effectiveRouteStops(stops,new Set(values)).map(s=>s.id);
console.log(JSON.stringify({cityOnly:ids(['cidade']),cityWithTour:ids(['cidade','passeio']),orphanTour:ids(['passeio']),fixedDestination:ids(['diamantina','casa-jk'])}));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(
            json.loads(result.stdout),
            {
                "cityOnly": ["cidade"],
                "cityWithTour": ["passeio"],
                "orphanTour": [],
                "fixedDestination": ["diamantina", "casa-jk"],
            },
        )

    def test_tours_are_rendered_within_their_selected_city_group(self):
        group_card = re.search(r"function buildMapGroupCard\(.*?^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(group_card, "the map needs a visible city-group control")
        body = group_card.group(0)
        self.assertIn("tourActionButton(tour)", body)
        self.assertIn("durationLabel(tour)", body)

    def test_selected_city_stop_cards_show_controls_for_each_child_tour(self):
        card_start = FINAL_ROUTING.index("function createCard(s,num){")
        card_end = FINAL_ROUTING.index("function moveBefore(", card_start)
        body = FINAL_ROUTING[card_start:card_end]
        self.assertIn("attractionStops.filter(tour=>tour.parentId===s.id)", body)
        self.assertIn("item.appendChild(tourActionButton(tour))", body)
        self.assertIn("inline-tour-controls", body)
        self.assertIn("oldCheck.replaceWith(tourActionButton(s))", body)

    def test_city_candidates_do_not_flatten_child_tours(self):
        self.assertIn("const groupCandidates=stops.filter", FINAL_ROUTING)
        self.assertNotIn("rest=[...stops,...attractionStops]", FINAL_ROUTING)
        self.assertIn("id='mapGroupPicker'", FINAL_ROUTING)
        self.assertIn("＋ Adicionar ao mapa", FINAL_ROUTING)
        self.assertIn("groupCandidates.forEach", FINAL_ROUTING)
        self.assertIn("s.kind!=='opcional'||!!s.attractions?.length", PAGE)

    def test_removing_a_city_group_deactivates_its_tours_and_markers(self):
        handler = re.search(r"function setGroupActive\(group,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler, "city group selection must have a single state handler")
        body = handler.group(1)
        self.assertIn("attractionStops.filter(tour=>tour.parentId===group.id)", body)
        self.assertIn("selected.delete(tour.id)", body)
        self.assertIn("markers[tour.id]", body)

    def test_tour_cannot_be_activated_without_its_city_group(self):
        handler = re.search(r"function setAttractionActive\(s,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler)
        self.assertIn("selected.has(s.parentId)", handler.group(1))


if __name__ == "__main__":
    unittest.main()
