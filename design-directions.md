# heybeaux.dev Design Directions

Three distinct approaches for Beaux's new personal site. Each is meaningfully different in structure, visual approach, and tone.

---

## Salvageable from TechWestCoast Repo

Checked `beaux-riel/techwestcoast/src/components`:

| Component | Verdict |
|-----------|---------|
| **Button.tsx** | ✅ Keep — solid TypeScript, handles internal/external links cleanly. Just rename classes from `twc-button` to something generic. |
| **ProjectCard.tsx** | ⚠️ Structure is fine, but needs copy/data overhaul. Remove "Explore" button text (too consultant), simplify to "View" or just use the card as a link. |
| **Footer.tsx** | ⚠️ Probably fine, check for "tidal" branding. |
| **Hero.tsx** | ❌ Burn it — "tidal curiosity", "joyfully human", "Signal/Sense/Story/Ship" framework BS. Rewrite from scratch. |
| **PraiseCard.tsx** | ❌ Burn it — if this is for testimonials, we don't have any real ones to use. |
| **NewsTicker.tsx** | ❌ Unnecessary complexity. Skip. |
| **ProcessPath.tsx** | ❌ Smells like a consultant process diagram. Skip. |
| **ServiceCard.tsx** | ❌ "Services" framing is too consultant-y for Beaux's approach. |

**Bottom line:** The Button component is legitimately useful. Rest can be inspiration at best.

---

## Direction 1: "The Workbench"

### Concept & Vibe
A builder's portfolio. Like walking into a well-organized workshop — tools visible, work in progress, nothing precious. The site itself demonstrates competence by being clean and functional.

