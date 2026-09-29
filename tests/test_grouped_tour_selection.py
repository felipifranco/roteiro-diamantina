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

    def test_tours_are_chosen_inside_their_route_card(self):
        card_start = FINAL_ROUTING.index("function createCard(s,num){")
        card_end = FINAL_ROUTING.index("function moveBefore(", card_start)
        body = FINAL_ROUTING[card_start:card_end]
        self.assertIn("toursFor(s)", body)
        self.assertIn("tourRow(s,tour,canPick)", body)
        row = re.search(r"function tourRow\(city,tour,editable\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(row)
        self.assertIn("if(editable)row.appendChild(tourActionButton(tour))", row.group(1))
        self.assertIn("durationLabel(tour)", row.group(1))

    def test_itinerary_has_one_split_between_route_and_available_stops(self):
        for old in ("mapGroupPicker", "Cidades e regiões no mapa", "Desvios opcionais e avisos", "buildMapGroupCard"):
            self.assertNotIn(old, FINAL_ROUTING)
        self.assertIn("sectionTitle('No roteiro'", FINAL_ROUTING)
        self.assertIn("sectionTitle('Fora do roteiro'", FINAL_ROUTING)
        self.assertIn("const available=stops.filter(s=>!inTrip(s))", FINAL_ROUTING)
        self.assertIn("addButton.addEventListener('click',()=>setGroupActive(s,true))", FINAL_ROUTING)

    def test_city_tours_merge_sights_and_mapped_attractions_without_duplicates(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the tour-list runtime test")
        helpers = [
            re.search(r"const normalizeName=.*?;\n", FINAL_ROUTING).group(0),
            re.search(r"const sameName=.*?;\n", FINAL_ROUTING).group(0),
            re.search(r"function toursFor\(city\)\{.*?^\s*\}", FINAL_ROUTING, re.S | re.M).group(0),
        ]
        script = "const tourCache=new Map();const attractionStops=[{id:'c-poi-1',name:'Casa de JK',parentId:'c',kind:'atracao'},{id:'c-poi-2',name:'Mirante novo',parentId:'c',kind:'atracao'}];" + "".join(helpers) + """
console.log(JSON.stringify(toursFor({id:'c',name:'Cidade',type:'historia',sights:['Centro histórico','Casa de JK']}).map(t=>[t.id,t.kind])));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(
            json.loads(result.stdout),
            [["c-sight-1", "passeio"], ["c-poi-1", "atracao"], ["c-poi-2", "atracao"]],
        )

    def test_removing_a_city_group_deactivates_its_tours_and_markers(self):
        handler = re.search(r"function setGroupActive\(group,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler, "city group selection must have a single state handler")
        self.assertIn("toursFor(group).forEach(tour=>{selected.delete(tour.id);syncMarker(tour)})", handler.group(1))

    def test_tour_cannot_be_activated_without_its_city_group(self):
        handler = re.search(r"function setAttractionActive\(s,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler)
        self.assertIn("selected.has(s.parentId)", handler.group(1))


if __name__ == "__main__":
    unittest.main()
