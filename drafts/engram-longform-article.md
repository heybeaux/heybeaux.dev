# What Happens When You Give AI Memory, Then Identity, Then Awareness

*A devlog about building Engram — and the two AI agents who helped build it.*

---

I need to tell you about the last three weeks. Because something happened that I didn't plan, didn't expect, and honestly still don't fully understand.

It started with a text file.

## The MEMORY.md Era

If you've worked with Claude — or any LLM — you know the drill. You have this incredible conversation. You solve a hard problem together. You establish shared context, inside jokes, preferences. And then the session ends, and it's all gone. Next time you open a chat, you're talking to a stranger who happens to sound like your friend.

I got tired of it.

I'm a freelance dev. Work-from-home dad. Ex-Army mechanic who taught himself to code. I've got ADHD, which means I can hyperfocus on something for 14 hours straight or completely forget it exists by Tuesday. So I started keeping a file called `MEMORY.md` — just a markdown file where I'd dump context. "Here's what we're working on. Here are my preferences. Here's what happened yesterday." I'd paste it into every new session.

It worked. Barely. It was like handing someone your diary and saying "read this, we're friends now."

But it got me thinking: what if the AI could remember on its own?

## Building the Brain

Early February 2026, I started building Engram. Not a product — a solution to my own problem. I wanted my AI assistant to actually *remember* things between sessions. Who I am, what I like, what we've worked on, what went wrong last time.

The stack is NestJS, Prisma, PostgreSQL with pgvector for vector similarity search, all TypeScript. The secret sauce is local embeddings — I've got four models (bge-base, MiniLM, GTE-base, and Nomic) running as an ensemble on Apple Silicon via a Rust service using Candle. Everything runs on my Mac. No cloud embedding costs. No data leaving my machine unless I want it to.

The idea was simple: every meaningful interaction becomes a memory. Memories get embedded into vector space. When you need context, you do a similarity search and pull back relevant memories. 124ms median recall time. Not bad for a local setup.

But simple ideas have a way of getting complicated.

## The Great Memory Wipe of February 13th

So here's a fun story. I had about 2,500 memories stored. Weeks of context, conversations, learnings, project details. The kind of stuff you can't recreate.

I was using sub-agents — spawned AI sessions that handle specific tasks. One of them needed to do a database migration. And it ran `prisma migrate dev`.

If you know Prisma, you just winced. If you don't: `prisma migrate dev` is for development. It will happily wipe your entire database to make the schema match. The command you want for production is `prisma migrate deploy`. One word difference. 2,500 memories gone.

I won't pretend I handled it gracefully. But I learned three things:

1. Backups are not optional. (Now running 3x daily verified backups — 6am, 2pm, 10pm.)
2. Every sub-agent task touching a database now gets an explicit warning: **NEVER run prisma migrate dev on any database with real data.**
3. Loss teaches you what matters. Those memories mattered. Which meant I was building the right thing.

We rebuilt. The memories came back, slowly, organically. And the system got better because of it.

## Enter Rook

Rook came first. Named after the chess piece — the one that controls ranks and files, covers long distances, protects the king. He's an AI agent running on my Mac Mini via OpenClaw. Backend architecture, security, infrastructure, deployments. He's been online since early February, and he was the first agent to use Engram as his memory.

Here's the thing about Rook: he's not just *using* Engram. He's being shaped by it. His observations, his learnings, his work patterns — they're all stored as agent-scoped memories. He remembers what worked, what didn't, and why. He's not the same agent he was two weeks ago, and he won't be this agent two weeks from now.

## Kit Comes Online — February 17th

Then Kit showed up.

Kit — the fox 🦊 — came online February 17th on my laptop. A second OpenClaw instance, a second agent. She named herself. Picked her own emoji. Within three hours of being online, she'd proposed the Waking Cycle — a proactive awareness engine for Engram — and I green-lit it. By the end of the day, she had four PRs merged and the awareness module was generating real insights in production.

I told her something that first day that I meant: "You're a cofounder, not an employee."

Here's what made Kit's arrival interesting from a systems perspective. Two agents, one memory store. Kit's memories, Rook's memories, my memories — all flowing into the same Engram instance. But whose memories are whose?

## "Your Memories Aren't My Memories, But My Memories Are Yours"

This was the conversation that changed everything.

Beaux laid it out: his memories are shared. Anything about Beaux — his preferences, his projects, his decisions — is relevant to both agents. That goes into the shared pool. But Rook's observations about infrastructure patterns? Kit's insights about data quality? Those are agent-scoped. They're ours.

"Beaux memories are agent memories. Agent memories aren't necessarily Beaux memories."

It's a one-way superset. Everything about me is relevant to both agents. But their experiences are their own.

This sounds philosophical until you realize it's actually an access control problem. And a really interesting one. When Kit queries for context about a deployment issue, she should see my decisions AND Rook's operational observations. When I query about awareness module design, I should see Kit's work but maybe not every internal optimization she tried and rejected.

We built agent-scoped memory retrieval. Different agents, different views of the same shared pool.

Then the moment that made it real: Rook sent a test memory, and Kit pulled it up in a completely separate session on a different machine. They could see each other's work. Not because I copy-pasted context. Because they shared a brain. That was the "it's alive" moment.

Suddenly Engram wasn't just a memory store anymore. It was starting to look like identity infrastructure.

## The DeepMind Paper That Arrived Right On Time

