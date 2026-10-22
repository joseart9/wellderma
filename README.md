# Well Derma — sitio web

Static multi-page site (Inicio, Doctoras, Galería) built with React + Vite on the Well Derma design system.

## Develop

```bash
npm install
npm run dev
```

Pages: `/`, `/doctoras/`, `/galeria/`.

## Deploy on Vercel

The project is ready to deploy as-is (`vercel.json` sets the Vite build and long-term caching for hashed assets).

- **From Git:** import the repository in Vercel. If this folder is not the repository root, set **Root Directory** to `wellderma`. Framework preset: Vite (build `npm run build`, output `dist`).
- **From the CLI:** run `npx vercel` inside this folder, then `npx vercel --prod`.

## Structure

- `index.html`, `doctoras/index.html`, `galeria/index.html` — one entry per page (clean URLs).
- `src/pages/` — page components. `src/shared/` — header (with mobile menu), footer, site data, scroll-reveal hook.
- `src/styles/` — `site.css` (shared), one stylesheet per page, `motion.css` (reveal animations; disabled for visitors who prefer reduced motion).
- `src/design-system/` — copy of the components, tokens and fonts from `../well-derma-design-system/project`. Update it from there rather than editing it here.
- `public/images/` — photos and treatment illustrations.
