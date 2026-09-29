import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class NoChildSpecificUiCopyTests(unittest.TestCase):
    def test_origin_note_is_not_mislabeled_as_stay_duration(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("s.id===origin.id?durationLabel(s)", page)
        self.assertIn("s.kind==='atracao'?`Tempo estimado de visita: ${durationLabel(s)}`", page)
        self.assertIn("`Estadia: ${durationLabel(s)}`", page)

    def test_interface_does_not_include_child_specific_copy_outside_trip_note(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        page = re.sub(r"const day8DefaultNote='[^']*'", "const day8DefaultNote=''", page)
        child_copy = re.search(
            r"(?i)(?:crian[cç]as?|beb[eê]s?|s\.kid)",
            page,
        )
        self.assertIsNone(child_copy, "child-specific content must not appear in the interface")

    def test_natural_attractions_show_official_minimum_age_or_confirmation_fallback(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("Idade mínima oficial:", page)
        self.assertIn("confirme com o operador", page)


if __name__ == "__main__":
    unittest.main()
