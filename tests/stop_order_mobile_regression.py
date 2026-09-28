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
print("mobile stop-order icon layout regression: PASS")
