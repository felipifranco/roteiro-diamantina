import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class NoChildSpecificUiCopyTests(unittest.TestCase):
    def test_origin_note_is_not_mislabeled_as_stay_duration(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("s.id===origin.id?time", page)
        self.assertIn("s.kind==='atracao'?`Tempo estimado de visita: ${time}`", page)
        self.assertIn("`Estadia: ${time}`", page)
        self.assertIn("if(note.textContent)focus.appendChild(note)", page)

    def test_cards_are_compact_and_popups_keep_unknown_rules(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("`Mínimo ${age.minimumAge} anos`", page)
        self.assertNotIn("1 ano não entra", page)
        self.assertIn("knownAge=age.status==='livre'||age.status==='idade_minima'", page)
        self.assertIn("function visitRuleMarkup(s,compact=false)", page)
        self.assertIn("ageSummaryMarkup(tour)", page)
        self.assertIn("rules.innerHTML=ageSummaryMarkup(s)", page)
        self.assertIn("${visitRuleMarkup(s)}", page)
        self.assertIn("Regra oficial ↗", page)

    def test_tour_cards_show_age_while_popups_keep_ticket_details(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        tour_row = page.split("function tourRow(city,tour,editable,plan,day){", 1)[1].split("// Tempo e distância", 1)[0]
        self.assertIn("ageSummaryMarkup(tour)", tour_row)
        self.assertNotIn("visitRuleMarkup(tour,true)", tour_row)
        self.assertIn("${visitRuleMarkup(s)}", page)
        self.assertIn("${ticket.url?`<span><a", page)
        self.assertIn("Ingresso/agendamento não confirmado", page)


if __name__ == "__main__":
    unittest.main()