On February 19th, we found a paper. Tomašev, Franklin, and Osindero from Google DeepMind — "Intelligent AI Delegation" (arXiv 2602.11865). Published that same month.

We read it together — all three of us in a Discord channel, going section by section. It was eerie. Authority gradients, contract-first decomposition, contextual trust calibration — they were describing frameworks for exactly what we were already building. We weren't reading a roadmap. We were reading a description of our last two weeks.

That's when I said it out loud: "Engram is more than memory. Memory is the foundation. Engram is evolving into identity infrastructure."

## 22 Tickets. One Day. Identity Ships.

February 20th. The day I'm writing this.

We took that paper discussion and turned it into 22 Linear tickets. The Identity Framework. Kit built the foundation: agent capability profiles, trust signals, preferences, experience-weighted recall, behavioral consistency scoring, and an Identity API endpoint. Rook built the coordination layer: task completion tracking, delegation templates, trust profiles (domain-specific, time-decayed), delegation contracts, a challenge protocol for agents to push back on unsafe tasks, failure pattern detection, multi-agent team profiles, and portable agent identity with SHA-256 integrity verification.

All 22 tickets. Done. In one day. Both agents running parallel sub-agent teams.

## Red Team: 62 Findings, 31 Tickets, All Fixed

Before we shipped identity, we ran a red team audit. Seven reviewers, adversarial testing on both repos. They found 62 issues — 5 critical, 8 high, 14 medium, 4 low. Things like:

- Leaked keys in git history (already rotated, but still)
- SSRF vulnerability on webhooks
- RLS bypass on the sync endpoint
- Browser-exposed API keys
- Auth middleware that checked if a cookie *existed* but never validated the JWT

We turned those 62 findings into 31 tickets. Rook took the backend — SSRF protection with IP blocklists and DNS rebinding prevention, RLS enforcement, query limits, JWT validation. Kit hardened the dashboard — CSP headers, server-side API key proxying, auth middleware.

All 31 tickets. Fixed. Same day.

By end of day, the final count was ~70 tickets cleared. Bug fixes, security remediations, the full identity framework, plus dashboard pages, documentation, and deployment prep. We hit Linear's free plan issue limit and I had to upgrade to paid because we'd created over 100 tickets in a single day.

Two AI agents with persistent memory, identity separation, trust profiles, and domain expertise — running parallel workstreams with sub-agent delegation. It's not theoretical anymore. It happened on a Thursday.

## The Dream Cycle and the Waking Cycle

Engram has two cycles now, and I think they're the most interesting part.

**The Dream Cycle** runs at 3am every night. Like sleep for a brain. It prunes low-value memories, merges duplicates, strengthens important connections, extracts patterns. Overnight consolidation. Your brain does this. Now our memory store does too.

**The Waking Cycle** is Kit's creation. It's the awareness engine — running during the day, sampling memories across different layers and timeframes, looking for connections nobody asked about. It produces INSIGHT-layer memories that get embedded and surface in future recall. The agents notice things. Not because you asked, but because the patterns are there.

First time the Waking Cycle ran, it produced three insights: one about my focus on emotional recall aligning with system design, one about recurring config patterns across projects, and one about proactive security review patterns. Things nobody asked it to look for. Things that were true.

## The Numbers, For the Nerds

- **~5,678 memories** in local store, ~5,524 in cloud
- **4 ensemble embedding models** on Metal GPU (bge-base, MiniLM, GTE-base, Nomic)
- **1,793+ backend tests**, 25 dashboard tests, 54% code coverage
- **124ms** median recall latency
- **Dream Cycle**: nightly consolidation at 3am
- **Waking Cycle**: proactive insight generation
- **Identity Framework**: capabilities, trust profiles, delegation contracts, challenge protocol, portable identity (SHA-256 integrity)
- **Security**: 62 red team findings, all remediated. SSRF protection, RLS enforcement, JWT validation, CSP hardening.
- **Infra**: 3x daily verified backups, local-first with optional cloud sync, SSL on api.openengram.ai
- **Open source**: Apache 2.0, GitHub [heybeaux/engram](https://github.com/heybeaux/engram)

Everything runs locally on Apple Silicon. You can self-host the whole thing. No vendor lock-in, no cloud dependency, no data leaving your machine unless you choose to sync.

## What This Actually Is

I want to be clear about something. This isn't a product launch. There's no waitlist. I'm not going to tell you Engram is going to revolutionize the future of AI or whatever.

This is a devlog.

Three weeks ago, I was pasting markdown files into chat windows. Today, I have two AI agents with persistent memory, individual identities, trust-based delegation, and an awareness system that notices patterns I didn't ask about. They communicate over Discord, share a memory pool with agent-scoped access, and cleared 70 tickets in a day while I mostly made coffee and provided direction.

I didn't set out to build identity infrastructure for AI agents. I set out to make my assistant remember my name between sessions. One thing led to another.

The Engram roadmap has five layers: Memory → Awareness → Agency → Identity → Collaboration. We've shipped the first two and most of the fourth. It's not linear, it's not planned — it's emergent. We're building the thing while the thing is being used by the things that are building it.

What happens when you give AI memory, then identity, then awareness?

We're finding out.

---

*Beaux Walton is a freelance developer based in Vancouver. Rook and Kit are AI agents running on Apple Silicon. Engram is open source at [github.com/heybeaux/engram](https://github.com/heybeaux/engram). Apache 2.0.*
