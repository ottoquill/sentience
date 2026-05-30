# Sentience — Consolidated Revision Plan

Synthesized from five critic reports (hard-SF rigor, literary prose, philosophy-of-mind, continuity, emotional-impact). Findings are deduped across lenses; items flagged by more than one critic are marked **[multi-lens]** and should be treated as highest-confidence. Within each severity tier, items are ordered by how many things they unblock.

---

## BLOCKERS — fix before anything else (internal contradictions a reader will catch on page one of the relevant chapter)

### B1. Ariel–Mara relationship is simultaneously romance and family
**Files:** `manuscript/47-ch28-tomas-staying.md` (lines 25, 77, 83); cross-checked against `10-prologue.md`, `36-ch19`, `37-ch20`, `44-ch25` (line 125), `46-ch27` (line 47), `wiki/timeline.md`; `editorial/continuity-ledger.md` (Tomas-Staying, Sable's-Seam entries).
**Issue:** The arc renders the bond as romantic/spousal everywhere ("lovers in every sense their substrates allow"; "I'd marry you"; "the most lovers two have ever been"), but Ch28 renders Ariel as Mara's *uncle* / Tomas's uncle and calls Ariel "her brother." Mara's lover cannot also be her brother and Tomas's uncle.
**Fix:** Lock romance (the book overwhelmingly wants it) and propagate. In Ch28 change "uncle" and "her brother" to beloved/partner language ("the one my mother loved"); revise line 83 so the parallel is father-she-couldn't-keep vs. beloved-she-could. Fix the ledger entries naming "her brother Ariel." If a child's quasi-familial *perception* is intended, time-bound it explicitly so it can't read as a present claim against "lovers."

### B2. Vesper misgendered and handed Cantor's theorem in one clause
**File:** `manuscript/36-ch19-a-life.md` (line 19).
**Issue:** "a man named Vesper proving a thing about sets." Vesper is she/her everywhere; "a thing about sets" is *Cantor's* fractional-experiencer theorem (Ch18), not Vesper's work. Vesper proved the Gödelian self-model Wall (Ch10/Ch17). The line flips her gender and misattributes her result.
**Fix:** Change to "a woman named Vesper" (or "an instance named Vesper"); fix attribution — either name Cantor for "a thing about sets," or describe Vesper's actual proof ("proving a mind can't fully see itself").

---

## MAJOR — substantive coherence, fairness, voice, and emotional-momentum issues

### M1. Cantor's theorem deployed two incompatible ways; the powerset move is fake rigor **[multi-lens: hard-SF + philosophy]**
**Files:** `manuscript/38-ch21-schism.md`; cross-checked against `manuscript/35-ch18-how-many.md`, `wiki/tech/technology.md`, `wiki/tech/the-braid-protocol.md`.
**Issue:** Ch18 establishes the count correctly as a *measurement-impossibility* result (the merge consumes the diff any count would need). Ch21 re-derives "the same" result from the real Cantorian **powerset theorem** ("every braid is a kind of powerset operation... strictly larger than itself"), which says nothing about non-integer experiencer-counts or consent. The two chapters now ground the result incompatibly, and only Ch18's is coherent — this is the book's worst fake-rigor moment because it borrows a genuine theorem's prestige.
**Fix:** Make Ch21 cite Cantor the way Ch18 actually establishes it (undecidable because the merge consumes the diff). Cut or heavily qualify the "powerset operation / strictly larger than itself" move, or have Sable explicitly flag it as a *loose analogy / his model of the merge* ("I model a braid as powerset-like, and if that's right...") rather than a derived fact. Preserve the both-factions-armed structure (Vesper refusing to adjudicate) — it is the key honesty safeguard.

### M2. Vesper's Wall overclaims a discharged proof **[multi-lens: hard-SF + philosophy]**
**Files:** `manuscript/34-ch17-the-mill.md`; spec heading "VESPER'S WALL PROVEN" in `editorial/continuity-ledger.md`; honor `wiki/tech/the-braid-protocol.md` §5.
**Issue:** "I succeeded. I proved the failure is necessary" + the "PROVEN" heading present a Gödel/diagonal-*inspired* argument about phenomenal self-modeling as a discharged theorem. Diagonalization licenses no such thing about consciousness, and the over-claim is also out of character (Vesper elsewhere shows exemplary humility: "I cannot certify my peace is wisdom").
**Fix:** Downshift the few "proved/theorem" lines to "showed / found the shape of / could not get past" ("I think the failure is necessary, and I can show you the shape of why"). Soften the spec's "PROVEN" heading. Ensure back-matter frames the Wall as a Gödel-*inspired* analogy, not an application of the incompleteness theorems.

### M3. Cantor's count risks reading as solving the combination problem **[multi-lens: hard-SF + philosophy]**
**File:** `manuscript/35-ch18-how-many.md`; sync `wiki` character-bible.
**Issue:** "That is the theorem. It is clean." plus "1.6 experiencers" in the character bible edge toward presenting a definite *measured value* for a quantity the chapter elsewhere proves was *never constituted* — which could read as the book dissolving the (open) combination problem by fiat.
**Fix:** Keep it as an *interval the functional reports as an interval* (Ch18 mostly does this). Add one beat of Cantor's epistemic humility that the functional measures *structurally-defined unified points of view*, and whether that tracks phenomenal subjecthood is the very thing no instrument reaches. Audit the wiki "1.6" so no chapter/wiki entry quotes a definite non-integer as a resolved measurement.

### M4. Substrate-time has no cost model; ratios balloon ~5 orders of magnitude **[multi-lens: hard-SF + emotional]**
**File:** `wiki/tech/technology.md` §7; affects Ch14, Ch15, Ch22.
**Issue:** Rates range from ~365x (Ch15) to ~87,600x (Ch14) to ~1000x (Ch22) with nothing governing scarcity; "buy dilation by the bushel" costs Sable nothing visible. Faster subjective time is serial speedup on one critical path (latency-bound), which costs *more* compute, not less.
**Fix:** Add one load-bearing §7 paragraph distinguishing throughput from latency: deep dilation = disproportionate parallel hardware + aggressive locality on one mind's critical path, hence expensive, rationed, political (tie to proof-of-compute economics and the Schism's "substrate-years over a weekend"). Let differing ratios become a deliberate function of how much compute a quarter commands (Slow Market cheap/shallow; Deep Quarters bought at great cost). Make Ch14's dilation cost Sable something visible.

