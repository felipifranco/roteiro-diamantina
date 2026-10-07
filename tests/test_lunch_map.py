import pathlib
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class LunchMapTests(unittest.TestCase):
    def test_lunch_pins_have_navigation_without_changing_route(self):
        self.assertTrue((ROOT / 'assets/map-lunch.js').exists(), 'Falta a camada de almoço')
        script = r'''
const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const markers={},L={layerGroup(){return{addTo(){return this}}},divIcon(x){return x},marker(coords,options){return{coords,options,addTo(){return this},bindPopup(html,popupOptions){this.html=html;this.popupOptions=popupOptions;return this},bindTooltip(){return this},getLatLng(){return coords},openPopup(){}}}};
const data=JSON.parse(fs.readFileSync('data/locais-almoco.json','utf8'));
const window={L,location:{hash:''},addEventListener(){},fetch:async()=>({ok:true,json:async()=>data})};
const map={setView(){throw Error('Não recentrar ao carregar')}};
vm.runInNewContext(fs.readFileSync('assets/map-lunch.js','utf8'),{window,console});
(async()=>{const result=await window.MapLunch.attach(map);assert.equal(Object.keys(result.markers).length,3);for(const s of data.places){const m=result.markers[s.id];assert.ok(m.html.includes(s.name));assert.ok(m.html.includes('waze.com/ul?ll='));assert.ok(m.html.includes('navigate=yes'));assert.ok(m.html.includes('Horário publicado'));assert.equal(m.popupOptions.autoPan,false)}})().catch(e=>{console.error(e);process.exitCode=1});
'''
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
