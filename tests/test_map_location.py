import pathlib
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class MapLocationTests(unittest.TestCase):
    def test_location_is_opt_in_updates_and_stops_without_changing_route(self):
        source = ROOT / 'assets/map-location.js'
        self.assertTrue(source.exists(), 'Controle Minha localização ainda não existe')
        script = r'''
const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const nodes=[]; let success,error,watchCalls=0,cleared=[],layers=[],views=[];
function el(tag){const e={tag,children:[],hidden:false,textContent:'',attrs:{},append(...xs){this.children.push(...xs)},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this[k]=f}};nodes.push(e);return e}
function layer(pos,options){const l={pos,options,addTo(){layers.push(this);return this},setLatLng(p){this.pos=p;return this},setRadius(r){this.options.radius=r;return this},bindTooltip(){return this},remove(){layers=layers.filter(x=>x!==this)}};return l}
const map={setView(p,z){views.push([p,z]);return this},getZoom(){return 7},on(){}};
const geo={watchPosition(s,e,o){watchCalls++;success=s;error=e;assert.equal(o.enableHighAccuracy,true);return 0},clearWatch(id){cleared.push(id)}};
const window={L:{control(){return {addTo(m){this.onAdd(m);return this}}},DomUtil:{create:()=>el('div')},DomEvent:{disableClickPropagation(){},disableScrollPropagation(){}},circle:layer,circleMarker:layer},navigator:{geolocation:geo},document:{createElement:el},addEventListener(){}};
vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),{window,Number,Math});
window.MapLocation.attach(map);
const locate=nodes.find(n=>n.attrs['aria-label']==='Minha localização'),stop=nodes.find(n=>n.attrs['aria-label']==='Desativar localização');
assert.ok(locate);assert.ok(stop);assert.equal(watchCalls,0);
locate.click();assert.equal(watchCalls,1);
success({coords:{latitude:-19.92,longitude:-43.94,accuracy:30}});
assert.equal(layers.length,2);assert.equal(views.length,1);
success({coords:{latitude:-19.93,longitude:-43.95,accuracy:15}});
assert.equal(layers.length,2);assert.equal(views.length,1,'GPS não deve impedir explorar o mapa');
locate.click();assert.equal(views.length,2);assert.equal(watchCalls,1);
stop.click();assert.equal(cleared[0],0);assert.equal(layers.length,0);
success({coords:{latitude:-19.94,longitude:-43.96,accuracy:10}});assert.equal(layers.length,0,'Callback antigo deve ser ignorado');
locate.click();error({code:1});assert.equal(layers.length,0);assert.ok(nodes.some(n=>n.textContent.includes('Permita')));
locate.click();error({code:3});assert.ok(nodes.some(n=>n.textContent.includes('demorou')));
console.log('GPS opt-in, atualização, recentralização, parada e erros: OK');
'''
        result = subprocess.run(['node', '-e', script, str(source)], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_page_mounts_location_control(self):
        html = (ROOT / 'index.html').read_text()
        self.assertIn('./assets/map-location.js', html)
        self.assertIn('MapLocation.attach(map)', html)
