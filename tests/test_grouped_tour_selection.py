from scripts.generate_route_data import load_data
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
    def test_ouro_preto_and_ouro_branco_share_theme_and_dynamic_route_symbols(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for marker behavior")
        data = load_data()
        cities = [s for s in data["routeStops"] if s["id"] in {"ouropreto", "ourobranco"}]
        self.assertTrue(all(s["kind"] == "cidade" for s in cities))
        helpers = re.search(r"function colorClass\(s\)\{[^\n]+", PAGE).group(0)
        helpers += "\n" + re.search(r"function routeIcon\(s,plan\)\{.*?^\s*\}", FINAL_ROUTING, re.S | re.M).group(0)
        script = helpers + "\nconst cities=" + json.dumps(cities) + ";" + """
const origin={id:'mirassol',kind:'cidade'},destination={id:'diamantina',kind:'cidade'};
const selected=new Set(),toursFor=()=>[];
const before=cities.map(s=>[colorClass(s),routeIcon(s,{labels:new Map()})]);
selected.add('ourobranco');
const after=cities.map(s=>[colorClass(s),routeIcon(s,{labels:new Map([['ourobranco','1']])})]);
console.log(JSON.stringify({before,after}));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), {
            "before": [["agency history", "+"], ["agency history", "+"]],
            "after": [["agency history", "+"], ["agency history", "1"]],
        })

    def test_cities_and_regions_are_selectable_groups_without_fixed_route_status(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the group-classification runtime test")
        self.assertNotIn("function isMapGroup(", PAGE, "unused legacy classification should not survive")
        script = "const TripRoute=require('./assets/trip-route.js');" + """
const groups=[{id:'a',kind:'cidade',attractions:[{name:'tour'}]},{id:'b',kind:'cidade',attractions:[]},{id:'c',kind:'regiao'}];
const selected=new Set();
console.log(JSON.stringify(groups.map(group=>TripRoute.setGroupActive(group,true,[],selected,new Map(),[],()=>false))));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), [True, True, True])
        self.assertIn("setGroupActive(s,true)", FINAL_ROUTING)

    def test_map_and_card_icons_share_one_route_state(self):
        helper = re.search(r"function routeIcon\(s,plan\)\{.*?^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(helper, "cards and map markers must use one status-to-icon rule")
        marker_refresh = re.search(r"function refreshMarkers\(plan,stopsInOrder\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        card_builder = re.search(r"function createCard\(s,num,plan(?:,forceRoute=false)?(?:,day)?\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        tour_row = re.search(r"function tourRow\(city,tour,editable,plan(?:,day)?\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(marker_refresh)
        self.assertIsNotNone(card_builder)
        self.assertIsNotNone(tour_row)
        self.assertIn("routeIcon(s,plan)", marker_refresh.group(1))
        self.assertIn("routeIcon(s,iconPlan)", card_builder.group(1))
        self.assertIn("routeIcon(tour,plan)", tour_row.group(1))
        script = helper.group(0) + """
const selected=new Set(['cidade','passeio','optional','optional-tour']);
const origin={id:'origem',kind:'cidade'},destination={id:'destino',kind:'cidade'};
const city={id:'cidade',kind:'regiao'},tour={id:'passeio',kind:'atracao',parentId:'cidade'};
const optional={id:'optional',kind:'cidade'},optionalTour={id:'optional-tour',kind:'atracao',parentId:'optional'};
const unselectedOptional={id:'unselected-optional',kind:'cidade'},alert={id:'alert',kind:'alerta'},outside={id:'outside',kind:'regiao'};
const toursFor=s=>s.id==='cidade'?[tour]:s.id==='optional'?[optionalTour]:[];
const plan={labels:new Map([['origem','M'],['destino','D'],['passeio','1a'],['outside','2']])};
console.log(JSON.stringify([origin,destination,city,tour,optional,unselectedOptional,alert,outside].map(s=>routeIcon(s,plan))));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        self.assertEqual(json.loads(result.stdout), ["M", "D", "↔", "1a", "↔", "+", "!", "2"])

    def test_route_plan_gives_active_tours_one_card_and_map_label_not_the_parent(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the route-plan runtime test")
        planner = re.search(
            r"function routePlan\(\)\{.*?^\s*\}",
            FINAL_ROUTING,
            re.S | re.M,
        )
        self.assertIsNotNone(planner)
        script = "const TripRoute=require('./assets/trip-route.js');" + """
const schedule={destinationId:'diamantina',destinationDate:'2026-10-09'};
const origin={id:'mirassol',kind:'cidade'},destination={id:'diamantina',kind:'cidade'};
const city={id:'cidade',kind:'regiao'},tour={id:'passeio',kind:'atracao',parentId:'cidade'};
const routeStops=[origin,city,tour,destination],selected=new Set(['cidade','passeio']);
const dates=new Map([['cidade','2026-10-08'],['passeio','2026-10-08']]);
const TripCalendar=require('./assets/trip-calendar.js');
const policies={destination:{required:true,fixedDate:true,sameDayOrder:'before'}};
const routeDate=s=>dates.get(s.id)||schedule.destinationDate,inTrip=()=>true;
const orderedSelected=()=>[city],ensureDate=()=>{};
const toursFor=s=>s.id==='cidade'?[tour]:[];
""" + planner.group(0) + """
const plan=routePlan();
console.log(JSON.stringify({labels:Object.fromEntries(plan.labels),points:[...plan.beforePoints,...plan.sameDay,...plan.afterPoints].map(s=>s.id),order:plan.order.map(s=>s.id)}));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        state = json.loads(result.stdout)
        self.assertNotIn("cidade", state["labels"], "a map-only group must not look like a routed stop")
        self.assertEqual(state["labels"]["passeio"], "1a", "card and map must use the same route label")
        self.assertEqual(state["points"], ["passeio"], "the selected tour must appear once in the route")
        self.assertEqual(state["order"], ["passeio"], "route summaries must count the granular stop, not the map-only group")

    def test_route_replaces_selected_city_with_its_active_tours(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the route-selection runtime test")
        script = "const TripRoute=require('./assets/trip-route.js');" + """
const schedule={destinationId:'diamantina'};
const stops=[
 {id:'cidade',kind:'regiao'},
 {id:'passeio',kind:'atracao',parentId:'cidade'},
 {id:'diamantina',kind:'cidade'},
 {id:'casa-jk',kind:'atracao',parentId:'diamantina'}
];
const ids=values=>TripRoute.effectiveRouteStops(stops,new Set(values),schedule).map(s=>s.id);
console.log(JSON.stringify({cityOnly:ids(['cidade']),cityWithTour:ids(['cidade','passeio']),orphanTour:ids(['passeio']),fixedDestination:ids(['diamantina','casa-jk'])}));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
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
        card_start = FINAL_ROUTING.index("function createCard(s,num,plan")
        card_end = FINAL_ROUTING.index("function moveBefore(", card_start)
        body = FINAL_ROUTING[card_start:card_end]
        self.assertIn("toursFor(s)", body)
        self.assertIn("tourRow(s,tour,canPick,iconPlan,day)", body)
        row = re.search(r"function tourRow\(city,tour,editable,plan(?:,day)?\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(row)
        self.assertIn("if(editable&&tour.routeable)row.appendChild(tourActionButton(tour,day))", row.group(1))
        self.assertIn("tourLocation(tour)", row.group(1))
        self.assertIn("ageSummaryMarkup(tour)", row.group(1))
        self.assertNotIn("tourCardMeta(tour,city", row.group(1))

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
        script = "const TripRoute=require('./assets/trip-route.js');const attractionStops=[{id:'c-poi-1',name:'Casa de JK',parentId:'c',kind:'atracao'},{id:'c-poi-2',name:'Mirante novo',parentId:'c',kind:'atracao'}];const toursFor=city=>TripRoute.toursFor(city,attractionStops);" + """
console.log(JSON.stringify(toursFor({id:'c',name:'Cidade',type:'historia',sights:['Centro histórico','Casa de JK']}).map(t=>[t.id,t.kind])));
"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
        self.assertEqual(
            json.loads(result.stdout),
            [["c-sight-1", "atracao"], ["c-poi-1", "atracao"], ["c-poi-2", "atracao"]],
        )

    def test_removing_a_city_group_deactivates_its_tours_and_markers(self):
        handler = re.search(r"function setGroupActive\(group,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler, "city group selection must have a single state handler")
        self.assertIn("TripRoute.setGroupActive(group,active,tours,selected,dates,manual,isRequired)", handler.group(1))
        self.assertIn("tours.forEach(hideMarker)", handler.group(1))

    def test_tour_cannot_be_activated_without_its_city_group(self):
        handler = re.search(r"function setAttractionActive\(s,active\)\{(.*?)^\s*\}", FINAL_ROUTING, re.S | re.M)
        self.assertIsNotNone(handler)
        self.assertIn("TripRoute.setAttractionActive(s,active,selected,isRequired)", handler.group(1))


if __name__ == "__main__":
    unittest.main()
