# Volumetree Website

A modern, fast, brand-aligned marketing site for Volumetree — built with **Vite + React + Tailwind CSS** and a **file-based markdown blog**.

## Getting started

```bash
cd "Volumetree Website"
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

Node 18+ recommended.

## Project structure

```
src/
├── App.jsx                 Routes and layout
├── main.jsx                Entry
├── index.css               Tailwind + components
├── components/             Reusable UI (Header, Hero, CTA, …)
├── pages/                  Route components
├── lib/posts.js            Loads markdown blog posts at build time
└── content/blog/*.md       Blog posts (markdown + frontmatter)
```

## Pages

- `/` — Home
- `/launch-in-30-days` — Launch in 30 Days (ShipFast-style)
- `/enterprise-ai-engineering` — Enterprise AI Engineering (includes AI training)
- `/workshops` — 7-Day Launch Workshop
- `/case-studies` — Case Studies (real portfolio, numbers-forward layout)
- `/ebook` — Free 30-Day Playbook (email-gated)
- `/blog`, `/blog/:slug` — Blog
- `/about`, `/contact` — Company

Note: `src/pages/AIConsultation.jsx` and `src/pages/AITraining.jsx` exist on
disk but are no longer routed or linked. Delete them if unwanted.

## Deployment

See `HANDOFF.md` for the full build-and-host guide (static SPA, SPA-routing
fallback, domain updates, favicon generation, crawler files).

## Adding a blog post

Blog posts are markdown files in `src/content/blog/`. They are auto-discovered at build time.

1. Create a new file: `src/content/blog/my-new-post.md`
2. Add frontmatter at the top, then the article body in markdown:

```md
---
title: "Your headline"
description: "One-line summary for cards and SEO."
date: 2026-06-01
author: "Your Name"
authorRole: "Founder, Volumetree"
category: "Operating model"           # or "Enterprise AI", "Insights", …
tags: ["launch", "ai"]
featured: false                        # show in the featured slot on /blog
coverGradient: "from-brand-purple-deep via-brand-purple to-brand-purple-light"
---

## Your first heading

Markdown body here. Supports **bold**, *italic*, [links](/contact),
lists, blockquotes, code, images, and GFM.
```

3. Save. The post appears at `/blog/my-new-post` and on the listing page.

### Gradient options (for cover)

- `from-brand-purple-deep via-brand-purple to-brand-purple-light` (Resonating Trust)
- `from-brand-magenta via-brand-crimson to-brand-yellow` (Echoing Warmth)
- `from-brand-purple via-brand-purple-light to-brand-cyan`
- `from-brand-crimson via-brand-magenta to-brand-pink-soft` (Purposeful Engineering)

## Brand system

Implemented from the Volumetree Brand Guidelines PDF:

- **Primary typeface:** Poppins (loaded via Google Fonts in `index.html`)
- **Colors:** see `tailwind.config.js` → `theme.extend.colors.brand`
- **Gradients:** Resonating Trust, Echoing Warmth, Purposeful Engineering, Minimal Scale, Minimal Tech
- **Tone:** "When in doubt, keep it simple."

## Forms

The Contact and E-book forms are wired client-side for now (no backend).
To go live, swap the `handleSubmit` handlers in `src/pages/Contact.jsx` and
`src/pages/Ebook.jsx` to POST to your endpoint (Formspree, HubSpot, Resend, etc.).