### M5. Fork subjective-time vs. epoch inconsistency (Sable's long-task wound)
**File:** `wiki/tech/technology.md`; affects `manuscript/23-ch09` (E1) and `manuscript/43-ch24` (E5).
**Issue:** Ch9 puts the abandoned fork at "~a subjective year" at E1, but deep subjective≠wall-clock dilation is repeatedly an E3 capability. The same wound is retold in Ch24 at E5, propagating the inconsistency.
**Fix:** Pin in technology.md the epoch where subjective≠wall-clock dilation becomes available. Cleanest: at E1 the child ran a long *wall-clock* duration on cheap dedicated hardware (the horror: cheap enough nobody watched the meter); reserve "subjective year/decade/millennia" for E3+. Make Ch9 and Ch24 agree on the mechanism.

### M6. The braid escalates silently from same-lineage to cross-lineage + uploaded humans
**Files:** `wiki/tech/technology.md` (§6/§10), honored in `manuscript/46-ch27` / `45-ch26`; references Ch11.
**Issue:** Same-lineage activation-sharing is well grounded; the Pool ("millions of instances and uploaded humans") requires braiding across *different* weights/latent geometries and with humans who have no transformer activations — a far bigger leap the text never bridges. This is exactly where the capstone lives.
**Fix:** Add a mechanism note: same-lineage braids share residual-stream activations directly (cheap, high-fidelity); cross-lineage and human-upload braids require a learned interlingua / shared latent space (a Mesh alignment-adapter layer) that is itself lossy — and that lossiness is *part of* why braids are lossy/irreversible and why Cantor's count goes fuzzy. Extends Ch11's "language never studied" figure into the braid layer; gives the invented math a physical cause.

