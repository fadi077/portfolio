# Muhammad Fahad Saeed — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · framer-motion. Fully static.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build
```

## Edit content
Every fact lives in [`src/data/content.ts`](src/data/content.ts) (typed). The page, `/llms.txt`, `/resume.json`, JSON-LD and the OG image are all generated from it.
- Screenshots: `public/shots/<domain>.jpg` (1280×800)
- CV: replace `public/Muhammad_Fahad_Saeed_CV.pdf`

## Deploy
Import the repo on Vercel and set `NEXT_PUBLIC_SITE_URL` to the production origin (see `.env.example`). Falls back to `https://fahadsaeedportfolio.vercel.app`.
