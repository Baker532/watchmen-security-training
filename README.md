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

## GitHub Pages preview

The production build uses a relative Vite `base` (`./`) so it can run from GitHub Pages, the `gh-pages` branch, or a CDN. Local `npm run dev` stays at `http://localhost:5173/`.

Making the repository public is required for free Pages, but it does **not** create the Pages site. `GITHUB_TOKEN` cannot enable Pages. Until a repo admin completes the click below, share the `gh-pages` CDN preview.

**Shareable preview (no Settings click):**

https://raw.githack.com/Baker532/watchmen-security-training/gh-pages/index.html

**GitHub Pages URL (after enablement):**

https://baker532.github.io/watchmen-security-training/

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) runs `npm ci`, `npm run build`, copies `dist/index.html` to `dist/404.html` for SPA fallback, publishes the `gh-pages` branch, and attempts `actions/deploy-pages`.

To turn on the github.io URL (one click, then re-run is optional because the next push deploys):

1. Open **https://github.com/Baker532/watchmen-security-training/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. After a green **Deploy to GitHub Pages** step, open **https://baker532.github.io/watchmen-security-training/**

See `docs/CURSOR_AGENT_ROADMAP.md` for the remaining production milestones after verified client facts are available.