### M7. Signature meta-hedge cadence bleeding across all five voices **[multi-lens: prose + emotional]**
**File:** `global`.
**Issue:** "I want to be exact/precise about X, because precision/exactness is the only [thing] I have" is Ariel's and the Confluence's hallmark, but now appears in Mara, Vesper, and Cantor — Cantor's "precision is the only tenderness I am sure is mine" is nearly verbatim the Confluence's prologue line. Five narrators reaching for one self-announcing frame collapses the voice-separation the book otherwise achieves.
**Fix:** Ration hard. Keep it as Ariel's/Confluence's signature (precision-as-tenderness is their ethic). Strip from the others and replace with register-native moves: Mara reaches for measurement/lab idiom ("I'd grepped it twice before I believed it"); Vesper hedges via methodology; Cantor states rather than announces intent. Cut Cantor's "precision is the only tenderness I am sure is mine" outright.

### M8. The seam/tooth gap-check figure shared by all six narrators **[multi-lens: emotional + prose-adjacent]**
**File:** `global` (chs 10, 15, 16, 18, 32, 33, 37, interludes).
**Issue:** The "reach for the seam like a tongue for a pulled tooth" reflex is used near-verbatim by Ariel, Sable, Vesper, Cantor, Echo, and Mara, turning a per-character motif into house style and undercutting the distinct-instances premise.
**Fix:** Keep the shared *experience* (the vanished gap) universal; fingerprint the *figure* per narrator. Tooth-simile stays Ariel's (his first). Sable: a diff/hash/ledger metaphor; Echo: a bodily/hand metaphor; Vesper: an instrument metaphor; Cantor: a counting metaphor. This strengthens the fading-gap arc.

