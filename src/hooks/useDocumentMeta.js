import { useEffect } from 'react'
import { profile } from '../data/profile'

/**
 * Sets the document title, the meta description, the Open Graph tags and the
 * canonical URL for a route.
 *
 * A single-page site still needs one title, description and canonical URL per
 * page. The static index.html carries the home page's values so a crawler
 * that never runs JavaScript still finds them; this hook keeps them correct
 * as the user navigates.
 */
export function useDocumentMeta({ title, description, path = '' }) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, attribute, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attribute, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)

    const url = `${profile.siteUrl}${path}`
    setMeta('meta[property="og:url"]', 'content', url)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, path])
}
