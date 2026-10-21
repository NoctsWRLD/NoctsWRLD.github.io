const KEY = '__spa_redirect'

/**
 * GitHub Pages serves files from disk, so an unknown path returns 404.html
 * rather than the app. The build emits a 404.html that stashes the requested
 * path here and redirects to the app root; this restores it.
 *
 * It runs at module load, before React renders, because the router reads the
 * current location when it mounts and would otherwise see the wrong path.
 */
export function restorePath() {
  let stored
  try {
    stored = sessionStorage.getItem(KEY)
  } catch {
    return
  }

  if (!stored) return

  try {
    sessionStorage.removeItem(KEY)
  } catch {
    // Nothing to clean up if storage is unavailable.
  }

  const base = import.meta.env.BASE_URL
  window.history.replaceState(null, '', base + stored.replace(/^\//, ''))
}
