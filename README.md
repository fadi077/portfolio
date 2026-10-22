# Fahad Saeed — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**. Static, fast, dark/light aware (follows system setting), accessible, with SEO metadata, Open Graph/Twitter tags, JSON-LD, sitemap and robots.

## Edit content
All text, links, projects, skills, experience and education live in **`src/data/content.ts`**.
- Screenshots: `public/shots/*.jpg` (1280×800)
- CV download: `public/Fahad_Saeed_CV.pdf` (replace the file to update)
- Set `site.url` in `content.ts` to your real domain after deploying (used for canonical/OG URLs).

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel
Push to GitHub, then import the repo at https://vercel.com/new (framework auto-detected: Next.js, no env vars needed). Add a custom domain in Project → Settings → Domains.
