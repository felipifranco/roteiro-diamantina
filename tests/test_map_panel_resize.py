import pathlib
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class MapPanelResizeTests(unittest.TestCase):
    def test_pointer_keyboard_limits_and_resize_preserve_desktop(self):
        source = ROOT / 'assets/map-panel-resize.js'
        self.assertTrue(source.exists(), 'Falta o ajuste de altura do mapa')
        script = r'''
const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
let height=844,mobile=true,style={},invalidations=0;
const events={},attrs={},handle={offsetHeight:24,setAttribute(k,v){attrs[k]=v},addEventListener(k,f){events[k]=f},setPointerCapture(){},releasePointerCapture(){}};
const app={clientHeight:height,style:{setProperty(k,v){style[k]=v}},getBoundingClientRect(){return {top:0,height}},querySelector(s){return s==='.map-wrap'?wrap:handle}};
const wrap={getBoundingClientRect(){return {height:186}}};
const media={get matches(){return mobile},addEventListener(k,f){this[k]=f}};
const listeners={},window={document:{querySelector(){return app}},matchMedia(){return media},addEventListener(k,f){listeners[k]=f}};
vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),{window,Math});
window.MapPanelResize.attach({invalidateSize(){invalidations++}});
function e(y,id=1){return {clientY:y,pointerId:id,button:0,preventDefault(){}}}
const initial=parseFloat(style['--mobile-map-height']);
events.pointerdown(e(initial+12));events.pointermove(e(initial+212));
assert.equal(parseFloat(style['--mobile-map-height']),initial+200);
events.pointermove(e(5000));assert.equal(parseFloat(style['--mobile-map-height']),660);
events.pointercancel(e(5000));events.pointermove(e(0));assert.equal(parseFloat(style['--mobile-map-height']),660);
events.keydown({key:'Home',preventDefault(){}});assert.equal(parseFloat(style['--mobile-map-height']),150);
events.keydown({key:'ArrowDown',preventDefault(){}});assert.equal(parseFloat(style['--mobile-map-height']),182);
events.keydown({key:'End',preventDefault(){}});assert.equal(parseFloat(style['--mobile-map-height']),660);
height=600;app.clientHeight=600;listeners.resize();assert.ok(parseFloat(style['--mobile-map-height'])<=416);
mobile=false;const old=style['--mobile-map-height'];events.pointerdown(e(100));events.pointermove(e(400));assert.equal(style['--mobile-map-height'],old);
assert.equal(attrs['aria-valuemax'],'416');assert.ok(invalidations>0);
'''
        result = subprocess.run(['node', '-e', script, str(source)], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_page_mounts_touch_separator_only_for_mobile(self):
        html = (ROOT / 'index.html').read_text()
        self.assertIn('./assets/map-panel-resize.js', html)
        self.assertIn('MapPanelResize.attach(map)', html)
        self.assertIn('class="map-panel-handle"', html)
        self.assertIn('role="separator"', html)
        self.assertIn('aria-orientation="horizontal"', html)
        self.assertIn('touch-action:none', html)
        self.assertIn('--mobile-map-height', html)
