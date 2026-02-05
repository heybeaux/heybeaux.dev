---
title: "Teaching AI to Remember When"
date: 2026-02-04
excerpt: "I asked my AI what we did today. It had no idea. So we taught it about time — and in the process, discovered why memory is harder than anyone thinks."
tags: ["ai", "memory", "agents", "building"]
draft: false
---

I asked my AI agent a simple question tonight.

"What did we work on today?"

It returned four results. Out of thirty-plus conversations we'd had in the last ten hours.

Not because it was broken. The retrieval worked fine. The embeddings were accurate. The semantic search found "relevant" memories.

The problem was more fundamental than that.

It didn't know what "today" meant.

## The Blank Slate Problem

Every AI agent in the world wakes up blank. No memory of yesterday. No concept of this morning. No sense that the thing you told it three hours ago is more relevant than something from last week.

I've been building a memory system called [Engram](https://github.com/heybeaux/engram) to fix this. Not a chat history. Not a vector database with a search bar. An actual memory system — with layers, types, importance scoring, and now... time.

Before tonight, Engram could answer:
- "What does Beaux prefer?" *(preferences, ranked by importance)*
- "What's the current project?" *(project memories, scored by relevance)*
- "Is there anything safety-critical I should know?" *(always surfaced, never evicted)*

But it couldn't answer: "What did we do yesterday?"

Because it searched for memories *similar to the concept of yesterday* — not memories *from* yesterday.

## How Human Memory Actually Works

Think about how you'd answer "What happened yesterday?" You don't search your brain for things semantically similar to the word "yesterday." You time-travel. You jump to yesterday, look around, and report what you find.

That's two completely different operations:
1. **Semantic recall**: "Find me things related to X" *(what current AI does)*
2. **Temporal recall**: "Find me things from time period Y" *(what humans do naturally)*

Real memory does both. You can ask a person "What did we talk about yesterday?" and they'll filter by time *first*, then by topic. The "yesterday" isn't a search term — it's a constraint.

## Building a Sense of Time

So at 10 PM on a Wednesday, after a full day of shipping features, I built one.

The temporal parser recognizes thirteen types of time expressions: "today," "yesterday," "last week," "3 hours ago," "recently," "this month." It strips the time part from the query, uses it as a filter, and passes the rest to the semantic search engine.

When someone asks "What happened yesterday?" it now:
1. Parses "yesterday" → February 4th, midnight to midnight
2. Fetches all memories from that time window
3. Ranks them by semantic relevance to "what happened"
4. Weights the final score: 45% semantic, 35% temporal, 20% importance

The first version got it backwards — it searched semantically first, then filtered by time. Only four results survived. The fix was obvious once I saw it: when someone gives you a time, *that's the primary filter*. Semantics is secondary.

After the fix: thirty results. All from today. Correctly ranked.

## The Allergy That Wasn't

Here's where it gets interesting.

Engram has a safety detection system. Sixteen patterns that flag memories as safety-critical — allergies, medications, emergency contacts, blood types. These memories get a score floor of 0.6 and can never be evicted from context. The idea is simple: if you told me you're allergic to peanuts, I should never forget that, even if we haven't mentioned it in months.

Tonight I asked it: "What's the one safety-critical memory in the system?"

The answer:

> *"Beaux noted that the design might solve coffee but creates new problems, such as forgetting allergies."*

That's not an allergy. That's me *talking about* the concept of allergies in a design discussion. The system saw the word, matched the pattern, and flagged it as life-threatening.

It's a false positive. And it's also a perfect illustration of where we are with AI memory.

The system can detect the *pattern* of safety-critical information. It can't distinguish between *having* an allergy and *discussing* the concept of allergies. Between a statement and a meta-statement. Between data and data about data.

We built confidence scores earlier that same evening — each extracted field now carries a 0.0 to 1.0 score indicating how explicitly it was stated. "I'm allergic to peanuts" would score 1.0 on confidence. "We discussed how the system handles allergies" should score much lower.

The pieces are there. They just need to learn to talk to each other.

## Why This Matters

I'm not building this because memory systems are cool (they are). I'm building it because the gap between "AI that can answer questions" and "AI that actually knows you" is almost entirely a memory problem.

Your doctor knows you're allergic to penicillin because it's in your chart — not because they "remember" every conversation you've had. Your best friend knows you hate mornings because they've watched it play out over years. Your partner knows not to talk to you before coffee because they've learned.

All of that is memory. Layered, typed, weighted, temporal memory.

Today we taught an agent what "today" means. Yesterday (I can say that now — it'll understand) we taught it what matters and what's critical. Tomorrow we'll teach it to forget the right things.

One day, waking up blank won't be the default.

---

*Engram is open source: [github.com/heybeaux/engram](https://github.com/heybeaux/engram)*

*I'm a freelance developer in Powell River, BC, building tools that make AI agents smarter. If this kind of work interests you — or if you're building something similar — I'd love to hear about it.*
