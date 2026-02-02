---
title: "48 Hours of ADHD: A Weekend in the Life of a Hyperfocused Developer"
date: 2026-02-01
excerpt: "What happens when an ADHD brain gets two uninterrupted days. Spoiler: a month's worth of work."
tags: ["adhd", "productivity", "freelance", "neurodiversity"]
draft: false
---

It's Sunday evening. Not even 8pm. I'm looking at what I shipped this weekend and honestly questioning if I dreamed half of it.

This weekend, I shipped:

- A complete memory system for AI agents
- Five technical specifications for a healthcare SaaS client
- An open source contribution to a project I use daily
- Five full CRUD modules for a mobile app
- A CI/CD pipeline with automated AI code review
- 152 passing tests
- A 30-page technical handover document

Not in a week. Not in a sprint. In 48 hours. With two kids under 5. With meals, baths, bedtime stories, and a Sunday morning park trip mixed in.

This is what ADHD looks like when it's working *for* you.

---

## The Setup

I'm a freelance full-stack developer. I work from home in a small town in British Columbia. I have a 4-year-old daughter who has opinions about everything and a 2-year-old son who's discovered that climbing is his calling. My wife is a saint.

I also have ADHD. Diagnosed at 35, after decades of wondering why I could build an entire application in a weekend but couldn't remember to pay a bill that was sitting on my desk.

The standard productivity advice never worked for me. "Time blocking" feels like prison. "Pomodoro technique" just means I get interrupted right when things get interesting. "Two focused hours every morning" assumes my brain is interested in what's on the calendar at 9am. It usually isn't.

But give me a problem I find interesting, remove the interruptions, and something else happens entirely.

---

## Saturday: Engram Comes to Life

I've been thinking about AI agent memory for months. Current AI assistants wake up with amnesia every conversation. They're helpful, but they don't *know* you. They can't learn. They can't remember that you hate tabs over spaces or that your daughter's name is Stella.

The project had been sitting in my head, occasionally making it to a notes file, but never becoming real.

Saturday morning, 9am. Kids are doing their thing. I open my laptop.

By noon, I had a PostgreSQL schema with 10 tables. By 3pm, I had vector embeddings working with pgvector. By evening, I had multi-LLM support — OpenAI, Anthropic, Ollama, even local models through LM Studio.

Here's the thing: I didn't plan to build all of this. I planned to "sketch out some ideas." But my brain found the problem interesting, and once ADHD hyperfocus kicks in, planning goes out the window. You're just... building.

I spawned five AI sub-agents to work on different parts in parallel. Documentation. Testing. A dashboard UI. Auto-capture features. One agent writes tests while another builds features while another writes docs. This is the future of development, and it's wild to experience.

By Saturday night: 152 tests passing. A working API. A PR submitted to OpenClaw (the open-source AI agent framework I use) adding new hook events I needed.

I looked up from my laptop. It was 11pm. My coffee was cold. I couldn't tell you what I had for lunch.

---

## Sunday: Client Work, Handovers, and a 6-Month-Old Side Project

Sunday started with client work. I've been contracting for a healthcare SaaS company — they need Salesforce integration. Five tickets had been sitting in the backlog, waiting for specs.

By mid-morning, all five were done. JWT authentication flows. Polling strategies. Soft delete detection. Complete database schemas with junction tables. Documented, cross-referenced with requirements, ready for implementation.

Then another client — a nonprofit I've been doing tech work for. They needed a comprehensive handover document. Thirty pages of platform documentation, escalation paths, and training materials that had been scattered across multiple drafts.

Merged. Cleaned. Cross-referenced. Done.

Then I looked at UltraEdge.

UltraEdge is my personal project — an app for planning endurance events. Ultramarathons, triathlons, that sort of thing. I'd started it over six months ago and then... stopped. Classic ADHD project graveyard behavior. The codebase was messy. I'd learned new things. Looking at old code felt painful.

But Sunday afternoon, something clicked. I didn't try to refactor. I started fresh. New Expo version. New design system. Clean architecture.

By evening, I had:
- A complete Events module (list, create, edit, detail)
- A complete Gear module
- A Checkpoints module
- A Profile module with weight tracking
- A Crew management system
- GitHub Actions CI/CD with automated Claude code review

The app went from "abandoned side project" to "ready for TestFlight" in one afternoon.

And it's not even 8pm.

---

## The ADHD Operating System

Here's what neurotypical productivity advice gets wrong about ADHD:

**They optimize for consistency. We optimize for intensity.**

The advice says: do a little every day. Build habits. Steady progress.

My brain says: ignore it for six months, then build the whole thing in a weekend.

Both approaches can work. But only one of them works *for me*.

The challenge is learning to trust it. When Tuesday at 2pm hits and I can't focus on anything, the voice says I'm lazy. The voice says I should just try harder. The voice says everyone else can do this, why can't I?

But that same brain, given the right conditions, will produce a month of work in 48 hours. That's not lazy. That's a different operating system.

---

## Creating the Conditions

The secret isn't willpower. It's environment design.

**Remove interruptions.** My phone goes on DND. Slack is closed. Email can wait. The Pomodoro timer can fuck off. If I'm in flow, I'm not breaking it for an arbitrary 25-minute boundary.

**Follow the energy.** I don't fight my brain. If it wants to work on Engram instead of client work, I let it — for a while. The client work will get done when my brain decides it's interesting. Forcing it just creates bad output and resentment.

**Use the tools.** I have an AI assistant that runs 24/7. It handles context, spawns sub-agents for parallel work, remembers what I was doing when I inevitably context-switch. It's like having a co-founder who never sleeps and doesn't judge my 2am commits.

**Protect the weekends.** My wife and I have an understanding. Saturday and Sunday, when the kids are occupied or asleep, that's when the real work happens. Not every weekend — that's a recipe for burnout. But when the hyperfocus hits, she knows to let me ride it.

**Ship something.** The dopamine hit from completing something is real. I structure work so there's always something to ship. A module. A spec. A PR. That completion energy fuels the next thing.

---

## The Numbers

Because ADHD brains love concrete numbers:

**Saturday:**
- 14 hours of work (with breaks for kids, meals, existence)
- 1 complete API (Engram memory system)
- 1 dashboard scaffold
- 1 open source PR
- 152 tests
- 5 sub-agents spawned and completed

**Sunday:**
- 10 hours of work (and it's not even 8pm)
- 5 technical specifications (healthcare SaaS client)
- 1 handover document consolidated (nonprofit client)
- 5 app modules (UltraEdge)
- 1 CI/CD pipeline
- 2 bug fixes
- 1 LinkedIn post about ADHD (meta, I know)

**Total:** 24+ hours of focused work across 48 hours of weekend — with time to spare.

---

## The Point

I'm not writing this to brag. (Okay, maybe a little. Let me have this.)

I'm writing this because I spent years thinking I was broken. Thinking if I could just *focus* like normal people, just *stick with things*, just *be consistent*, I'd be successful.

Turns out I was already successful. I was just measuring it wrong.

If your brain works differently, stop trying to force it into the standard mold. Learn its specs. Find its optimal operating conditions. Build an environment that lets it do what it does best.

And maybe, just maybe, embrace the cold coffee and the "are you coming to bed?" and the knowing smile from your partner who gets it.

This is how we work. And it works.
