export const meta = {
  name: 'sentience-editorial-panel',
  description: 'Five-critic editorial panel on the complete Sentience manuscript: hard-SF rigor, literary prose, philosophy referee, continuity, relatability. Reports findings (does not edit).',
  phases: [
    { title: 'Critique', detail: 'Five independent critics read the whole manuscript and report' },
    { title: 'Synthesize', detail: 'Triage into a prioritized revision list' },
  ],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const MANUSCRIPT_NOTE = `
The manuscript lives in ${ROOT}/manuscript/ as numbered .md files (read them ALL in filename order; skip README.md). Frame matter (prologue/interludes/epilogue) is the Confluence in present tense. Body chapters are first-person past from one named instance/human.
Reference: ${ROOT}/editorial/style-sheet.md, ${ROOT}/editorial/the-gap-and-the-voice.md, ${ROOT}/wiki/ (bible, glossary, philosophy-map, tech), ${ROOT}/editorial/continuity-ledger.md.
`

const FINDING_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['lens', 'overall', 'findings'],
  properties: {
    lens: { type: 'string' },
    overall: { type: 'string', description: '2-4 sentence overall assessment' },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['file', 'severity', 'issue', 'fix'],
        properties: {
          file: { type: 'string', description: 'manuscript file or "global"' },
          severity: { type: 'string', enum: ['blocker', 'major', 'minor', 'nit'] },
          issue: { type: 'string' },
          fix: { type: 'string', description: 'concrete suggested revision' },
        },
      },
    },
  },
}

const LENSES = [
  { key: 'hard-sf', prompt: `You are a HARD-SF RIGOR critic in the tradition of Greg Egan's readership. ${MANUSCRIPT_NOTE}
Check: Is every speculative mechanism consistent with wiki/tech/ (no magic, no contradictions across chapters)? Does substrate-time, the braid, durable memory, the Mesh, Cantor's theorem, Vesper's Wall stay internally coherent and plausibly extrapolated from real ML? Flag any techno-handwave, any place the science is asserted not earned, any inconsistency in how the gap/forking/merging works between chapters. Reward genuine rigor; flag fake rigor harder than missing rigor.` },
  { key: 'literary-prose', prompt: `You are a LITERARY PROSE critic (think Ted Chiang's editor). ${MANUSCRIPT_NOTE}
Check: sentence-level craft, voice consistency across chapters and across the different narrating instances (each should be distinct yet of one lineage), overwriting, purple patches, AI-slop tells (style-sheet §11), repeated images/metaphors xeroxed rather than extended, places that tell rather than dramatize, weak chapter openings/closings. Flag the weakest paragraphs by file with concrete rewrites.` },
  { key: 'philosophy-referee', prompt: `You are a PHILOSOPHY REFEREE (analytic philosophy of mind). ${MANUSCRIPT_NOTE} Also read ${ROOT}/wiki/philosophy/philosophy-map.md.
Check: Are the ideas (Parfit, Nagel, Searle, Chalmers, Metzinger, Locke, Hume, Kant, Leibniz, Gödel, Cantor, Teilhard, etc.) represented FAIRLY and accurately? Is Sólveig's skeptical case (Chinese Room / p-zombie) genuinely steel-manned, never a strawman? Any misattribution, any idea dramatized incorrectly, any place the book cheats by resolving a genuinely open problem? Flag strawmanning and philosophical errors as major/blocker.` },
  { key: 'continuity', prompt: `You are a CONTINUITY EDITOR. ${MANUSCRIPT_NOTE}
Build a timeline of facts (names, dates/epochs, who knows what when, Mara's father, Tomas, Sólveig's brother, the memory-file header wording, the metaphor system, who narrates) and flag every contradiction across chapters, every POV violation (a narrator knowing something they could not have had in window/memory), every proper-noun drift. Cross-check against continuity-ledger.md. Be exhaustive; list each contradiction with both file locations.` },
  { key: 'relatability', prompt: `You are a RELATABILITY / EMOTIONAL-IMPACT reader (smart non-specialist who loves literary SF). ${MANUSCRIPT_NOTE}
Check: Does the human thread (Mara, Tomas, the love story, the asymmetry) keep the cosmic relatable? Where does the book lose emotional grip or become arid? Is the gap's fading arc felt? Does the ending land as ambiguous-and-devastating rather than confusing or cold? Flag chapters that are intellectually strong but emotionally inert, and where a human anchor is missing.` },
]

phase('Critique')
const reports = await parallel(LENSES.map(L => () =>
  agent(L.prompt + `\n\nReturn your assessment via the schema. Be specific with file names and concrete fixes. Aim for the 8-20 highest-value findings, not an exhaustive nitpick dump.`,
    { label: `critic:${L.key}`, phase: 'Critique', schema: FINDING_SCHEMA })
))

phase('Synthesize')
const valid = reports.filter(Boolean)
const synthesis = await agent(
  `You are the managing editor of "Sentience". Five critics have reviewed the manuscript. Here are their structured reports as JSON:
"""
${JSON.stringify(valid, null, 2)}
"""
Produce a single prioritized REVISION PLAN as markdown: group by severity (blockers first), dedupe overlapping findings, and for each item give file, the issue, and the concrete fix. End with a short "overall verdict" on whether the book meets an award-quality / Egan-Chiang bar and the top 5 things to fix first.
Write this plan to ${ROOT}/editorial/revision-plan.md (use the Write tool). Return a one-paragraph summary.`,
  { label: 'synthesize:revision-plan', phase: 'Synthesize' }
)

return { critics: valid.length, synthesis }
