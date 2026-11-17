# ricardoarisequeira.com

My CV as release notes. Each chapter of my career is a version of Ricardo, the side projects are branches, and the history graph is the navigation.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # client build, server build, then prerender every page into dist/
npm run preview  # serves dist/ at http://localhost:4173
```

## Adding a version or a branch

Everything comes from `src/content.json`.

- **A new release:** add an entry at the top of `main`. It becomes `/`, the old latest keeps its own URL (`/6.0`) and gets the "old version" notice.
- **A new branch:** add an entry to `branches` with `forkedFrom` set to the version it started from. The graph gives it a lane and draws the fork.
- **Changelog lines** are plain strings. `[label](https://…)` makes a link; `[label](/nook)` links inside the site.
- **Accents** are one of `green`, `yellow`, `magenta`, `sky`, `teal`, `periwinkle`.

## How it fits together

- `src/history.js` turns the data into graph rows, lanes, routes and page titles.
- `src/router.js` is a small History API router. Versions push history entries; the TL;DR switch (`?tldr`) replaces them.
- `scripts/prerender.js` writes `dist/<version>/index.html` for every page, plus `404.html`, `_redirects` (Netlify) and `sitemap.xml`.
- `public/og.png` shows 6.0. Regenerate it when 7.0 ships.
