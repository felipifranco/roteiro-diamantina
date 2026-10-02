import copy
import hashlib
import json
from pathlib import Path
import re
import subprocess
import unittest

from scripts.generate_route_data import assemble_data, validate

ROOT = Path(__file__).resolve().parents[1]


class CatalogMetadataTests(unittest.TestCase):
    def test_accessibility_has_valid_structured_status_and_full_description(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        data = assemble_data(catalog, plan)
        for stop in catalog['routeStops']:
            for item in stop.get('attractions', []):
                access = item.get('accessibility')
                self.assertIsInstance(access, dict)
                self.assertIn(access['status'], {'accessible', 'conditional', 'restricted', 'unknown'})
                self.assertIsInstance(access['description'], str)
                self.assertTrue(access['description'].strip())
        for target in ('stop', 'attraction'):
            for value in ('Sim', {}, {'status': 'wrong', 'description': 'Sim'},
                          {'status': [], 'description': 'Sim'},
                          {'status': 'accessible', 'description': ''},
                          {'status': 'unknown', 'description': 1}):
                invalid = copy.deepcopy(data)
                item = next(s for s in invalid['routeStops'] if s.get('attractions'))
                if target == 'attraction':
                    item = item['attractions'][0]
                item['accessibility'] = value
                with self.subTest(target=target, value=value), self.assertRaisesRegex(ValueError, 'accessibility'):
                    validate(invalid)

    def test_accessibility_rendering_uses_status_not_description_words(self):
        page = (ROOT / 'index.html').read_text()
        helpers = re.search(r'function accessibilitySummaryMarkup\(s\)\{.*?\n\}', page, re.S).group(0)
        helpers += re.search(r'function accessDetail\(value\)\{.*?\n', page).group(0)
        helpers += re.search(r'function accessMeta\(s\)\{.*?\n', page).group(0)
        script = "const schedule={originId:'home'},escapeCardText=s=>s;" + helpers + """
const assert=require('node:assert/strict');
const labels={accessible:'Sim',conditional:'Com condições',restricted:'Restrita',unknown:'A confirmar'};
for(const [status,label] of Object.entries(labels)){
 const s={kind:'atracao',accessibility:{status,description:'Sim — descrição integral'}};
 assert.ok(accessibilitySummaryMarkup(s).includes(`Acessibilidade: ${label}`));
 assert.ok(accessibilitySummaryMarkup(s).includes('title="Sim — descrição integral"'));
 assert.equal(accessMeta(s).text,'Sim — descrição integral');
}
assert.equal(accessMeta({accessibility:{status:'unknown',description:'Não confirmado — há meia-entrada 60+, mas isso não comprova acessibilidade física'}}).text,'Não confirmado — há meia-entrada 60+, mas isso não comprova acessibilidade física');
assert.equal(accessMeta({scheduleNote:'Nota do evento',accessibility:{status:'unknown',description:'Descrição'}}).text,'Nota do evento');
assert.equal(accessibilitySummaryMarkup({id:'home',kind:'cidade'}),'');
assert.equal(accessibilitySummaryMarkup({kind:'cidade'}),'');
assert.ok(accessibilitySummaryMarkup({kind:'atracao'}).includes('A confirmar'));
"""
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_route_date_keeps_explicit_parent_and_fixed_fallbacks_in_planning_module(self):
        page = (ROOT / 'index.html').read_text()
        helper = re.search(r'const routeDate=.*?;\n', page).group(0)
        script = """
const assert=require('node:assert/strict');
const TripCalendar=require('./assets/trip-calendar.js');
const dates=new Map([['city','2026-10-08'],['explicit','2026-10-10'],['empty','']]);
const fixedDates=new Map([['city','2026-10-07'],['fixed','2026-10-09']]);
""" + helper + """
const cases=[
 [{id:'explicit',kind:'atracao',parentId:'city'},'2026-10-10'],
 [{id:'tour',kind:'atracao',parentId:'city'},'2026-10-08'],
 [{id:'tour',kind:'atracao',parentId:'fixed'},'2026-10-09'],
 [{id:'empty',kind:'atracao',parentId:'city'},'2026-10-08'],
 [{id:'city',kind:'cidade'},'2026-10-08'],
 [{id:'fixed',kind:'cidade'},'2026-10-09'],
 [{id:'missing',kind:'cidade'},undefined],
 [{id:'missing',kind:'atracao',parentId:'missing'},undefined],
 [{id:'fixed',kind:'restaurante',parentId:'city'},'2026-10-09'],
];
for(const [stop,expected] of cases){
 assert.equal(TripCalendar.routeDate(stop,dates,fixedDates),expected);
 assert.equal(routeDate(stop),expected);
}
assert.deepEqual([...dates],[['city','2026-10-08'],['explicit','2026-10-10'],['empty','']]);
"""
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('const routeDate=s=>TripCalendar.routeDate(s,dates,fixedDates)', page)

    def test_migrated_accessibility_preserves_original_descriptions_and_conservative_meaning(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        records = [[s['id'], a['name'], a['accessibility']['description']]
                   for s in catalog['routeStops'] for a in s.get('attractions', [])]
        # Fingerprint of every original (stop ID, attraction name, description), before migration.
        digest = hashlib.sha256(json.dumps(records, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
        self.assertEqual(digest, '189dfaeefaaf7b8a21f9549e374035235739169e962f6d2c3535e1301d0e9dd4')
        reviewed = {
            'Sim — rampas, corrimãos, cadeira de rodas e sanitário adaptado': 'accessible',
            'Sim — há rota externa, acesso interno por rampa e sanitário acessível': 'accessible',
            'Sim — possui rampa móvel e atividades para terceira idade': 'accessible',
            'Sim — cadeira de rodas disponível e transporte interno opcional': 'accessible',
            'Sim, condicionado ao embarque/operador': 'conditional',
            'Com ressalvas — percurso em gruta exige caminhada; confirmar condições individuais': 'conditional',
            'Sim — vagões adaptados e rampas; avisar na reserva': 'conditional',
            'Sim, mas espera é noturna e pode ser longa': 'conditional',
            'Sim — informações turísticas registram acessibilidade em estacionamento, entrada e sanitário; confirmar condições das áreas externas': 'conditional',
            'Não/restrito para dificuldade de mobilidade; norma cita idosos e PCD': 'restricted',
        }
        for s in catalog['routeStops']:
            for a in s.get('attractions', []):
                access = a['accessibility']
                self.assertEqual(access['status'], reviewed.get(access['description'], 'unknown'), a['name'])

    def test_stays_consult_eligibility_instead_of_kind(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        city = next(s for s in catalog['routeStops'] if s['id'] == plan['stays'][0]['stopId'])
        city['canHostStay'] = False
        with self.assertRaisesRegex(ValueError, 'canHostStay'):
            assemble_data(catalog, plan)
        restaurant = next(s for s in catalog['routeStops'] if s['kind'] == 'restaurante')
        restaurant['canHostStay'] = True
        plan['stays'] = [{'stopId': restaurant['id'], 'checkIn': '2026-10-07', 'checkOut': '2026-10-08'}]
        data = assemble_data(catalog, plan)
        self.assertEqual(data['schedule']['stays'], plan['stays'])

    def test_stay_eligibility_is_explicit_and_validated(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        data = assemble_data(catalog, plan)
        for stop in catalog['routeStops']:
            self.assertIs(stop.get('canHostStay'), stop['kind'] in {'cidade', 'regiao'})
            for attraction in stop.get('attractions', []):
                self.assertNotIn('canHostStay', attraction)
        for value in (None, 1, 'true', 'false', {}, []):
            invalid = copy.deepcopy(data)
            invalid['routeStops'][0]['canHostStay'] = value
            with self.subTest(value=value), self.assertRaisesRegex(ValueError, 'canHostStay'):
                validate(invalid)
        invalid = copy.deepcopy(data)
        del invalid['routeStops'][0]['canHostStay']
        with self.assertRaisesRegex(ValueError, 'canHostStay'):
            validate(invalid)
        page = (ROOT / 'index.html').read_text()
        self.assertIn('stops.filter(s=>s.canHostStay)', page)


if __name__ == '__main__':
    unittest.main()
