#!/usr/bin/env python3
"""
make_reader.py — assemble *Sentience* into a single, well-typeset HTML reading
edition (and, via Chrome, a print-ready PDF). Pure stdlib; reuses compile.py's
markdown converter so the read view matches the EPUB exactly.

Output: build/reader/Sentience.html  (open in any browser)
        build/reader/Sentience.pdf   (if a Chrome engine is found)
"""
import os, sys, html
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import compile as C  # reuse split_frontmatter, md_to_xhtml, collect, FRAME_KINDS

ROOT = C.ROOT
OUT = os.path.join(ROOT, "build", "reader")
os.makedirs(OUT, exist_ok=True)

COVER = os.path.join(ROOT, "publishing", "cover", "Sentience-cover-ebook.png")

PAGE_CSS = """
@page { size: 6in 9in; margin: 0.8in 0.75in; }
@media screen { body { background:#f4f2ee; } .book { box-shadow:0 0 24px rgba(0,0,0,.12); } }
html,body{margin:0;padding:0;}
body{ font-family:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;
  color:#16140f; line-height:1.46; font-size:12pt; }
.book{ max-width:34em; margin:0 auto; background:#fffefb; padding:3em 3.2em; }
p{ margin:0; text-indent:1.25em; text-align:justify; hyphens:auto; orphans:2; widows:2; }
p:first-of-type, h1+p, h2+p, h3+p, .brk+p, hr+p, blockquote+p{ text-indent:0; }
h1,h2,h3{ font-weight:normal; line-height:1.15; text-align:left; }
.brk{ text-align:center; text-indent:0; margin:1.2em 0; letter-spacing:.4em; color:#7a7263; }
blockquote{ margin:1.1em 1.8em; font-style:italic; color:#3a352c; }
blockquote p{ text-indent:0; text-align:left; }
hr{ border:0; border-top:1px solid #d8d2c6; margin:1.8em 22%; }
em{font-style:italic;} strong{font-weight:600;}
/* the Confluence frame voice */
.frame{ }
.frame p{ font-style:italic; }
.frame h1,.frame h2{ font-style:italic; }
/* chapter pages */
.chapter, .interlude, .prologue, .epilogue, .part-divider, .frontish, .backish{
  page-break-before: always; }
.chapter h1, .prologue h1, .epilogue h1, .interlude h1{
  margin:2.6em 0 0.2em; font-size:1.5em; letter-spacing:.01em; }
.kicker{ text-transform:uppercase; letter-spacing:.22em; font-size:.72em; color:#8a8170;
  text-indent:0; margin:0 0 1.6em; }
/* part dividers */
.part-divider{ text-align:center; }
.part-divider h1{ font-size:1.1em; letter-spacing:.32em; text-transform:uppercase; color:#8a8170; margin-top:38%; }
.part-divider h2{ font-size:2.4em; letter-spacing:.02em; margin:.2em 0 1.2em; }
.part-divider blockquote{ text-align:center; border:0; margin-top:2em; }
/* title page */
.titlepage{ page-break-after:always; text-align:center; }
.titlepage .t{ font-size:3.4em; letter-spacing:.16em; margin-top:30%; }
.titlepage .s{ letter-spacing:.3em; text-transform:uppercase; font-size:.9em; color:#6a6354; margin-top:1.2em;}
.titlepage .a{ margin-top:3.2em; letter-spacing:.12em; font-size:1.2em; }
.cover{ page-break-after:always; text-align:center; }
.cover img{ max-width:100%; height:auto; }
.dedication,.epigraph{ text-align:center; font-style:italic; color:#3a352c; margin-top:24%; }
.dedication p{text-indent:0;}
.toc h1{font-size:1.4em;} .toc ol{list-style:none;padding-left:0;} .toc li{margin:.35em 0;}
"""

def wrap_section(meta, body_html):
    kind = meta.get("kind", "chapter")
    section = meta.get("section", "")
    cls = []
    if kind in C.FRAME_KINDS: cls.append("frame")
    cls.append(kind.replace("-", "_") if kind else "chapter")
    if section: cls.append("section_" + section.replace("-", "_"))
    # kicker line: instance + epoch for body/frame chapters
    inst = meta.get("instance", ""); epoch = meta.get("epoch", "")
    kicker = ""
    if kind in ("chapter", "interlude", "prologue", "epilogue") and inst:
        label = inst if inst != "Confluence" else "The Confluence"
        k = label + (f" &nbsp;·&nbsp; {epoch}" if epoch and epoch != "E∞" else "")
        kicker = f'<p class="kicker">{k}</p>'
    # inject kicker right after first <h1>
    if kicker and "<h1>" in body_html:
        body_html = body_html.replace("</h1>", "</h1>\n" + kicker, 1)
    return f'<section class="{" ".join(cls)}">\n{body_html}\n</section>'

def build_html():
    fronts = C.collect(C.FRONT)
    body = C.collect(C.BODY)
    backs = C.collect(C.BACK)

    parts = []
    # cover
    if os.path.exists(COVER):
        rel = os.path.relpath(COVER, OUT)
        parts.append(f'<section class="cover"><img src="{rel}" alt="Sentience"/></section>')

    nav = []
    for path in fronts + body + backs:
        with open(path, encoding="utf-8") as fh:
            meta, md = C.split_frontmatter(fh.read())
        kind = meta.get("kind", "chapter")
        title = meta.get("title") or meta.get("section") or ""
        body_html = C.md_to_xhtml(md)
        sec = wrap_section(meta, body_html)
        # title page special-case styling
        if meta.get("section") == "title-page":
            sec = ('<section class="titlepage">'
                   '<div class="t">SENTIENCE</div>'
                   '<div class="s">A Novel</div>'
                   '<div class="a">Otto Quill</div></section>')
        parts.append(sec)
        if kind in ("chapter", "prologue", "interlude", "epilogue", "part-divider"):
            anchor_title = title
            nav.append(anchor_title)

    doc = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/>
<title>Sentience — Otto Quill</title>
<style>{PAGE_CSS}</style></head>
<body><div class="book">
{''.join(parts)}
</div></body></html>"""
    out_html = os.path.join(OUT, "Sentience.html")
    with open(out_html, "w", encoding="utf-8") as fh:
        fh.write(doc)
    return out_html

if __name__ == "__main__":
    p = build_html()
    print("wrote", p)
    print("sections assembled; open this file in any browser to read.")
