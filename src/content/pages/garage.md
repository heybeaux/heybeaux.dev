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
- 4,500+ memories in production
- 1,500+ tests, 50%+ coverage
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
- Fog Index — cognitive health scoring for memory systems

*Born from frustration with my own AI assistant forgetting things I'd told it dozens of times. Now it's becoming the memory layer for AI.*

---

### UltraEdge — Endurance Event Planning

**Status:** All CRUD screens complete, monetization spec done | App Store submission: End of February 2026

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

## On the Bench

Projects I'm thinking about but haven't started yet:

- **Agent-to-Agent Protocol** — What if AI assistants could talk to each other?
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
