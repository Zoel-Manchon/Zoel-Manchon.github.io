# Desplegar el portfolio

## Opción recomendada: GitHub Pages (gratis, automático)

1. Crea un repo público en GitHub. Dos caminos según el nombre:

   **A) Repo llamado `Zoel-Manchon.github.io`** → la web sale en
   `https://zoel-manchon.github.io` (raíz, URL limpia). No hace falta tocar nada más.

   **B) Repo con otro nombre** (p. ej. `portfolio`) → la web sale en
   `https://zoel-manchon.github.io/portfolio`. En ese caso, edita `astro.config.ts`
   y añade estas dos líneas dentro de `defineConfig({ ... })`:

       site: 'https://zoel-manchon.github.io',
       base: '/portfolio',

2. Sube el proyecto:

       git init
       git add -A
       git commit -m "Portfolio: 9 projects, per-project accents, steel-blue base"
       git branch -M main
       git remote add origin git@github.com:Zoel-Manchon/<nombre-repo>.git
       git push -u origin main

3. En GitHub: repo → **Settings** → **Pages** → en "Build and deployment",
   Source = **GitHub Actions**. El workflow `.github/workflows/deploy.yml` ya
   incluido se encarga del resto en cada push.

4. Espera ~1 min y visita tu URL. Cada `git push` a `main` redespliega solo.

## Alternativa: Cloudflare Pages (también gratis, CDN más rápido)

1. cloudflare.com → Pages → "Connect to Git" → elige el repo.
2. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
3. Deploy. Te da una URL `*.pages.dev` y redespliega en cada push.

Cloudflare da mejor rendimiento global y HTTPS instantáneo; GitHub Pages es
más simple si ya vives en GitHub. Ambas gratis. Empieza por Pages y, si quieres
un dominio propio (p. ej. `zoel.dev`, ~10 €/año), cualquiera de las dos lo admite.
