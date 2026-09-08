# Zoel Portfolio

[![CI](https://github.com/Zoel-Manchon/Zoel-Manchon.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Zoel-Manchon/Zoel-Manchon.github.io/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

Minimal bilingual portfolio built with Astro, TypeScript and Tailwind CSS.

## Current structure

- Thirteen selected case studies, focused on secure end-to-end systems.
- All current project repositories represented once across selected work and the full index.
- Live proof sits above the project grid: the Psychron hardware clip first, then the Maat demo. The video is `preload="none"` and the 2 MB Maat GIF is not requested until the visitor presses play.
- Links to the Agrisentinel SOC, Aegis attack range and Emberwall live-boot demos.
- Dark and light themes with saved preference.
- English and Spanish content with saved preference.
- Responsive, accessible single-page layout.
- Geist and Archivo variable fonts, self-hosted through Fontsource.
- Static output ready for GitHub Pages.

## Selected work order

The grid runs newest first, so the projects carrying the current narrative lead:

1. Emberwall
2. Agrisentinel
3. Sentinel Node
4. Eastron LoRaWAN Energy Monitoring
5. Pyscan
6. Aegis Zero Trust
7. Phosphor
8. Crypto Dashboard
9. Maat
10. Keystone
11. Ferrogate
12. Psychron
13. HoneyTrap

Nine further repositories stay visible in the full index rather than disappearing from the portfolio.

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

- `src/data/site.ts`: project selection, descriptions, stacks, repository links and ticker messages.
- `src/pages/index.astro`: page structure and general copy.
- `src/components/ProjectVisual.astro`: custom project mockups.
- `src/components/LiveDemo.astro`: the Psychron clip, the Maat demo and its playback behaviour.
- `src/styles/global.css`: global visual system and responsive styles.
- `public/demos/`: local demo poster, GIF and video.

## Deployment

Push to the `main` branch of `Zoel-Manchon/Zoel-Manchon.github.io`. The included GitHub Actions workflow typechecks, builds the static site and deploys `dist` to GitHub Pages.

The workflow grants no permissions by default: the build job holds `contents: read` only, and the token that can publish a deployment lives in the deploy job, which installs nothing. Dependency versions are range-pinned rather than `latest`, so a fresh install cannot cross a major version on its own.
