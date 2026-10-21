import { useEffect, useState } from 'react'

const KEY = 'nocts-portfolio-theme'

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Private mode or storage disabled — fall through to the default.
  }
  return 'dark'
}

/**
 * Theme state, persisted to localStorage. Dark is the default — the design
 * direction was specified dark-first, with light as a token swap.
 */
export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // Persisting is a convenience, not a requirement.
    }
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return [theme, toggle]
}
