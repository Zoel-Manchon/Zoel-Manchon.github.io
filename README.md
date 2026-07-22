# Zoel Portfolio

Minimal bilingual portfolio built with Astro, TypeScript and Tailwind CSS.

## Current structure

- Nine selected case studies, focused on secure end-to-end systems.
- All current project repositories represented once across selected work and the full index.
- Maat embedded demo with click-to-load playback, so the 2 MB GIF is not requested until the visitor chooses to watch it.
- Links to the Agrisentinel SOC, Aegis attack range and Emberwall live-boot demos.
- Dark and light themes with saved preference.
- English and Spanish content with saved preference.
- Responsive, accessible single-page layout.
- Geist and Archivo variable fonts, self-hosted through Fontsource.
- Static output ready for GitHub Pages.

## Selected work strategy

The selected grid prioritizes the projects that best support the portfolio narrative:

1. Emberwall
2. Agrisentinel
3. Sentinel Node
4. Eastron LoRaWAN Energy Monitoring
5. Pyscan
6. Aegis Zero Trust
7. Phosphor
8. Crypto Dashboard
9. Maat

Solar Weather Station and Toychain remain visible in the full index rather than disappearing from the portfolio.

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
- `src/components/LiveDemo.astro`: Maat demo showcase and playback behavior.
- `src/styles/global.css`: global visual system and responsive styles.
- `public/demos/`: local demo poster and GIF.

## Deployment

Push to the `main` branch of `Zoel-Manchon/Zoel-Manchon.github.io`. The included GitHub Actions workflow builds the static site and deploys `dist` to GitHub Pages.
