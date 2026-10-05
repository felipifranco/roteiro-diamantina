import json
import pathlib
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class FuelMapTests(unittest.TestCase):
    def test_diamantina_bh_catalog_has_six_unique_roadside_stations(self):
        data = json.loads((ROOT / 'data/postos-combustivel.json').read_text())
        route = next(r for r in data['routes'] if r['id'] == 'diamantina-bh-rodovias-mapa')
        self.assertEqual(len(set(route['stationIds'])), 6)
        self.assertEqual(len({s['id'] for s in data['stations']}), len(data['stations']))
        self.assertEqual(sum(s['id'] == 'posto-santana-ii' for s in data['stations']), 1)
        for station_id in route['stationIds']:
            station = next(s for s in data['stations'] if s['id'] == station_id)
            self.assertTrue(station['roadside'])
            self.assertEqual(station['locationAccuracy'], 'exact')
            self.assertIn(route['id'], station['routeIds'])
            self.assertGreaterEqual(len(station['sources']), 2)
        geometry = json.loads((ROOT / route['geometryFile'].removeprefix('./')).read_text())
        self.assertEqual(geometry['geometry']['type'], 'LineString')

    def test_fuel_layer_toggle_and_navigation_do_not_change_the_trip(self):
        self.assertTrue((ROOT / 'assets/map-fuel.js').exists(), 'Falta a camada independente de postos')
        script = r'''
const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const clicks={},attributes={},created=[];
const button={setAttribute(k,v){attributes[k]=v},addEventListener(k,f){clicks[k]=f}};
const box={append(){}};
const layer={active:false,addTo(){this.active=true;return this},remove(){this.active=false}};
const map={setView(){throw Error('Não recentrar automaticamente')},once(){}};
const L={layerGroup(){return layer},control(){return{addTo(){this.onAdd()}}},DomUtil:{create(){return box}},DomEvent:{disableClickPropagation(){},disableScrollPropagation(){}},divIcon(x){return x},marker(coords){const m={coords,addTo(){created.push(this);return this},bindPopup(html,options){this.html=html;this.options=options;return this},bindTooltip(){return this},openPopup(){}};return m}};
const document={createElement(){return button}};
const stations=[{id:'fixture-roadside-fuel',name:'Posto & teste',lat:-19.1,lon:-45.2,road:'BR-262',municipality:'Cidade',locationAccuracy:'exact',roadside:true,verifiedAt:'2026-10-05',verificationNote:'Km não confirmado',routeName:'Diamantina–Belo Horizonte',sources:[{url:'https://example.com/source',label:'Fonte de teste'}]}];
const data={route:{name:'Rota direta de teste'},stations};
const window={L,document,location:{hash:''},addEventListener(){},fetch:async()=>({ok:true,json:async()=>data})};
vm.runInNewContext(fs.readFileSync('assets/map-fuel.js','utf8'),{window,URL,console});
(async()=>{
 await window.MapFuel.attach(map);
 assert.equal(created.length,1);assert.equal(layer.active,true);assert.equal(attributes['aria-pressed'],'true');
 assert.equal(created[0].options.autoPan,false);
 const html=created[0].html;
 assert.ok(html.includes('Posto &amp; teste'));assert.ok(html.includes('BR-262'));assert.ok(html.includes('Diamantina–Belo Horizonte'));assert.ok(html.includes('Km não confirmado'));
 const href=html.match(/href="(https:\/\/waze.com[^\"]+)"/)[1].replaceAll('&amp;','&');
 const url=new URL(href);assert.equal(url.searchParams.get('ll'),'-19.1,-45.2');assert.equal(url.searchParams.get('navigate'),'yes');assert.equal(url.searchParams.has('origin'),false);
 clicks.click();assert.equal(layer.active,false);assert.equal(attributes['aria-pressed'],'false');
 clicks.click();assert.equal(layer.active,true);assert.equal(attributes['aria-pressed'],'true');
})().catch(e=>{console.error(e);process.exitCode=1});
'''
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
