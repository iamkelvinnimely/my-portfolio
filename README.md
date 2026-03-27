## Kel Nimely · Portfolio

Minimal, black/white portfolio built with **Next.js App Router**, **strict TypeScript**, and **Tailwind**.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content edits

Most copy and project data lives in `lib/content.ts`.

Update these before deploying:
- `content.contact.email`
- `content.contact.linkedIn`
- `content.contact.formspreeEndpoint` (your Formspree form endpoint)
- `app/layout.tsx` → `metadataBase` (your real domain)

## Production build

```bash
npm run lint
npm run build
```

## Deploy (Vercel)

Recommended flow:
- Push this folder (`kel-portfolio`) to a GitHub repo
- Import the repo in Vercel
- Deploy

No special environment variables are required for Formspree (the form posts directly to your endpoint).

## Notes

- UI is intentionally minimal: monochrome palette, subtle borders, restrained motion.
- Contact form uses Formspree via `fetch()` from the browser.

