# Watchmen Security and Training

Proof-of-concept React, Vite, and TypeScript marketing site for Watchmen Security and Training.

## Run locally

```powershell
npm install
npm run dev
```

Before sharing changes, run:

```powershell
npm run lint
npm run build
```

## Prototype boundaries

This is a proof of concept, not a production launch. Missing facts and assets are labeled **[Placeholder]**.

- The inquiry form validates in the browser and states clearly that no message is sent until an approved form service is connected.
- Square remains the booking and payment host. The Square URL in the contact section is a labeled placeholder until a verified link is supplied.
- Contact details, course logistics, pricing, schedules, instructor credentials, agency references, and photography rights are still required before publication.
- The portrait block and hero mark are labeled placeholders. Do not replace them with unverified photography.
- No endorsement by a current or former law-enforcement agency is expressed or implied.

Launch blockers are listed in the site footer and in `src/data/siteContent.ts`.

## Cloudflare Workers preview

The production build uses Vite `base` `/` so assets load on a public `*.workers.dev` URL.

```powershell
npm run deploy
```

That runs `npm run build` then `npx wrangler deploy`. Wrangler reads `wrangler.toml` and serves `dist` as static assets.

Durable deploys need Matt's Cloudflare account (`CLOUDFLARE_API_TOKEN` with Workers edit plus `CLOUDFLARE_ACCOUNT_ID`). Without those, `npx wrangler deploy --temporary` publishes a claimable preview.

## GitHub Pages preview

Local `npm run dev` stays at `http://localhost:5173/`.

Making the repository public is required for free Pages, but it does **not** create the Pages site. `GITHUB_TOKEN` cannot enable Pages.

**Shareable preview (no Settings click):**

https://raw.githack.com/Baker532/watchmen-security-training/gh-pages/index.html

If Cloudflare shows a one-time "Open the page" check, click through. After that the Watchmen prototype loads.

**GitHub Pages URL (after enablement):**

https://baker532.github.io/watchmen-security-training/

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) runs `npm ci`, `npm run build`, copies `dist/index.html` to `dist/404.html` for SPA fallback, and publishes the `gh-pages` branch.

To turn on the github.io URL:

1. Open **https://github.com/Baker532/watchmen-security-training/settings/pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and the folder to `/ (root)`, then **Save**
4. Open **https://baker532.github.io/watchmen-security-training/**

See `docs/CURSOR_AGENT_ROADMAP.md` for the remaining production milestones after verified client facts are available.
