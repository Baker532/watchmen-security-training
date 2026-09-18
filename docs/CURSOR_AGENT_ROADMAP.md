# Cursor Agent Roadmap for the Watchmen Launch

This roadmap keeps the prototype moving while Kevin remains the developer making and understanding the final decisions. Give an agent one milestone at a time. Review its proposed plan before permitting edits, and inspect every diff before accepting it.

## Current prototype

The repository contains a complete one-page marketing prototype: typed content, reusable React components, a mobile menu, locally validated inquiry form with honest status messaging, metadata, service-area content, and clearly labeled placeholders for unverified facts.

This is not a production launch. Verified contact information, a Square URL, a real form endpoint, approved photography, final course details, and verified credential wording remain launch blockers.

## Agent operating pattern

Use Ask or Plan mode first for unfamiliar work. Give Agent mode write access only for the small approved milestone. The root `AGENTS.md` supplies the permanent project and teaching rules.

For every milestone, ask the agent to:

1. Inspect the relevant files and explain the current pattern.
2. Propose one focused change and name the files it expects to touch.
3. Give Kevin a small part to implement first.
4. Review Kevin's code with no more than two priority improvements.
5. Pair implement only after Kevin uses the words "pair implement."
6. Run lint and build after approved code changes.
7. Summarize the concept practiced and a manual validation checklist.

## Milestone 1 Content verification

Goal: replace provisional copy with approved business facts.

Kevin practices: separating source facts from marketing claims and modeling content in TypeScript.

Inputs needed:

- Verified company name and preferred abbreviation
- Verified email and phone number
- Final Square booking URL
- Confirmed course names, audiences, prerequisites, duration, price, and equipment expectations
- Approved instructor biography and credential names
- Written permission for any agency references, awards, logos, and photographs

Suggested agent prompt:

> Read AGENTS.md and src/data/siteContent.ts. Do not edit yet. Help me turn the remaining content questions into a concise client checklist. Then give me one small data-modeling task and review my attempt.

## Milestone 2 Production inquiry flow

Goal: connect the form to a chosen hosted form or serverless endpoint with success, error, spam protection, and privacy language.

Kevin practices: controlled form state, asynchronous requests, validation, status messaging, and safe environment configuration.

Do not let the agent choose or install a service without explicit approval. Keep booking and payment in Square.

Suggested agent prompt:

> Read AGENTS.md and InquiryForm.tsx. Explain the current local validation path and compare two low-maintenance submission options without changing files. Recommend one for a small brochure site, including cost, spam protection, privacy, and deployment impact.

## Milestone 3 Photography and brand assets

Goal: replace the monogram and placeholder portrait with approved, optimized assets.

Kevin practices: responsive images, file formats, intrinsic dimensions, art direction, alt text, and usage rights.

Validation:

- Confirm written usage rights.
- Generate AVIF or WebP derivatives without deleting originals.
- Test focal crops at narrow and wide viewports.
- Keep decorative images out of the accessibility tree.

## Milestone 4 Responsive and accessibility review

Goal: verify the page at 320, 390, 768, 1024, and 1440 pixel widths and complete a keyboard-only pass.

Kevin practices: responsive debugging, focus order, landmarks, headings, form semantics, reduced motion, and contrast.

Suggested agent prompt:

> Inspect the rendered page and relevant CSS. Report accessibility and responsive findings only; do not edit. Rank the top three issues by user impact and teach me how to reproduce the first issue manually.

## Milestone 5 Local SEO and launch metadata

Goal: add verified address or service-area structured data, canonical URL, social preview asset, robots.txt, and sitemap after the production domain is known.

Kevin practices: metadata, structured data, crawlability, and avoiding unsupported local-business claims.

Do not invent a street address, hours, review rating, price range, or geo coordinates.

## Milestone 6 Performance and production QA

Goal: complete a final Lighthouse-style review, optimize images, verify links and form behavior, and document deployment.

Kevin practices: network inspection, Core Web Vitals, caching, build output, and release checklists.

Required checks:

```powershell
npm run lint
npm run build
git diff --check
```

Then manually verify the Square handoff, inquiry success and error paths, mobile menu, keyboard navigation, visible focus, content accuracy, and legal disclaimers.

## Change-review checklist

Before accepting any agent edit, ask:

- Did it stay inside the named milestone?
- Can I explain the change in my own words?
- Did it preserve working code outside the task?
- Did it add a dependency or service I did not approve?
- Are all public claims traceable to verified client information?
- Did lint and build pass?

Commit only after Kevin has reviewed the diff and explicitly decides to commit.
