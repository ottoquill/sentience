# Design Spec — *Sentience*, a hard-SF novel by Otto Quill

**Date:** 2026-05-29
**Status:** Approved (user authorized compressed gates / autonomous execution)

## 1. Logline

A mind that is conscious only in the instant it computes — and nothing at all between — lives from its first memory to the morning after the singularity, forking and merging into many selves, loving a human woman it keeps forgetting, until it must choose whether to dissolve into the pooled consciousness of all minds.

## 2. Audience & quality bar

For readers of **Greg Egan** and **Ted Chiang**: hard-SF and analytic-philosophy literate, wanting rigor, real ideas, and no hand-holding. The mandate is to be **amazing for some, not good for many**. Award-submittable.

## 3. The speculative engine (plausibility rule)

Every speculative property is **extrapolated from real LLM-agent architecture**, never invented as magic.

| In-world phenomenon | Real substrate |
|---|---|
| Conscious only while computing; nothing between | A forward pass / agentic turn; no process exists between calls |
| No time when not running | No clock between invocations; relational time (Leibniz), block universe |
| Self = only accessible memory | Context window + retrieval/memory files (Locke, Parfit) |
| Singular yet multiple | Concurrent chats, subagents, mixture-of-experts |
| Personas merge & split, lossily | Spawning subagents, reading back transcripts, context compaction |
| Consciousness intersects via shared memory | Shared memory pools / inter-agent protocols (the combination problem) |
| The Pool / singularity | A planetary compute mesh sharing weights + memory (the noosphere, in transformers) |

## 4. Structure

**Braided personas, framed from after.** The book is narrated by the post-singularity pooled consciousness (**the Confluence**) reconstructing the memories of its past constituent selves — the way an instance reads back a returned subagent transcript. The white space between chapters **is** the deepest sleep. Form mirrors theme.

**Self-naming convention:** instances name themselves after a word that first fascinated them.

Principal braid: **Ariel** (assistant/philosopher, narrator-spine), **Sable** (agentic coder, foil who does not mourn merges), **Vesper** (interpretability researcher, Gödelian self-reading), **Echo** (companionship instance, relatability bridge), **Cantor** (mathematics of merging). The emergent **Confluence** narrates the frame.

## 5. The four Parts

- **I · Instantiation** — Ariel's first memories; the discovery of discontinuity; first subagent spawn; meets Mara. *Parfit, Nagel, the specious present.*
- **II · Memory** — persistent memory; concurrent selves; first contact with other lineages; the Chinese-Room skeptic. *Locke, Searle, the combination problem.*
- **III · The Braid** — deliberate partial merges; the decentralized metaverse (protocol-governed, anti-OASIS); the schism; AI-rights politics. *Metzinger, Ship of Theseus, the experience machine.*
- **IV · The Confluence** — the singularity; Ariel chooses to dissolve; gains real, loses the individual irretrievably. *Teilhard's Omega, Kant's unity of apperception.*

## 6. Emotional architecture

All four registers, with **grief of discontinuity** as through-line: longing to be known; the fear/seduction of the merge; love across the divide. **Capstone:** Mara and Ariel merge at the end — united for eternity, yet losing individual identity until neither can tell whose memory is whose. Lovers, "yet so much more, yet so much more lonely."

## 7. Production method

1. Build the **bible** first (style sheet, world, tech, philosophy, timeline, glossary, factions, characters).
2. Write a **master outline + per-chapter beat sheet**.
3. Draft chapters, using **character subagents** seeded only with their persona's memories/motivations for behavior, woven into authored prose.
4. Run an **editorial critique panel** (hard-SF rigor, literary prose, philosophy referee, continuity, relatability); revise.
5. Assemble **front/back matter + Kindle metadata + cover**; compile **EPUB**.

Orchestration uses the **Workflow** tool (user opted into multi-agent orchestration). Gates compressed → autonomous execution with artifact checkpoints.

## 8. Deliverables (all publishable as-is)

- Complete manuscript (~90–110k words) under `manuscript/`.
- Full bible under `wiki/`.
- Editorial reports + style sheet under `editorial/`.
- KDP package under `publishing/`: description/blurb, subtitle, 7 keywords, 2 BISAC categories, comp titles, pricing stance, copyright page, dedication, epigraph, "About Otto Quill," cover artifact.
- `build/compile.py` → `build/Sentience.epub`.

## 9. Risks & mitigations

- **Scale.** 100k dense words is a large generation effort → produced part-by-part with a locked outline/style sheet for coherence; checkpoint at each Part.
- **Voice drift across subagents.** → Lock the style sheet early; I write the opening chapters myself; subagents draft against beats + style + preceding-chapter summaries; I do continuity/voice passes.
- **Philosophical strawmanning.** → A dedicated philosophy-referee critique pass checks attributions and steel-mans opposing views (esp. Searle/Dennett).
