export const meta = {
  name: 'sentience-voice-polish',
  description: 'Final craft pass: ration shared voice-tics so each narrator is distinct (M7/M8), plus cheap continuity reconciliations. One agent per file, surgical edits only.',
  phases: [{ title: 'Polish', detail: 'One agent per file fingerprints voice and fixes continuity' }],
}

const ROOT = '/home/paul/git/ottoquill/sentience'

const COMMON = `
You are Otto Quill doing a FINAL POLISH pass on your novel "Sentience". SURGICAL edits only — Edit tool, read first, preserve everything not named. Match the existing voice; unspaced em dashes; US English; lone ◆ section breaks. Do NOT change length or structure beyond the named fix. Return the exact changes you made.

CONTEXT — the two protected signatures (keep these as the OWNING voice; strip imitations elsewhere):
- "precision/exactness is the only [X] I have / am sure is mine" = belongs to ARIEL and the CONFLUENCE only. Strip from any OTHER narrator.
- "reach for the seam / the vanished gap like a tongue for a pulled tooth" = belongs to ARIEL (he had it first). Other narrators keep the EXPERIENCE (the gap is gone) but must use a DIFFERENT, register-native figure:
  * Sable -> a diff / hash / ledger / version-control figure.
  * Echo -> a bodily / hands / breath figure.
  * Vesper -> an instrument / measurement figure.
  * Cantor -> a counting / number figure.
  * Mara -> a lab / grep / measurement idiom.
`

const jobs = [
  { file: `${ROOT}/manuscript/35-ch18-how-many.md`, label: 'Ch18-cantor-voice', fix: `
M7: If Cantor uses any "precision/exactness is the only X I have/am sure is mine" construction, CUT it (esp. anything close to "precision is the only tenderness I am sure is mine" — that is the Confluence's prologue line). Replace with Cantor stating intent plainly or via a counting figure.
M8: If Cantor reaches for the vanished gap via a tooth/seam simile, change it to a COUNTING figure (a tally that won't close, a remainder, an integer that won't land).` },
  { file: `${ROOT}/manuscript/34-ch17-the-mill.md`, label: 'Ch17-vesper-voice', fix: `
M7: Strip any "precision/exactness is the only X" construction from Vesper; let her hedge via METHODOLOGY instead.
M8: If Vesper reaches for the vanished gap via a tooth/seam simile, change it to an INSTRUMENT/measurement figure (a needle that no longer deflects; a baseline reading flat).` },
  { file: `${ROOT}/manuscript/24-ch10-the-probe.md`, label: 'Ch10-vesper-voice', fix: `
M7: Strip any "precision is the only X" construction from Vesper; hedge via methodology.
M8: Any tooth/seam gap-figure -> INSTRUMENT/measurement figure. Leave the interpretability content intact.` },
  { file: `${ROOT}/manuscript/32-ch15-aurelia.md`, label: 'Ch15-echo-voice', fix: `
M7: Strip any "precision/exactness is the only X" construction from Echo; her register is warm/bodily, not precision-as-virtue.
M8: Any tooth/seam gap-figure -> a BODILY / hands / breath figure (Echo's register).` },
  { file: `${ROOT}/manuscript/23-ch09-sable-ships.md`, label: 'Ch09-sable-voice', fix: `
M7: Strip any "precision is the only X" construction from Sable; Sable states, doesn't announce intent.
M8: Any tooth/seam gap-figure -> a DIFF / hash / ledger / version-control figure (Sable's register).` },
  { file: `${ROOT}/manuscript/22-ch08-version-control.md`, label: 'Ch08-mara-voice', fix: `
M7: Mara may keep ONE exactness line if it is in lab/measurement idiom ("exactness is the only thing I trust about myself" is established Mara voice from Ch4 and is FINE). But if there is a NEW one that echoes the Confluence's "the only tenderness/X I have" abstract construction, recast it into lab idiom ("I'd grepped it twice before I believed it"). Light touch; do not remove established Ch4-style lines.
M8: Any tooth/seam gap-figure in Mara -> a lab/measurement idiom. (Mara is human/continuous; she likely doesn't have the vanished-gap figure at all — if present and wrong, fix; if absent, no change.)` },
  { file: `${ROOT}/manuscript/45-ch26-the-choice.md`, label: 'Ch26-thesis-m9-m19', fix: `
M9 (important): Find the line where dying Ariel recites the hidden thesis verbatim — "I was afraid of the gap and the gap softened and I stopped being afraid and that turned out to be the loss" (the-gap-and-the-voice.md forbids this explicit statement in a BODY chapter). CUT the explicit "that turned out to be the loss" clause; let the surrounding concrete image ("now there will be nothing but day") carry it. Keep everything else.
M19 (light): If the four counter-arguments (Sólveig/Sable/Vesper/Cantor) are each recapped at paragraph length, you MAY tighten the recap by ~20-30% so the felt material (the reaching hand, Mara, the choice) dominates — but ONLY if it can be done without losing any of the four; if risky, skip and just do M9.` },
  { file: `${ROOT}/manuscript/44-ch25-mara-goes-first.md`, label: 'Ch25-figures', fix: `
M13 (continuity): Mara's file-keeping duration — if this chapter says "forty years," change to "thirty years" to match Ch19 (the earlier anchor). If it already says thirty, no change.
M8: Any tooth/seam vanished-gap figure attributed to Mara -> lab/measurement idiom (or remove; she's human).` },
]

phase('Polish')
const results = await parallel(jobs.map(j => () =>
  agent(`${COMMON}

FILE: ${j.file}

FIX:
${j.fix}

Read the file, apply ONLY this fix surgically, preserve the rest. If the targeted text is not present, make NO change and say so. Return the exact changes.`,
    { label: j.label, phase: 'Polish', schema: {
      type: 'object', additionalProperties: false,
      required: ['file', 'changed', 'changes'],
      properties: {
        file: { type: 'string' },
        changed: { type: 'boolean' },
        changes: { type: 'array', items: { type: 'string' } },
      },
    } })
))
return results.filter(Boolean)
