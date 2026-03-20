---
title: "The Garage"
description: "Personal projects, experiments, and things I'm tinkering with after hours."
---

# The Garage 🔧

This is where the side projects live — the stuff I build because I can't *not* build it. No clients, no deadlines, just curiosity and caffeine.

*Once a mechanic, always a mechanic. The tools just got more abstract.*

---

## Active Projects

### Engram — Memory Infrastructure for AI Agents

**Status:** Live — Self-Hosted & Cloud | [Website](https://openengram.ai) | [GitHub](https://github.com/heybeaux/engram) | [Dashboard](https://app.openengram.ai)

AI agents wake up blank every session. They forget who you are, what you've discussed, what you decided. Engram fixes that.

Open source memory infrastructure with ensemble vector search, a nightly Dream Cycle that consolidates memories like human sleep, knowledge graph extraction, and a full monitoring dashboard. Self-hosted with all features free, or hybrid with cloud.

**By the numbers:**
- 8,200+ memories in production
- 2,816 tests
- 124ms p50 recall latency
- 4 local embedding models on Metal GPU
- Ensemble search with Reciprocal Rank Fusion

**The Stack:**
- NestJS + Prisma + PostgreSQL + pgvector
- Ensemble embeddings (local + OpenAI + Cohere)
- TypeScript SDK, MCP server for Claude Desktop
- Next.js dashboard on Vercel, API on Railway

**The ecosystem:**
- [engram](https://github.com/heybeaux/engram) — Core API
- [engram-embed](https://github.com/heybeaux/engram-embed) — Local embeddings on Metal GPU
- [engram-dashboard](https://github.com/heybeaux/engram-dashboard) — Monitoring & management
- [engram-mcp](https://github.com/heybeaux/engram-mcp) — MCP server for Claude Desktop
- [engram-code](https://github.com/heybeaux/engram-code) — Semantic code search
- [engram-client](https://github.com/heybeaux/engram-client) — TypeScript SDK

**Recent milestones:**
- Awareness Module (Waking Cycle) — pattern detection and insight generation
- Memory Pools — multi-agent shared memory with attribution tracking
- Cloud edition with billing, cross-device sync, and cloud backup
- 5 discrete health metrics replacing the retired Fog Index
- Automated dedup pipeline — detection, LLM classification, auto-resolution

*Born from frustration with my own AI assistant forgetting things I'd told it dozens of times. Now it's becoming the memory layer for AI.*

---

### UltraEdge — Endurance Event Planning

**Status:** All CRUD screens complete, monetization spec done | App Store submission pending

A mobile app for planning ultras, triathlons, and endurance events. Because spreadsheets suck and existing apps miss the point.

**What makes it different:**
- **Weight tracking everything** — gear, nutrition, hydration, even the athlete (we call them "Movers")
- **Total moving weight calculator** — know exactly what you're carrying at mile 50
- **Crew coordination** — your support team gets their own view
- **Drop bag management** — what goes where, when

**Monetization:**
- **Free tier** — full local functionality, plan your events on-device
- **Premium ($5.99/mo)** — cloud sync across devices, advanced weight tracking analytics, crew collaboration features via RevenueCat

**The Stack:**
- React Native (Expo SDK 54)
- Supabase backend
- TypeScript throughout
- RevenueCat for subscriptions

**Design philosophy:** "Organic" aesthetic — forest greens, trail browns, sunrise oranges. Warm and approachable, not another sterile fitness app.

*Started as a tool for my own ultra planning. Now it's becoming something bigger.*

---

### Smart Greenhouse — Home Assistant Build

**Status:** Design Phase | Hardware + Software

Our house came with a fantastic walk-in greenhouse already in place. Only problem? Zero automation. Time to fix that.

**The Vision:**
- Temperature and humidity monitoring
- Automated ventilation (fans, vents)
- Smart watering based on soil moisture
- Climate alerts and logging
- Eventually: grow light scheduling

**Planned Stack:**
- Home Assistant as the brain
- ESP32 or Zigbee sensors
- Relay modules for pumps and fans
- Dashboard for monitoring from anywhere

**Current status:** Researching sensor options, sketching out the automation logic, and trying not to over-engineer it (failing).

*The greenhouse has been patient. The plants inside are optimistic.*

---

---

### ACR — Agent Capability Runtime

**Status:** Shipped | [GitHub](https://github.com/heybeaux/acr) | MIT License

The missing context layer for AI agents. Instead of dumping every tool instruction into the context window, ACR loads capabilities at four resolution levels — index (~20 tokens), summary (~95), standard (~1,250), deep (~2,500+). Agents get what they need, nothing more.

**By the numbers:**
- 98% token reduction at cold start
- 100% Task Resolver recall, 64.7% precision (autoresearch-optimized)
- 105 tests across 7 suites
- ~9,000 lines of TypeScript + Python implementation

**Key features:**
- Progressive LOD loading (like game engines, but for prompts)
- Dynamic mount/unmount with state persistence
- Multi-signal task resolution (triggers, keywords, tech stack, file patterns)
- Spawn-time capability inheritance for multi-agent systems

---

### AWM — Agent Workflow Model

**Status:** Shipped | [GitHub](https://github.com/heybeaux/awm) | MIT License

Predictive execution for agent pipelines. AWM observes past runs and adapts future ones — routing to cheaper models when safe, pre-injecting constraints to prevent failures, and skipping unnecessary steps.

**By the numbers:**
- Grade A benchmark (8/8 scenarios)
- 81.5% prediction accuracy
- 59.6% cost reduction via model routing (synthetic benchmark)
- 7-run cold start
- Self-optimizing via autoresearch meta-optimizer

**The stack within the stack:**
- Bayesian Beta distributions for outcome beliefs
- Thompson Sampling for model routing (explore vs exploit)
- Constraint pattern extraction from approval gate rejections
- Zero-dependency core, Engram adapter, Mastra/Forge middleware

---

### ChalkBreaker — Playoff Bracket Optimizer

**Status:** Live | [chalkbreaker.com](https://chalkbreaker.com)

Monte Carlo simulation engine that generates EV-optimized brackets for playoff pools. 50,000 simulations, 4 verified data sources, 263 automated data integrity checks. Currently supporting March Madness and NHL Playoffs.

**What makes it different:**
- Expected Value optimization per scoring format (not just "pick the favorite")
- Best-of-7 series simulation with 2-2-1-1-1 home ice, OT compression
- Every stat verified and cited — built-in safeguards against fabricated data
- 70% historical backtest accuracy on 30 real NHL playoff series

---

## On the Bench

Projects I'm thinking about but haven't started yet:

- **Local-First Sync Engine** — CRDTs for offline-first apps without the complexity
- **Voice Journal** — Daily audio notes that self-organize

---

## Open Source

### Engram Ecosystem
The entire Engram platform is open source under Apache 2.0. Six repositories, actively maintained, accepting contributions.

### OpenClaw
Active contributor to [OpenClaw](https://github.com/openclaw/openclaw) — an open-source AI agent framework. Beyond code contributions, I run two production AI agents (Rook and Kit) powered by OpenClaw that collaborate on code, fix bugs, and ship features in real-time.

OpenClaw is the backbone of my daily AI workflow — and contributing back to the project that makes it possible just makes sense.

---

## Philosophy

I build things that scratch my own itches. If it solves a problem I have, chances are someone else has it too.

Most of these projects started as weekend experiments. Some died. Some became obsessions. The ones that survive usually have one thing in common: they solve a real problem that annoyed me enough to do something about it.

**Tools I reach for:**
- TypeScript (because types are love)
- React Native (mobile without the pain)
- NestJS (backend structure without the ceremony)
- Prisma (SQL without the tears)
- Supabase (Postgres + auth + realtime, done)

---

*Want to collaborate on something? [Reach out](/contact).*
