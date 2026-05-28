# Volumetree Website — Deployment Handoff

This is a **static single-page application** (Vite + React + Tailwind CSS).
There is no backend and no database — once built, it is a folder of static
files (`dist/`) that any web host or CDN can serve.

---

## 1. What to hand over

Zip and deliver the **entire project folder**, but **exclude** these (they are
regenerated and large):

- `node_modules/` — reinstalled with `npm install`
- `dist/` — regenerated with `npm run build`
- `.vercel/` — deployment metadata specific to the previous Vercel account

Everything else (`src/`, `public/`, `index.html`, `package.json`,
`package-lock.json`, config files, this file) must be included.

---

## 2. Build the site

Requires **Node.js 18 or newer**.

```bash
cd "Volumetree Website"
npm install        # install dependencies
npm run build      # outputs the production site into ./dist
npm run preview    # optional — preview the built site locally
```

The deployable artifact is the **`dist/` folder**. Upload its contents to the
web host.

---

## 3. Hosting options

Any static host works. The site is a SPA, so **all routes must fall back to
`index.html`** (otherwise refreshing `/about` returns a 404).

### Vercel / Netlify / Cloudflare Pages (easiest)
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback is already configured:
  - `vercel.json` — for Vercel
  - `public/_redirects` — for Netlify / Cloudflare Pages

### Traditional server (nginx)
Serve `dist/` and add the SPA fallback:

```nginx
location / {
    root   /var/www/volumetree/dist;
    try_files $uri $uri/ /index.html;
}
```

### Traditional server (Apache)
Place this `.htaccess` inside `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 4. Before going live — update the domain

These files contain the placeholder domain `https://www.volumetree.com`.
Replace it with the **real production domain** wherever the site is hosted:

- `index.html` — `<link rel="canonical">`, all `og:` and `twitter:` URLs
- `public/robots.txt` — the `Sitemap:` line
- `public/sitemap.xml` — every `<loc>` URL
- `public/llms.txt` — every URL

---

## 5. Favicon & social image — action required

The site ships with `public/favicon.svg` (works in all modern browsers). For
**full coverage** (older browsers, iOS home-screen, PWA install), generate the
remaining icon files from that SVG and drop them into `public/`:

| File needed              | Size      | Referenced by                |
| ------------------------ | --------- | ---------------------------- |
| `favicon-32.png`         | 32×32     | `index.html`                 |
| `apple-touch-icon.png`   | 180×180   | `index.html`                 |
| `icon-192.png`           | 192×192   | `site.webmanifest`           |
| `icon-512.png`           | 512×512   | `site.webmanifest`           |
| `favicon.ico`            | multi     | legacy `/favicon.ico` probes |

Fastest way: upload `public/favicon.svg` to **https://realfavicongenerator.net**
— it produces the entire set in ~30 seconds. Place the files in `public/`.

Also add a **social share image** at `public/og-image.png` (1200×630) — this is
what appears when the site is shared on LinkedIn, X, Slack, etc.

Until these are added the site still works — modern browsers use the SVG, and
social cards simply fall back to no image.

---

## 6. Crawler & SEO files (already included)

| File                    | Purpose                                                |
| ----------------------- | ------------------------------------------------------ |
| `public/robots.txt`     | Allows search engines + AI crawlers; points to sitemap |
| `public/sitemap.xml`    | Lists all 9 routes for search engines                  |
| `public/llms.txt`       | Structured site summary for AI / LLM crawlers          |
| `public/site.webmanifest` | PWA manifest (name, colors, icons)                   |

When a blog post is published, add a matching `<url>` block to `sitemap.xml`.

---

## 7. Forms

The Contact and E-book forms are currently wired client-side only (no backend).
To capture submissions, edit the `handleSubmit` handlers in
`src/pages/Contact.jsx` and `src/pages/Ebook.jsx` to POST to a form service
(Formspree, HubSpot, Resend, etc.).

---

## 8. Routes

```
/                          Home
/launch-in-30-days         Launch in 30 Days
/enterprise-ai-engineering Enterprise AI Engineering
/workshops                 7-Day Launch Workshop
/case-studies              Case Studies
/blog  ·  /blog/:slug      Blog (markdown-driven)
/about  ·  /contact        Company
/ebook                     Free 30-Day Playbook
```

See `README.md` for project structure, the brand system, and how to add blog
posts.
