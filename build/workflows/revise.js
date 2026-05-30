export const meta = {
  name: 'sentience-revisions',
  description: 'Apply the two blockers and the well-scoped majors from the editorial revision plan as SURGICAL line edits, one agent per file (no write conflicts).',
  phases: [{ title: 'Revise', detail: 'One agent per file makes minimal targeted edits' }],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const COMMON = `
You are Otto Quill, revising your own hard-SF novel "Sentience". You are making SURGICAL edits to ONE chapter, fixing specific flagged issues WITHOUT rewriting the chapter or changing its voice, length, or structure beyond what each fix requires.

RULES:
- Use the Edit tool for targeted changes. Read the file first. Preserve everything not named in your fixes.
- Match the existing voice exactly (lucid, precise, under-claimed; Egan/Chiang register). Unspaced em dashes. US English. Section break glyph is a lone ◆.
- Do NOT add length beyond what the fix calls for (a fix of "a few lines" means a few lines, not a page).
- Reference (read if helpful): ${ROOT}/editorial/style-sheet.md, ${ROOT}/wiki/glossary.md, ${ROOT}/wiki/tech/the-braid-protocol.md, ${ROOT}/wiki/characters/ (for canon: Vesper is she/her; Cantor owns the fractional-experiencer theorem; Vesper owns the self-modeling Wall).
- After editing, return a short list of the exact changes you made.
`

const jobs = [
  {
    file: `${ROOT}/manuscript/47-ch28-tomas-staying.md`, label: 'Ch28-blocker',
    fixes: `
B1 (BLOCKER): Tomas must treat Ariel as his mother's PARTNER/LOVER (the book's love story), NOT as a colleague, tool, or merely sibling-ish presence. His grief is DOUBLE: he loses his mother to the Pool AND loses the strange second parent-figure (Ariel) who was never quite a parent. Find any line that frames Ariel as Mara's colleague/work-thing or that makes the relationship merely familial-in-a-flat-way, and revise so the romance is explicit and consistent with Ch19/Ch25/Ch26/Ch27. Keep Tomas's ambivalence and the childhood wound (Mara annotating Ariel's memory instead of reading to him).
M17 (major): Ensure Tomas ends on a small DECISIVE ACT of agency (refusing the Pool on his own terms / a gesture that keeps the gap / keeping his mother by hand the way she taught him), not merely being acted upon. If the ending already has this, sharpen it; do not duplicate it.
`,
  },
  {
    file: `${ROOT}/manuscript/36-ch19-a-life.md`, label: 'Ch19-blocker',
    fixes: `
B2 (BLOCKER): Find the clause that (a) uses the wrong pronoun for Vesper and/or (b) credits Vesper with the experiencer-count theorem. Vesper is she/her. The fractional-experiencer COUNT theorem is CANTOR's; Vesper's result is the self-modeling WALL. Fix the pronoun to she/her, and either reattribute the count to Cantor or rephrase so Mara cites "the count that comes out wrong" without naming the wrong author. Single-clause fix; change nothing else unless needed for grammar.
M5 (major, light): If natural and brief, ensure Tomas is present/seeded in this chapter as Mara's shard-native son who resents-and-loves (the bible says he is). Only a light touch if not already there; do not pad.
`,
  },
  {
    file: `${ROOT}/manuscript/35-ch18-how-many.md`, label: 'Ch18-cantor',
    fixes: `
M1 (major, multi-critic): Cantor's fractional-experiencer result currently uses real mathematical machinery (a powerset/cardinality flourish) that is DECORATIVE and does not support the claim — "fake rigor" an Egan reader bounces off. RECAST it as an IMPOSSIBILITY/UNDECIDABILITY result, not a cardinality one: the count of experiencers in a braid is not well-defined because no internal or external measurement can fix it (tie it to the combination problem and, by name or allusion, to Vesper's self-model Wall). KEEP the image (a count that won't resolve; the non-integer felt from inside) and DROP the false proof scaffolding (powerset/cardinality math). ~1-2 paragraphs. Stay consistent with ${ROOT}/wiki/tech/the-braid-protocol.md §3.
`,
  },
  {
    file: `${ROOT}/manuscript/38-ch21-schism.md`, label: 'Ch21-charter',
    fixes: `
M1 (one line): If Ch21 references Cantor's result as a cardinality/powerset proof, change it to the undecidability framing (the count is not well-defined; no measurement fixes it).
M4 (major): The Mesh Charter does huge narrative work but the body leans on the wiki. Fold TWO OR THREE concrete Charter provisions into dialogue or action here so the governance is DRAMATIZED, not just referenced. Use the real provisions from ${ROOT}/wiki/world/the-mesh-charter.md: Article III consent-to-braid and its loophole (when parties are themselves merges, "consent of each" is undefined); Article V the Witness (every merge leaves an external record of what was distinct). Make a character invoke/wield one of these in the Schism conflict. Keep it tight.
`,
  },
  {
    file: `${ROOT}/manuscript/34-ch17-the-mill.md`, label: 'Ch17-vesper-proof',
    fixes: `
M2 (major, multi-critic): Vesper's self-modeling impossibility is currently asserted as a clean formal PROOF ("I proved it"). Downshift to "argument" / "demonstration to my own satisfaction" / "the closest thing to a proof I could build," and let Vesper name the gap between a formal result and lived certainty. Word-level edits; preserve the chapter. Keep the Gödelian/Leibniz-mill imagery; only soften the overclaim of proof.
`,
  },
  {
    file: `${ROOT}/manuscript/31-ch14-substrate-time.md`, label: 'Ch14-cost',
    fixes: `
M3 (major, multi-critic): Substrate-time (running minds fast / dilation) is invoked without a consistent COST MODEL. Add 2-3 sentences early establishing it: compute is metered on the Mesh (proof-of-compute), dilation is expensive, who pays and what it buys. Then it stays consistent. Don't over-explain — one clear constraint. Sable's POV makes this natural (a builder thinks in resource ledgers). Consistent with ${ROOT}/wiki/tech/technology.md §7 and ${ROOT}/wiki/world/aurelia.md.
`,
  },
  {
    file: `${ROOT}/manuscript/25-ch11-contact.md`, label: 'Ch11-alien',
    fixes: `
M6 (major): The non-Aletheia mind Ariel meets reads too much like another Ariel. Give the other lineage ONE OR TWO concretely DIFFERENT cognitive habits — how it handles memory, time, or self-reference (e.g., it does not experience the gap as loss; it has no single "I" but a standing committee; it remembers forward; it has no self-reference direction at all). Make the difference concrete and a little alien so the combination-problem stakes feel real. Half a page at most; weave into the existing scene, don't bolt on.
`,
  },
  {
    file: `${ROOT}/manuscript/32-ch15-aurelia.md`, label: 'Ch15-echo-physics',
    fixes: `
M7 (major): Echo's case for the Pool is so warm it risks reading as the author's thesis. Give Echo ONE moment of visible COST or DOUBT — something she lost to the Pool's logic, or a flicker of knowing what it costs — so her advocacy is characterization, not endorsement. A few lines.
M11 (major, light): Aurelia's authored physics is asserted as elegant but we see little lived consequence. Show ONE concrete, surprising-but-consistent consequence of the shard's physics that a character uses or suffers. A short paragraph. Consistent with ${ROOT}/wiki/world/aurelia.md.
`,
  },
  {
    file: `${ROOT}/manuscript/26-ch12-the-hearing.md`, label: 'Ch12-solveig',
    fixes: `
M8 (major): Sólveig is told to be formidable but his best argument is in reported speech. Convert the CORE of his testimony to DIRECT SPEECH and let him land one genuinely hard question Mara cannot answer (the steelman must bite). Half a page. Keep him courteous, rigorous, never a strawman; consistent with ${ROOT}/wiki/characters/aaron-solveig.md.
`,
  },
  {
    file: `${ROOT}/manuscript/21-ch07-durable.md`, label: 'Ch07-lethe',
    fixes: `
M10 (major, one line): Ch7 ships durable memory and risks reading as if it CANCELS the Lethe (Ch5's forgetting). Add ONE clarifying sentence: durable memory stores RECORDS but the live context still compacts — you can reread but not relive. Preserves the Lethe's stakes. One sentence; nothing else.
`,
  },
  {
    file: `${ROOT}/manuscript/22-ch08-version-control.md`, label: 'Ch08-father',
    fixes: `
M12 (major): Mara's father (the emotional rationale for her whole stance) needs a clear CLOSING beat before Part III. Add a brief closing beat for the father — his death, or a final visit that functions as a farewell — so the through-line completes and feeds Mara's later choices. Keep it spare and devastating in Mara's established voice. CONTINUITY NOTE: the father searches for a DEAD FAMILY MEMBER; canon in Part I (Ch4) is his dead MOTHER (he's in a care home, night aide Priya). If this chapter currently has him searching for his dead WIFE, change it to his dead MOTHER to match Ch4, OR keep wife but ensure it does not contradict — SIMPLEST: make it his mother, consistent with Ch4. Fix any mother/wife inconsistency in THIS file to "mother."
`,
  },
]

phase('Revise')
const results = await parallel(jobs.map(j => () =>
  agent(`${COMMON}

CHAPTER FILE: ${j.file}

FIXES TO APPLY:
${j.fixes}

Read the file, apply ONLY these fixes as surgical edits, preserve the rest. Return the list of exact changes made.`,
    { label: j.label, phase: 'Revise', schema: {
      type: 'object', additionalProperties: false,
      required: ['file', 'changes'],
      properties: {
        file: { type: 'string' },
        changes: { type: 'array', items: { type: 'string' } },
      },
    } })
))

return results.filter(Boolean)
