# Salman Profile

React + TypeScript profile site, built with Vite and deployed to GitHub Pages.

## Structure
- `src/App.tsx` — page composition and commercial/academic mode state
- `src/components/` — one component per section (hero, credentials, timeline, etc.)
- `src/data/content.ts` — all copy, metrics, and credential data
- `src/hooks/` — scroll-reveal, animated counters, velocity bars, parallax
- `public/CNAME` — custom domain for GitHub Pages

## Local development
```
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Hosting on GitHub Pages
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Vite
and publishes `dist/` via GitHub Actions. In the repository's **Settings → Pages**, set the
source to **GitHub Actions** (one-time setup).

## Sharing the repository
- Add collaborators from **Settings > Collaborators and teams** if you want another GitHub account to have access.
- Or make the repository public so it can be viewed and cloned by anyone.
