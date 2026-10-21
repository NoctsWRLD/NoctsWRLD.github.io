# SPEC — Jan Vidovič, portfolio

## Objective

A personal portfolio site for Jan Vidovič that answers three questions for a
recruiter or collaborator within thirty seconds: who he is, what he likes to
work on, and what he has actually built. It is a single page, it is fast, and
every claim on it is either verifiable or explicitly marked as private.

It is not a blog, not a CMS, and not a landing page with a download button. It
is a document that happens to be interactive.

## Audience

- **Primary** — an employer or client scanning for a junior developer.
- **Secondary** — a fellow student or collaborator who wants to see code.
- **Tertiary** — a teacher assessing the work, since the portfolio doubles as
  coursework.

## What a visitor must be able to do

1. Read who he is and what he likes to work on, without scrolling past a hero
   that only says his name.
2. See the four projects that represent the range, with the stack and the
   substance of each.
3. Judge his technical breadth from a real measurement rather than a claim.
4. Get in touch, with an email address, a phone number and a GitHub profile
   one click away.

## Stack

- **React 19** with **react-router-dom 7** — three legal routes and a 404.
- **Vite 8** — build tool and dev server.
- **Tailwind CSS 4** — utilities, with all colour, type and spacing resolved
  from CSS custom properties in `src/index.css`.
- **Vitest 5** with Testing Library — component and unit tests.
- **oxlint** — the linter the Vite template ships with.
- **No backend, no database, no analytics, no cookies, no third-party requests.**
  The whole site is a static bundle.

## Design direction — "Instrument"

A well-made engineering instrument: calibrated, dark, one warm signal colour.
The metaphor is technical documentation and precision instruments, and the
site's thesis — breadth across stacks, each row backed by shipped work — is
shown as a measurement rather than asserted.

**Palette** — a blue-graphite base, never pure black, with a single accent.

| Token | Dark | Light | Role |
| --- | --- | --- | --- |
| `surface-canvas` | `#12161C` | `#F7F6F2` | page background |
| `surface-panel` | `#1A1F27` | `#FFFFFF` | raised surfaces |
| `surface-raised` | `#222833` | `#EFECE5` | hover, chart tracks |
| `border-subtle` | `#2E3743` | `#DCD8CE` | hairlines |
| `border-strong` | `#5A6675` | `#8A8578` | control borders, focus |
| `text-primary` | `#E6E8E3` | `#17191C` | body and headings |
| `text-secondary` | `#98A1AE` | `#4D545C` | supporting copy |
| `text-muted` | `#7E8996` | `#676E76` | metadata |
| `accent` | `#E0A03C` | `#9A6207` | the only accent |

**Type** — Display `Bricolage Grotesque`, body `Instrument Sans`, mono
`JetBrains Mono`. All three self-hosted from `public/fonts/`, so there is no
third-party request and nothing render-blocking. Monospace is for machine data
only: byte counts, years, stack tags, paths. Prose is never monospace. The
display face ships without its optical-size axis, which is 36 kB lighter and
visually indistinguishable at the sizes used here.

**Motion — "the instrument, being operated".** Precise, damped, mechanical.
Not bouncy, not playful, not spring-loaded. The site reads as a precision
instrument, so the movement reads as operating one.

| Token | Curve | Used for |
| --- | --- | --- |
| `--ease-instrument` | `cubic-bezier(0.16, 1, 0.3, 1)` | anything that arrives — a long tail, so it settles rather than springs |
| `--ease-mechanical` | `cubic-bezier(0.65, 0, 0.35, 1)` | movement between two states |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | accelerating away |
| `--motion-distance` | `10px` | the travel distance, one scale so every offset agrees |

Five rules, each with a reason:

1. **A reveal is an arrival, not a decoration.** Content fades in with a 10px
   lift on the instrument curve, staggered so a list reads as a sequence.
2. **Hover is acknowledgement.** Depth, not colour alone: a project card lifts
   3px and its border warms toward the accent; a button lifts 1px and presses
   back into the surface by 1px; the rail's index number slides 2px right; a
   link's underline gains weight.
