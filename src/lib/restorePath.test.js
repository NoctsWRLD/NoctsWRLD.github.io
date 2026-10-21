import { beforeEach, describe, expect, it, vi } from 'vitest'
import { restorePath } from './restorePath.js'

describe('restorePath', () => {
  beforeEach(() => {
    sessionStorage.clear()
    window.history.replaceState(null, '', '/')
    vi.unstubAllEnvs()
  })

  it('leaves the URL alone when no path was stashed', () => {
    restorePath()
    expect(window.location.pathname).toBe('/')
  })

  it('restores the stashed path onto the base', () => {
    vi.stubEnv('BASE_URL', '/nocts-portfolio/')
    sessionStorage.setItem('__spa_redirect', '/privacy')

    restorePath()

    expect(window.location.pathname).toBe('/nocts-portfolio/privacy')
  })

  it('clears the stash so a path is only restored once', () => {
    sessionStorage.setItem('__spa_redirect', '/privacy')

    restorePath()

    expect(sessionStorage.getItem('__spa_redirect')).toBeNull()
  })

  it('keeps the query string and hash that were stashed', () => {
    vi.stubEnv('BASE_URL', '/nocts-portfolio/')
    sessionStorage.setItem('__spa_redirect', '/privacy?from=email#section')

    restorePath()

    expect(window.location.pathname).toBe('/nocts-portfolio/privacy')
    expect(window.location.search).toBe('?from=email')
    expect(window.location.hash).toBe('#section')
  })
})
