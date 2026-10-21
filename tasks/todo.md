# Todo — Jan Vidovič, portfolio

- [x] 1. Token system and shell
- [x] 2. Hero and the monogram plate
- [x] 3. Profile section
- [x] 4. Work section
- [x] 5. Stack section, the calibration chart
- [x] 6. Path and contact sections
- [x] 7. Routing, legal pages and deployment setup
- [x] 8. Tests
- [x] 9. Browser verification and critique
- [x] 10. Performance, SEO and legal
- [x] 11. Motion system — scroll reveals, hover and press feedback, the
      calibration chart as the signature moment, hero drift, route transitions

## Motion work, 2026-10-21

- [x] Motion tokens: `--ease-instrument`, `--ease-mechanical`, `--ease-exit`,
      `--motion-distance` and its two neighbours.
- [x] `Reveal` now runs the animation library instead of a CSS transition, and
      keeps all three visibility guarantees.
- [x] The calibration chart draws its bars, counts its byte values up, and
      reveals each detail line in sequence.
- [x] Hover and press feedback on cards, buttons, rail numbers and links.
- [x] The monogram plate drifts on scroll; the theme toggle icon turns.
- [x] Route changes cross-fade.
- [x] Every animation has a `prefers-reduced-motion` path, and the
      accessibility statement now describes them specifically.
- [x] Bricolage Grotesque dropped its optical-size axis: 36 kB lighter and
      visually identical at the sizes used.

## Measured cost

- JavaScript 92 kB → 145 kB gzipped, for the animation engine.
- Lighthouse desktop unchanged at 100 across all five categories.
- Lighthouse mobile performance 97 → 94. Accessibility, best practices, SEO
  and agentic browsing are unchanged at 100.

## Layout and navigation, 2026-10-21

- [x] The address bar stays clean. A section link scrolls to its section and
      then removes the hash, without pushing a history entry. The `href` stays
      a real fragment so the link still works without JavaScript.
- [x] A visitor arriving with a fragment still lands on the right section, and
      the fragment is removed once they are there.
- [x] Scroll animations replay. An element scrolled past resets to its hidden
      state, and scrolling back replays its arrival. The chart resets to zero
      and counts up again.
- [x] The reset is expressed as a class, not an inline style, so the print and
      reduced-motion rules can still override it. Printing shows the real byte
      values and the real bar widths.
- [x] With reduced motion the content is simply there: no reveal, no reset, no
      movement, and the chart shows its measured values immediately.
- [x] The four projects sit in a 2×2 grid on desktop. The work section drops
      from 2431px to 1453px, and the page from 6300px to 5463px.
- [x] Each card's link row is pinned to its bottom edge, so the extra height
      in a shorter card is used rather than left as a void.

## Still open

- [ ] No profile photograph. The monogram plate stands in for one.
- [ ] No LinkedIn profile URL, so the footer links to GitHub, email and phone.
- [ ] The legal statements are accurate but not reviewed by a lawyer.
- [ ] The accessibility statement is written by the site owner, not an audit.
- [ ] WebMCP is not implemented: `navigator.modelContext` is unavailable in
      Chromium 154, so the code could not be verified.
- [ ] Only SmartStudy has a screenshot, so its card carries a figure and the
      other three do not. Screenshots of the other three would even it out.

## Findings fixed during the build

- [x] The scroll reveal left whole sections invisible when the observer did not
      fire. Content in view is now shown immediately, with a timeout backstop.
- [x] The rail's 208px offset was applied at 768px, leaving a 96px text column
      in the hero. The rail and the section splits now move to wider breakpoints.
- [x] The contact grid's `1fr` track could not shrink below an unbreakable
      email, overflowing the page by 37px at 768px.
- [x] The Vite base was not normalised to a trailing slash.
- [x] `formatBytes` mixed whole and decimal kilobytes in one column.
- [x] Middle dots were used as separators, which is a known template tell.

## Left open

- [ ] No profile photograph. The monogram plate stands in for one.
- [ ] No LinkedIn profile URL, so the footer links to GitHub, email and phone.
- [ ] The legal statements are accurate but not reviewed by a lawyer.
- [ ] The accessibility statement is written by the site owner, not an audit.
- [ ] WebMCP is not implemented: `navigator.modelContext` is unavailable in
      Chromium 154, so the code could not be verified.
