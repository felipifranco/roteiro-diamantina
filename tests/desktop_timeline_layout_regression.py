from pathlib import Path
import re
import sys

html_path = Path(sys.argv[1])
html = html_path.read_text()
styles = re.findall(r"<style\b[^>]*>(.*?)</style\s*>", html, re.I | re.S)
css = "\n".join(styles)


def remove_media_blocks(source):
    out = []
    pos = 0
    while True:
        match = re.search(r"@media\b[^\{]*\{", source[pos:], re.I)
        if not match:
            out.append(source[pos:])
            break
        start = pos + match.start()
        brace = pos + match.end() - 1
        out.append(source[pos:start])
        depth = 1
        end = brace + 1
        while depth and end < len(source):
            if source[end] == "{":
                depth += 1
            elif source[end] == "}":
                depth -= 1
            end += 1
        pos = end
    return "".join(out)


desktop_css = remove_media_blocks(css)


def declarations(selector):
    rule = re.search(re.escape(selector) + r"\s*\{([^}]*)\}", desktop_css)
    assert rule, f"missing all-width style for {selector}"
    return rule.group(1)


assert "display:flex" in declarations(".trip-facts"), "departure and return should share a text row on desktop"
assert "flex-wrap:wrap" in declarations(".trip-facts"), "dates should wrap when the sidebar is narrow"
assert 'document.querySelector(\'.mast\').appendChild(el)' in html, "the trip facts should sit beside the route title"
summary = html.split("function drawSummary(order)", 1)[1].split("// Numeração compartilhada", 1)[0]
assert 'class="trip-facts"' in summary
assert '<b>Saída</b>' in summary and '<b>Retorno previsto</b>' in summary
assert 'data fixa' not in summary.lower(), "the fixed Diamantina date belongs in the itinerary"
print("trip header layout regression: PASS")
