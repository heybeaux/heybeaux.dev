# heybeaux.dev Site Update Plan

## Current State

The site reflects early-2026 Beaux — Engram-focused freelancer. It doesn't reflect mid-March 2026 Beaux — founder of an ecosystem of interconnected AI products with a team of AI agents shipping code daily.

## What Needs to Change

### 1. Positioning Shift

**Current:** "I build software — from open source AI infrastructure to Salesforce integrations to mobile apps"

**Updated:** Beaux is building an **AI agent ecosystem** — interconnected open-source tools that make AI agents smarter, cheaper, and more reliable. Engram is the memory. ACR is the context layer. AWM is the prediction engine. Forge orchestrates it all. dripctl is the first commercial product on top. This is a platform story, not a portfolio of unrelated projects.

The hero should reflect this. Not a freelancer site — a founder/builder site.

### 2. Projects — What to Add

| Project | Status | Public | Priority |
|---------|--------|--------|----------|
| **ACR** | Shipped, Grade A benchmark, 105 tests | GitHub (public, MIT) | HIGH — flagship open source |
| **AWM** | Shipped, Grade A benchmark, 56 tests | GitHub (public, MIT) | HIGH — flagship open source |
| **Forge** | Shipped, 92 agents, 143 capabilities | GitHub (private) | MEDIUM — mention but don't deep-link |
| **dripctl** | In development | GitHub (private) | LOW — tease only, no details. "Something new is cooking." |
| **ChalkBreaker** | Live, NHL engine deployed | chalkbreaker.com | MEDIUM — shows range |

### 3. Projects — What to Update

| Project | What Changed |
|---------|-------------|
| **Engram** | Stats are stale (7,800 memories → ~8,200+, tests 2,700 → 2,816+). Remove "Fog Index" reference (retired). Update ecosystem description. |
| **UltraEdge** | "App Store submission: End of February 2026" is past — update status |

### 4. Projects — What to Remove or Demote

- **"Agent-to-Agent Protocol" on the bench** → ACR essentially is this. Remove.
- **Smart Greenhouse** → still relevant as a "I'm a real person" project, keep
- **Run As You Are / Kardio** → completed projects, keep but deprioritize

### 5. Ecosystem Section (NEW)

The big addition. A section that shows how the projects connect:

```
Engram (memory) → what agents DID
ACR (context)   → what agents CAN do
AWM (prediction)→ what agents WILL do
Forge (orchestration) → makes it all work together
??? (coming soon)→ the first commercial product built on the stack
```

Don't name dripctl publicly yet. Just hint that the ecosystem is leading somewhere commercial. Let the open source work speak for itself until dripctl is ready to launch.

This is the story that makes heybeaux.dev different from any other dev portfolio. Nobody else has this stack.

### 6. Stats Update

`src/data/stats.json` needs current numbers. Either pull from APIs or update manually:
- Engram memories: verify current count
- Engram tests: verify current count  
- Active agents: update (Cirrus, Kit, Rook, Pax + any others)
- Recall latency: verify current p50

### 7. Blog — New Post

**Topic:** "How I Used Karpathy's Autoresearch to Grade-A My AI Stack"

The autoresearch story is *perfect* for a blog post:
- Accessible (everyone knows Karpathy)
- Technical but understandable (define good → test → mutate → keep/revert)
- Shows real results (AWM C→A, ACR 32%→64% precision)
- Connects to the ecosystem story
- Positions Beaux as someone who doesn't just build — he verifies

**Other post ideas (later):**
- "What Reddit Taught Me About Data Integrity" (ChalkBreaker incident — honest post-mortem)
- "Building a 4-Agent Dev Team on a Laptop" (Kit, Rook, Pax, Cirrus)
- dripctl launch post (when it's ready, not before)

### 8. CTA Update

**Current:** "Working with AI agents? Let's talk."

**Updated:** Should mention the specific things people can hire Beaux for:
- Agent memory infrastructure (Engram consulting)
- Multi-agent pipeline design (Forge/ACR expertise)
- AI-native product development
- $150/hr consulting rate (from Share)

### 9. Toolkit Update

Missing from current stack list:
- BullMQ (used in dripctl, Engram)
- Redis (dripctl, caching)
- Mastra (Forge framework)
- OpenRouter (model routing)

## Implementation Order

### Phase 1: Content (do first, ship fast)
1. Update `stats.json` with current numbers
2. Add ACR + AWM + dripctl to Work section projects
3. Update Engram description (remove Fog Index, update numbers)
4. Update UltraEdge status
5. Update hero tagline
6. Update CTA

### Phase 2: New Section
7. Add Ecosystem section between EngramBanner and Work
8. Update Garage page with current project statuses

### Phase 3: Blog
9. Write autoresearch blog post
10. Update FeaturedPosts if needed

### Phase 4: Polish
11. Update toolkit
12. Verify all external links work
13. Update Open Graph / meta descriptions

## Design Notes

- Keep the existing aesthetic (workbench, industrial, mono headers)
- ACR/AWM/Forge should feel like a connected system, not separate projects
- The ecosystem diagram should be visual but simple — CSS, not an image
- Blog post should have code snippets from the actual autoresearch runs

---

*Plan by Cirrus ☁️ — 2026-03-20*
*For review by Beaux before implementation*
