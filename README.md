# Zoel Portfolio

[![CI](https://github.com/Zoel-Manchon/Zoel-Manchon.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Zoel-Manchon/Zoel-Manchon.github.io/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

A bilingual portfolio built with Astro, TypeScript and Tailwind CSS, laid out as a bound engineering logbook.

## The idea

The page is a lab notebook, not a catalogue: dated entries in the order they were opened, a numbered rail down the left, marginalia down the right. It reads as the continuous record of one body of work rather than a shelf of products.

What that buys, and what it costs: nothing on the page shouts, and there is no cover selling anything, so a visitor who wants one specific project goes through the index first. In exchange, thirteen entries read as a volume instead of an endless list, because every entry is the same shape at the same rhythm.

## Structure

1. **Masthead** — who kept the notebook, when it was opened, how many entries, when it was last worked.
2. **Index of entries** — all thirteen in one scan: number, title, repository, date opened.
3. **Evidence annex** — FIG. 1 a clip of real hardware, FIG. 2 a recording of the editor being driven, TABLE 1 verbatim honeypot classifier output. Proof arrives before the prose that asks to be believed.
4. **The log** — entries grouped by the month they were opened, each with the identifier, the date, the claim, the line the system prints when it runs, its four load-bearing decisions and its stack.
5. **Back matter** — commissions, loose leaves (the smaller repositories), and the colophon.

## Dates

Every date on the page is the repository's own — `started` is the day the repo was created, `updated` the day it was last pushed — and entries are numbered in the order they were opened. A logbook whose dates are decorative is not worth reading, so they are kept in `src/data/site.ts` alongside the copy and changed together with it.

## Other properties

- English by default, Spanish one button away; dark by default, light one button away. Both preferences persist, and both are applied before first paint so nothing flashes.
- Nothing heavy loads unasked: the video is `preload="none"` and the 2 MB GIF only replaces its poster on a click.
- Severity in TABLE 1 carries a `SEVERE` mark as well as a colour, so it survives greyscale and colour blindness.
- Responsive from 320 px up; the three-column entry stacks rail, body, margin.
- Geist, Geist Mono and Archivo variable fonts, self-hosted through Fontsource.
- Static output ready for GitHub Pages.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:4321`.

## Production checks

```bash
npm run check
npm run build
npm run preview
```

## Main content files

- `src/data/site.ts` — entries, dates, descriptions, stacks, repository links, commissions and loose leaves.
- `src/lib/dates.ts` — ISO dates formatted into month and day labels without `new Date()`, which would shift them a day west of Greenwich.
- `src/pages/index.astro` — the volume: masthead, index, log groups and back matter.
- `src/components/LogEntry.astro` — one entry: rail, body, marginalia.
- `src/components/Annex.astro` — the two figures and the verdict table.
- `src/components/Header.astro` — the running head and the language and ink controls.
- `src/styles/global.css` — the visual system; light is the printed page, dark the same page in reverse ink.
- `public/demos/` — the clips and their posters.

## Deployment

Push to the `main` branch of `Zoel-Manchon/Zoel-Manchon.github.io`. The included GitHub Actions workflow typechecks, builds the static site and deploys `dist` to GitHub Pages.

The workflow grants no permissions by default: the build job holds `contents: read` only, and the token that can publish a deployment lives in the deploy job, which installs nothing. Dependency versions are range-pinned rather than `latest`, so a fresh install cannot cross a major version on its own.
