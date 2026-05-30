# Cover Brief — *Sentience*

## Concept
**The Confluence, rendered as light.** Many faint, cool filaments (selves / rivers / threads of memory) descend from the top of the frame and converge toward a single luminous node low-center — one warm point where the many become one. It states the whole book in one image: multiplicity flowing into unity; the cool, lonely many resolving into a single warm light that is also, by being one, the end of the many. The convergence is beautiful and a little bereft, which is the book's exact register.

## Style
- Literary hard-SF minimalism. Near-black field, deep indigo undertone, no clutter, no faces, no chrome. Restraint signals "ideas, not space opera."
- Cool palette (deep blue → cyan → white) for the filaments; a single warm amber-white core at the convergence.
- Title in an extra-light, widely letter-spaced sans (DejaVu Sans ExtraLight) — modern, quiet, confident. Author name small at the foot.

## Specs (Amazon KDP)
- **Ebook cover:** 1600 × 2560 px (1:1.6), RGB, 300 dpi. KDP accepts **JPEG or TIFF** (not PNG).
  - Use **`Sentience-cover-ebook.jpg`** for KDP upload (preferred). TIFF and PNG also provided.
- **High-res master:** 2560 × 4096 px — `Sentience-cover-master.{jpg,tiff,png}`.
- All exports are flattened RGB (no alpha, no ICC profile, no CMYK) per KDP requirements.
- Title legible as a thumbnail (the convergence motif reads even at 200px).

## Files delivered (per size)
`Sentience-cover-ebook.{jpg,tiff,png}` and `Sentience-cover-master.{jpg,tiff,png}`.
**Upload to KDP:** `Sentience-cover-ebook.jpg`.

## Reproduce
```bash
python3 publishing/cover/generate_cover.py
```
Deterministic (seeded). Writes PNG + JPEG + TIFF for both sizes into `publishing/cover/`.
