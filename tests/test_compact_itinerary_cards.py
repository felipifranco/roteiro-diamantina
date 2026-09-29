import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = (ROOT / "index.html").read_text(encoding="utf-8")
FINAL_ROUTING = PAGE.rsplit("// Datas individuais, estadias sugeridas e reordenação dos cartões.", 1)[1]


def rule(selector):
    match = re.search(re.escape(selector) + r"\{([^}]*)\}", PAGE)
    assert match, f"missing rule for {selector}"
    return match.group(1)


class CompactItineraryCardTests(unittest.TestCase):
    def test_tours_toggle_lives_in_the_card_header(self):
        self.assertIn("toggle.className='tours-toggle'", FINAL_ROUTING)
        self.assertIn("head.insertBefore(toggle,head.querySelector('.reorder-actions'))", FINAL_ROUTING)
        card = FINAL_ROUTING.split("function createCard(s,num,plan", 1)[1].split("function moveBefore(", 1)[0]
        self.assertNotIn("document.createElement('summary')", card, "a separate summary row adds height to every card")
        self.assertIn("toggle.setAttribute('aria-expanded'", FINAL_ROUTING)

    def test_route_card_controls_share_one_row_below_the_name(self):
        self.assertIn("grid-column:2/-1", rule("#stops .editable-stop .stop-head .stop-focus"))
        for selector in (
            "#stops .editable-stop .stop-head .stop-date",
            "#stops .editable-stop .stop-head .reorder-actions",
            "#stops .editable-stop .stop-head .tours-toggle",
            "#stops .editable-stop .stop-head .remove-stop-button",
        ):
            self.assertIn("grid-row:2", rule(selector), selector)

    def test_available_card_fits_in_one_row(self):
        for selector in ("#stops .stop-head .tours-toggle", "#stops .stop-head .add-stop-button"):
            self.assertIn("grid-row:1", rule(selector), selector)

    def test_icon_actions_keep_descriptive_labels(self):
        self.assertIn("addButton.setAttribute('aria-label',`Adicionar ${s.name} ao roteiro`)", FINAL_ROUTING)
        self.assertIn("remove.setAttribute('aria-label',`Remover ${s.name} do roteiro`)", FINAL_ROUTING)
        self.assertIn("`${active?'Remover passeio':'Adicionar passeio'} ${tour.name} ${active?'do':'ao'} roteiro`", FINAL_ROUTING)

    def test_touch_layout_hides_the_mouse_only_drag_handle(self):
        mobile = PAGE[PAGE.rindex("@media(max-width:800px){.mast{"):]
        self.assertIn("#stops .stop-head .drag-handle{display:none}", mobile)


if __name__ == "__main__":
    unittest.main()
