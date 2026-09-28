from pathlib import Path
import re
import sys

page = Path(sys.argv[1]).read_text(encoding="utf-8")
last_style_end = page.rfind("</style>")
scripts = list(re.finditer(r"<script\b[^>]*>(.*?)</script\s*>", page, re.I | re.S))
post_layout_scripts = [match for match in scripts if match.start() > last_style_end]
assert post_layout_scripts, "a post-CSS script must resynchronize Leaflet after the final mobile layout rules"
assert re.search(
    r"new\s+ResizeObserver\s*\(\s*\(\s*\)\s*=>\s*map\.invalidateSize\(\s*\{\s*pan\s*:\s*false\s*\}\s*\)\s*\)\s*\.observe\(\s*map\.getContainer\(\)\s*\)",
    post_layout_scripts[-1].group(1),
), "Leaflet must recalculate its container size whenever final layout rules resize the map"
print("mobile map size regression: PASS")
