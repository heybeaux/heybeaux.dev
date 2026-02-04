---
title: "The Bug That AI Couldn't See"
date: 2026-02-03
excerpt: "Four hours. Two humans. One AI. A simple form that wouldn't work. Sometimes the answer isn't in the logic — it's in the gap between what should happen and what actually does."
tags: ["adhd", "ai", "debugging", "problemsolving"]
draft: false
---

It started at 2:30 PM on a Tuesday.

A coworker called. An RSVP form for an upcoming event wasn't working — contacts were filling it out, but their responses weren't landing in Salesforce. Time-sensitive. Could I take a look?

Sure. Should take twenty minutes, maybe thirty if the config was messy.

"Mind if I watch?" she asked. "I want to learn how you approach these things."

Of course. I'll never say no to someone who wants to grow their skills. Pull up a chair. Let's figure this out together.

---

## The Spiral

Two hours later, we were still staring at the same screen.

The logic wasn't complicated. Look up the contact by email. Find them in the campaign using the campaign ID. Update their RSVP status. Three steps. Clean. Simple.

Except it didn't work.

We took turns testing. I'd tweak a setting, save it, and she'd submit the form.

"Okay, try now."

"Nope."

"What if we look up the campaign first?"

"Still nope."

"Maybe we set the campaign ID as a variable? We don't do it on other forms, but—"

"Nope again."

"What if—"

"No. You tried that already. Twice."

My coworker — who's historically been skeptical of AI — started feeding our updates into ChatGPT. Every error message. Every failed test. Every half-formed theory.

One of the world's most advanced language models was now part of our debugging session.

It didn't help.

---

## Too Many Threads

By 4:00 PM, I told her I had to step away.

Here's the thing about my ADHD: it *loves* problems like this. The hyperfocus kicks in. The world narrows to a single point. Nothing exists except the puzzle.

But that same intensity makes collaboration harder than it should be.

When I'm debugging alone, I'm only managing one stream of thought — my own. I form a hypothesis, test it, adjust, repeat. It's messy, but it's *my* mess.

With someone else in the room, I'm managing two streams. My understanding of the problem *and* her understanding. My plan *and* her suggestions. Every input — even helpful ones — is another thread competing for attention.

I wasn't just solving the problem. I was also translating it. Twice.

I needed silence.

---

## The Quiet

After work, the house was still. Kids were out with mum riding their bikes. No Slack. No calls.

I opened my laptop and looked at the form responses one more time.

That's when I saw it.

The campaign ID — the one we'd copied directly from Salesforce, the one we'd hardcoded into the form — wasn't in the response data.

Not wrong. Not malformed. Just... absent.

I tried a different campaign ID. Same thing. Gone.

I created a brand new text field and pasted the ID there.

And there it was.

---

## The Answer No One Could See

It wasn't logic. It wasn't configuration. It wasn't anything we'd done wrong.

It was a platform bug.

Something in the form was silently dropping the campaign ID before it ever reached Salesforce. No error. No warning. Just a value that vanished into the void.

ChatGPT couldn't see it — because the logic was *correct*. There was nothing wrong with our approach. The AI analyzed what we told it and concluded, reasonably, that it should work.

But it didn't know what we didn't know: that the platform itself was broken.

---

## "Amazing. Now Finish Your Dinner."

When it finally clicked, I shouted.

"FUCK YEAH! I FIGURED IT OUT!"

My wife — bless her — looked up from across the room and said:

"That's great, my love. Now can you please put your fucking laptop away and finish eating?"

Fair.

---

## What AI Can't Do (Yet)

I use AI every day. It's woven into how I work. I'm not anti-AI — I'm literally building tools that make agents smarter.

But this experience reminded me of something important:

AI is great at reasoning over what you give it. It can trace logic, spot patterns, suggest alternatives. But it can't feel the gap between what *should* happen and what *actually* happens. It doesn't get that prickle at the back of your brain when something's off but you can't explain why.

That's still a human thing.

Sometimes the bug isn't in your code. It's in the platform. It's in the assumption. It's in the thing nobody thought to question.

And sometimes the only way to find it is to sit alone in a quiet room and stare until your intuition catches up with your logic.

---

## The Shit That Still Hits Different

AI is cool and all.

But have you ever solved a problem that two humans and a world-class model couldn't crack?

Have you ever felt that rush when the answer finally lands — not because someone told you, but because *you saw it*?

That's the shit.

That still hits different.

---

*Now if you'll excuse me, I have some cold dinner to finish.*
