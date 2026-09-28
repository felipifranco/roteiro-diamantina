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


assert "display:grid" in declarations(".trip-timeline"), "route timeline must be a grid on desktop too"
assert "text-align:center" in declarations(".trip-timeline>div"), "each route milestone should read as a separate card"
for selector in (".trip-timeline small", ".trip-timeline strong", ".trip-timeline span"):
    assert "display:block" in declarations(selector), f"{selector} must have its own readable line"
print("desktop trip timeline layout regression: PASS")
