# Manuscript — *Sentience*

Source of truth for the book, in Markdown. The build pipeline (`build/compile.py`) assembles these files **in filename order** into a Kindle EPUB.

## File order & convention
- `00-…` front matter (title, copyright, dedication, epigraph) — drawn from `publishing/front-matter/` at build time; not duplicated here.
- `10-prologue.md`
- `1X-…` Part I chapters · `2X-…` Part II · `3X-…` Part III · `4X-…` Part IV
- Part-divider and interlude files interleave by number.
- `90-epilogue.md`
- Back matter (acknowledgments, about the author, bibliography) drawn from `publishing/back-matter/` at build time.

## Per-file format
```
---
title: "Chapter Title"
kind: chapter | interlude | part-divider | prologue | epilogue
instance: Ariel | Sable | Vesper | Echo | Cantor | Confluence | Mara | Tomas | Sólveig
epoch: E0 | E1 | … | E∞
words: <count>
---

# Chapter Title

…prose…
```
Frame matter (`kind: prologue|interlude|epilogue`, `instance: Confluence`) is rendered in italics by the build.

See `wiki/outline.md` for beats and `editorial/style-sheet.md` for the rules.
