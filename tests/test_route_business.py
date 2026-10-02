import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class RouteBusinessTests(unittest.TestCase):
    def run_js(self, body):
        result = subprocess.run(['node', '-e', "const assert=require('node:assert/strict');const R=require('./assets/trip-route.js');" + body], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_effective_points_preserve_endpoints_and_reject_orphan_tours(self):
        self.assertTrue((ROOT / 'assets/trip-route.js').exists(), 'reusable routing module is missing')
        self.run_js("""
const stops=[{id:'o'},{id:'c'},{id:'t',kind:'atracao',parentId:'c'},{id:'d'},{id:'dt',kind:'atracao',parentId:'d'}];
const ids=values=>R.effectiveRouteStops(stops,new Set(values),{originId:'o',destinationId:'d'}).map(s=>s.id);
assert.deepEqual(ids(['o','c','t','d','dt']),['o','t','d','dt']);
assert.deepEqual(ids(['t']),[]);assert.deepEqual(ids(['c']),['c']);
const tours=R.attractionStops([{id:'c',name:'City',type:'historia',attractions:[{name:'own',locationAccuracy:'exact'},{name:'unknown',locationAccuracy:'city-center'},{name:'shared',locationAccuracy:'exact',sameSiteAs:'own'}]}]);
assert.deepEqual(tours.map(t=>[t.id,t.routeable]),[['c-poi-1',true],['c-poi-2',false],['c-poi-3',false]]);
""")

    def test_selection_dependencies_required_items_and_group_cleanup(self):
        self.run_js("""
const selected=new Set(['c','t']),dates=new Map([['c','2026-10-10']]),manual=['c'];
const t={id:'t',parentId:'c',routeable:true},c={id:'c',kind:'cidade'};
const required=s=>s.required===true;
assert.equal(R.setAttractionActive({...t,id:'orphan',parentId:'other'},true,selected,required),false);
assert.equal(R.setAttractionActive({...t,routeable:false},true,selected,required),false);
assert.equal(R.setAttractionActive({...t,required:true},false,selected,required),false);
assert.equal(R.setGroupActive(c,false,[{...t,required:true}],selected,dates,manual,required),false);
assert.equal(R.setGroupActive(c,false,[t],selected,dates,manual,required),true);
assert.deepEqual([...selected],[]);assert.deepEqual([...dates],[]);assert.deepEqual(manual,[]);
assert.equal(R.setAttractionActive(t,true,selected,required),false);
assert.equal(R.setGroupActive(c,true,[t],selected,dates,manual,required),true);
assert.equal(R.setAttractionActive(t,true,selected,required),true);
assert.equal(R.setAttractionActive(t,false,selected,required),true);
assert.equal(R.setGroupActive({id:'alert',kind:'alerta'},true,[],selected,dates,manual,required),false);
""")

    def test_router_config_cancellation_stale_failure_timeout_and_return_duration(self):
        self.run_js("""
(async()=>{
const pending=[],config={endpoint:'https://example.test/route/v1',profile:'driving',timeoutMs:20};
const fetcher=(url,options)=>new Promise((resolve,reject)=>{pending.push({url,options,resolve,reject});options.signal.addEventListener('abort',()=>reject(new Error('aborted')))});
const client=R.createRouter(config,fetcher),plan={routePoints:[{lon:1,lat:2},{lon:3,lat:4}],returnStart:1};
const first=client.calculate(plan),second=client.calculate(plan);
assert.equal(pending[0].options.signal.aborted,true);assert.equal(await first,null);
assert.equal(pending[1].url,'https://example.test/route/v1/driving/1,2;3,4?overview=full&geometries=geojson&steps=false');
pending[1].resolve({ok:true,json:async()=>({routes:[{legs:[{duration:3600},{duration:7200}]}]})});
const success=await second;assert.equal(success.returnDriveHours,2);assert.equal(success.error,undefined);
const failed=client.calculate(plan);pending[2].resolve({ok:false,status:503});assert.ok((await failed).error);
const empty=client.calculate(plan);pending[3].resolve({ok:true,json:async()=>({routes:[]})});assert.ok((await empty).error);
const timeout=await client.calculate(plan);assert.ok(timeout.error);assert.equal(pending[4].options.signal.aborted,true);
// A provider that ignores abort still cannot publish a late response.
const delayed=[];const other=R.createRouter({...config,timeoutMs:1000},()=>new Promise(resolve=>delayed.push(resolve)));
const old=other.calculate(plan),latest=other.calculate(plan);
delayed[1]({ok:true,json:async()=>({routes:[{legs:[]}]})});assert.equal((await latest).returnDriveHours,0);
delayed[0]({ok:true,json:async()=>({routes:[{legs:[]}]})});assert.equal(await old,null);
})().catch(error=>{console.error(error);process.exitCode=1});
""")

    def test_tour_merge_and_leg_grouping_are_reusable_without_dom(self):
        self.run_js("""
const city={id:'c',name:'City',type:'historia',sights:['Centro histórico','Casa de JK']};
const mapped=[{id:'c-poi-1',name:'Casa de JK',parentId:'c',kind:'atracao'},{id:'c-poi-2',name:'Mirante novo',parentId:'c',kind:'atracao'}];
assert.deepEqual(R.toursFor(city,mapped).map(t=>t.id),['c-sight-1','c-poi-1','c-poi-2']);
const points=[{id:'o'},{id:'t',kind:'atracao',parentId:'c'},{id:'t2',kind:'atracao',parentId:'c'},{id:'o'}];
const links=R.routeLegLinks(points,'o');assert.deepEqual([...links.arrival.keys()],['c','return']);
const legs=R.legsByCity(points,[{duration:10,distance:20},{duration:30,distance:40},{duration:50,distance:60}],'o');
assert.deepEqual(legs.intra.get('c'),{duration:30,distance:40});assert.equal(legs.arrival.get('return').from.id,'t2');
""")

    def test_canonical_routing_config_is_validated_and_generated(self):
        import copy
        from scripts.generate_route_data import load_data, validate, render_app_data
        data = load_data()
        self.assertIn('routing', data, 'routing parameters must come from the canonical trip plan')
        self.assertIn('"routing"', render_app_data(data))
        for field, value in [('endpoint', 'http://bad'), ('profile', ''), ('timeoutMs', 0), ('timeoutMs', True)]:
            broken = copy.deepcopy(data)
            broken['routing'][field] = value
            with self.assertRaises(ValueError):
                validate(broken)

    def test_no_legacy_summary_or_unconditional_fixed_destination_failure_copy(self):
        page = (ROOT / 'index.html').read_text()
        self.assertNotIn('function updateTripSummary(', page)
        self.assertNotIn('fixo permanecem', page)
        self.assertNotIn('router.project-osrm.org', page)


if __name__ == '__main__':
    unittest.main()
