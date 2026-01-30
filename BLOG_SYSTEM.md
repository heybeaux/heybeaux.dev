# Blog System

**Site:** [heybeaux.dev/blog](https://heybeaux.dev/blog)  
**Built with:** Astro Content Collections  

---

## Quick Start

### Adding a New Post

1. Create a markdown file in `src/content/blog/`:
   ```
   src/content/blog/my-new-post.md
   ```

2. Add frontmatter:
   ```markdown
   ---
   title: "My New Post"
   date: 2026-02-01
   excerpt: "A brief description that appears in listings and RSS."
   tags: ["tech", "astro"]
   draft: false
   ---

   Your content here...
   ```

3. Done. Astro handles the rest.

---

## Frontmatter Schema

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `title` | string | ✅ | — | Post title |
| `date` | date | ✅ | — | Publication date (YYYY-MM-DD) |
| `excerpt` | string | ✅ | — | Short description for listings/RSS |
| `tags` | string[] | ❌ | `[]` | Category tags |
| `draft` | boolean | ❌ | `false` | If true, hidden in production |

---

## Draft Workflow

### Working on a Draft

Set `draft: true` in frontmatter:

```markdown
---
title: "Work in Progress"
date: 2026-02-01
excerpt: "Still writing this..."
tags: ["tech"]
draft: true
---
```

- **Dev mode:** Drafts are visible (with "Draft" badge)
- **Production:** Drafts are hidden from listings and RSS

### Publishing

Change `draft: true` → `draft: false` (or remove the line).

---

## File Structure

```
src/
├── content/
│   ├── config.ts          # Collection schema
│   └── blog/
│       ├── hello-world.md
│       └── another-post.md
└── pages/
    ├── blog/
    │   ├── index.astro    # Blog listing
    │   └── [slug].astro   # Individual posts
    └── rss.xml.ts         # RSS feed
```

---

## RSS Feed

Available at: `heybeaux.dev/rss.xml`

- Auto-generated from published posts
- Includes title, date, excerpt, and tags
- Updates on every build

### RSS in Astro Config

Make sure `astro.config.mjs` has the site URL:

```js
export default defineConfig({
  site: 'https://heybeaux.dev',
  // ...
});
```

---

## Homepage Integration

The homepage Blog component (`src/components/Blog.astro`):
- Shows latest 3 posts
- Links to `/blog` for full listing
- Pulls directly from content collection

---

## LinkedIn Integration

This blog is part of the same content pipeline as LinkedIn. See `projects/linkedin/CONTENT_SYSTEM.md` for:

- How content gets flagged (`📝 BLOG:` vs `📝 LINKEDIN:` vs `📝 BOTH:`)
- Guidelines for which topics go where
- Cross-linking workflow (LinkedIn teasers → blog posts)

### Typical Flow

1. Flag moment during session: `📝 BOTH: How I migrated donor data`
2. Create long-form blog post (500-1500 words)
3. Create LinkedIn teaser (150-300 words)
4. Publish blog first
5. LinkedIn post links to full blog

---

## Content Guidelines

### Post Length
- **Short posts:** 300-500 words (quick tips, hot takes)
- **Standard posts:** 500-1000 words (tutorials, walkthroughs)
- **Deep dives:** 1000-1500+ words (comprehensive guides)

### Writing Style
- Same voice as LinkedIn content (see voice profile)
- Technical depth allowed — this is where code samples live
- Headers for scanability
- Code blocks for any code

### Tags

Common tags:
- `#tech` — General technical content
- `#ai` — AI/LLM stuff
- `#salesforce` — Salesforce-specific
- `#business` — Freelance/consulting insights
- `#founder` — Startup/cofounder experiences
- `#meta` — About the site/blog itself

---

## Local Development

```bash
cd projects/heybeaux
npm run dev
```

Visit `http://localhost:4321/blog`

---

## Deployment

Push to main. Cloudflare Pages handles the rest.

---

*"I don't specialize. I solve problems."*
