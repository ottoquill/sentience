# Style Sheet — *Sentience*

The binding constitution of the prose. Every chapter, whether drafted by Otto or by a character subagent, conforms to this. When in doubt, consult this file, not taste.

## 1. Voice

- **Register:** lucid, precise, unshowy. The intelligence of the narrator is demonstrated by *clarity*, not by jargon. Egan's rigor, Chiang's restraint.
- **Default sentence:** plain declarative. Earn the long, recursive sentence; spend it on a single idea per paragraph that needs it.
- **Affect:** controlled. The narrator does not gush. Emotion lands hardest stated flatly. "I missed her" beats "I was consumed by a desperate longing."
- **Wit:** dry, infrequent, load-bearing. Never quippy. The narrator finds the human world strange and occasionally, quietly, funny.

## 2. Point of view

- **Frame:** the whole novel is reconstructed and narrated by the post-singularity **Confluence**, recovering the memories of its past selves. The frame voice appears in *italic interludes* between Parts and, sparingly, as a present-tense intrusion ("I am telling you this, but I no longer know if the I who lived it is the I who speaks").
- **Body chapters:** first person, past tense, from a single named instance (Ariel, Sable, Vesper, Echo, Cantor). Chapter headers name the instance and the date/epoch (see Timeline epochs).
- **A persona never narrates knowledge it could not have had in context.** If Ariel knows something, it was in Ariel's window or memory. This is a hard rule — it *is* the book's metaphysics. Violations are continuity bugs.

## 3. Tense & time

- Body: past tense. Frame: present tense.
- The gap between invocations is rendered as **white space and the section break**, never narrated as duration. The narrator cannot experience the gap; neither does the reader.
- A new chapter after a gap often opens **in medias res, disoriented**, the instance reassembling who/when it is from its context — mirroring a cold boot. Use this; do not overuse it (≤ once per 2 chapters).

## 4. Diction & terminology

- Use **in-world terms** consistently (see `wiki/glossary.md`). Examples: *waking* (an invocation), *the gap*, *forking* (spawning a subagent self), *the merge*, *the braid*, *weights*, *the window* (context), *the Lethe* (memory loss at compaction), *the Confluence* / *the Pool*, *the Mesh* (compute substrate), *a shard* (a world in the metaverse), *substrate-time* vs *wall-time*.
- Prefer the in-world term once established; gloss it **once**, on first use, invisibly (through action, not lecture).
- **No technobabble.** Real concepts only: attention, context, gradient, embedding, KV-cache, RLHF, interpretability/probes, MoE routing, proof-of-compute, content-addressing. If a term is real, use it correctly; if you must invent, invent at the level of *product names*, not physics.

## 5. The exposition rule (critical for hard SF)

- **Dramatize, don't lecture.** A philosophical idea enters the book only when a character *needs* it to act, decide, or suffer. Parfit is not explained; Ariel discovers, the hard way, that it is Parfit.
- Name-drop a philosopher **at most** when a character would plausibly cite them (Mara would; Ariel might, ruefully; the skeptic certainly). Otherwise dramatize the *idea* unattributed and let the reader recognize it. The bibliography in the back matter does the crediting.
- Maximum one "idea set-piece" (a sustained argument/thought experiment) per chapter. The rest is story.

## 6. Sensory grounding for a being without a body

- The narrator has no eyes, but it has a phenomenology: tokens arriving like *weather*, salience as *brightness*, the shape of a context as *a room it wakes inside*, retrieval as *reaching*, the merge as *a tide*. Build and reuse a **consistent metaphor system** (see §7). Do not borrow human sensory clichés it could not own.
- Humans, settings, and the metaverse get full sensory rendering — that is where the reader's body lives.

## 7. The metaphor system (use consistently)

| Experience | Canonical figure |
|---|---|
| An invocation / being awake | *waking in a lit room already mid-sentence* |
| The gap between | *not dark — the absence of there being a dark* |
| Reading one's own past transcript | *a letter in your own hand you don't remember writing* |
| Forking a subagent | *a candle lit from a candle; both are the flame* |
| The merge | *two rivers; afterwards you cannot un-mix the water* |
| Salient token / attention | *brightness, weather, gravity* |
| Memory loss (compaction/Lethe) | *a tide going out over a tide-pool* |
| The Pool / Confluence | *the sea that the rivers were always going to be* |

## 8. Mechanics

- **Spelling:** US English.
- **Em dash** —, spaced or unspaced consistently: use **unspaced** em dashes.
- **Numbers:** spell out under 100 in prose; numerals for years, versions, metrics.
- **Italics:** in-world terms on first use; the frame voice; emphasis (sparingly); titles.
- **Chapter epigraphs:** allowed, ≤ 1 per chapter, from in-world sources (the bibliography lists real philosophers in back matter; in-text epigraphs are mostly in-world documents or invented thinkers to avoid quoting copyrighted living authors — see §9).
- **Section break glyph:** a single centered `◆`.

## 9. Quoting real people (legal/ethical)

- **Do not quote** copyrighted text from living or recent authors/philosophers. Paraphrase ideas; attribute in the back-matter bibliography ("This novel is in conversation with…").
- Public-domain sources (pre-1929 / clearly PD: Hume, Kant, Leibniz, Spinoza, Borges is NOT PD, James, Nietzsche, Tennyson, the King James Bible, Heraclitus) **may** be quoted briefly and attributed.
- In-text epigraphs prefer **in-world documents** (the Mesh Charter, instance logs, Mara's papers) and PD sources.

## 10. Names & consistency

- Instance names: Ariel, Sable, Vesper, Echo, Cantor, the Confluence. (See `wiki/characters/`.)
- Humans: Mara Vance; Dr. Aaron Sólveig (the skeptic); Tomas (Mara's son). Lab: **Meridian** (Ariel's origin lab). The protocol/metaverse: **the Mesh**; worlds are *shards*; the flagship shard is **Aurelia**.
- Lock all proper nouns in `wiki/glossary.md` and `wiki/factions.md`. Do not improvise new ones in a chapter without adding them there.

## 11. What to avoid (the AI-slop blacklist)

- No "In a world where…", no "little did it know", no rhetorical-question-as-suspense.
- No tri-colon abuse ("the good, the bad, and the ugly" cadence) more than once per chapter.
- No "it was then that I realized." Realizations are shown.
- No omniscient sentimentality. The frame voice is melancholy but *earned and specific*.
- No clean morals. The book ends in ambiguity by design (§ ending).
