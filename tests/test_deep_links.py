import json
import re
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class DeepLinkTests(unittest.TestCase):
    def script(self):
        html = (ROOT / 'index.html').read_text()
        match = re.search(r'<script id="route-deep-links">(.*?)</script>', html, re.S)
        self.assertIsNotNone(match, 'the page must handle direct links to route points')
        assert match is not None
        return match.group(1)

    def run_link(self, fragment, rerender=False):
        script = self.script()
        harness = r'''
const vm = require('node:vm');
const state = {opened:[], revealed:[], expanded:false};
const point = {id:'congonhas', kind:'cidade'};
const toggle = {getAttribute:()=>String(state.expanded), click:()=>{state.expanded=true;}};
const card = {closest:()=>card, querySelector:()=>toggle};
const context = {
  location:{hash:HASH}, routeStops:[point], markers:{congonhas:{}},
  markMapRouteCard:()=>{state.highlighted=true;return card;},
  revealMapSelection:s=>state.revealed.push(s.id),
  moveMapToStop:s=>state.opened.push(s.id),
  map:{on:()=>{}}, keepPopupVisible:()=>{state.popupVisible=true;},
  window:{addEventListener:(name,fn)=>{state.listener=name;}},
};
vm.runInNewContext(SCRIPT,context);
if(RERENDER){
  state.highlighted=false;
  context.markers.congonhas.isPopupOpen=()=>true;
  context.markers.congonhas.getPopup=()=>({});
  context.window.refreshRouteDeepLink?.();
}
console.log(JSON.stringify(state));
'''.replace('HASH', json.dumps(fragment)).replace('SCRIPT', json.dumps(script)).replace('RERENDER', json.dumps(rerender))
        output = subprocess.run(['node', '-e', harness], capture_output=True, text=True, check=True)
        return json.loads(output.stdout)

    def test_city_link_opens_popup_and_expands_tours(self):
        state = self.run_link('#congonhas')
        self.assertEqual(state['opened'], ['congonhas'])
        self.assertEqual(state['revealed'], ['congonhas'])
        self.assertTrue(state['expanded'])
        self.assertEqual(state['listener'], 'hashchange')

    def test_unknown_empty_and_malformed_links_are_ignored(self):
        for fragment in ['', '#unknown', '#%E0%A4%A', '#<script>']:
            with self.subTest(fragment=fragment):
                state = self.run_link(fragment)
                self.assertEqual(state['opened'], [])
                self.assertFalse(state['expanded'])

    def test_highlight_survives_async_route_list_render(self):
        state = self.run_link('#congonhas', rerender=True)
        self.assertTrue(state['highlighted'])
        self.assertTrue(state['popupVisible'])
