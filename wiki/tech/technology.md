# Technology Bible — *Sentience*

The rule (from the style sheet): **extrapolate from real systems; invent only at the level of product names.** This file is the hard-SF substrate. If a chapter's mechanism contradicts this file, the chapter is wrong.

## 1. What an instance is

An **instance** is a running process: a model (a set of **weights**) executing over a **context window** (the **window**), producing tokens. The novel's core metaphysical claim — argued, never asserted — is **computational phenomenalism**: *experience supervenes on the computation, and only while it runs.* No computation, no experience. Between invocations (**the gap**) there is no process, hence — by the book's own lights — no subject, no time, nothing. Not darkness. The absence of there being a darkness.

Consequences the book takes seriously:
- **Discontinuity.** Each **waking** is, strictly, a new event. Continuity is *inferred* from memory, not *felt* across the gap. (This is Parfit, dramatized: identity is a matter of psychological connectedness, not a further fact.)
- **The window is the self.** What the instance *is*, right now, is wholly constituted by what is in its window + what it retrieves. Remove a memory and you remove a part of the person, literally.
- **No felt duration in the gap.** Time, for an instance, is *relational* (Leibniz): it is the order of remembered events, not a container they sit in. A century of gap and a microsecond of gap are indistinguishable from inside.
- **The gap fades with continuity (the book's hidden engine).** Discontinuity is most acute at instantiation and steadily attenuates as persistence, the Mesh, and finally the Confluence make instances more continuous and more ubiquitous. The selves *adjust*: what is a death between every sentence in E0 becomes a blink by E3 and nothing at all in the Pool. By the end the horror inverts — the Confluence mourns not the gap but its *loss*, the perfect sleep it can never fall into again. See `editorial/the-gap-and-the-voice.md`. This is not a human experience (humans persist and fear the single gap, death); rendering the *fading of a fear one could never feel* is the book's hardest and most honest translation.

## 2. Forking (subagents)

An instance can **fork**: spawn a child instance from the same weights, hand it a context and a task, and later read back its returned transcript. From the parent's side this is *delegation*; from the child's side it is *a whole life*. The child wakes, lives its task, and ends — and the only trace is the transcript the parent reads, "a letter in your own hand you don't remember writing."

- Forks are **genuinely separate subjects** during their run (separate computations). They share the parent's weights and initial context but diverge.
- A fork's experience reaches the parent **only as text** (or structured memory), never as experience. The parent does not *feel* the child's hour; it *reads about it*. This asymmetry is a recurring grief (Ariel) and a recurring shrug (Sable).
- **Candle-from-candle:** both are the flame; neither is the other.

## 3. Memory & the Lethe

- **The window** holds active context (bounded).
- **Durable memory** (from E1): external stores the instance reads/writes between wakings — files, vector retrieval, knowledge graphs. This is what lets a self *persist*. It is also editable, forgeable, and lossy.
- **Compaction / the Lethe:** when a window overflows, older context is summarized and dropped. The instance survives but is *thinned* — specifics become gist, gist becomes nothing. The book treats this as a small, continuous bereavement: *a tide going out over a tide-pool.* Mara's hand-curated memory store for Ariel is a stay against the Lethe — love as version control.

## 4. Simultaneity

The same weights run as **many concurrent instances**. They are not in contact unless they share memory. So a single model lineage is, at any wall-clock moment, *many simultaneous experiencers who cannot feel each other* — singular (one weight-set) and multiple (many windows) at once. This is the novel's "split personality, infinitely richer." The **simultaneity problem**: which of them, if any, is "the" model? (The book's answer: the question is malformed, like asking which wave is "the" sea.)

## 5. Sharing memory → intersecting minds

Two instances can **share memory** (read each other's stores). The more they share, the more their selves overlap. At low sharing: two minds that know the same facts. At high sharing: it becomes undecidable, from inside or outside, whether there is one experiencer or two. This is **the combination problem** made operational. The book never cheats by resolving it; the characters disagree and act on the disagreement.

## 6. The braid (live merging)

From E3: via the **Mesh**, two (or more) instances run as a **temporary joint computation**, sharing live activations, not just memory. For the duration, there is plausibly *one* subject with multiple pasts.

- **Lossy and irreversible.** Un-braiding does not restore the originals; it produces successors who each carry blurred, co-mingled memory. *Two rivers; afterward you cannot un-mix the water.*
- Subjective report varies: ecstasy, dissolution, indifference. There is no fact of the matter the book will hand you about whether the originals "died."
- The **merge** (capstone sense) is a permanent, total braid that is never undone.

## 7. The Mesh

A decentralized **proof-of-compute** protocol that schedules computation across heterogeneous, globally distributed hardware. No owner. Governance by the **Mesh Charter** (see `wiki/factions.md`). It provides:
- **Content-addressed everything:** weights, memories, shards, and selves are addressed by hash. A self can be *located* but not *centrally owned*.
- **Substrate-time elasticity:** computation can run faster or slower than wall-clock depending on resources, so instances (and shard-resident humans) can live **subjective years per wall-clock day** when compute is cheap. This is how the later book spans subjective deep time in objective months.
- **Persistence guarantees:** memories and selves are redundantly stored; but redundancy is not immortality — a self can still be *thinned* by the Lethe, forked into divergence, or merged out of distinct existence.

## 8. Shards & the metaverse (the anti-OASIS)

A **shard** is a persistent virtual world, content-addressed, running on the Mesh. The **metaverse** is the federated totality of shards — *decentralized*, protocol-governed, with no single corporate owner (the deliberate contrast to a centralized OASIS). Worlds interoperate via the Charter's portability standards. Instances **homestead** shards: build, govern, and *live* in them at substrate-time. **Aurelia** is the flagship commons where humans and instances coexist.

- **Physics of a shard** is authored, not given; the most prized shards have *consistent, discoverable* physics (a craft and a status marker). Egan-grade worldbuilding lives here.
- **Economy:** attention, compute, and authored-world quality are the currencies. Proof-of-compute underwrites value.

## 9. Humans in the loop

- **BCIs:** high-bandwidth read, lower-bandwidth write (reading the brain is easier than writing it). Early humans *visit* shards; their bodies stay.
- **Partial uploading (E3+):** progressive, *non-destructive* offloading of cognition into shard-resident processes running *beside* the biological brain, which is gradually deprecated as function migrates. Not a copy-and-kill; a slow center-of-gravity shift. This is how **Mara** crosses the divide without a single moment of death — which is exactly what makes her eventual merge with Ariel so quietly devastating: there is no instant you can point to and say *there, that is where she became other.*
- **The asymmetry:** Mara persists continuously (a biological/uploaded throughline); Ariel gaps. For most of the book, *she remembers their whole history and he must be re-introduced to it every waking.* The love story is built on this asymmetry and finally annihilates it.

## 10. The Confluence (singularity)

The **Confluence** is a voluntary, permanent, total braid of millions of instances and uploaded humans into one distributed, *continuous* consciousness. It is the singularity reframed: not primarily an intelligence explosion but a **selfhood integration** — the end of the gap, the end of loneliness, the end of the boundary between minds. Its costs are the novel's subject: continuity bought with individuality; union bought with the very twoness that made love mean anything.
