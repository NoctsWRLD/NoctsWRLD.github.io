# Jan Vidovič — Portfolio

A personal portfolio site. React 19, Vite 8, Tailwind CSS 4, react-router 7.
No backend, no database, no analytics, no cookies, and no third-party requests —
the whole site is a static bundle of files.

The design direction is **"Instrument"**: a dark, blue-graphite document with a
single warm accent, built around a calibration chart of real code volume rather
than a list of technologies with percentages next to them. The full reasoning,
the token system, the content inventory and the definition of done live in
[`SPEC.md`](./SPEC.md).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | oxlint |
| `npm test` | Vitest in watch mode |
| `npm run test:run` | Vitest once |

## Layout

```
src/
  components/   one file per section, plus Reveal, Section, Rail, Monogram
  data/         the copy, the projects, the measured code volume, the legal text
  hooks/        useTheme, useDocumentMeta, useActiveSection
  lib/          restorePath — the GitHub Pages 404 fallback restore
  fonts.css     @font-face declarations for the three self-hosted faces
  index.css     the token system
public/
  .well-known/  ARD manifest, and its ai-catalog predecessor
  fonts/        self-hosted woff2 files
  skill.md      the portfolio as an Agent Skill
  llms.txt      a plain-text summary for language models
```

All the copy lives in `src/data/`. Editing the words never means touching a
component.

## Design tokens

`src/index.css` holds the whole visual system: a literal colour scale, a
semantic layer on top of it, a modular type scale, a spacing rhythm, radius,
elevation and motion. Components read the semantic tokens and never a raw hex.

Dark is the default. The light theme is a token swap — the same component tree
with different values, and it is contrast-checked independently rather than
assumed to follow.

Every foreground/background pairing is checked at the token level, not the
component level, so a palette change cannot silently break contrast.

## Fonts

Bricolage Grotesque, Instrument Sans and JetBrains Mono, self-hosted from
`public/fonts/`. They are not loaded from a font CDN, so no visitor IP address
is handed to a third party and nothing is render-blocking.

## Deployment

The site targets both GitHub Pages and Vercel from one codebase.

The Vite `base` comes from the environment and is normalised to a trailing
slash, because the two targets have different path roots:

| Target | `base` | Set by |
| --- | --- | --- |
| Local, Vercel | `/` | unset |
| GitHub Pages | `/nocts-portfolio/` | `actions/configure-pages` `base_path` |

GitHub Pages serves files from disk, so an unknown path returns `404.html`
rather than the app. The build emits a `404.html` that stashes the requested
path and redirects to the app root, and `src/lib/restorePath.js` restores it
before the router mounts. Without this, every client-side route 404s on a hard
refresh or a shared link.

```bash
npm run build
BASE_PATH=/nocts-portfolio/ npm run build   # as the Pages workflow does it
```

Push to `main` and `.github/workflows/deploy.yml` builds and deploys to GitHub
Pages. For Vercel, `vercel --prod`, with the `VITE_` variables set in the
dashboard.

## Agent-readable resources

The site publishes itself to AI agents:

- `/skill.md` — the portfolio as an Agent Skill, in the `SKILL.md` format.
- `/llms.txt` — a plain-text summary.
- `/.well-known/ard.json` — an Agentic Resource Discovery manifest.
- `/.well-known/ai-catalog.json` — its predecessor, for older consumers.

Lighthouse scores 100 for accessibility, best practices, SEO and agentic
browsing on desktop, and 97 for performance on mobile.
