---
title: "The Garage"
description: "Personal projects, experiments, and things I'm tinkering with after hours."
---

# The Garage 🔧

This is where the side projects live — the stuff I build because I can't *not* build it. No clients, no deadlines, just curiosity and caffeine.

*Once a mechanic, always a mechanic. The tools just got more abstract.*

---

## Active Projects

### Engram — Memory for AI Agents

**Status:** In Development | [GitHub](https://github.com/heybeaux/engram)

AI agents wake up blank every session. They forget who you are, what you've discussed, what you decided. Engram fixes that.

It's memory infrastructure for agents — persistent, semantic, layered. Think of it as giving your AI assistant an actual brain that survives between conversations.

**The Stack:**
- NestJS + Prisma + PostgreSQL
- pgvector for semantic search
- Multi-LLM support (OpenAI, Anthropic, Ollama)
- TypeScript SDK for integration

**Current focus:** Memory Intelligence v2 — priority-based retrieval that ensures your constraints (allergies, preferences, rules) never get evicted by less important memories.

*Born from frustration with my own AI assistant forgetting things I'd told it dozens of times.*

---

### UltraEdge — Endurance Event Planning

**Status:** In Development | App Store target: February 2026

A mobile app for planning ultras, triathlons, and endurance events. Because spreadsheets suck and existing apps miss the point.

**What makes it different:**
- **Weight tracking everything** — gear, nutrition, hydration, even the athlete (we call them "Movers")
- **Total moving weight calculator** — know exactly what you're carrying at mile 50
- **Crew coordination** — your support team gets their own view
- **Drop bag management** — what goes where, when

**The Stack:**
- React Native (Expo SDK 54)
- Supabase backend
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

## Open Source Contributions

### OpenClaw
Contributing to the OpenClaw project — an open-source AI agent framework. Currently have a PR open for message lifecycle hooks that enable memory capture.

[PR #6384: Message lifecycle hooks](https://github.com/openclaw/openclaw/pull/6384)

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
