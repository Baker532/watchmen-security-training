# Watchmen Security and Training

Responsive React, Vite, and TypeScript prototype for the first Watchmen marketing-site release.

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

This is a complete marketing prototype, not a production launch.

- The inquiry form validates in the browser and states clearly that no message is sent until an approved form service is connected.
- Square remains the booking and payment host. The Square URL in the contact section is a labeled placeholder until a verified link is supplied.
- Contact details, course logistics, pricing, schedules, instructor credentials, agency references, and photography rights are still required before publication.
- The portrait block is intentionally a placeholder until an approved image and usage rights are supplied.
- No endorsement by a current or former law-enforcement agency is expressed or implied.

Launch blockers are listed in the site footer and in `src/data/siteContent.ts`.

See `docs/CURSOR_AGENT_ROADMAP.md` for the remaining production milestones after verified client facts are available.
