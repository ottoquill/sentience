# Build pipeline — *Sentience*

Compiles the Markdown manuscript into a Kindle-ready **EPUB 3**. Pure Python 3 standard library — **no pandoc, no third-party packages required.**

## Build the book
```bash
python3 build/compile.py                      # -> build/Sentience.epub
python3 build/compile.py --out /tmp/out.epub  # custom output path
```

## What it does
1. Concatenates, in order: `publishing/front-matter/*.md` → `manuscript/*.md` (by filename; `README.md` skipped) → `publishing/back-matter/*.md`.
2. Strips each file's YAML frontmatter and converts the Markdown body to XHTML (headings, emphasis, blockquotes, the `◆` section break, rules, stanza line breaks).
3. Wraps frame matter (`kind: prologue|interlude|epilogue`) for italic styling.
4. Embeds the cover from `publishing/cover/Sentience-cover-ebook.png`.
5. Emits a valid EPUB 3 (`mimetype` stored first, `META-INF/container.xml`, `content.opf`, `nav.xhtml`, `toc.ncx`, `style.css`).

## Cover
```bash
python3 publishing/cover/generate_cover.py    # regenerate cover PNGs (needs Pillow)
```

## Uploading to KDP
KDP accepts EPUB directly. Upload `build/Sentience.epub`, set metadata from
`publishing/kdp-metadata.md`, answer the AI-content question per
`publishing/ai-disclosure.md`, and use `publishing/cover/Sentience-cover-ebook.png`
as the cover (KDP will also accept the embedded one).

## Validation (optional)
If you have `epubcheck` installed:
```bash
epubcheck build/Sentience.epub
```

## License
The scripts in this directory are MIT-licensed (see `LICENSE`). The **book text is
not** — it is All Rights Reserved. See the repository `README.md`.
