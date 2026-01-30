# heybeaux.dev

Personal site for Beaux Walton. Built with Astro + Tailwind v4.

## Design: The Workbench

- Off-white background (#FAFAF9), near-black text (#1A1A1A)
- Muted industrial orange accent (#D97706)
- Mono headers (JetBrains Mono), clean sans body (Inter)
- Single column, generous whitespace
- GitHub profile meets indie hacker

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:4321
npm run build   # Build for production
npm run preview # Preview production build
```

## Structure

```
src/
├── components/
│   ├── Hero.astro      # Name, one-liner
│   ├── About.astro     # 2-3 paragraphs
│   ├── Work.astro      # Project cards
│   ├── Stack.astro     # Tools list
│   └── Contact.astro   # Email, GitHub
├── layouts/
│   └── Layout.astro    # Base HTML + fonts
├── pages/
│   └── index.astro     # Single page
└── styles/
    └── global.css      # Tailwind + design tokens
```

## Customizing

**Copy:** All placeholder text is in the component files. Edit directly.

**Projects:** Update the `projects` array in `src/components/Work.astro`

**Stack:** Update the `tools` array in `src/components/Stack.astro`

**Contact:** Update email and GitHub links in `src/components/Contact.astro`

**Colors:** Design tokens are in `src/styles/global.css` under `@theme`

## Deploy

Build output is static HTML. Deploy anywhere:

```bash
npm run build
# Deploy the dist/ folder
```

Works with Vercel, Netlify, Cloudflare Pages, etc.
