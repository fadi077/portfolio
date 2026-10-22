# AGENTS.md

Personal portfolio for Muhammad Fahad Saeed (job-seeking full-stack developer). Static Next.js 15 App Router site.

## Rules
- **No invented facts.** Every claim must already exist in `src/data/content.ts`, which Fahad has confirmed. Ask before adding metrics, employers, dates, grades or quotes.
- Metrics need a source (`metrics.source`) and testimonials stay verbatim (use `…` for cuts).
- Minimal copy: no taglines, section eyebrows, helper captions or repeated badges. Fix layout instead of adding explanatory text.
- Keep accessibility: icon-only controls need `aria-label`; decorative elements `aria-hidden`; respect `prefers-reduced-motion` (use `<Reveal>`).
- Run `npm run check` (lint + typecheck + build) before committing. All three must be clean.

## Map
| Path | Purpose |
| --- | --- |
| `src/data/content.ts` | Typed content model: profile, projects, testimonial, skills, experience, education, certifications, hero stats |
| `src/lib/site.ts` | `siteUrl` from `NEXT_PUBLIC_SITE_URL` (fallback `https://fahadsaeedportfolio.vercel.app`) |
| `src/lib/structured-data.ts` | Generators: `personJsonLd()`, `jsonResume()` (JSON Resume v1), `llmsTxt()` |
| `src/app/page.tsx` | Composes section components |
| `src/app/layout.tsx` | Fonts, metadata, theme bootstrap script (dark default, `localStorage.theme`) |
| `src/app/llms.txt/route.ts`, `src/app/resume.json/route.ts` | Machine-readable endpoints (static) |
| `src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx` | Generated OG image and MFS monogram icons (`next/og`) |
| `src/components/*.tsx` | One section or widget per PascalCase file; `ui.tsx` (class tokens, `Tag`, `TagList`) and `icons.tsx` (brand SVGs) are shared primitives |
| `public/shots/` | Project screenshots, named `<domain>.jpg` |
| `public/Muhammad_Fahad_Saeed_CV.pdf` | CV download (generated outside this repo) |

## Conventions
- Server components by default; `"use client"` only in `Nav.tsx` and `Reveal.tsx`.
- Tailwind v4 with class-based dark mode (`@custom-variant dark` in `globals.css`). Reuse tokens from `ui.tsx`.
- Adding a project: append to `featuredProjects` or `moreProjects` with a unique `slug`, add the screenshot, list only non-shared tech in `highlights` (shared stack is `clientStack`).
- Endpoints: `/`, `/llms.txt`, `/resume.json`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon`.
