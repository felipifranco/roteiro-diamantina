import json
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class VisitedChecklistTests(unittest.TestCase):
    def test_user_marked_visits_are_seeded_and_survive_reload(self):
        script = r'''
const assert = require('node:assert/strict');
const checklist = require('./assets/visited-checklist.js');
const values = new Map();
const storage = {getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value)};
const item = {name:'Igreja de Santa Efigênia', parentId:'ouropreto', visitLinks:[{url:'https://www.ouropreto.mg.gov.br/turismo/atrativo-item/624'}]};
const duplicate = {name:'Igreja de Santa Efigênia', parentId:'diamantina', visitLinks:[{url:'https://www.ouropreto.mg.gov.br/turismo/atrativo-item/624'}]};
let state = checklist.create(storage, [item]);
assert.equal(state.isVisited(item), true);
assert.equal(state.isVisited(duplicate), false);
state.setVisited(item, false);
state = checklist.create(storage, [item]);
assert.equal(state.isVisited(item), false);
state.setVisited(item, true);
state = checklist.create(storage, [item]);
assert.equal(state.isVisited(item), true);
'''
        result = subprocess.run(["node", "-e", script], cwd=ROOT, text=True, capture_output=True)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_trip_plan_records_the_four_completed_ouro_preto_visits(self):
        plan = json.loads((ROOT / "data/roteiro.json").read_text(encoding="utf-8"))
        visited = {(item["stopId"], item["name"], item["date"]) for item in plan["visitedAttractions"]}
        self.assertEqual(visited, {
            ("ouropreto", "Igreja de São Francisco de Assis", "2026-10-13"),
            ("ouropreto", "Igreja de Nossa Senhora das Mercês e Perdões", "2026-10-13"),
            ("ouropreto", "Igreja de Santa Efigênia", "2026-10-13"),
            ("ouropreto", "Igreja Nossa Senhora da Conceição", "2026-10-13"),
        })

    def test_generated_browser_data_includes_the_trip_plan_visits(self):
        plan = json.loads((ROOT / "data/roteiro.json").read_text(encoding="utf-8"))
        generated = (ROOT / "data/route-data.generated.js").read_text(encoding="utf-8")
        payload = json.loads(generated.split("window.ROTEIRO_DATA = ", 1)[1].removesuffix(";\n"))
        self.assertEqual(payload["visitedAttractions"], plan["visitedAttractions"])

    def test_itinerary_rows_render_a_distinct_visit_checkbox(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("visited-check", page)
        self.assertIn("setVisited", page)
        self.assertIn("visitedAttractions", page)


if __name__ == "__main__":
    unittest.main()
