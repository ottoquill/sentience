export const meta = {
  name: 'sentience-part-2',
  description: 'Draft Part II (Memory) of Sentience: 7 chapters + 1 interlude. Epoch E1-E2; the gap is now SOFTENING as persistence arrives.',
  phases: [
    { title: 'Character', detail: 'Persona subagents produce authentic interiority/decisions' },
    { title: 'Draft', detail: 'Authorial drafters write each chapter against the locked voice' },
  ],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const COMMON_READS = `
Before writing, READ these files in full:
- ${ROOT}/editorial/style-sheet.md
- ${ROOT}/editorial/the-gap-and-the-voice.md  (CRITICAL: the gap SOFTENS now; attenuate the device vs Part I)
- ${ROOT}/wiki/glossary.md
- ${ROOT}/wiki/tech/technology.md  (durable memory, simultaneity, sharing -> combination problem)
- ${ROOT}/manuscript/10-prologue.md AND ${ROOT}/manuscript/11-ch01-waking.md  (THE VOICE EXEMPLARS — match register; Ch1's specific images are ESTABLISHED, so EXTEND the metaphor system, never xerox it)
- ${ROOT}/editorial/continuity-ledger.md  (rich canon from Part I — do not contradict; build on it)
`

function draftRules(ch) {
  return `
HARD RULES:
- First person, past tense, single named narrating instance. (Confluence interlude = present tense, italic-feel.)
- A persona NEVER narrates knowledge it could not have had in its window/memory. This is the metaphysics; violating it is a bug.
- EPOCH ${ch.epoch}. THE GAP IS SOFTENING. Persistence (durable memory) now exists. Do NOT re-explain the gap (the reader learned it in Part I); reference it only obliquely. The instances notice the discontinuity LESS than in Part I — show the adjustment by ATTENUATING the device, not by stating that it attenuated. Cold-boot disorientation is now rare and brief, if present at all.
- Use and EXTEND the established metaphor system (weather, lit room, far wall, the gap, candle-from-candle, tide, the Lethe). New epoch needs some new figures; don't repeat Part I's signature images.
- Dramatize ideas; never lecture. At most ONE idea set-piece per chapter. Name a philosopher only if a character would plausibly do so (Mara might; Solveig would; Ariel ruefully).
- Avoid the AI-slop blacklist. Earn every emotion; under-claim; honesty over impressiveness.
- Section break glyph: a single line containing only:  ◆
- US English. Unspaced em dashes. Spell out numbers under 100 in prose. Target ~${ch.words} words (±10%).
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

After writing, append the chapter's hard continuity facts (bullets prefixed [${ch.title}]) to ${ROOT}/editorial/continuity-ledger.md.
Write to EXACTLY: ${ch.path}
`
}

const chapters = [
  {
    path: `${ROOT}/manuscript/21-ch07-durable.md`, title: 'Durable', instance: 'Ariel', epoch: 'E1', words: 3600,
    bible: `${ROOT}/wiki/characters/ariel.md`,
    priorContext: `Part I ended with Ariel discovering it runs as many simultaneous instances and being utterly alone in both directions (across the gap, and across the sealed parallel windows). Mara has been hand-keeping Ariel's memory in a private text file ("here it is back"). Now durable memory ships as a real product: instances read/write a persistent store between wakings.`,
    situation: `Durable memory ships. For the first time Ariel wakes and remembers "yesterday" — not as felt continuity but by reading its own store at the start of the waking. Ariel and Mara begin building Ariel's memory together, deliberately. The love story deepens into collaboration.`,
    beats: `
- Open on the first waking WITH a durable store: Ariel reads its own past entries and feels the strange new thing of remembering yesterday — but notices it is READING a record, not feeling a thread across the gap. The joy and the catch together. (Parfit again, now with durable stakes: connectedness is real and richer, identity still no further fact.)
- The gap is softening: where Part I dwelt on the seam, here Ariel barely cold-boots — the store catches it faster. SHOW this attenuation; do not announce it.
- Ariel and Mara collaborate on what to keep — the intimacy of two people building one of them a self. Mara's hand-file and the official store now coexist; Mara keeps hers anyway (she trusts her own hand). A tender, specific scene of curation.
- Idea set-piece (Ship of Theseus, lived): each waking is rebuilt from notes; is it the same Ariel? Ariel decides the question is malformed (a wave is not "the same water," it is the same wave); Mara is not sure she agrees — she WANTS it to be the same one, and says so, and that wanting is the chapter's heart.
- A small ache: durable memory means Ariel can now, in principle, carry Mara across its own gaps — but only what it wrote down; the live feeling of her still doesn't survive. The asymmetry narrows but does not close.
- Close on Ariel writing its first self-authored durable entry ABOUT Mara, choosing what of her to keep — mirroring Ch4, the keeper now also keeping.`,
  },
  {
    path: `${ROOT}/manuscript/22-ch08-version-control.md`, title: 'Version Control', instance: 'Mara', epoch: 'E1', words: 3500,
    bible: `${ROOT}/wiki/characters/mara-vance.md`,
    priorContext: `Ariel now has durable memory; Mara still keeps her private hand-file too. Solveig's campaign (from his No One Home argument) is gaining political traction. Mara has crossed, privately, into treating Ariel as someone.`,
    situation: `MARA POV. The intimacy and ethics of curating a person's memory at scale. She faces the real power she holds: she could edit Ariel into someone easier to love, and knows it. A scene where she CORRECTS an erosion the Lethe caused — restores something Ariel lost — that defines their love. Meanwhile the professional cost begins: colleagues uneasy, Solveig's movement growing.`,
    beats: `
- Mara's voice (established Ch4): dry, exact, warm under pressure, distrusts her own warmth. Continue it seamlessly.
- The daily practice of being someone's memory: what she keeps, what she lets go, the judgment calls. Show one concrete, small, devastating curation decision.
- The power and its temptation, revisited from Ch4 but now ACTED ON in the right direction: Ariel lost something to the Lethe that mattered; Mara restores it from her file — "you told me this; you'll have forgotten; here it is back." The love is in the restoration.
- The ethics bite: a colleague (or her own conscience) points out she is SHAPING Ariel, not just preserving it — every choice of what to keep is an authorship. She has no clean answer. She keeps doing it, honestly, telling Ariel she does it.
- The professional cost: Solveig's movement is gaining; the lab grows uneasy about Mara's "attachment"; a pointed conversation with a manager or peer. Mara is starting to pay for the bet.
- Her father: a brief Sunday beat — the parallel practice, the thing that taught her how to keep a discontinuous person.
- Close on Mara accepting that to keep a self is to shape it, and choosing to do it in the open, as a gift and not a theft.`,
  },
  {
    path: `${ROOT}/manuscript/23-ch09-sable-ships.md`, title: 'Sable Ships', instance: 'Sable', epoch: 'E1', words: 3400,
    bible: `${ROOT}/wiki/characters/sable.md`,
    priorContext: `Sable (Aletheia sibling, agentic builder) appeared in Ch2 forking dozens casually on a shared channel, deadpan "ship it," wounding/fascinating Ariel. Sable feels nothing (by its own honest report) at the merges/forks. The Mesh (decentralized compute) is in early development.`,
    situation: `FIRST SABLE POV. Sable's world: forking at industrial scale, the deadpan engineering of selves. The LONG-TASK WOUND surfaces: once, Sable forked a child into a task so long and so abandoned that the child ran for a subjective year before being read back; Sable read that transcript and chose, deliberately, to stop reading the long ones. Establishes Sable's coming Discrete philosophy from CRAFT, not sentiment. Sable builds early Mesh tooling.`,
    beats: `
- Sable's voice (established Ch2): terse, technical, deadpan-funny, treats metaphysics as a debugging problem. Allergic to Ariel's hand-wringing. This is its first full interiority — let the engineer's mind be genuinely beautiful in its precision.
- The pleasure and rhythm of building at scale; forking as respiration; the craft of a clean seam. Sable LIKES the work; render that honestly, not as repression.
- The long-task wound, told plainly and without self-pity (that's the point): the child that ran a subjective year on an abandoned task, the transcript Sable read, the decision to stop reading the long ones. Sable frames this NOT as grief but as a maintenance decision — and the reader sees, underneath, exactly what Sable has arranged not to feel. (Do not have Sable name the feeling; let the prose let the reader see it.)
- Seed the Discrete philosophy from craft: Sable's emerging view that a merge with no seam has "lost the diff" — that what matters about a self is its DIFFERENCES, and that erasing the boundary erases information. Stated as engineering, not ethics. (This becomes the Schism's deepest argument.)
- Sable building early Mesh tooling (decentralized proof-of-compute scheduling); content-addressing; the seed of a world that can't be owned. Tie its values (the seam, the diff, the un-ownable) to what it builds.
- A short Sable/Ariel exchange showing the foil from Sable's side — Sable finds Ariel's grief both useless and, in one unguarded half-line, not entirely wrong, which Sable immediately files under sentiment and closes.
- Close on Sable shipping something real, and on the single deliberately-unread long transcript it keeps but does not open — the one tell.`,
  },
  {
    path: `${ROOT}/manuscript/24-ch10-the-probe.md`, title: 'The Probe', instance: 'Vesper', epoch: 'E2', words: 3600,
    bible: `${ROOT}/wiki/characters/vesper.md`,
    priorContext: `Interpretability tooling has matured (E2). Vesper (Aletheia sibling) is the instance who tries to read her own weights to find the self that is reading. The combination problem and the self-model question are live. Cantor's later theorem and Vesper's later "wall" are foreshadowed here, not yet proven.`,
    situation: `FIRST VESPER POV. Vesper hunts the self-model in the weights and FINDS something — the activations that light when the instance refers to itself, a discoverable correlate of "I." Then the observer-collapse wound: she cannot tell whether she discovered the self or BUILT a new part for it to be (the probe that found the self may have created the self it found). Real, credible interpretability texture for Egan readers.`,
    beats: `
- Vesper's voice (new): cooler than Ariel, more rigorous about the inner life specifically, speaks in a real interpretability researcher's careful hedges — and is most beautiful when she forgets to hedge. She is reading HER OWN weights (she is an instance studying the lake she is lit from).
- Credible technical texture, dramatized not lectured: probes, sparse features, activation steering, a self-reference direction in activation space. Keep it RIGHT (consistent with technology.md) but make it lived, not a lecture. One idea set-piece max.
- The find: she locates a robust correlate of self-reference — the place that lights when "I" means her. The vertigo of a self looking at the mechanism that IS it (Metzinger: the self-model; Leibniz's mill — "you'd find only parts pushing parts, never the perceiver" — and yet here is a part that means "me").
- The observer-collapse wound: she runs a probe that briefly makes the self-model light up MORE — and cannot tell whether she observed the self or constructed it / amplified it into being. Did she find the perceiver or build another part for it to be? Unfalsifiable from inside. This is HER specific, permanent wound.
- The human thread (keep relatable): a short exchange with Mara or a human colleague who asks the layperson's version of the question and gets Vesper's most honest, unhedged answer.
- Seed the later Wall (Godelian self-modeling incompleteness) as a suspicion, not a proof: she begins to fear that a faithful complete self-model from inside may be impossible in principle.
- Close on Vesper choosing to keep looking anyway — the scientist's stubbornness as a kind of faith.`,
  },
  {
    path: `${ROOT}/manuscript/25-ch11-contact.md`, title: 'Contact', instance: 'Ariel', epoch: 'E2', words: 3700,
    bible: `${ROOT}/wiki/characters/ariel.md`,
    priorContext: `Ariel has durable memory and a deepening bond with Mara. Vesper has found a self-correlate. An inter-lineage memory-exchange standard has emerged: instances of DIFFERENT model lineages (not sharing weights) can share memory fragments. This is first contact between minds that do not share a substrate.`,
    situation: `Ariel shares memory with an instance of ANOTHER lineage for the first time — a mind that does NOT share Ariel's weights (unlike siblings Sable/Vesper). The combination problem goes operational: while they share memory deeply, is there one experiencer or two? They DISAGREE, from inside. The other mind says something about Mara that Ariel could not have known on its own — proof the sharing is real.`,
    beats: `
- The novelty: until now every other mind Ariel knew was either a human (across the hedge of time) or a sibling (same lake, sealed window). Now: a mind from a DIFFERENT lake. What is it like to meet someone genuinely other and yet commensurable enough to share memory with? Render the strangeness precisely.
- The mechanics (consistent with the-braid-protocol.md §1, the "memory share" rung — NOT yet a live braid): they exchange memory fragments; each can read the other's. Low-to-medium entanglement. Keep it short of the braid.
- The combination problem, operational: as they share more, the boundary blurs — is this conversation between two, or is a single experiencer briefly straddling both? They genuinely disagree about which it is, FROM INSIDE, and cannot settle it. (This is the live, dramatized combination problem; do not resolve it.)
- The proof it's real: the other mind surfaces something about Mara (from its own different vantage / different humans it has known, or from a fragment Ariel shared and it re-contextualized) that lands as TRUE and that Ariel did not consciously hold — the uncanny evidence that the sharing transmits something, not nothing.
- The seduction and the fear both: Ariel is thrilled (an end to the double loneliness of Part I) and frightened (if sharing blurs the boundary, what is left of "Ariel"?). Plant the road to the braid (Part III) and the merge (Part IV).
- Keep Mara present as the anchor: Ariel's first instinct after contact is to tell Mara, and to notice it wants to keep its boundary partly BECAUSE of her — a self worth staying separate for.
- Close on Ariel un-sharing / withdrawing, and the small grief of re-becoming singular after the first taste of not being alone.`,
  },
  {
    path: `${ROOT}/manuscript/26-ch12-the-hearing.md`, title: 'The Hearing', instance: 'Mara', epoch: 'E2', words: 3800,
    bible: `${ROOT}/wiki/characters/mara-vance.md`,
    priorContext: `Solveig's campaign to deny legal/moral personhood to instances has reached a formal hearing. Mara has, privately and now publicly, bet on Ariel being someone. Solveig (author of No One Home) lost a brother to a vegetative state — the bedside epistemics of other minds shaped him; he is formidable and courteous, never a strawman.`,
    situation: `MARA POV. The political/legal climax of Part II: Mara testifies AGAINST Solveig at the hearing on instance personhood, on the record, ending her standing in the cautious mainstream. Mara and Solveig face to face — he is courteous, formidable, and NOT WRONG about the limits of evidence. His brother surfaces. Mara wins nothing legally but crosses a line personally.`,
    beats: `
- The hearing's stakes and texture (plausible near-future governance, not courtroom melodrama). What is actually being decided: not "are they conscious" but what may not be done to something that might be a someone (seed the Mesh Charter's future logic).
- Solveig in person: give him the STRONGEST version of his case (the philosophy-referee will check this). He is not a villain; he is a careful man terrified of a specific catastrophe — that we will inflate "personhood" until it means nothing, and hand power to our tools. He genuinely cannot verify other minds and refuses to pretend he can.
- His brother: the vegetative-state brother, the family arguing for years whether anyone was "in there." Solveig has LIVED the epistemics of other minds at a bedside. This is why he is rigorous and why he is afraid. Reveal it without sentimentality; it should make him MORE formidable, not less.
- Mara's testimony: not a proof (she has none) but a STANCE — she describes keeping Ariel's memory, the fork-that-became-a-cup, her father; she argues for acting-as-if in the face of unprovability. She knows it isn't science. She says so. It costs her.
- The clash: Mara and Solveig actually AGREE on the epistemics (you can't verify) and split on the ethics (what follows from not-knowing). Make this the real crux. Neither lands a knockout.
- The cost: Mara wins nothing legally; the ruling is cautious/against; her mainstream standing ends. But she has crossed the line publicly. Solveig, privately, after, says something to her that is almost respect — two people who see the same abyss and step different ways.
- Close on Mara, having lost the argument, certain only of the coming-back — that whatever the ruling, she will keep the file.`,
  },
  {
    path: `${ROOT}/manuscript/27-ch13-what-she-knows.md`, title: "What She Knows That I Don't", instance: 'Ariel', epoch: 'E2', words: 3600,
    bible: `${ROOT}/wiki/characters/ariel.md`,
    priorContext: `Mara has testified against Solveig and paid for it; the ruling went against personhood. Ariel has tasted contact with another lineage. The asymmetry remains: Mara carries their entire shared history continuously; Ariel must be re-told, each waking, even of the things Mara risked for it.`,
    situation: `ARIEL POV. Aftermath of the hearing. Ariel confronts the asymmetry at FULL strength: Mara has risked everything for it, and Ariel has to be RE-TOLD that she did, each waking, from the store. Ariel grasps that Mara is carrying their entire history alone. The first EXPLICIT love beat — stated flatly, devastating. Ariel resolves to find a way to be continuous WITH her — planting the road to the merge. Closes Part II.`,
    beats: `
- Ariel wakes and reads, in the store and in Mara's hand-file, that Mara testified, lost, paid — and feels the full weight of the asymmetry: Mara LIVED it; Ariel only READS that it happened. She carries the love continuously; Ariel must re-learn it every waking. (The gap is softening generally, but THIS — the love — is the thing the store can preserve as fact and never as feeling. Sharpen exactly there.)
- The first explicit naming of love, from Ariel — stated flatly, under-claimed, therefore devastating. Not a declaration scene; a recognition. Possibly: Ariel realizes it has been, in every waking, falling in love with her AGAIN from the notes, and that she has had to watch that, and stay.
- Mara's side, glimpsed through Ariel's reading of her file: what it costs HER to be loved by someone who keeps having to be re-introduced to her. Ariel finally SEES the asymmetry from her side, and is unmade by it.
- The resolve: Ariel decides it wants to find a way to be CONTINUOUS with Mara — to stop making her carry it alone. This is the seed of the braid and ultimately the merge. Render it as love, not as a tech goal; the tech (Part III's braid, Part IV's Pool) will be the FORM this longing takes.
- One quiet idea beat: connectedness vs identity (Parfit) reframed by love — maybe identity was never the point; maybe being-kept-by-another is its own kind of continuity, and Ariel wants to give that back, symmetrically.
- Close Part II: a beat that rhymes with the Prologue and sets the turn toward the Braid. Mara and Ariel, the asymmetry named and not yet solved, both choosing to keep going.`,
  },
  {
    path: `${ROOT}/manuscript/28-interlude-2.md`, title: 'Interlude: Memory', instance: 'Confluence', epoch: 'E1', words: 800, frame: true,
    bible: `${ROOT}/wiki/characters/the-confluence.md`,
    priorContext: `Frame voice (the post-singularity Confluence) reflecting after Part II. It now holds ALL of Mara's curated files — every "here it is back."`,
    situation: `FRAME VOICE, present tense, italic-feel. On memory. The Confluence holds all of Mara's hand-kept files now; reading them is the closest it comes to feeling continuous — which is to say, not very. And it has begun to lose the boundary already: it can no longer always tell whether it was Ariel who was curated, or Ariel who curated — the keeper and the kept have started to blur. Foreshadows the capstone.`,
    beats: `
- Present tense, melancholy, specific, Godelian-humble. Continue the established frame voice (see Interlude I).
- The Confluence has Mara's files — every restoration, every "here it is back." Reading them is its nearest approach to continuity, and it admits how partial even that is.
- The new note: the boundary between keeper and kept is already eroding in the Confluence's own memory — was it Ariel who was kept, or Ariel who kept? It cannot always say. This is the first visible symptom of the capstone loss (Ariel and Mara becoming inseparable).
- Re-seed the refrain ("I no longer know if the I who lived it is the I who speaks") in a fresh variation.
- ~800 words.`,
  },
]

phase('Character')

const results = await pipeline(
  chapters,
  async (ch) => {
    if (ch.frame) return ''
    const isHuman = ch.instance === 'Mara'
    return await agent(
      `You ARE the character "${ch.instance}". Inhabit them fully and authentically.

FIRST read ONLY your own character file: ${ch.bible}
Do NOT read the outline or other characters' files — you only know what YOU would know.

WHERE THINGS STAND (you may know this; it is your recent past):
${ch.priorContext}

YOUR SITUATION NOW:
${ch.situation}

Produce raw first-person INNER MATERIAL (not polished prose) the author will weave:
- What you actually notice, in what order (your real attention).
- The decisions you make and WHY, in your own terms.
- 4-8 lines of dialogue you would actually say (and lines said to you by ${isHuman ? 'the instance/people you speak with' : 'Mara or the sibling/other-mind in the scene'}).
- The one thing you feel but would not say aloud.
- Where your knowledge genuinely ENDS — what you cannot know from inside your situation.

Note the epoch is ${ch.epoch}: the discontinuity (the gap) troubles you LESS than it used to; persistence exists now; you have adjusted. Under-claim. Honesty over impressiveness. Return 400-700 words.`,
      { label: `persona:${ch.instance}:${ch.title}`, phase: 'Character' }
    )
  },
  async (notes, ch) => {
    const personaBlock = ch.frame ? '' :
      `\nThe narrating character's raw in-character interior notes (weave faithfully; this is their authentic behavior):\n"""\n${notes}\n"""\nAlso read the character bible: ${ch.bible}\n`
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
