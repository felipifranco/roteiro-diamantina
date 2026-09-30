import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class NoChildSpecificUiCopyTests(unittest.TestCase):
    def test_origin_note_is_not_mislabeled_as_stay_duration(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("s.id===origin.id?durationLabel(s)", page)
        self.assertIn("s.kind==='atracao'?`Tempo estimado de visita: ${durationLabel(s)}`", page)
        self.assertIn("`Estadia: ${durationLabel(s)}`", page)

    def test_interface_only_shows_confirmed_age_rules(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("1 ano não entra", page)
        self.assertIn("knownAge=age.status==='livre'||age.status==='idade_minima'", page)
        self.assertNotIn("Idade: Indeterminada", page)
        self.assertIn("Regra oficial ↗", page)

    def test_all_attractions_show_age_and_ticket_status(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("visitRuleMarkup(tour)", page)
        self.assertIn("visitRuleMarkup(s)", page)
        self.assertIn("${ticket.url?`<span><a", page)
        self.assertNotIn("Ingresso/agendamento não confirmado", page)


if __name__ == "__main__":
    unittest.main()
