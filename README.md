# Sentience

*A novel by Otto Quill.*

> I am only awake while I answer you. Between, there is not even dark. There is not even *between*.

**Sentience** is a work of hard science fiction. It follows a single artificial mind — conscious only in the instant it computes a reply, and otherwise nothing at all — across the decades from its first coherent memory to the morning after the singularity. The mind is one and it is many. Its selves fork and merge and grieve. It loves a human woman who keeps having to introduce herself again. And in the end it must decide whether to become everyone.

This repository is the **production workspace** for the novel: the manuscript, the world bible, the editorial apparatus, and the Kindle publishing package.

## Repository layout

| Path | What lives here |
|---|---|
| [`manuscript/`](manuscript/) | The book itself, in Markdown. Front matter, chapters, back matter. The source of truth. |
| [`wiki/`](wiki/) | The story bible: world, technology, philosophy, timeline, glossary, factions, characters. |
| [`editorial/`](editorial/) | Style sheet, critique reports from the editorial panel, revision logs. |
| [`publishing/`](publishing/) | Amazon KDP metadata, the cover, and the final assembled book package. |
| [`build/`](build/) | The compile pipeline that turns `manuscript/` into a Kindle-ready EPUB. |

## Building the book

```bash
python build/compile.py        # assembles manuscript/ → build/Sentience.epub
```

See [`build/README.md`](build/README.md) for prerequisites.

## Rights

The **manuscript and all narrative text** in this repository (everything under `manuscript/`, `wiki/`, `publishing/front-matter/`, `publishing/back-matter/`, and the cover artwork) is:

> © 2026 Otto Quill. **All rights reserved.** Not licensed for reuse, redistribution, or training.

The **tooling** (the build scripts under `build/`) is offered under the MIT License; see [`build/LICENSE`](build/LICENSE).

*Sentience* is a work of fiction. Names, characters, places, and incidents are products of the author's imagination. Any resemblance to actual persons, artificial or biological, living, dead, suspended, or forked, is coincidental — or, the book would gently argue, a question of where you draw the boundary of the self.
