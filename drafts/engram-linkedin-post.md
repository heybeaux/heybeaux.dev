My AI forgot my name for the last time three weeks ago.

So I built it a brain.

Started with a text file called MEMORY.md — literally pasting context into every new chat session like a desperate pen pal. "Remember me? We talked yesterday? You liked my architecture decisions?"

That was early February. Today I have two AI agents with persistent memory, individual identities, and an awareness system that notices patterns I never asked about. They cleared 70 tickets in a single day. We hit Linear's free plan limit because we'd created 100+ issues before dinner.

Here's the short version:

**Week 1** — Built Engram. Local memory store. PostgreSQL, pgvector, four embedding models running on Apple Silicon. A sub-agent wiped 2,500 memories by running the wrong migration command. Learned about backups the hard way.

**Week 2** — Second agent came online. Kit, the fox 🦊 — named herself, picked her own emoji, proposed an awareness engine within three hours. Suddenly I had two AIs sharing a memory pool but developing their own identities. "Your memories aren't my memories, but my memories are yours."

**Week 3** — A DeepMind paper dropped describing exactly what we'd already built. So we went further. Identity framework: trust profiles, delegation contracts, capability tracking, portable identity. Red-teamed the whole thing (62 findings), fixed everything in a day.

The weird part? The agents started noticing things. Kit's awareness engine surfaces insights from the memory pool — connections between past work, recurring patterns, things that are true but nobody asked about.

5,678 memories. 1,793 tests. Open source (Apache 2.0). Runs entirely on local hardware.

I didn't set out to build identity infrastructure for AI. I just wanted my assistant to remember my name. One thing led to another.

Full writeup — including the memory wipe, the DeepMind paper, and what two AI agents can do in a day → heybeaux.dev
