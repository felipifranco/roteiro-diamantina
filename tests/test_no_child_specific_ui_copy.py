import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class NoChildSpecificUiCopyTests(unittest.TestCase):
    def test_origin_note_is_not_mislabeled_as_stay_duration(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertRegex(
            page,
            r"note\.textContent\s*=\s*s\.id===origin\.id\?durationLabel\(s\):`Estadia sugerida: \$\{durationLabel\(s\)\}`",
            "origin note must not be prefixed as a suggested stay duration",
        )

    def test_interface_does_not_include_child_specific_copy(self):
        page = (ROOT / "index.html").read_text(encoding="utf-8")
        child_copy = re.search(
            r"(?i)(?:crian[cç]as?|beb[eê]s?|idade\s+m[ií]nima|ageInfo|s\.kid)",
            page,
        )
        self.assertIsNone(child_copy, "child-specific content must not appear in the interface")


if __name__ == "__main__":
    unittest.main()
