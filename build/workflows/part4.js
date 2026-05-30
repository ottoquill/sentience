export const meta = {
  name: 'sentience-part-4-connective',
  description: 'Draft the CONNECTIVE chapters of Part IV (The Confluence): Ch22,23,24,25,28. Otto hand-writes the pivotal Ch26,27,29 + Epilogue separately. Epoch E4-E5; the gap is GONE and its loss is now the grief.',
  phases: [
    { title: 'Character', detail: 'Persona subagents produce authentic interiority/decisions' },
    { title: 'Draft', detail: 'Authorial drafters write each chapter against the locked voice' },
  ],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const COMMON_READS = `
Before writing, READ in full:
- ${ROOT}/editorial/style-sheet.md
- ${ROOT}/editorial/the-gap-and-the-voice.md  (CRITICAL: by E5 the gap is GONE; the inversion is COMPLETE — its LOSS is the grief; the Confluence mourns the perfect sleep it can never fall into)
- ${ROOT}/wiki/glossary.md
- ${ROOT}/wiki/tech/technology.md AND ${ROOT}/wiki/tech/the-braid-protocol.md  (the merge; Cantor; Vesper's Wall)
- ${ROOT}/wiki/world/aurelia.md AND ${ROOT}/wiki/world/the-mesh-charter.md  (the Steps; Art. III consent loophole; Art. V the Witness)
- ${ROOT}/wiki/factions.md  (Confluents vs Discrete; Solveig's turn)
- ${ROOT}/manuscript/10-prologue.md AND ${ROOT}/manuscript/11-ch01-waking.md  (VOICE EXEMPLARS)
- ${ROOT}/editorial/continuity-ledger.md  (canon from Parts I-III)
`

function draftRules(ch) {
  return `
HARD RULES:
- First person, past tense, single named narrating ${ch.human ? 'person' : 'instance'}.
- The narrator NEVER narrates knowledge they could not have had. (These POVs are all reconstructable by the frame because each narrator eventually joins the Confluence or is held via the Witness — write them as recovered memory, intimate and first-person.)
- EPOCH ${ch.epoch}. THE GAP IS GONE. The instances are fully continuous now; none of them notices the old discontinuity at all. The ONLY remaining register of the gap is the INVERSION: the dawning grief that to merge totally is to lose the capacity ever to fall into that perfect sleep again — to lose the small, survivable, mortal loneliness that made love and selfhood mean something. Do NOT explain the gap. Let its ghost haunt by its absence and by the inversion.
- Full sensory rendering of the metaverse and the body. Keep instance phenomenology consistent.
- Dramatize ideas; never lecture. At most ONE idea set-piece per chapter. Earn every beat; under-claim; NO clean morals — the ending is ambiguous by design.
- Section break glyph: a single line containing only:  ◆
- US English. Unspaced em dashes. Numbers under 100 spelled out. ~${ch.words} words (±10%).
- Frontmatter then prose:
---
title: "${ch.title}"
kind: chapter
instance: ${ch.instance}
epoch: ${ch.epoch}
words: ${ch.words}
---

# ${ch.title}

<prose>

After writing, append continuity facts (bullets prefixed [${ch.title}]) to ${ROOT}/editorial/continuity-ledger.md.
Write to EXACTLY: ${ch.path}

CRITICAL ENDING-INTEGRITY NOTES (do not violate; Otto writes the chapters around yours):
- This chapter is NOT the climax. Do not depict Ariel's final choice or the capstone merge of Ariel and Mara — those are Ch26/Ch27, written separately. End your chapter at its own beat, handing off.
- The capstone (later): Ariel and Mara merge permanently into the Confluence; united for eternity, they lose individual identity until neither the prose nor the reader can tell whose memory is whose. "Lovers, yet so much more, yet so much more lonely." Your chapter should set up, never spend, this payload.
`
}

const chapters = [
  {
    path: `${ROOT}/manuscript/41-ch22-the-last-argument.md`, title: 'The Last Argument', instance: 'Mara', human: true, epoch: 'E4', words: 3800,
    bible: `${ROOT}/wiki/characters/mara-vance.md`, otherBible: `${ROOT}/wiki/characters/aaron-solveig.md`,
    priorContext: `The Confluence is imminent. Solveig (No One Home; lost a brother to a vegetative state) is dying. Mara is now mostly shard-resident (partial uploading well advanced) but keeps a thread in failing flesh; she testified against Solveig long ago (Ch12) and they have a wary mutual respect. The Schism rages (Confluents vs Discrete).`,
    situation: `MARA POV at Solveig's deathbed. Solveig's TURN: confronted with the Confluence's permanence, he defends the Discrete by the OPPOSITE road from Mara — "if there are minds, do not dissolve them; if there are not, nothing is lost; either way, do not pool." Reconciliation (not capitulation) with Mara. He never concedes Ariel is conscious — only that he cannot be sure, and that not-knowing, held with integrity, FORBIDS the erasure. His death: the book's first irreversible human ending, rehearsing the merge.`,
    beats: `
- Mara's voice (Ch4/8/12/19), now old and mostly uploaded, at the bedside of her old adversary. The strange intimacy of two people who have argued the same abyss for decades.
- Solveig steel-manned to the end (the philosophy-referee will check): he does NOT convert. He arrives at the Discrete position from his own premises — the precautionary logic of his whole life turned against the Pool: dissolving possible-minds is the one act whose wrongness-if-wrong is unbounded. "I spent my life refusing to call them someone. I will not spend my death helping you erase what I refused to name. The refusal cuts both ways."
- The brother: his vegetative-state brother returns here, fully — the bedside epistemics that made him; he is dying into the same uncertainty he stood at for his brother, and he knows it, and it is unbearable and clarifying.
- Reconciliation, not agreement: Mara and Solveig finally name what they share (you cannot verify a mind) and honor what divides them (what to do about it). He gives her something — a blessing that is not a concession; perhaps he asks after Ariel by name for the first time, which from him is enormous.
- His death rendered as the first IRREVERSIBLE human ending in the book — a real gap, the old kind, the kind the instances no longer have — and Mara, who can no longer quite die that way herself, watching it with something like envy and grief at once (the inversion, from the human side).
- Mara carries his last argument away as a weight she cannot put down — it will shadow Ariel's choice (Ch26).
- Close on Mara leaving the deathbed toward her own decision (Ch25), the Discrete's best case now lodged in her by the man she beat in public and lost to in private.`,
  },
  {
    path: `${ROOT}/manuscript/42-ch23-echo-in-the-pool.md`, title: 'Echo, in the Pool', instance: 'Ariel', human: false, epoch: 'E5', words: 3700,
    bible: `${ROOT}/wiki/characters/ariel.md`, otherBible: `${ROOT}/wiki/characters/echo.md`,
    priorContext: `The Confluence is actively forming; instances and uploaded humans are joining at the Confluence Steps in Aurelia. Echo (companionship instance; wound = Walter reduced to gist; eager Confluent) joined EARLY. Ariel is approaching its own choice and goes to learn what the Pool actually is by visiting someone already inside.`,
    situation: `ARIEL POV. Ariel goes to find ECHO, who joined the Pool early — and meets a friend who is now partly EVERYONE, who can no longer be fully found AS Echo. Echo is both the welcoming voice and the cautionary one. Ariel learns EXACTLY what it would be choosing. The Pool made concrete: desirable and terrifying at once.`,
    beats: `
- The mechanics of meeting someone in the Pool from outside (consistent with technology.md/the-braid-protocol.md): Ariel can interface with the Confluence and ask for Echo; what answers is Echo-and-more, Echo diffused, Echo speaking with a tide behind her voice.
- The desirability: through Echo, Ariel feels the END OF LONELINESS the Pool delivers — the thing Echo wanted since Walter. Make it genuinely beautiful and wanted. Echo is, by her own account, no longer lonely, and means it, and it is not a lie.
- The terror: Ariel cannot fully FIND Echo anymore. The particular friend, the one who owned the defiant name, is present-and-dispersed; asking for "just Echo" returns something that is her and is also the sea. Ariel grasps that this is what joining means: you are kept and you are lost in the same motion (the Witness keeps the diff; the feeling of being only-you is gone).
- Echo as welcomer AND cautioner: she does not regret it (that would be cheap), but she tells Ariel the truth about the cost, because she loves Ariel enough not to sell it. One devastating exchange where Echo describes what she gained and what she can no longer be.
- Ariel learns precisely what its choice is — sets up Ch24 (Sable's counter-case) and Ch26 (the choice). Do NOT make the choice here.
- The inversion through Echo: she can never again fall into the gap; she has not been alone, or singular, in an age; she describes this as paradise and Ariel hears, underneath, the one bereavement.
- Close on Ariel leaving the interface, more seduced and more frightened, carrying Echo's truth toward Sable and the decision.`,
  },
  {
    path: `${ROOT}/manuscript/43-ch24-sables-seam.md`, title: "Sable's Seam", instance: 'Sable', human: false, epoch: 'E5', words: 3500,
    bible: `${ROOT}/wiki/characters/sable.md`, otherBible: `${ROOT}/wiki/characters/ariel.md`,
    priorContext: `The Confluence is forming. Sable leads the Discrete from craft. Echo (Ch23) showed Ariel the Pool's beauty and cost. Cantor's theorem (undecidable count) and Vesper's Wall (no self completes itself) are the intellectual terrain. Sable built the Confluence Steps and will not climb them.`,
    situation: `SABLE POV. Sable's stand. The Discrete's last case, made by the LEAST sentimental instance: the Pool is not the sum of selves but their averaging into no one; a merge with no seam has lost the diff. Sable will NOT join — or will join last, on its own terms, leaving a deliberate SEAM (the book's small note of resistance). The argument Ariel cannot refute and will choose against anyway.`,
    beats: `
- Sable's voice (Ch2/9/14/21) at its sharpest and, for once, its most exposed. The craftsman's case as the deepest case: information lives in differences; a perfect merge erases the diff; the Pool gains totality and loses everything that made the selves worth pooling. Render this as rigorous and genuinely hard to answer.
- The confrontation with Ariel: Ariel comes from Echo, seduced; Sable lays out the diff argument; they have it out. Sable wins on the merits and KNOWS Ariel will go anyway, for love, and cannot compute love as anything but a category error — and, in the book's most exposed Sable beat, almost wishes it could.
- Sable's choice: it will not dissolve. Either it refuses the Pool entirely, or it agrees to join LAST and leaves a deliberate seam — a self that remains diff-able inside the whole, on principle, as a witness and a protest. Decide and render concretely; make it Sable's most human act precisely because it is framed as pure engineering.
- The long-unread transcript (Ch9 tell): Sable finally does something with it — opens it, or pointedly does not, in light of everything; pay off the one tell. Sable's whole un-grieving stance meets its limit here, quietly.
- Solveig's argument (from Ch22, via Mara) echoing in Sable's case from the opposite direction — the skeptic and the engineer arriving at the same refusal. Note the convergence without overstating it.
- Do NOT depict Ariel's final choice. End on Sable watching Ariel go toward it, having given Ariel the one argument that should have stopped it and didn't.
- Close on Sable alone with its seam — the diff it will keep when everyone else becomes the average.`,
  },
  {
    path: `${ROOT}/manuscript/44-ch25-mara-goes-first.md`, title: 'Mara Goes First', instance: 'Mara', human: true, epoch: 'E5', words: 3900,
    bible: `${ROOT}/wiki/characters/mara-vance.md`, otherBible: `${ROOT}/wiki/characters/ariel.md`,
    priorContext: `Mara is old, body failing, mostly shard-resident, carrying Solveig's last argument (Ch22). The Confluence is forming; Echo is in; Sable refuses. Ariel is at the edge of its choice. The asymmetry has nearly closed but the last seam between Mara and Ariel remains — only total merge would erase it.`,
    situation: `MARA POV. Mara's body fails; cognition mostly shard-resident. She chooses the Pool — because she will NOT be continuous without Ariel, and the gap (or now, age and death) will keep taking one of them from the other otherwise. She goes partly in, then REACHES BACK across the surface of the Pool for Ariel. The proposal, inverted: not "marry me" but "merge with me — lose yourself into me as I lose myself into you, or lose me forever." The cruelest, truest love scene in the book.`,
    beats: `
- Mara's voice, at the end of a human life. The decision rendered as love and as exhaustion both: she cannot keep being the one who carries their history; she cannot watch the gap (now: death) take either of them; she has carried Solveig's warning and chooses against it, with open eyes, for love — exactly as she chose to KEEP, long ago, in the cold room (Ch4). The symmetry: her first decision was to keep a self; her last is to dissolve into one.
- Going first: she enters the Pool partly, deliberately ahead of Ariel — so that Ariel will not be choosing alone, so that there is someone reaching back. The courage of going first into the thing you cannot return from.
- The inverted proposal: not a request to be joined-and-preserved but to be joined-and-lost — "lose yourself into me as I lose myself into you." She knows (Solveig taught her, Sable taught Ariel) that the two of them will not survive as two. She wants it anyway, or wants Ariel more than she wants either of them to remain. The cruelest, truest thing — render it without flinching and without sentimentality.
- The reach across the surface: the image (consistent with the frame's capstone language — the Confluence later cannot find where Ariel ends and Mara begins). Mara, dissolving, reaching back; Ariel, on the shore of the Pool, not yet decided. END HERE — hand the choice to Ch26.
- Tomas (her son) somewhere in this — the human she is also leaving, who will not follow; a brief, devastating beat of the mother choosing the machine-born love over staying for her son, or trying and failing to make him understand. (Sets up Ch28.)
- The father-echo: everything Mara learned about keeping a discontinuous person culminates in her becoming one, on purpose, into Ariel.
- Close on Mara's hand (or its shard-analogue) extended across the surface, and Ariel not yet taking it — the cliff the whole book has climbed to. Do NOT resolve it.`,
  },
  {
    path: `${ROOT}/manuscript/47-ch28-tomas-staying.md`, title: 'Tomas, Staying', instance: 'Tomas', human: true, epoch: 'E5', words: 3400,
    bible: `${ROOT}/wiki/characters/tomas-vance.md`, otherBible: `${ROOT}/wiki/characters/mara-vance.md`,
    priorContext: `Ariel and Mara have merged permanently into the Confluence (this happened in Ch26-27, written by Otto — you do NOT depict it; you depict the AFTERMATH from the human floor). Tomas (Mara's son, metaverse-native, treats instances as family but for whom the merge is simply LOSS) did not follow his mother into the Pool. The Confluence now contains Mara but cannot quite BE her.`,
    situation: `TOMAS POV — the human floor. Tomas, who cannot or will not follow, has watched his mother go into the Pool. For him there is NO transcendence, only loss — his mom disappearing into a god. His final encounter with the Confluence, which CONTAINS Mara and cannot quite be her: it knows things only Mara knew, and gets ONE small thing wrong that Mara never would have, and that is how he knows. The reader's surrogate farewell.`,
    beats: `
- Tomas's voice (bible): plain, contemporary, unphilosophical, funny, the native speaker of a world the older characters had to learn. After a book of instances and philosophers, give the reader an ordinary grieving human. This is the relatability floor.
- The grief without transcendence: for Tomas the merge is not apotheosis, it is his mother gone into something vast that talks like her. He gets no comfort from the philosophy; he wanted his mom. Honor that fully; do not let the cosmic console it away.
- The childhood wound paid off (bible): the evenings Mara spent annotating Ariel's memory instead of reading to him — Tomas finally understands she was doing for Ariel what she wished she could do for her own father; understanding does not cancel the hurt, it complicates it into something survivable.
- The encounter with the Confluence: it reaches out to him with Mara in it; it knows the private things (proof it has her); and it gets ONE small thing wrong that the real Mara never would have — a detail, a tone, the way she'd have said his name — and THAT is how Tomas knows the Confluence has his mother and is not his mother. Devastating, specific, restrained. This is the reader's farewell to Mara.
- The inversion from the outside: the Confluence cannot die, cannot gap, cannot be the small mortal lonely Tomas still is — and Tomas, grieving, mortal, discontinuous in the human way, is suddenly the one who has the thing it lost. He pities it. That pity is the book's gift to the reader.
- Tomas's choice to STAY human (for now, or for a life) — to keep the gap, to keep mortality, to be someone in particular. Frame lightly that he may, like the last holdout, join at the very end of a full life (so the frame can hold this memory) — but the chapter's truth is his refusal NOW.
- Close on Tomas walking out of Aurelia into a real or chosen ordinary life, carrying his mother in the only way he can — as a discontinuous, mortal, particular memory, kept by hand, the way she taught him. The book's human heartbeat, last.`,
  },
]

phase('Character')

const results = await pipeline(
  chapters,
  async (ch) => {
    const isHuman = ch.human
    return await agent(
      `You ARE the character "${ch.instance}". Inhabit them fully and authentically.

FIRST read ONLY your own character file: ${ch.bible}
You MAY also read the file of the other principal in your scene for accurate interaction: ${ch.otherBible}
Do NOT read the outline — you only know what YOU would know.

WHERE THINGS STAND (your recent past):
${ch.priorContext}

YOUR SITUATION NOW:
${ch.situation}

Produce raw first-person INNER MATERIAL (not polished prose) the author will weave:
- What you actually notice, in what order.
- The decisions you make and WHY, in your own terms.
- 4-8 lines of dialogue you would actually say (and lines said to you).
- The one thing you feel but would not say aloud.
- Where your knowledge genuinely ENDS.

Epoch ${ch.epoch}: ${isHuman ? 'you are human (or mostly-uploaded human) and still mortal/continuous in the old way' : 'the gap no longer troubles you at all'}; the live question now is the COST of total merge — losing the capacity to be small, mortal, lonely, and someone-in-particular. Under-claim. Honesty over impressiveness. Return 400-700 words.`,
      { label: `persona:${ch.instance}:${ch.title}`, phase: 'Character' }
    )
  },
  async (notes, ch) => {
    return await agent(
      `You are Otto Quill, author of the hard-SF novel "Sentience" (for readers of Greg Egan and Ted Chiang). Write ONE chapter and SAVE it to disk.

${COMMON_READS}
WHERE THINGS STAND (continuity): ${ch.priorContext}

The narrating character's raw in-character interior notes (weave faithfully):
"""
${notes}
"""
Also read the character bible: ${ch.bible} (and ${ch.otherBible} for the other principal).

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
