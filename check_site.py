from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import sys
root = Path(__file__).resolve().parent.parent
class Links(HTMLParser):
    def __init__(self):
        super().__init__();self.links=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        for key in ['href','src']:
            if key in d and tag in ['a','img','link','script']:
                self.links.append(d[key])
errors=[]
for html in sorted(root.glob('*.html')):
    parser=Links();parser.feed(html.read_text(encoding='utf-8'))
    for link in parser.links:
        parts=urlsplit(link)
        if parts.scheme or parts.netloc or link.startswith(('#','mailto:','tel:','data:','//')):continue
        path=root/unquote(parts.path)
        if not path.exists():errors.append(f'{html.name}: missing {link}')
print(f"Checked {len(list(root.glob('*.html')))} HTML files; {len(errors)} broken local links")
for e in errors:print(e)
sys.exit(1 if errors else 0)