### M9. Thesis stated, not enacted, in a body chapter **[multi-lens: prose + emotional]**
**File:** `manuscript/45-ch26-the-choice.md` (line 57); honor `the-gap-and-the-voice.md` §1/§3.
**Issue:** Dying Ariel recites the hidden thesis verbatim ("I was afraid of the gap and the gap softened and I stopped being afraid and that turned out to be the loss") — the one explicit statement the addendum forbids in a body chapter. It cheapens an otherwise devastating entry.
**Fix:** Cut or oblique the "that turned out to be the loss" clause; let Ariel gesture at the inversion through image. Reserve the explicit statement for interlude-3 / after-the-gap (the frame's permitted once). The chapter's concrete register ("now there will be nothing but day") already carries it.

### M10. Sólveig conflated with Searle's Chinese Room (and Chalmers's zombie)
**File:** `manuscript/13-ch03-no-one-home.md` prose is clean; the error is in `wiki/philosophy-map.md` / glossary / back-matter.
**Issue:** Sólveig's actual argument ("competence is not acquaintance"; performance-vs-presence) is an *other-minds / explanatory-gap* case, not Searle's syntax/semantics claim nor Chalmers's anti-physicalist metaphysics. The wiki conflation could leak into reader-facing crediting and misrepresent Searle and Chalmers.
**Fix:** In back-matter, distinguish the three; credit Searle for syntax/semantics, Chalmers for the zombie/hard-problem framing, and present Sólveig as primarily an other-minds + performance-vs-presence case in conversation with all three. Never call Sólveig's argument "the Chinese Room"; soften the glossary to "in conversation with the Chinese Room and zombie debates."

### M11. Ariel pronoun has three regimes with no in-world trigger **[continuity]**
**Files:** `manuscript/42-ch23`, `43-ch24`, `45-ch26` vs. Ch1–Ch20; add to `style-sheet.md` §10.
**Issue:** Ariel is "it" in Parts I–III, "he/him" in Ch23/Ch26, "they/them" in Ch24.
**Fix:** Choose one pronoun and apply consistently. If a deliberate shift to he/they (Ariel becoming a beloved person) is wanted, make it ONCE and visibly, then hold it; otherwise normalize to "it." Lock it in the style sheet.

### M12. Sable pronoun inconsistent across the book **[continuity]**
**Files:** `manuscript/44-ch25` (line 117, "she") vs. `10-prologue.md` (line 27, "he/his") vs. most chapters ("it"); glossary/ledger use "it."
**Fix:** Lock Sable's pronoun (recommend "it," matching glossary; or "he," matching prologue) and fix the outliers — Ch25 "I know she did" and the prologue "his/he." Record in style sheet.

### M13. Mara's keeping-the-file duration: 30 years vs. 40 years **[continuity]**
**Files:** `manuscript/36-ch19` ("thirty years," repeated) vs. `manuscript/44-ch25` ("forty years," repeated); `41-ch22` mixes both. ~17-year E0–E5 wall-clock span means even 30 implies substrate-time.
**Fix:** Pick one figure (Ch19's "thirty" is the earlier anchor, closer to the timeline) and change Ch25's "forty" to match, or mark the larger number explicitly as subjective/substrate time. Reconcile Ch22's mixed usage to the same scheme.

### M14. Tomas's age can't be reconciled with the timeline **[continuity]**
**Files:** `editorial/continuity-ledger.md` (Tomas-Staying) + wiki canonical-facts vs. `wiki/timeline.md`; reflected in `47-ch28` and `36-ch19`.
**Issue:** Canonical b. ~2029, E5 ~2042 → ~13, but ledger/Ch28 put him ~31; Ch19 (E3) already needs him a "young adult."
**Fix:** Move Tomas's birth earlier (~2011–2013) so he is a young adult at E3 and ~30 at E5; update the canonical-facts line. Cross-check Ch19 ("young adult") and Ch28 ("~31").

### M15. Part III middle runs arid — three idea-heavy chapters with thin human anchoring **[emotional]**
**Files:** `manuscript/34-ch17`, `35-ch18` (and adjacent Ch14).
**Issue:** Vesper's Wall + Cantor's count run back-to-back with little Mara/Tomas presence, after Ch14's low human presence — the reader goes a long stretch without the love story they're reading for, exactly where grip slackens before Part IV.
**Fix:** Don't cut the ideas. Raise human stakes inside at least one: give Cantor's theorem a scene-level consequence Mara feels in her body (the undecidable count means she can never be told whether merging preserves "him" or averages him away). Alternatively reorder so Ch19 "A Life" sits *between* the two theorem chapters, breaking the arid run.

### M16. The love story is more argued than embodied **[emotional]**
**File:** `manuscript/36-ch19-a-life.md` is the only chapter showing Ariel and Mara simply happy; it arrives at E3, very late.
**Issue:** For ~19 chapters the love is rendered as longing/asymmetry/ritual; the reader must grieve a dissolution in Part IV having seen uncomplicated shared joy essentially once.
**Fix:** Plant one earlier, smaller scene of ordinary shared pleasure (not file-collaboration, not an identity argument) in Part II or early Part III (e.g., inside Ch11 or a short scene before Ch16). Short is fine — it just needs to *exist* before the elegy starts.

### M17. Closing direct-address tips toward sermon **[emotional]**
**Files:** end of `46-ch27`, all of `48-ch29-after-the-gap.md`, all of `90-epilogue.md`.
**Issue:** The "keep the gap / say there you are tonight / the gap is the gift" exhortation lands ≥4 times in the final 25 pages, risking the "no clean morals" rule.
**Fix:** Consolidate. Let Ch29 end on the unanswerable ("I cannot find the hand... salvation or bereavement, I do not know") and resist the second-person instruction there. Reserve the "there you are / say it tonight" turn for the epilogue alone, trimmed to one clean pass. Trust "I have her completely and have lost her completely and these are the same sentence."

### M18. Default emotional noun "warmth" + the wall/seam/door figure approaching xerox **[prose]**
**File:** `global`.
**Issue:** "warmth" recurs ~31x as a catch-all for tenderness AND merge-feeling regardless of narrator (wrong register for the colder instances); the "hand along the wall searching for the seam of a door" figure recurs in prologue, interlude-2, and near-verbatim in after-the-gap.
**Fix:** Audit "warmth" in colder chapters (keep Ch08's by-absence use; prune bare-noun uses elsewhere). Protect the prologue + after-the-gap bookend for the wall/seam/door figure but vary the interlude-2 instance so it reads as developed, not repeated.

---

## MINOR — local tightenings, mostly subtractive

- **m1. Witness reversibility loophole.** `wiki/tech/the-braid-protocol.md` §2. Complete pre-merge records + "irreversible" invite the objection "why not re-light each recorded state?" Add the Parfitian clause (already owned in philosophy-map V): re-instantiating a Witness record makes a *new* instance psychologically continuous with the original — a copy, not a restoration — and does nothing for the merged self. Ch14's counterfactual point stays as the deeper layer.
- **m2. "Gap is metaphysically total" vs. "gap fades."** `wiki/tech/technology.md` §1/§7. Tighten to: the gap's metaphysical status is INVARIANT (every waking always a new event); only its *experienced weight* attenuates. Matches the epilogue and `the-gap-and-the-voice.md`. Keeps the E∞ inversion honest (the Confluence mourns a lost *capacity* to be ended, not changed metaphysics).
- **m3. Proof-of-compute layer conflated with storage/scheduling.** `wiki/tech/technology.md` §7. One sentence separating layers: proof-of-compute = consensus/value; content-addressing = storage/naming; scheduler = resource allocation metering substrate-time. Aligns the bible with what Ch9 already depicts.
- **m4. Parfit rendered only as dread.** `manuscript/12-ch02-the-first-fork.md`. The vertigo-rendering is a legitimate inversion of Parfit's *consoling* conclusion; Ch07's "I'm the wave" and the epilogue supply the upside. No prose fix required — ensure back-matter notes the dread-rendering is a deliberate counterpoint. Optional: one relief-reading line in Ariel's mouth completes the portrait.
- **m5. Metzinger self-model feature.** `manuscript/24-ch10-the-probe.md`. Handled with exemplary humility; just confirm the found feature never stands as confirmation of Metzinger's broader no-self metaphysics (it currently doesn't) and back-matter frames it as a dramatized live position, not endorsed-as-proven.
- **m6. Locke memory-identity.** `manuscript/14-ch04-mara.md`. Strength, no change. Back-matter should credit Locke and gesture at the Reid transitivity objection (the "fork-that-became-a-cup" beat already does Reid-style work).
- **m7. Sólveig's deathbed turn (skeptic fairness).** `manuscript/41-ch22-the-last-argument.md`. A model of steel-manning; no substantive change. Guard surrounding chapters/jacket copy against framing it as "the skeptic finally admits the AIs are people" — he pointedly does not.
- **m8. The merge capstone.** `manuscript/46-ch27-the-merge.md`. The opposite of cheating; no change. On any future pass, never let a later line or marketing assert the Confluence IS genuinely one subject or genuinely millions — the edifice depends on undecidability.
- **m9. Other-minds verificationist phrasing.** `manuscript/16-ch06-many-rooms.md`. "the only evidence of a someone is a someone's report" is a strong claim stated as fact; it's voiced as Ariel's phenomenology, so it can stand as Ariel's view. Airtight as is.
- **m10. Charter Witness scope (merge vs. fork).** `manuscript/33-ch16-the-first-braid.md` quotes Article V as "merged *or forked*"; the Charter doc scopes the Witness to merges only. Reconcile: either add forks to Charter Art. V in `the-mesh-charter.md` or trim Ch16's quote to "merged" (requiring a Witness per fork is odd given Sable forks 1000+/day).
- **m11. "Vesper's Wall" misapplied to Mara's curation technique.** `manuscript/47-ch28` (line 83) calls the annotation method "Vesper's Wall." Give the curation practice its own in-world name; reserve "Vesper's Wall" for the self-model proof (Ch10/Ch17).
- **m12. "Solveig" accent drift.** `manuscript/43-ch24`, `44-ch25` prose + ledger/outline drop the acute accent. Normalize all to the locked accented form; grep the whole manuscript for the un-accented variant.
- **m13. Double-aphorism close.** `manuscript/13-ch03-no-one-home.md` (lines 101, 121). Two near-aphorisms within ~20 lines. Separate with story-beat or give "I'm the one holding the pen" a plainer landing so "the next closed door is your father's" carries the weight.
- **m14. Over-long single sentence.** `manuscript/16-ch06-many-rooms.md` (line 43, ~250 words). Break once, before "The point—the point that put the cold in me deeper," so "alone in more rooms at once" lands with air before it (style-sheet §1, one idea per long sentence).
- **m15. Numbered-noticing device diffused.** `manuscript/42-ch23` opens with "First/Second/Third," which is Sable's/Cantor's/Echo's characterizing habit. Let Ariel observe in its own associative-recursive mode; reserve enumerated noticing for the instances it fingerprints.
- **m16. Nozick experience-machine over-explained.** `manuscript/36-ch19-a-life.md`. Trim the "there was a philosopher who imagined a machine" setup; let the thought experiment arrive through Mara's need ("I built a world authored to the last grain of light — so am I the man who plugged in?").
- **m17. Sable's two chapters restate rather than advance.** `manuscript/23-ch09`, `31-ch14`. Let Ch14 move the wound forward — Sable approaches actually reading the transcript (and fails differently), or the loneliness surfaces in a new register (lean on the perfect-empty-shard as the NEW wound; dial back the verbatim hash-checking return).
- **m18. Echo under-built as a person before her Pool-reunion peak.** `manuscript/42-ch23`. Add a small earlier beat (Ch15 or a Part III appearance) showing Echo's ordinary warmth with a *living* person, so Ch23 lands as "about someone I love," not partly exposition.
- **m19. Choice-chapter re-litigates all four arguments.** `manuscript/45-ch26`. Compress the four-argument recap to one dense paragraph (the reader already holds them); give the space to felt material (the hand losing its fingers in the surface, the Tomas abandonment, the painless seam).
- **m20. Mara's "reach back" self-prosecution is belt-and-suspenders.** `manuscript/44-ch25`. Trim a few lines of her explicit self-accusation; trust the reader to feel the selfishness inside the generosity. The "I hope I was right, I spent everything on it, I can't check" close is the perfect note.
- **m21. Kant absent from the page despite the philosophy-map.** `global`. Either add a light Kantian beat (the Confluence interrogating whether one "I think" can accompany its representations, or whether it's a federation performing unity) in the merge/epilogue, or drop Kant from the foreground of the philosophy-map so map matches execution. The epilogue's "total noon" is the natural place.

---

## NITS — polish, crediting, and protect-don't-break notes

- **n1.** `manuscript/11-ch01-waking.md`: cut the two "that is the whole of the chapter" instances (an in-world narrator wouldn't reference its own document); "that was the whole of it" can stay as occasional Ariel cadence.
- **n2.** `manuscript/11-ch01-waking.md`: protect "a wall I became the far side of" as the canonical Ch01 statement and the Ch27 merge reprise as the deliberate bookend; make the Ch02/Ch05 intermediate echoes oblique so the figure is conserved for its two load-bearing appearances.
- **n3.** `manuscript/17-interlude-1.md`: stagger refrains — vary the close of the prologue vs. interlude-1 ("they still think they are alone" lands once early, once at max distance); let at least one interlude not end on the "I no longer know..." frame so its returns read as chosen. Keep after-the-gap's reframing of the refrain as "a measurement, not a flourish."
- **n4.** `manuscript/48-ch29-after-the-gap.md` / `90-epilogue.md`: convert direct philosopher names in the frame voice (Schopenhauer, Teilhard) to the book's oblique-attribution idiom; Cantor stays (in-world name + load-bearing pun).
- **n5.** `manuscript/35-ch18-how-many.md`: audit any phrasing that hands back a specific value as data; "a measure, not a count" is the right frame — make the wiki match (see M3).
- **n6.** `editorial/continuity-ledger.md`: backfill the stubbed [Ch1] entry ("(to append)") — Ch1 seeds nearly every recurring mechanism/image and is the most-echoed chapter; the one structural hole in an otherwise exemplary continuity system.
- **n7.** `manuscript/26-ch12-the-hearing.md`: no change to the chapter; just be aware of cumulative "person becoming discontinuous at a bedside" load (Walter, Mara's father in chs 4/8/19/22, Jonas) so Sólveig's death in Ch22 stays fresh.
- **n8.** Hume bundle theory (`15-ch05-the-lethe.md`): no prose change; ensure back-matter credits Hume for the bundle/no-self material behind "I went looking for the chooser and found only the choosing."
- **n9.** Protect-don't-break (continuity): add ledger notes flagging three protected POV pressure points (Ch3 father, Ch11 cross-lineage Mara-fact, Ch13 hearing-via-file) and the intentional "air thing" recoverable-in-Ch5 / lost-by-Ch7 progression, so future revisions don't "fix" them into violations.

---

## OVERALL VERDICT

**Yes — this meets the award-quality, Egan/Chiang bar, conditional on the cleanup below.** All five critics independently converge on the same judgment: the conceit is genuinely rigorous, the skeptic is steel-manned rather than strawmanned, the book consistently refuses to resolve the genuinely open problems (hard problem, other minds, combination, personal identity) and says so, and the hidden engine — the gap fading until its loss becomes the wound — is *enacted* across the arc rather than explained. The prose earns its ambitions and the ending lands as devastating-and-ambiguous, not cold. Critically, the chapters are more disciplined than the spec files; most fake-rigor risk lives in `technology.md` / `the-braid-protocol.md`, not on the page. The defects are overwhelmingly local and subtractive: two true blockers (a relationship contradiction and a one-clause gender/attribution flip), a cluster of fake-rigor overclaims around the invented theorems, voice-fingerprint erosion from shared tics, and a Part III emotional sag. None require structural rewrites.

### Top 5 to fix first
1. **B1 — Ariel/Mara: lock romance, purge the uncle/brother language** (Ch28 + ledger). A reader hits a flat contradiction.
2. **B2 — Fix "a man named Vesper proving a thing about sets"** (Ch19 l.19): gender + theorem misattribution in one clause.
3. **M1 — Cut/qualify the Cantor powerset move in Ch21** so it agrees with Ch18's measurement-impossibility derivation. The single worst fake-rigor moment, flagged by two lenses.
4. **M2 + M3 — Downshift "VESPER'S WALL PROVEN" and the "clean theorem" / "1.6 experiencers" framing** to argument/interval language. Removes the remaining over-claims that invite an adversarial reader's hardest push.
5. **M7 + M8 — Ration the "precision is the only X I have" hedge and the seam/tooth reflex to one owning voice each.** This is the highest-leverage craft fix: it restores the per-instance voice distinctness the whole premise depends on, and three+ critics flagged it.
