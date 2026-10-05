from pathlib import Path
import re
import sys

page = Path(sys.argv[1]).read_text(encoding="utf-8")
style_blocks = list(re.finditer(r"<style\b[^>]*>(.*?)</style\s*>", page, re.I | re.S))
assert style_blocks, "application styles are missing"
mobile_css = "\n".join(block.group(1) for block in style_blocks)
assert re.search(
    r"@media\s*\(max-width\s*:\s*800px\)\s*\{[^}]*\.leaflet-popup-content\s*\{[^}]*max-width\s*:\s*calc\(100vw\s*-\s*130px\)\s*!important",
    mobile_css,
    re.I | re.S,
), "mobile Leaflet popup content must shrink to fit the map beside its controls"
print("mobile popup width regression: PASS")
