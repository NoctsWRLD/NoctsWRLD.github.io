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
