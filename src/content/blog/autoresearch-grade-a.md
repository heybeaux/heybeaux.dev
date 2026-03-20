---
title: "How I Used Karpathy's Autoresearch to Grade-A My AI Stack"
date: 2026-03-20
excerpt: "One optimization loop. Three systems. Every one improved. The method is stupid simple and works on anything you can measure."
tags: ["ai", "engineering", "autoresearch", "open-source"]
draft: false
---

Andrej Karpathy released a method called [autoresearch](https://github.com/karpathy/autoresearch) — an autonomous experimentation loop for ML training. The idea: instead of you manually tuning hyperparameters, let an agent try small changes, measure the result, and keep only what improves things.

I adapted it for my AI agent stack. Not ML training — actual production systems. Memory infrastructure, capability management, prediction engines. The results surprised me.

## The Method (Stupid Simple)

1. Define what "good" looks like as binary yes/no checks
2. Run the system, score the output
3. Change one thing
4. Run again
5. Score improved? Keep the change. Score dropped? Revert.
6. Repeat

That's it. No gradient descent, no training data, no neural anything. Just a disciplined loop.

The only hard part is writing good evals. They need to be binary (pass/fail, not "rate 1-10"), specific enough to be consistent, and broad enough that the system can't game them.

## System 1: AWM — Grade C to Grade A

[AWM](https://github.com/heybeaux/awm) is a prediction engine for AI agent pipelines. It uses Bayesian statistics to predict whether a pipeline step will pass or fail, then routes to cheaper models when it's confident and pre-injects constraints when it detects likely failures.

It had a benchmark suite with 8 scenarios. It was passing 5 of them — Grade C.

**The evals I defined:**
- Prediction accuracy > 65%
- Upset detection (flagging uncertain outcomes) > 50%
- Cold start recovery within threshold
- Profile isolation (learning doesn't bleed between different contexts)
- Constraint injection actually reduces revision rate

**What autoresearch found:**

First, it tuned the Bayesian prior. The belief engine started each step with a symmetric prior — "I have no opinion on whether this will pass or fail." Autoresearch changed the beta parameter from 1.5 to 1.0, making the prior slightly optimistic. This makes sense: most pipeline steps pass most of the time. A neutral prior was too cautious.

That one number change fixed three scenarios: cold start, profile isolation, and model routing.

But constraint injection was still broken. Autoresearch tried every hyperparameter combination and correctly reported: "This isn't a tuning problem." The scoring algorithm itself was wrong — it was calculating pattern frequency against total runs instead of revised runs, so valid patterns were being silently dropped.

I fixed the algorithm. Autoresearch confirmed the fix worked. **Grade A — 8/8 scenarios.**

The autoresearch loop didn't just optimize — it told me *where the optimization boundary was*. It found what was tunable and what was structural.

## System 2: ACR — 32.8% to 64.7% Precision

[ACR](https://github.com/heybeaux/acr) manages what goes into an AI agent's context window. When an agent has 30 available tools, ACR loads 30 one-liners (~600 tokens) instead of 30 full manuals (~37,000 tokens), then promotes only what's needed for the current task.

Its Task Resolver was finding the right capabilities 90% of the time but returning a lot of irrelevant ones alongside them — 32.8% precision.

**Three-phase optimization:**

**Phase 1 — Parameters:** Autoresearch found that reducing `maxCapabilities` from 8 to 4 and tightening the budget cut noise without losing recall. Precision: 42.3%.

**Phase 2 — New lever:** I added a `minScore` threshold (minimum relevance score to include a capability). Autoresearch found 15 was optimal. Precision: 48.9%.

**Phase 3 — Manifests + Parameters:** Autoresearch showed that `minScore: 25` would be better *but it broke recall* — two capabilities scored too low because their trigger patterns were too narrow. "cron" only matched the literal word "cron", not "schedule" or "reminder" or "daily."

I fixed the trigger patterns. Then ran autoresearch again. Now `minScore: 35` worked. **Precision jumped to 64.7% with 100% recall maintained. Token cost dropped 56%.**

The lesson: **the precision ceiling was set by data quality, not algorithm parameters.** Autoresearch found the ceiling, I raised it, then autoresearch found a new optimum in the expanded space.

## System 3: ChalkBreaker — Already Optimal

I also ran autoresearch on [ChalkBreaker](https://chalkbreaker.com)'s NHL prediction engine. It's a Monte Carlo simulation that predicts playoff series outcomes.

Four binary evals: prediction accuracy, upset detection, parity check (no team too dominant), competitive spread.

**Result: Baseline was 4/4.** Every mutation autoresearch tried made things worse. The engine was already well-calibrated.

But it wasn't a waste. The autoresearch run *confirmed* the calibration was right and showed exactly where the sensitivity boundaries were — raising the logistic steepness from 0.02 to 0.025 dropped upset detection from 75% to 62.5%. Good to know.

## The Pattern

Three systems. Same method. Different outcomes.

| System | Before | After | What Fixed It |
|--------|--------|-------|---------------|
| AWM | Grade C (5/8) | **Grade A (8/8)** | Hyperparameter + algorithm fix |
| ACR | 32.8% precision | **64.7% precision** | Parameters + data quality + parameters |
| ChalkBreaker | 4/4 | 4/4 (confirmed) | Already optimal |

The universal pattern: **autoresearch finds the boundary between what's tunable and what's structural.** It handles the tuning automatically and flags the structural issues for you.

## How to Use This on Your Own Stuff

Anything you can score, you can autoresearch:

- **Agent prompts:** Define 4-5 binary quality checks, run the prompt 10 times per mutation, tighten the instructions
- **API configurations:** Timeouts, retry counts, cache TTLs — score against latency and error rate
- **Data pipelines:** Threshold parameters, batch sizes, scheduling intervals — score against throughput and accuracy
- **Email sequences:** Send timing, template variants, subject lines — score against open/click rates

The eval guide matters more than the loop. Bad evals (vague, overlapping, gameable) will optimize the wrong thing. Good evals (binary, specific, independent) will surface problems you didn't know you had.

## What's Next

I built the autoresearch loop as a reusable skill. My AI agents can now run it on any measurable system — including each other's output. AWM's prediction engine now includes a meta-optimizer that tunes its own hyperparameters against its own benchmark.

The agent that optimizes pipelines can optimize itself. Turtles all the way down.

---

*The autoresearch skill, AWM optimizer, and ACR benchmark are all open source. Links: [AWM](https://github.com/heybeaux/awm), [ACR](https://github.com/heybeaux/acr), [Autoresearch (original)](https://github.com/karpathy/autoresearch).*
