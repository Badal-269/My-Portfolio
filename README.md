# Jagannath Senapati — Video Editor Portfolio

A single-page portfolio built with React + TypeScript + Vite + Tailwind CSS.

## Sections
- **Hero** — name, role, tagline, location
- **About** — bio, specialties
- **Work** — selected projects grid with a YouTube modal player
- **Experience** — timeline of roles
- **Contact** — contact form (front-end only) + email/socials

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

All personal/portfolio content (name, bio, work items, experience, socials)
lives in one place: `src/data/portfolio.ts`. Update the values there and the
whole site updates automatically — no need to touch the components.

## Notes on this rebuild

This project was reconstructed from a bolt.new export. One fix was applied
so the app actually compiles: the contact section's component file was named
`Contract.tsx` in the export, but was imported everywhere as
`@/components/Contact` (and the component itself is named `Contact`). It has
been renamed to `Contact.tsx` to match — no code, design, or content was
changed. A `public/vite.svg` favicon was also added since `index.html`
referenced it but it wasn't included in the original export.
