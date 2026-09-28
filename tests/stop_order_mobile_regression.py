from pathlib import Path
import re
import sys

html_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "index.html"
html = html_path.read_text()
start = html.rfind(".stop-head:has(.stop-date){")
assert start >= 0, "mobile stop-header rules not found"
mobile = html[start:]

def declaration(selector, prop):
    rule = re.search(re.escape(selector) + r"\{([^}]*)\}", mobile)
    assert rule, f"missing mobile rule for {selector}"
    value = re.search(r"(?:^|;)\s*" + re.escape(prop) + r"\s*:\s*([^;]+)", rule.group(1))
    return value.group(1).strip() if value else None

assert declaration(".stop-head:has(.stop-date) .stop-date", "grid-column") == "3/5", "date should stay in the content columns"
assert declaration(".stop-head:has(.stop-date) .stop-date", "grid-row") == "2", "date should be on the second row"
assert declaration(".stop-head:has(.stop-date) .reorder-actions", "grid-column") == "1/3", "reorder arrows should align under the drag handle and order number"
assert declaration(".stop-head:has(.stop-date) .reorder-actions", "grid-row") == "2", "reorder arrows should share the date row"
assert declaration(".stop-head:has(.stop-date) .reorder-actions button", "width") == "30px", "arrow buttons must fit the two-column order-control rail"

return_head = re.search(r"\.return-stop \.stop-head\s*\{([^}]*)\}", html)
assert return_head, "return card needs a dedicated grid layout"
assert re.search(r"grid-template-columns\s*:\s*32px\s+minmax\(0,1fr\)", return_head.group(1)), "return icon must have its own leading column"

move = re.search(r"function moveSameDay\(id,step\)\{(.*?)\}\s*function totalEnd", html, re.S)
assert move, "stop reorder handler not found"
assert "dates.set(current.id,nextDate)" in move.group(1), "reorder must cross date groups"
assert "dates.set(adjacent.id,currentDate)" in move.group(1), "reorder must preserve the adjacent stop's date"

layers = re.findall(r"\.side\s*\{([^}]*)\}", html)
assert layers, "sidebar stacking rule not found"
assert re.search(r"position\s*:\s*relative", layers[-1]), "sidebar must create a stacking context above map markers"
assert re.search(r"z-index\s*:\s*1000", layers[-1]), "sidebar must stack above Leaflet's marker pane"

fixed_head = re.search(r"\.fixed-day \.stop-head\s*\{([^}]*)\}", html)
assert fixed_head, "fixed destination card needs its own grid layout"
assert re.search(r"grid-template-columns\s*:\s*32px\s+minmax\(0,1fr\)", fixed_head.group(1)), "destination number must have its own leading column"
print("mobile stop-order and card alignment regression: PASS")
