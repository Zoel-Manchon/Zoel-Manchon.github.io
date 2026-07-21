# Zoel Portfolio

Minimal bilingual portfolio built with Astro, TypeScript and Tailwind CSS.

## Features

- Dark and light themes with saved preference
- English and Spanish content with saved preference
- Responsive, accessible single-page layout
- Geist variable font, self-hosted through Fontsource
- Minimal JavaScript and no UI framework dependency
- Static output ready for Vercel, Netlify or GitHub Pages

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production checks

```bash
npm run check
npm run build
npm run preview
```

## Personalize

Main content is kept in two places:

- `src/data/site.ts`: profile details, project descriptions, technologies and GitHub links.
- `src/pages/index.astro`: hero, about and contact copy.

Global visual tokens and responsive styles are in `src/styles/global.css`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel should detect Astro automatically.
4. Use `npm run build` as the build command and `dist` as the output directory if asked.

## Note

The contact button currently opens the GitHub profile because no public email address was supplied. Replace its `href` in `src/pages/index.astro` when you want to expose another contact method.