### Visual Direction
- **Colors:** Off-white background (#FAFAF9), near-black text (#1A1A1A), one accent color — a muted industrial orange (#D97706) or workshop blue (#2563EB)
- **Typography:** Mono headers (JetBrains Mono or IBM Plex Mono), clean sans body (Inter or System UI)
- **Layout:** Single column, generous whitespace, visible grid lines as subtle texture. Almost like a technical document or README.
- **Feel:** GitHub profile meets indie hacker. Not minimal-trendy, just... purposeful.

### Stack Recommendation
**Astro** — This is mostly static content with maybe one interactive bit (contact form). Astro's islands architecture means zero JS shipped unless needed. Fast, simple, markdown-friendly. Matches the "no-bullshit" vibe.

### Hero Copy Draft
```
# Beaux Walton

I build things.

Full-stack developer in Powell River, BC. Ex-army mechanic turned 
coder. I don't have a specialty — I have whatever you need built.

Currently: Generosity Catalyst (Fractional CTO), WhaleHawk Intelligence, 
various problems that seemed interesting.
```

### Site Structure
**Single page with sections, or max 2 pages:**

1. **Hero** — Name, one-liner, current work
2. **About** — 2-3 paragraphs. Army background, generalist philosophy, where he lives.
3. **Work** — The three real projects, brief cards
4. **Stack** — Not a brag list, more like "tools I've used recently" — honest, changes over time
5. **Contact** — Email, GitHub, maybe Calendly link. No form.

### Sample Microcopy

**About section opener:**
> I started as an army mechanic fixing trucks. Now I fix whatever's broken in your stack. The skill is the same: figure out how it works, make it work better.

**Project card for Wilderness Committee:**
> Rebuilt their digital fundraising from the ground up. Migrated 10 years of donor data from CiviCRM to Salesforce without losing a single record. They raise more money now.

**Contact section:**
> Want to build something? I'm probably available.
> beaux@heybeaux.dev

**Footer:**
> Made in Powell River, BC. No frameworks were harmed excessively.

---

## Direction 2: "The Anti-Portfolio"

### Concept & Vibe
Reject the traditional portfolio format entirely. No hero image, no "services" section, no case study theater. Just Beaux talking directly to you. More like a well-written README or an honest letter than a marketing site.

### Visual Direction
- **Colors:** Pure black and white. Maybe one color for links (classic blue #2563EB). That's it.
- **Typography:** Georgia/Charter for body (readable, warm, editorial), system mono for code snippets. Large body text (18-20px).
- **Layout:** Narrow reading column (~65ch max). Long-scroll single page. Like a good blog post or a Medium article, but permanent.
- **Feel:** Basecamp's company pages. Dan Abramov's blog. The old-school "just words" internet.

### Stack Recommendation
**Eleventy (11ty)** — Maximum simplicity. Markdown files, minimal config, ships almost no JavaScript. If the concept is "just words," the stack should be "just HTML." Bonus: absurdly fast.

### Hero Copy Draft
```
Hey, I'm Beaux.

I'm a developer in Powell River, BC. I build web apps, move data 
between systems, integrate APIs, and lately I've been doing a lot 
with AI agents and automation.

I don't have a niche. Some people think that's a problem. I think 
it means I can actually help with whatever weird thing you're 
dealing with instead of trying to make your problem fit my solution.

Scroll down and I'll tell you what I've actually done.
```

### Site Structure
**One long page, structured like a letter:**

1. **Intro** — Who is this person? (3-4 paragraphs)
2. **What I've Built** — Each project gets 1-2 paragraphs, no cards, no screenshots. Just honest descriptions.
3. **How I Work** — Not a "process." More like: "I'll probably ask a lot of questions, then disappear for a bit, then show you something."
4. **Where I'm At** — Current availability, timezone, how to reach out
5. **End note** — Something human. Family mention if comfortable.

### Sample Microcopy

**Opening the "What I've Built" section:**
> I'm not going to pretend each of these has a perfect case study. Here's what actually happened:

**Generosity Catalyst description:**
> A marketplace connecting people with money to give away with nonprofits that need it. I've been the fractional CTO for about a year now — which means I built the architecture, hired contractors when needed, and I'm the one who gets the 2am Slack messages when something breaks. (It rarely breaks.)

**Availability note:**
> I'm in Pacific time. I have a 4-year-old and a 2-year-old, so I don't do meetings before 9am. I also have a husky who judges everyone on video calls.

**End note:**
> If you read this far, thanks. That probably means we'd get along. Say hi: beaux@heybeaux.dev

---

## Direction 3: "The Proof"

### Concept & Vibe
Show competence through the site itself. The portfolio IS a demo. Interactive elements, smooth performance, thoughtful details — all saying "I can build this for you too." Confident without being flashy.

### Visual Direction
- **Colors:** Dark mode default (not pitch black — #0F0F0F background, #E5E5E5 text). Accent color that pops: electric green (#22C55E) or amber (#F59E0B).
- **Typography:** Modern geometric sans (Geist, Satoshi, or Outfit). Slightly tighter letter-spacing. Feels contemporary.
- **Layout:** Asymmetric grid, some content breaking columns. Subtle animations on scroll (not obnoxious — think fade-up, not bounce). Cards with hover states that feel good.
- **Feel:** Linear.app, Vercel, Raycast — the "developer tools" aesthetic. But warmer, not sterile.

### Stack Recommendation
**SvelteKit** — If the site is meant to showcase skill, use something that shows range. SvelteKit is fast, has great DX, handles animations beautifully, and isn't just "another React site." It's a flex in the right way.

Alternative: **Next.js 14 with App Router** if Beaux wants to show React chops specifically.

### Hero Copy Draft
```
BEAUX WALTON
Full-Stack Developer

I build web apps, wrangle data pipelines, and make 
things work that probably shouldn't.

[See the work ↓]
```
*Hero would have subtle interactive element — maybe a small canvas animation, or live stats (GitHub commits this week, current project status), or just really satisfying hover states.*

### Site Structure
**Multi-section single page with smooth scroll:**

1. **Hero** — Minimal text, strong visual impact, interactive element
2. **Projects** — Cards that expand on click/tap with real details. Maybe even live embeds or recordings of the apps.
3. **Toolkit** — Visual representation of tech stack, but honest (show what's actually been used recently, not a kitchen-sink brag)
4. **About** — Photo, quick bio, personality comes through
5. **Contact** — Clean form that actually works (shows form-building skill), plus direct email

### Sample Microcopy

**Project card — WhaleHawk Intelligence (expanded):**
> **WhaleHawk Intelligence**
> Decision platform for maritime operators
> 
> Built the frontend for a system that helps ships make smarter routing decisions. Heavy data visualization work — lots of maps, real-time updates, the kind of thing that breaks if you're not careful about performance.
> 
> Stack: React, MapboxGL, WebSockets
> [View live →]

**Toolkit section header:**
> Things I've shipped with recently

**About section:**
> I used to fix tanks in the Australian Army. Now I fix production bugs at 11pm. Different machines, same skill: stay calm, find the problem, make it work.
> 
> Based in Powell River, BC with my wife Deanna, our kids Stella and Odin, and a husky named Kali who's unimpressed by all of it.

**Contact form submit button:**
> Send it →

**Form success message:**
> Got it. I'll get back to you within a day or two. (Unless it's the weekend. Then maybe Monday.)

---

## Comparison

| Aspect | The Workbench | The Anti-Portfolio | The Proof |
|--------|---------------|-------------------|-----------|
| **Effort** | Low-medium | Low | Medium-high |
| **Risk** | Safe | Safe | Some (animations can go wrong) |
| **Best for** | Quick launch, iterate later | Writing-focused, personality-forward | Impressing technical clients |
| **Tone** | Competent craftsman | Honest human | Confident professional |
| **Stack** | Astro | Eleventy | SvelteKit |
| **Timeline** | Weekend | Weekend | 1-2 weeks |

---

## Recommendation

**Start with Direction 1 (The Workbench) or Direction 2 (The Anti-Portfolio).**

Both can ship fast. Both are authentic. Direction 3 is great but needs more time to do well — better as a v2 once there's something live.

If Beaux writes well and enjoys it: **Direction 2**.
If he'd rather code than write: **Direction 1**.

Either way: ship something this week, improve it later. The domain is sitting there doing nothing.

---

## Next Steps

1. Pick a direction
2. Set up the repo (I can scaffold whichever stack)
3. Write the real copy (Beaux's voice, not mine)
4. Ship to Vercel/Netlify/Cloudflare Pages
5. Iterate based on what feels off

Let me know which direction resonates and I'll start building.
