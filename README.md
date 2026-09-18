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

Production preview URL:

https://baker532.github.io/watchmen-security-training/

The Vite `base` is `/watchmen-security-training/`. Local `npm run dev` is therefore at `http://localhost:5173/watchmen-security-training/`.

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) runs `npm ci`, `npm run build`, copies `dist/index.html` to `dist/404.html` for SPA fallback, and deploys with `actions/deploy-pages`.

If the site is not live yet, in the GitHub repo:

1. **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. If prompted, allow Actions and the `github-pages` environment
4. Open **Actions**, select **Deploy GitHub Pages**, and confirm the latest run is green

See `docs/CURSOR_AGENT_ROADMAP.md` for the remaining production milestones after verified client facts are available.
