import json
import re
import shutil
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = (ROOT / "index.html").read_text(encoding="utf-8")
FINAL_ROUTING = PAGE.rsplit("// Datas individuais, estadias sugeridas e reordenação dos cartões.", 1)[1]


def block(name):
    match = re.search(r"function " + name + r"\(.*?^\s*\}", FINAL_ROUTING, re.S | re.M)
    assert match, f"{name} not found"
    return match.group(0)


class LegTravelTimeTests(unittest.TestCase):
    def test_legs_are_grouped_by_arrival_city_intra_city_and_return(self):
        if not shutil.which("node"):
            self.skipTest("Node.js is required for the leg-grouping runtime test")
        city_of = re.search(r"const cityOf=.*?;\n", FINAL_ROUTING).group(0)
        script = "const origin={id:'m'};" + city_of + block("travelText") + block("legsByCity") + """
const m={id:'m'},a={id:'a-poi-1',kind:'atracao',parentId:'a'},b={id:'a-poi-2',kind:'atracao',parentId:'a'},d={id:'d'};
const r=legsByCity([m,a,b,d,m],[{duration:3600,distance:100000},{duration:60,distance:300},{duration:5400,distance:120000},{duration:9000,distance:200000}]);
console.log(JSON.stringify({arrivals:[...r.arrival.keys()],intra:r.intra.get('a'),toA:r.arrival.get('a').from.id,text:[travelText(3600,100000),travelText(5400,9500),travelText(1500,300)]}));
"""
        result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
        self.assertEqual(
            json.loads(result.stdout),
            {
                "arrivals": ["a", "d", "return"],
                "intra": {"duration": 60, "distance": 300},
                "toA": "m",
                "text": ["1 h · 100 km", "1 h 30 min · 9,5 km", "25 min · 0,3 km"],
            },
        )

    def test_connectors_render_between_cards_and_before_the_return(self):
        self.assertIn("leg=s===origin?null:routeLegs?.arrival.get(s.id);if(leg)group.appendChild(legConnector(leg))", FINAL_ROUTING)
        self.assertIn("const homeLeg=routeLegs?.arrival.get('return');if(homeLeg)retGroup.appendChild(legConnector(homeLeg))", FINAL_ROUTING)
        self.assertIn("https://www.google.com/maps/dir/?api=1&origin=", block("legConnector"))

    def test_stale_leg_times_are_cleared_while_recalculating_or_after_failure(self):
        draw = FINAL_ROUTING[FINAL_ROUTING.index("window.drawLine=async function(){"):]
        self.assertLess(draw.index("routeLegs=routeLegLinks(stopsInOrder);"), draw.index("await fetch("))
        self.assertIn("catch{if(request===routeRequest){returnDriveHours=null;routeLegs=routeLegLinks(stopsInOrder);", draw)


if __name__ == "__main__":
    unittest.main()
