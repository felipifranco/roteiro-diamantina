import pathlib
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class WazeNavigationTests(unittest.TestCase):
    def test_popups_open_waze_to_destination_without_fixed_origin(self):
        html = (ROOT / 'index.html').read_text()
        self.assertIn('function wazeNavigationMarkup', html, 'Falta o link do Waze')
        script = r'''
const assert=require('node:assert/strict'),fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const schedule={stays:[]},stops=[];
const escapeCardText=v=>String(v||'').replaceAll('&','&amp;').replaceAll('"','&quot;');
const placeLabel=()=>'',popupGuide=()=>'',visitRuleMarkup=()=>'',accessDetailMarkup=()=>'',tourCardMeta=()=>'',routeableAttractionInfo=()=>'',mapSearchUrl=()=> 'https://www.google.com/maps/search/test';
eval(html.slice(html.indexOf('function hotelReservationMarkup'),html.indexOf('function effortFor')));
for(const kind of ['cidade','atracao','hospedagem','restaurante']){
 const s={id:'destino',name:'Destino',kind,lat:-19.9215025,lon:-43.9370989,locationAccuracy:'exact',sights:[],address:'Endereço',url:'https://example.com',dish:{image:'',name:'',credit:'',description:'',url:''}};
 const out=popup(s);
 const links=[...out.matchAll(/href="([^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&'));
 const waze=links.filter(h=>h.startsWith('https://waze.com/ul?'));
 assert.equal(waze.length,1,kind+' deve ter um link Waze');
 const url=new URL(waze[0]);
 assert.equal(url.searchParams.get('ll'),'-19.9215025,-43.9370989');
 assert.equal(url.searchParams.get('navigate'),'yes');
 assert.equal(url.searchParams.has('origin'),false);
 assert.equal(url.searchParams.has('from'),false);
 assert.ok(links.some(h=>h.startsWith('https://www.google.com/maps/dir/')),'Google Maps preservado');
}
const approximate={kind:'atracao',name:'Passeio',parent:'Cidade',lat:-20,lon:-44,locationAccuracy:'city-center',mapQuery:'Passeio & passeio Cidade MG'};
const out=wazeNavigationMarkup(approximate);
const url=new URL(out.match(/href="([^"]+)"/)[1].replaceAll('&amp;','&'));
assert.equal(url.searchParams.has('ll'),false,'Não navegar para centro da cidade como se fosse o passeio');
assert.equal(url.searchParams.get('q'),'Passeio & passeio Cidade MG');
assert.ok(out.includes('Buscar no Waze'));
const missing=wazeNavigationMarkup({name:'Local sem coordenadas',city:'Cidade'});
assert.ok(missing.includes('q='));assert.ok(!missing.includes('ll='));
'''
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
