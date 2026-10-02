import copy
import json
from pathlib import Path
import re
import subprocess
import unittest

from scripts.generate_route_data import assemble_data, validate

ROOT = Path(__file__).resolve().parents[1]


class CatalogMetadataTests(unittest.TestCase):
    def test_attraction_description_is_the_single_visit_text(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        data = assemble_data(catalog, plan)
        for stop in catalog['routeStops']:
            for attraction in stop.get('attractions', []):
                self.assertNotIn('guideBriefing', attraction)
                self.assertTrue(attraction['description'].strip())
        for value in (None, '', ' ', 1):
            invalid = copy.deepcopy(data)
            item = next(s for s in invalid['routeStops'] if s.get('attractions'))['attractions'][0]
            item['description'] = value
            with self.subTest(value=value), self.assertRaisesRegex(ValueError, 'description'):
                validate(invalid)
        invalid = copy.deepcopy(data)
        item = next(s for s in invalid['routeStops'] if s.get('attractions'))['attractions'][0]
        item['guideBriefing'] = 'Texto duplicado'
        with self.assertRaisesRegex(ValueError, 'without guideBriefing'):
            validate(invalid)

    def test_complementary_descriptions_keep_distinct_context(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        by_place = {(s['id'], a['name']): a['description']
                    for s in catalog['routeStops'] for a in s.get('attractions', [])}
        details = {
            ('diamantina', 'Casa da Glória e Passadiço da Glória'): ['dois casarões', 'Rua da Glória', 'UFMG', '20 minutos', 'religioso e educacional'],
            ('camposaltos', 'Santuário de Nossa Senhora Aparecida'): ['mirante', 'morro', '1951', 'ex-votos', 'outubro'],
            ('camposaltos', 'Estação Ferroviária de Campos Altos'): ['1910', 'armazém', 'carga', 'sem serviço de passageiros'],
            ('camposaltos', 'Oficina e exposição de Dito Leandro'): ['sucata metálica', 'animais', 'produção e exposição', 'visita guiada'],
            ('camposaltos', 'Cachoeira Olho do Sol'): ['Mutuca', 'poço', 'vegetação nativa', '14,3 km', 'estrada de terra'],
            ('camposaltos', 'Parque Estadual dos Campos Altos'): ['2004', '782,67 hectares', 'florestas, campos e cerrado', 'IEF', 'não confirma acesso turístico regular'],
        }
        for key, facts in details.items():
            for fact in facts:
                with self.subTest(place=key, fact=fact):
                    self.assertIn(fact, by_place[key])
        # A versão ampliada aparece uma única vez, inclusive na primeira frase.
        text = by_place[('canastra', 'Parque Nacional da Serra da Canastra')]
        self.assertEqual(text.count('Chapadões, campos de altitude'), 1)
        self.assertIn('fazendas produtoras', text)

    def test_popup_and_dialog_use_the_unified_attraction_description(self):
        page = (ROOT / 'index.html').read_text()
        helpers = re.search(r'function guideContent\(s\)\{.*?\n', page).group(0)
        helpers += re.search(r'function escapeCardText\(value\)\{.*?\n', page).group(0)
        helpers += re.search(r'function popupGuide\(s\)\{.*?\n', page).group(0)
        script = helpers + """
const assert=require('node:assert/strict');
const tour={kind:'atracao',description:'Descrição <completa>',guideBriefing:'Texto antigo'};
assert.equal(guideContent(tour),'Descrição <completa>');
assert.ok(popupGuide(tour).includes('Descrição &lt;completa&gt;'));
assert.ok(!popupGuide(tour).includes('Texto antigo'));
assert.equal(guideContent({kind:'cidade',guideBriefing:'Contexto da cidade'}),'Contexto da cidade');
assert.equal(popupGuide({kind:'atracao'}),'');
"""
        result = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('copy.textContent=guideContent(stop)', page)
        self.assertIn('if(guideContent(tour))', page)

    def test_validator_rejects_invalid_access_objects_and_legacy_fields(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        data = assemble_data(catalog, plan)
        for target in ('stop', 'attraction'):
            for value in (None, 'Sim', [], {},
                          {'effort': {}, 'accessibility': {}},
                          {'level': [], 'label': 'Teste', 'description': 'Teste'},
                          {'level': 'accessible', 'label': 'Teste', 'description': 'Teste'},
                          {'level': 'easy', 'label': '', 'description': 'Teste'},
                          {'level': 'unknown', 'label': 'Teste', 'description': 1}):
                invalid = copy.deepcopy(data)
                item = next(s for s in invalid['routeStops'] if s.get('attractions'))
                if target == 'attraction':
                    item = item['attractions'][0]
                item['access'] = value
                with self.subTest(target=target, value=value), self.assertRaisesRegex(ValueError, 'access'):
                    validate(invalid)
            for legacy in ('accessEffort', 'accessibility'):
                invalid = copy.deepcopy(data)
                item = next(s for s in invalid['routeStops'] if s.get('attractions'))
                if target == 'attraction':
                    item = item['attractions'][0]
                item[legacy] = {}
                with self.subTest(target=target, legacy=legacy), self.assertRaisesRegex(ValueError, 'inside access'):
                    validate(invalid)
        invalid = copy.deepcopy(data)
        attraction = next(s for s in invalid['routeStops'] if s.get('attractions'))['attractions'][0]
        del attraction['access']
        with self.assertRaisesRegex(ValueError, 'access'):
            validate(invalid)

    def test_access_rendering_keeps_description_and_event_note_without_inference(self):
        page = (ROOT / 'index.html').read_text()
        helpers = re.search(r'function accessSummaryMarkup\(s\)\{.*?\n\}', page, re.S).group(0)
        helpers += re.search(r'function accessDetail\(value\)\{.*?\n', page).group(0)
        helpers += re.search(r'function accessMeta\(s\)\{.*?\n', page).group(0)
        helpers += re.search(r'function accessDetailMarkup\(s\)\{.*?\n', page).group(0)
        helpers += re.search(r'function routeableAttractionInfo\(s\)\{.*?\n', page).group(0)
        script = "const schedule={originId:'home'},escapeCardText=s=>s,visitRuleMarkup=()=>'';" + helpers + """
const assert=require('node:assert/strict');
const s={kind:'atracao',access:{level:'unknown',label:'Embarque a combinar',description:'Há rampas; confirme o embarque.'},scheduleNote:'Nota do evento'};
assert.ok(accessSummaryMarkup(s).includes('Acesso: Embarque a combinar'));
assert.ok(accessSummaryMarkup(s).includes('title="Há rampas; confirme o embarque."'));
assert.ok(accessSummaryMarkup(s).includes('access-summary unknown'));
assert.equal(accessMeta(s).text,'Há rampas; confirme o embarque.');
assert.equal(accessMeta(s).note,'Nota do evento');
const detail=routeableAttractionInfo(s);
assert.ok(detail.includes('Há rampas; confirme o embarque.'));
assert.ok(detail.includes('Nota do evento'));
assert.ok(!detail.includes('Acessibilidade:'));
assert.equal(accessSummaryMarkup({id:'home',access:s.access}),'');
assert.equal(accessSummaryMarkup({kind:'cidade'}),'');
assert.equal(accessMeta({}).text,'');
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

    def test_contextual_access_preserves_resources_and_removes_unrelated_notes(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        by_place = {(s['id'], a['name']): a['access']
                    for s in catalog['routeStops'] for a in s.get('attractions', [])}
        details = {
            ('ouropreto', 'Museu da Inconfidência'): ['rampas', 'corrimãos', 'cadeira de rodas', 'sanitário adaptado', 'ladeiras'],
            ('diamantina', 'Casa de JK'): ['rota externa', 'rampa', 'sanitário acessível', 'desníveis'],
            ('tabuleiro', 'Cachoeira do Tabuleiro'): ['trilha', 'restrições', 'idosos', 'pessoas com deficiência'],
            ('cordisburgo', 'Museu Casa Guimarães Rosa'): ['rampa móvel', 'terceira idade'],
            ('brumadinho', 'Instituto Inhotim'): ['cadeira de rodas', 'transporte interno'],
            ('saojoaodelrei', 'Maria Fumaça São João del-Rei–Tiradentes'): ['vagões adaptados', 'rampas', 'reserva'],
            ('catasaltas', 'Observação do lobo-guará · Caraça'): ['noturna', 'longa', 'não garantida'],
            ('peiro', 'Museu dos Dinossauros / Complexo Cultural e Científico de Peirópolis'): ['estacionamento', 'entrada', 'sanitário', 'áreas externas'],
            ('camposaltos', 'Cachoeira Olho do Sol'): ['trilhas', 'rochas', 'desníveis', 'estrada', 'água'],
        }
        for key, facts in details.items():
            for fact in facts:
                with self.subTest(place=key, fact=fact):
                    self.assertIn(fact, by_place[key]['description'])
        for key in [('capitolio', 'Cânions de Furnas'), ('capitolio', 'Passeio pelo Lago de Furnas')]:
            self.assertIn('embarque', by_place[key]['description'])
            self.assertNotIn('trilha', by_place[key]['description'])
        for key in [('canastra', 'Queijarias de Canastra'), ('mariana', 'Praça Minas Gerais'),
                    ('serro', 'Cachoeira da Grota Seca'), ('diamantina', 'Cachoeira da Sentinela')]:
            self.assertEqual(by_place[key]['level'], 'unknown')
        self.assertNotIn('Casca d’Anta', by_place[('canastra', 'Queijarias de Canastra')]['description'])
        self.assertNotIn('Mina da Passagem', by_place[('mariana', 'Catedral da Sé')]['description'])
        self.assertNotIn('centro histórico', by_place[('diamantina', 'Cachoeira da Sentinela')]['description'])
        # Recursos de mobilidade não estabelecem um nível de esforço.
        self.assertEqual(by_place[('cordisburgo', 'Museu Casa Guimarães Rosa')]['level'], 'unknown')
        self.assertEqual(by_place[('ouropreto', 'Museu da Inconfidência')]['level'], 'moderate')

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
