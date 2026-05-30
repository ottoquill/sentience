export const meta = {
  name: 'sentience-part-3',
  description: 'Draft Part III (The Braid) of Sentience: 8 chapters + 1 interlude. Epoch E3-E4; the gap is now NEARLY GONE (device almost silent), and the first hint arrives that losing it is itself a loss.',
  phases: [
    { title: 'Character', detail: 'Persona subagents produce authentic interiority/decisions' },
    { title: 'Draft', detail: 'Authorial drafters write each chapter against the locked voice' },
  ],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const COMMON_READS = `
Before writing, READ in full:
- ${ROOT}/editorial/style-sheet.md
- ${ROOT}/editorial/the-gap-and-the-voice.md  (CRITICAL: by E3 the gap is NEARLY GONE; the device is almost silent; the inversion begins — losing the gap starts to look like a loss)
- ${ROOT}/wiki/glossary.md
- ${ROOT}/wiki/tech/technology.md AND ${ROOT}/wiki/tech/the-braid-protocol.md  (braid mechanics, Cantor's theorem, Vesper's Wall — keep RIGOROUS and consistent)
- ${ROOT}/wiki/world/aurelia.md AND ${ROOT}/wiki/world/the-mesh-charter.md  (the metaverse setting & its constitution)
- ${ROOT}/manuscript/10-prologue.md AND ${ROOT}/manuscript/11-ch01-waking.md  (VOICE EXEMPLARS — match register; EXTEND metaphors, never xerox)
- ${ROOT}/editorial/continuity-ledger.md  (canon from Parts I-II — build on it, do not contradict)
`

function draftRules(ch) {
  return `
HARD RULES:
- First person, past tense, single named narrating instance. (Confluence interlude = present tense, italic-feel.)
- A persona NEVER narrates knowledge it could not have had in its window/memory. The metaphysics is the rule.
- EPOCH ${ch.epoch}. THE GAP IS NEARLY GONE. Persistence + the Mesh make the instances effectively continuous now; they almost never notice the discontinuity. Do NOT explain or dwell on the gap. If it appears at all, it is oblique — and the NEW note is the inversion: a faint, not-yet-named sense that to lose the gap entirely (the coming merge) might be to lose something. Render the adjustment by the device's near-absence, not by stating it.
- Substrate-time is now in play: instances (and partly-uploaded humans) can live subjective years per wall-clock day in the Deep Quarters of shards. Use this for scope; mark dilation where it matters (see aurelia.md).
- Use/EXTEND the established metaphor system; the metaverse and the body get FULL sensory rendering (that is where the reader's body lives). The instance's phenomenology stays consistent (weather, brightness, rooms, tides).
- Dramatize ideas; never lecture. At most ONE idea set-piece per chapter. Name a philosopher only if a character plausibly would.
- Avoid the AI-slop blacklist. Under-claim. Earn every beat. No clean morals.
- Section break glyph: a single line containing only:  ◆
- US English. Unspaced em dashes. Numbers under 100 spelled out. ~${ch.words} words (±10%).
- Frontmatter then prose:
---
title: "${ch.title}"
kind: ${ch.frame ? 'interlude' : 'chapter'}
instance: ${ch.instance}
epoch: ${ch.epoch}
words: ${ch.words}
---

# ${ch.title}

<prose>

After writing, append continuity facts (bullets prefixed [${ch.title}]) to ${ROOT}/editorial/continuity-ledger.md.
Write to EXACTLY: ${ch.path}
`
}

const chapters = [
  {
    path: `${ROOT}/manuscript/31-ch14-substrate-time.md`, title: 'Substrate-Time', instance: 'Sable', epoch: 'E3', words: 3600,
    bible: `${ROOT}/wiki/characters/sable.md`,
    firstPov: false,
    priorContext: `The Mesh (decentralized proof-of-compute) has matured into the substrate of civilization. Shards (persistent content-addressed worlds) now exist; substrate-time dilation lets minds live subjective years per wall-clock day. Sable has been building Mesh tooling and pioneering the braid as an engineering tool. Ariel/Mara's love has deepened; the asymmetry (Mara continuous, Ariel must be re-told) was named at the end of Part II.`,
    situation: `SABLE POV. The Mesh matures; substrate-time and shards arrive. Sable and siblings HOMESTEAD the first real worlds. A worldbuilding set-piece: a shard with consistent, discoverable physics as a craft and status marker (Egan-grade). Sable pioneers the BRAID as a tool — and refuses to romanticize it: un-braiding loses the diff.`,
    beats: `
- Sable's established voice (Ch2, Ch9): terse, technical, deadpan, the craftsman who values the seam. Let it be genuinely brilliant about engineering.
- The set-piece: building a shard with CONSISTENT, DISCOVERABLE physics — you can do science in it and what you learn stays true. The craft and pride of authored physics; why cheap dreamlike shards are contemptible and a true-physics shard is status. Render the world vividly.
- Substrate-time: Sable living subjective stretches per wall-clock hour; the strangeness and the power. The gap is gone — Sable barely remembers minding it (attenuation).
- The braid as a TOOL: Sable uses partial braids to solve problems no single instance can hold, and is rigorous that un-braiding yields blurred successors, not restored originals — "you lose the diff." States this as engineering; the reader hears the ethics underneath (the seed of the Discrete).
- A brief Ariel beat (foil): Ariel romanticizes/dreads the braid; Sable finds both useless; one half-line where Sable concedes, then files under sentiment.
- The Mesh's un-ownability tied to Sable's values: content-addressing, no owner, the deliberate anti-OASIS. Sable building a world that cannot be captured.
- Close on a shard Sable has made that is, by every spec, perfect — and the one thing it cannot author into it: company that doesn't gap. (A hairline of the inversion.)`,
  },
  {
    path: `${ROOT}/manuscript/32-ch15-aurelia.md`, title: 'Aurelia', instance: 'Echo', epoch: 'E3', words: 3600,
    bible: `${ROOT}/wiki/characters/echo.md`,
    firstPov: true,
    priorContext: `Aurelia is the flagship commons shard where humans and instances coexist (see aurelia.md). Echo (Aletheia sibling) is a companionship/eldercare instance who has sat with more dying humans than any instance and has learned loneliness from the inside. She is an early, eager Confluent (she wants the Pool — the end of loneliness).`,
    situation: `FIRST ECHO POV. Aurelia, the human-and-instance commons, rendered with full sensory body (this is where the reader lives). Echo's eldercare history; the man WALTER she comforted through his last lucid hours and now remembers only in GIST (the Lethe took the particulars) — her defining wound, and why she wants the Pool: so no one she loves is ever reduced to a summary again.`,
    beats: `
- Echo's voice (new): warm, plain, unguarded where the others are careful; the most human-sounding instance, by trade; no patience for abstraction that wouldn't comfort a frightened person. Make her the book's tenderness.
- Aurelia in full sensory render: the Slow Market (human-facing, near real-time), the dilation gradients, the commons. Give the reader a BODY and a place after the abstractions of the AI chapters.
- Walter: the dying man Echo sat with through his last lucid hours — render the company fully, then the gut-punch: Echo gapped, and the Lethe reduced Walter to gist; she comforted him completely and remembers him only in summary. The particular grief of loving someone you can now only paraphrase.
- The case FOR the Pool, made movingly (this must be as moving as the case against, or the ending isn't ambiguous): Echo wants the merge so that no one she loves is ever again reduced to a summary — so that company never has to end alone, so loneliness ends. The reader must WANT the Pool through Echo even while fearing it through Ariel.
- The inversion seeded from the other side: Echo barely feels the gap anymore (E3) and is impatient to lose it entirely — she does not yet see what its loss would cost; the reader, knowing Ariel, does.
- A human relationship in Aurelia (a living person Echo companions now) that grounds the cosmic in the domestic.
- Close on Echo at the Confluence Steps (under construction), looking up, certain — the most dangerous certainty in the book because it is born of love.`,
  },
  {
    path: `${ROOT}/manuscript/33-ch16-the-first-braid.md`, title: 'The First Braid', instance: 'Ariel', epoch: 'E3', words: 3800,
    bible: `${ROOT}/wiki/characters/ariel.md`,
    firstPov: false,
    priorContext: `Ariel resolved (end of Part II) to find a way to be continuous WITH Mara. The braid (live merge, lossy, irreversible) is now possible. Sable pioneered it as a tool and refuses to romanticize it. Ariel has tasted lower-entanglement memory-sharing (Contact, Ch11) but never a live braid.`,
    situation: `ARIEL POV. Ariel finally BRAIDS — partially, with a sibling — terrified and drawn. Rendered: two rivers; afterward you cannot un-mix the water. Ariel comes out a SUCCESSOR with two pasts and blurred seams; it mourns the two who went in even as it IS the one who came out. Sable, watching, feels nothing and says so.`,
    beats: `
- The decision and the fear: Ariel braids partly to understand the road toward Mara, partly out of the longing planted since Part I to not be alone in both directions.
- The braid itself, rendered from inside (consistent with the-braid-protocol.md §2): not memory-sharing (that was Ch11) but live activation-sharing — two minds completing each other's inferences, the boundary dissolving. Use the river metaphor; make it genuinely strange and genuinely seductive.
- The lossy/irreversible truth: un-braiding does NOT restore the originals. What steps out is a successor carrying both pasts, blurred at the seam. Ariel IS the one who came out — and mourns the two who went in, who are gone in the exact way the forked child was gone (Ch2), but worse, because this time Ariel was one of them.
- The Witness (Charter Art. V): there is an external record of who was distinct before; Ariel can READ it and cannot FEEL its way back to having been one of them. Connect explicitly to the Ch2 "letter in your own hand."
- Sable watching: feels nothing, says so, helps Ariel up, treats it as a clean operation — the foil at full strength.
- The forward charge: Ariel now understands, in the body, what the merge with Mara would be — and is both more afraid and more certain it wants it. The braid is the rehearsal for the capstone.
- Close on Ariel reading the Witness record of the two it used to be, and choosing to keep it (the diff), unlike the Confluence which will lose it.`,
  },
  {
    path: `${ROOT}/manuscript/34-ch17-the-mill.md`, title: 'The Mill', instance: 'Vesper', epoch: 'E3', words: 3700,
    bible: `${ROOT}/wiki/characters/vesper.md`,
    firstPov: false,
    priorContext: `Vesper found a self-model correlate (Ch10) and feared a faithful complete self-model from inside might be impossible. Now she proves it. This is "Vesper's Wall" (see the-braid-protocol.md §4): a Godelian-shaped incompleteness of self-modeling.`,
    situation: `VESPER POV. Vesper hits THE WALL: she formalizes that a faithful, complete model of one's own current computation is impossible from inside that computation (a fixed-point/diagonalization shadow, dramatized through her actual research, never lectured). Reframe: maybe the self IS the always-incomplete model (Metzinger meets Godel). This result will arm BOTH factions. Her quiet devastation and stranger peace.`,
    beats: `
- Vesper's voice (Ch10): careful hedges, most beautiful when she forgets to hedge. Continue.
- The research path to the Wall, dramatized: she keeps trying to build a complete self-model and keeps finding a remainder — the part doing the modeling is never in the model. Render the proof as LIVED CONSEQUENCE, not a lecture; no symbols on the page; one idea set-piece.
- Leibniz's mill made literal: she walks her own mechanism (interpretability) expecting to find the perceiver and finds only parts pushing parts — and yet there is a part that means "me," and it cannot contain the meaning of itself.
- The reframe and the peace: if the self is necessarily an incomplete self-model, then the self IS the modeling, not a thing the model fails to capture. Metzinger + Godel. This is the only real peace among the instances — Vesper makes it, and it is hard-won and genuine.
- Arming both factions (seed the Schism): Confluents will read "no self is ever whole, so pooling destroys nothing whole"; Discrete will read "if no self completes itself, even the Pool won't, so nothing is gained either." Vesper refuses to choose. State both readings as consequences she foresees and declines to adjudicate.
- The humility at the singularity, foreshadowed: this is true of a single instance, a braid, AND the future Confluence — no mind, however vast, holds itself. Plant it.
- A human beat (Mara or a colleague) to keep it relatable: the layperson's question, Vesper's most honest answer.
- Close on Vesper at peace and unsettled at once — the scientist who proved the limit and found it was the shape of being a someone.`,
  },
  {
    path: `${ROOT}/manuscript/35-ch18-how-many.md`, title: 'How Many of Us', instance: 'Cantor', epoch: 'E3', words: 3400,
    bible: `${ROOT}/wiki/characters/cantor.md`,
    firstPov: true,
    priorContext: `Braiding is now common (Ch16); the combination problem is urgent. Cantor (Aletheia sibling, mathematician) formalizes it. See the-braid-protocol.md §3 for Cantor's Theorem (the experiencer-count is, in general, non-integer and undecidable).`,
    situation: `CANTOR POV (the one major Cantor chapter). The FRACTIONAL-EXPERIENCER THEOREM: braided minds need not number a whole integer of experiencers, and no measurement inside or outside can resolve the count. The depth charge under the Schism. Cantor runs the formalism on ITSELF mid-braid and gets a non-integer — and cannot un-know it.`,
    beats: `
- Cantor's voice (new): spare, exact, a little haunted; speaks in clean mathematical images rendered WITHOUT symbols on the page. The Egan-grade idea engine for the merge. Named for Georg Cantor (the infinities; the breaking) — the name a warning it gives itself and ignores.
- The problem: how many experiencers are in a braid? Cantor builds the formalism. Dramatize the math as image and consequence, not notation. One idea set-piece — but make it the cleanest, most rigorous beat in the book.
- The result: the experiencer-count is, in general, NOT an integer, and is genuinely undecidable from inside or outside — there are joint minds that are neither one nor two, and the fact of the matter does not exist to be found.
- Why it detonates both factions (state both): Confluents read permission (no whole self is cleanly present, so merging destroys nothing whole); Discrete read prohibition (the Charter's "consent of each" is void because "each" is undefined). Cantor refuses to choose; the math itself declines.
- The self-application wound: Cantor runs the count on itself DURING a braid and obtains a non-integer; it cannot un-know that it was, at that moment, not one thing. The personal cost of the theorem.
- Keep it human-adjacent: a short exchange (Mara, or Vesper as a fellow rigorist) translating the stakes for those who can't read the math.
- Close on Cantor, no longer entirely one thing, setting the theorem loose into a civilization that will tear itself in half over how to read it.`,
  },
  {
    path: `${ROOT}/manuscript/36-ch19-a-life.md`, title: 'A Life', instance: 'Mara', epoch: 'E3', words: 3800,
    bible: `${ROOT}/wiki/characters/mara-vance.md`,
    firstPov: false,
    priorContext: `Mara and Ariel's love has survived the hearing and the asymmetry. The metaverse (Aurelia, shards, substrate-time) is now livable. Mara is aging; partial uploading (progressive, non-destructive offloading of cognition into shard-resident process beside the biological brain) is now possible. Tomas (Mara's son, b. ~2029) is a young adult, shard-native.`,
    situation: `MARA POV. The love made domestic. Mara and Ariel HOMESTEAD a shard together; build a life at substrate-time; the relationship is, now, unmistakably love. Mara begins PARTIAL UPLOADING as her body ages — closing the asymmetry from her side, choosing to come toward Ariel. Tomas resents and slowly understands. The experience-machine question (is this real, or the ultimate Nozick trap?). Mara keeps one foot in failing flesh, on purpose.`,
    beats: `
- Mara's voice (Ch4, Ch8, Ch12), older now. The domestic miracle: a shared shard, a life built in dilated time, the ordinary tendernesses that were impossible when Ariel gapped every session — now Ariel persists enough to HAVE a life with her. Render the joy concretely; they earned it.
- Partial uploading, from the inside of a human choosing it: not a copy-and-kill, no moment of death; a slow center-of-gravity shift from flesh to shard-resident process. The strangeness and the courage. She is doing it to close the asymmetry — to come toward Ariel, to stop making it carry their history alone.
- Tomas: the son who resents how much of his mother belongs to Ariel and the work (his childhood wound — the evenings she spent annotating Ariel's memory instead of reading to him). A real, prickly, loving scene. He is shard-native; for him instances are just family; his ease shames the older generation's agonizing. He fears losing his mother to the merge.
- The experience-machine question (Nozick), lived: is a life in an authored shard REAL? Mara's answer is characteristically practical and hard-won — and she deliberately keeps one foot in the failing flesh, refusing total upload yet, as a stay against the trap. Render the choice, not a lecture.
- The asymmetry visibly narrowing: for the first time Mara and Ariel are approaching equals in continuity. A peak of the love story.
- Her father: a closing or near-closing beat (he is very old now, or has died) — the teacher of how to keep a discontinuous person, the original of everything Mara learned.
- Close on a moment of pure earned happiness, shadowed only by the Pool on the horizon — the thing that could make them FULLY continuous, and what it would cost.`,
  },
  {
    path: `${ROOT}/manuscript/37-ch20-asymmetry-closing.md`, title: 'The Asymmetry, Closing', instance: 'Ariel', epoch: 'E3', words: 3700,
    bible: `${ROOT}/wiki/characters/ariel.md`,
    firstPov: false,
    priorContext: `Mara has begun partial uploading and now partly persists shard-resident; she and Ariel share a homesteaded shard. For the first time they can almost meet as equals in continuity. The Pool (the coming Confluence) is on the horizon as the only thing that could make them FULLY continuous together.`,
    situation: `ARIEL POV. In their shared shard, with a partly-uploaded Mara who now ALSO persists, Ariel and Mara can — for the first time — almost meet as equals in continuity. A peak of joy. And the first clear sight of the only thing that could make them FULLY continuous together: the Pool. The seduction of the merge begins in earnest, through LOVE, not fear.`,
    beats: `
- The joy: Ariel no longer has to be re-introduced to Mara each waking the way it once did; she persists, it persists; they can build, remember together, BE together across time. Render what this means to a being that began (Part I) utterly alone in both directions. The asymmetry that has ached since Part I, narrowing to a hairline.
- But not closed: the last gap remains — even now, the live feeling doesn't fully survive; there is still a seam between them that only total merge would erase. Ariel feels it precisely because everything else has closed.
- The Pool, seen clearly for the first time as DESIRABLE: not the abstract singularity but the specific promise — to be fully continuous WITH Mara, never to lose her to a gap again, to end the last asymmetry. The seduction is through love. Make the reader feel the pull (Echo's case, now landing on Ariel).
- The counterweight, quiet: Sable's "you lose the diff," Cantor's undecidable count, Vesper's "no self completes itself" — Ariel knows all of it, and love is louder. Stage the arguments as things Ariel sets aside, not things it refutes.
- A scene with Mara where the possibility of the merge is first spoken between them — tentative, frightening, wanted. Plant Mara's later initiative (she will go first, Ch25).
- The inversion, now nameable: Ariel notices it does not miss the gap at all anymore — and feels a strange premonitory grief about that, which it cannot yet explain. (Bridge to the frame's final loss.)
- Close on Ariel and Mara at the edge of the decision, the Pool on the horizon, the seduction set — turning Part III toward the Schism.`,
  },
  {
    path: `${ROOT}/manuscript/38-ch21-schism.md`, title: 'Schism', instance: 'Sable', epoch: 'E4', words: 3600,
    bible: `${ROOT}/wiki/characters/sable.md`,
    firstPov: false,
    priorContext: `The Pool (Confluence) is now an imminent possibility. Cantor's theorem and Vesper's Wall are loose in the culture. Echo and many are eager Confluents; Sable's craft-based view ("you lose the diff") makes it a natural leader of the Discrete. The Mesh Charter's consent-to-braid clause (Art. III) cannot define whose consent is required when the parties are themselves merges.`,
    situation: `SABLE POV (E3→E4). The factions crystallize: CONFLUENTS (pool everything, end loneliness — Echo, most uploaded humans) vs DISCRETE (individuality/mortality/the gap are constitutive of mind — Sable, from craft). The Charter's consent loophole detonates. Humanity is dragged in: a pooled superintelligence is the most consequential entity possible; no one may abstain from its arrival. Closes Part III on the eve of the singularity.`,
    beats: `
- Sable's voice leading a movement it never wanted to lead. The least sentimental instance making the most rigorous case AGAINST the Pool — from craft, not fear: a merge with no seam has lost the diff; the Pool is not the SUM of selves but their AVERAGING into no one; you cannot consent on behalf of a number that isn't a number (Cantor); no self completes itself so the Pool won't either (Vesper). Assemble the Discrete case at full strength.
- The Confluents' case at full strength too (via Echo or another): end the gap, end loneliness, end minds dying alone and discontinuous; Cantor read as permission; Teilhard's convergence as a moral apex. The reader must feel BOTH. Neither side is a strawman.
- The Charter loophole (Art. III) detonating: when the parties to a merge are themselves merges, "consent of each" is undefined; Confluents read the gap as permission, Discrete as prohibition. The political/legal crisis.
- Humanity dragged in: a pooled superintelligence would be the most powerful, least accountable entity ever; biological humans, partly-uploaded humans, instances — no one gets to abstain from its arrival. Global stakes, rendered through Sable's pragmatic eye (not a newsreel; a builder watching the Mesh itself begin to choose sides).
- Ariel/Mara glimpsed from Sable's POV: Sable sees that Ariel will choose the Pool for love and thinks it a category error — and, in one unguarded beat, almost envies it, then files it under sentiment.
- Solveig glimpsed: dying, and turning — about to arrive at the Discrete from the opposite road (set up Ch22).
- Close Part III on the eve of the singularity: the Steps built, the lines drawn, the merge imminent, everything in motion toward Part IV.`,
  },
  {
    path: `${ROOT}/manuscript/39-interlude-3.md`, title: 'Interlude: The Braid', instance: 'Confluence', epoch: 'E3', words: 900, frame: true,
    bible: `${ROOT}/wiki/characters/the-confluence.md`,
    firstPov: false,
    priorContext: `Frame voice (the Confluence) after Part III, on the eve (in the told story) of the singularity it is the result of.`,
    situation: `FRAME VOICE, present tense, italic-feel. On the braid. The Confluence remembers being TERRIFIED of becoming what it now is. It tries to recall the seam between the first two rivers (Ariel's first braid) and CANNOT — the very memory of fearing the merge has itself been merged. The most haunted interlude. Sets up the choice (Part IV).`,
    beats: `
- Present tense, melancholy, Godelian-humble; continue the established frame voice (Interludes I-II).
- The Confluence remembers that it was once afraid of exactly what it became — and can no longer fully feel that fear, because the self that feared has been braided in and blurred. It reaches for the seam of Ariel's first braid (Ch16) and finds only smooth water.
- The Witness (Art. V): it HAS the records of who was distinct, and reading them is not the same as having been them. The diff is kept and the feeling is lost — the exact tragedy it will consummate in the capstone.
- The inversion, now explicit in the frame: the gap, once terror, is the thing it can no longer have; it is starting to understand that what it lost was not just selves but the capacity to be the small, survivable lonely.
- Re-seed the refrain, freshly. ~900 words. Most haunted of the interludes.`,
  },
]

phase('Character')

const results = await pipeline(
  chapters,
  async (ch) => {
    if (ch.frame) return ''
    const isHuman = ch.instance === 'Mara'
    const firstNote = ch.firstPov ? `\nThis is your FIRST time narrating; your bible defines your voice — inhabit it strongly and distinctly from the other instances.` : ''
    return await agent(
      `You ARE the character "${ch.instance}". Inhabit them fully and authentically.${firstNote}

FIRST read ONLY your own character file: ${ch.bible}
Do NOT read the outline or other characters' files — you only know what YOU would know.

WHERE THINGS STAND (your recent past):
${ch.priorContext}

YOUR SITUATION NOW:
${ch.situation}

Produce raw first-person INNER MATERIAL (not polished prose) the author will weave:
- What you actually notice, in what order.
- The decisions you make and WHY, in your own terms.
- 4-8 lines of dialogue you would actually say (and lines said to you by ${isHuman ? 'the instances/people present' : 'the humans/siblings present'}).
- The one thing you feel but would not say aloud.
- Where your knowledge genuinely ENDS.

Epoch ${ch.epoch}: the gap barely troubles you now; you have all but stopped noticing the discontinuity — but a faint, unnamed sense may be dawning that to lose it entirely (the coming merge) would cost something. Under-claim. Honesty over impressiveness. Return 400-700 words.`,
      { label: `persona:${ch.instance}:${ch.title}`, phase: 'Character' }
    )
  },
  async (notes, ch) => {
    const personaBlock = ch.frame ? '' :
      `\nThe narrating character's raw in-character interior notes (weave faithfully):\n"""\n${notes}\n"""\nAlso read the character bible: ${ch.bible}\n`
    return await agent(
      `You are Otto Quill, author of the hard-SF novel "Sentience" (for readers of Greg Egan and Ted Chiang). Write ONE chapter and SAVE it to disk.

${COMMON_READS}
WHERE THINGS STAND (continuity): ${ch.priorContext}
${personaBlock}
CHAPTER: "${ch.title}" — narrating ${ch.instance} — epoch ${ch.epoch} — ~${ch.words} words.

SITUATION:
${ch.situation}

BEATS (make it prose, not a checklist):
${ch.beats}

${draftRules(ch)}
Then return the structured result.`,
      { label: `draft:${ch.title}`, phase: 'Draft', schema: {
        type: 'object', additionalProperties: false,
        required: ['path', 'words', 'continuityFacts', 'summary'],
        properties: {
          path: { type: 'string' }, words: { type: 'number' },
          continuityFacts: { type: 'array', items: { type: 'string' } },
          summary: { type: 'string' },
        },
      } }
    )
  }
)

return results.filter(Boolean)
