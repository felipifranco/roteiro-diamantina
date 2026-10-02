from pathlib import Path
import html as html_module
import re
import sys

page = Path(sys.argv[1]).read_text(encoding="utf-8")
assert 'class="mobile-legend"' in page, "mobile icon legend is missing"
summary = re.search(r'<details\b[^>]*class="mobile-legend"[^>]*>(.*?)</details>', page, re.I | re.S)
assert summary, "mobile legend must be a collapsible details panel"
content = html_module.unescape(re.sub(r"<[^>]+>", " ", summary.group(1)))
content = re.sub(r"\s+", " ", content).strip()
for label in ("Legenda dos ícones", "Cor do marcador", "passeio", "ordem", "gastronomia", "acesso", "ida e volta"):
    assert label.casefold() in content.casefold(), f"mobile legend must explain {label}"
styles = "\n".join(re.findall(r"<style\b[^>]*>(.*?)</style\s*>", page, re.I | re.S))
assert re.search(r"(?:^|[}\n])\.mobile-legend\s*\{\s*display\s*:\s*none", styles, re.I), "mobile legend must stay hidden on desktop"
media = re.search(r"@media\s*\(max-width\s*:\s*800px\)\s*\{(.*?)\}\s*(?:</style>|\Z)", styles, re.I | re.S)
assert media and re.search(r"\.mobile-legend\s*\{[^}]*display\s*:\s*block", media.group(1), re.I), "mobile legend must be visible at phone widths"
print("mobile icon legend regression: PASS")