3. **The calibration chart is the signature moment.** Each row plays in
   sequence — the bar draws to its measured width, the byte count counts up in
   step with it, the detail line follows behind. Staggered 70ms per row. When
   the two groups sit side by side, the generated one waits for the authored
   one, so the reading order holds in motion too.
4. **Exactly one scroll-linked element.** The monogram plate drifts 14px as the
   hero leaves. Nothing else is scroll-linked. That restraint is the point.
5. **Route changes cross-fade** with a 6px rise over 200ms.

Implemented with the Motion library (`motion/react`), +47 kB gzipped. The
alternative — CSS and IntersectionObserver alone — was measured at +34 kB for
the chart and no hover or gesture support, so the library earns its place.

**Reduced motion is a contract, not a preference.** Every animation has a
`prefers-reduced-motion` path: reveals appear instantly, the chart shows its
real values without counting up, the plate stops drifting, and page changes
cut rather than cross-fade. The accessibility statement says so explicitly.

**Asynchrony of the reveal.** The reveal is an enhancement, never a gate on
content being visible. Three things guarantee it: content already on screen is
shown at once, the observer shows it when it scrolls in, and a timeout shows it
regardless.

**Layout** — a persistent left rail on desktop acting as a document index
(number plus name, in reading order), content in a measured column that
breaks wider for projects and the chart. Everything is left-aligned. The hero
is an asymmetric split: the text at 60%, a monogram plate at 40%.

**The one memorable element** — a calibration chart of languages, where each
bar is proportional to real code volume from the GitHub API and every row is
annotated with the project that proves it. Code Jan wrote and code the
toolchain generated are in two separate groups, because a percentage-based
chart would misrepresent both.

## Sections

| # | Section | Contains |
| --- | --- | --- |
| — | Hero | Name, positioning line, introduction, two calls to action, monogram plate with a factual readout |
| 01 | Profile | Who he is, and three paragraphs on what he likes to work on |
| 02 | Work | Four projects: SmartStudy, NSA_REACT, MovieDB, Odkup rabljenih vozil |
| 03 | Stack | The calibration chart, and a spec sheet of what he works with |
| 04 | Path | Two jobs, one programme of study |
| 05 | Contact | Email, phone, GitHub, location, and a downloadable CV |

Plus three legal routes: `/privacy`, `/imprint`, `/accessibility`.

## Content inventory and gaps

Every text slot is filled except the ones below, which cannot be filled
without information that does not exist. They are listed rather than invented.

| Gap | Handling |
| --- | --- |
| Profile photograph | No photo asset exists. A typographic monogram plate with crop-marks is used instead. |
| Open Graph image in PNG | The design exists as `og-image.svg`. A raster version should be generated from it for platforms that reject SVG. |
| LinkedIn profile URL | Not known. The footer links to GitHub, email and phone only. |
| Formal legal review of the privacy, imprint and accessibility statements | Written to be accurate, but not reviewed by a lawyer. Flagged on the pages themselves. |
| Formal accessibility audit | The statement is written by the site owner and says so. |

## Accessibility requirements

- WCAG 2.1 AA is the target, enforced at the token level: every
  foreground/background pairing is contrast-checked before a component is
  written, and the values live in one file so a palette change cannot break
  them silently.
- One visible focus indicator on every interactive element.
- Full keyboard operability, with a skip order matching the visual order.
- `prefers-reduced-motion` disables all transitions and scroll animation.
- The layout reflows to 320px without horizontal scrolling.
- Real headings, landmarks, lists and definition lists — navigable by screen
  reader and by reader mode.
- The light theme is contrast-checked independently, not assumed.

## Definition of done

- `npm run lint`, `npm run test:run` and `npm run build` all pass.
- The page renders with no console errors and no failed requests at 1440px,
  768px and 390px.
- Deep links to `/privacy`, `/imprint` and `/accessibility` work on both
  GitHub Pages and Vercel.
- A design critique against the nine-axis rubric has no Blocking or Required
  findings outstanding.
- Lighthouse reports no accessibility failures.
- The base path comes from the environment, and the GitHub Pages 404 fallback
  and router basename are in place.
- Every text slot is either filled or listed as a gap.
