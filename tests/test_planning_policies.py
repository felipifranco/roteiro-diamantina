import copy
import json
from pathlib import Path
import subprocess
import unittest

from scripts.generate_route_data import assemble_data, render_markdown

ROOT = Path(__file__).resolve().parents[1]


class PlanningPolicyTests(unittest.TestCase):
    def run_js(self, code):
        subprocess.run(['node', '-e', "const assert=require('node:assert/strict');const P=require('./assets/trip-calendar.js');" + code], cwd=ROOT, check=True)

    def test_return_budget_uses_configuration_and_preserves_unknown_state(self):
        self.run_js("""
assert.equal(typeof P.estimateReturn,'function','return calculation must live outside HTML');
assert.equal(P.estimateReturn('2026-10-12',null,8),null);
assert.equal(P.estimateReturn('2026-10-12',16,8),'2026-10-14');
assert.equal(P.estimateReturn('2026-10-12',16,4),'2026-10-16');
assert.equal(P.estimateReturn('2026-10-12',0,8),'2026-10-13');
""")

    def test_suggestion_and_conflicts_use_actual_plan_not_catalog_duration(self):
        self.run_js("""
assert.equal(typeof P.suggestDate,'function','date suggestions must live outside HTML');
const schedule={startDate:'2026-10-07',destinationDate:'2026-10-09',endDate:'2026-10-13'};
const policy={anchor:'destination',offsetDays:1};
const visits=[{date:'2026-10-11',stayDays:[1,20]}];
const stays=[{stopId:'city',checkIn:'2026-10-11',checkOut:'2026-10-13'}];
assert.equal(P.plannedEnd(visits,stays,schedule.destinationDate),'2026-10-12');
assert.equal(P.suggestDate(visits,stays,schedule,policy),'2026-10-13');
assert.equal(P.suggestDate(visits,[],schedule,policy),'2026-10-12');
assert.equal(P.suggestDate([],[],schedule,policy),'2026-10-10');
assert.equal(P.suggestDate([],[],schedule,{anchor:'start',offsetDays:0}),'2026-10-07');
assert.equal(P.suggestDate([{date:'2026-10-13'}],[],schedule,policy),'2026-10-13');
assert.equal(P.hasDestinationConflict([],schedule.destinationDate,'destination'),false);
assert.equal(P.hasDestinationConflict([{stopId:'city',checkIn:'2026-10-07',checkOut:'2026-10-09'}],schedule.destinationDate,'destination'),false);
assert.equal(P.hasDestinationConflict([{stopId:'city',checkIn:'2026-10-07',checkOut:'2026-10-10'}],schedule.destinationDate,'destination'),true);
assert.equal(P.hasDestinationConflict([{stopId:'destination',checkIn:'2026-10-08',checkOut:'2026-10-10'}],schedule.destinationDate,'destination'),false);
""")

    def test_destination_policies_and_scheduled_optional_attractions(self):
        self.run_js("""
assert.equal(typeof P.isFixedStop,'function','fixed and required policies must be explicit');
const schedule={originId:'origin',destinationId:'destination',destinationDate:'2026-10-09'};
const policy={required:true,fixedDate:true,sameDayOrder:'before'};
assert.equal(P.isFixedStop({id:'destination'},schedule,policy),true);
assert.equal(P.isFixedStop({id:'destination'},schedule,{...policy,fixedDate:false}),false);
assert.equal(P.isRequiredStop({id:'destination'},schedule,policy),true);
assert.equal(P.isRequiredStop({id:'destination'},schedule,{...policy,required:false}),false);
assert.equal(P.isRequiredStop({id:'tour',schedule:'09/10 · 20h'},schedule,policy),false);
assert.equal(P.isRequiredStop({id:'tour',schedule:'09/10 · 20h',required:true},schedule,policy),true);
const origin={id:'origin'},destination={id:'destination'},city={id:'city',kind:'cidade'},tour={id:'tour',kind:'atracao',parentId:'destination'};
const date=s=>schedule.destinationDate,tours=s=>s===destination?[tour]:[],routed=new Set(['destination','city','tour']);
const plan=P.planRoute([city],origin,destination,date,tours,routed,policy,true);
assert.deepEqual(plan.routePoints.map(s=>s.id),['origin','destination','tour','city','origin']);
assert.deepEqual(plan.order.map(s=>s.id),['tour','city']);
assert.equal(plan.labels.get('tour'),'1a');
const after=P.planRoute([city],origin,destination,date,tours,routed,{...policy,sameDayOrder:'after'},true);
assert.deepEqual(after.routePoints.map(s=>s.id),['origin','city','destination','tour','origin']);
assert.equal(after.labels.get('tour'),'2a');
assert.equal(after.returnStart,2);
const optional=P.planRoute([city],origin,destination,date,tours,new Set(['city']),{...policy,required:false,fixedDate:false},false);
assert.deepEqual(optional.routePoints.map(s=>s.id),['origin','city','origin']);
assert.equal(optional.returnStart,0);
""")

    def test_canonical_policy_and_required_fields_are_validated(self):
        catalog=json.loads((ROOT/'data/pontos-de-parada.json').read_text())
        plan=json.loads((ROOT/'data/roteiro.json').read_text())
        self.assertIn('policies',plan,'business parameters belong in canonical JSON')
        self.assertEqual(plan['policies']['maxDrivingHoursPerDay'],8)
        data=assemble_data(catalog,plan)
        self.assertEqual(data['policies'],plan['policies'])
        vesperata=next(a for s in data['routeStops'] for a in s.get('attractions',[]) if a['name']=='Vesperata')
        self.assertTrue(vesperata['required'])
        optional=copy.deepcopy(plan)
        optional['selectedAttractions'][0]['required']=False
        optional_data=assemble_data(catalog,optional)
        self.assertFalse(next(a for s in optional_data['routeStops'] for a in s.get('attractions',[]) if a['name']=='Vesperata')['required'])
        for field,value in [('maxDrivingHoursPerDay',0),('maxDrivingHoursPerDay',True),('destination',{'required':'yes','fixedDate':True,'sameDayOrder':'before'}),('newStopDate',{'anchor':'catalog','offsetDays':1})]:
            with self.subTest(field=field),self.assertRaises(ValueError):
                invalid=copy.deepcopy(plan)
                invalid['policies'][field]=value
                assemble_data(catalog,invalid)
        invalid=copy.deepcopy(plan)
        invalid['selectedAttractions'][0]['required']='yes'
        with self.assertRaises(ValueError):
            assemble_data(catalog,invalid)

    def test_restaurant_year_is_data_driven_in_generator_and_ui(self):
        catalog=json.loads((ROOT/'data/pontos-de-parada.json').read_text())
        restaurants=[s for s in catalog['routeStops'] if s['kind']=='restaurante']
        self.assertIn('dish',restaurants[0],'dish schema must not encode the year in its key')
        self.assertEqual(restaurants[0]['dish']['year'],2026)
        for stop in restaurants:
            stop['dish']['year']=2027
        plan=json.loads((ROOT/'data/roteiro.json').read_text())
        assemble_data(catalog,plan)
        self.assertIn('Boa Lembrança 2027',render_markdown(catalog))
        page=(ROOT/'index.html').read_text()
        self.assertNotIn('dish2026',page)
        self.assertNotIn('Prato 2026',page)
        self.assertNotIn('BOA LEMBRANÇA 2026',page)
        self.assertIn('${s.dish.year}',page)

    def test_fixed_date_optional_destination_still_has_a_remove_control(self):
        page=(ROOT/'index.html').read_text()
        self.assertIn("else if(trip&&isFixed(s)&&!isRequired(s))",page,
                      'a fixed date must not make an optional destination mandatory')

    def test_required_attractions_need_selected_parent_and_cannot_be_catalog_policy(self):
        catalog=json.loads((ROOT/'data/pontos-de-parada.json').read_text())
        plan=json.loads((ROOT/'data/roteiro.json').read_text())
        plan['selectedAttractions'][1]['required']=True
        plan['visits']=[v for v in plan['visits'] if v['stopId']!='cordisburgo']
        with self.assertRaisesRegex(ValueError,'required.*parent'):
            assemble_data(catalog,plan)
        plan=json.loads((ROOT/'data/roteiro.json').read_text())
        catalog['routeStops'][0].setdefault('attractions',[])
        city=next(s for s in catalog['routeStops'] if s.get('attractions'))
        city['attractions'][0]['required']=True
        with self.assertRaisesRegex(ValueError,'catalog.*required'):
            assemble_data(catalog,plan)

    def test_readding_fixed_optional_destination_keeps_its_configured_date(self):
        import re
        page=(ROOT/'index.html').read_text()
        match=re.search(r'function ensureDate\(s\)\{[^\n]+',page)
        assert match is not None
        helper=match.group(0)
        self.run_js("""
const dates=new Map(),manual=[],fixedDates=new Map([['destination','2026-10-09']]);
const isFixed=s=>s.id==='destination',suggestDate=()=> '2026-10-12';
"""+helper+"""
assert.equal(ensureDate({id:'destination'}),'2026-10-09');
assert.equal(ensureDate({id:'city'}),'2026-10-12');
""")

    def test_visit_ordering_and_touch_reorder_preserve_dates(self):
        self.run_js("""
assert.equal(typeof P.orderVisits,'function','visit ordering belongs outside HTML');
const a={id:'a'},b={id:'b'},c={id:'c'},dates=new Map([['a','2026-10-07'],['b','2026-10-07'],['c','2026-10-11']]),manual=['a','b','c'];
const order=()=>P.orderVisits([c,b,a],s=>dates.get(s.id),manual);
assert.deepEqual(order().map(s=>s.id),['a','b','c']);
P.reorderVisit(order(),'b',-1,dates,manual);
assert.deepEqual(order().map(s=>s.id),['b','a','c']);
P.reorderVisit(order(),'a',1,dates,manual);
assert.equal(dates.get('a'),'2026-10-11');
assert.equal(dates.get('c'),'2026-10-07');
P.reorderVisit(order(),'b',-1,dates,manual);
assert.equal(dates.get('b'),'2026-10-07');
P.moveBefore(manual,'c','b');assert.deepEqual(manual,['c','b','a']);
P.moveBefore(manual,'c','missing');assert.deepEqual(manual,['b','a','c']);
""")


if __name__ == '__main__':
    unittest.main()
