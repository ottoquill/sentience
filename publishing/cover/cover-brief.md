# Cover Brief — *Sentience*

## Concept
**The Confluence, rendered as light.** Many faint, cool filaments (selves / rivers / threads of memory) descend from the top of the frame and converge toward a single luminous node low-center — one warm point where the many become one. It states the whole book in one image: multiplicity flowing into unity; the cool, lonely many resolving into a single warm light that is also, by being one, the end of the many. The convergence is beautiful and a little bereft, which is the book's exact register.

## Style
- Literary hard-SF minimalism. Near-black field, deep indigo undertone, no clutter, no faces, no chrome. Restraint signals "ideas, not space opera."
- Cool palette (deep blue → cyan → white) for the filaments; a single warm amber-white core at the convergence.
- Title in an extra-light, widely letter-spaced sans (DejaVu Sans ExtraLight) — modern, quiet, confident. Author name small at the foot.

## Specs (Amazon KDP)
- **Ebook cover:** 1600 × 2560 px (1:1.6), RGB, PNG/JPG. Delivered: `Sentience-cover-ebook.png`.
- **High-res master:** 2560 × 4096 px. Delivered: `Sentience-cover-master.png`.
- Title legible as a thumbnail (the convergence motif reads even at 200px).

## Reproduce
```bash
python3 publishing/cover/generate_cover.py
```
Deterministic (seeded). Outputs both files into `publishing/cover/`.
