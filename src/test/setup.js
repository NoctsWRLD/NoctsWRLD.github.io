import '@testing-library/jest-dom/vitest'

// jsdom does not implement matchMedia, and the Reveal component asks it
// whether the visitor prefers reduced motion. Stub it as "no preference" so
// components render their real output.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

// jsdom has no IntersectionObserver either. The Reveal component and the
// scroll spy both use one; a no-op stub lets them mount and render normally.
if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback
    }
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
}
