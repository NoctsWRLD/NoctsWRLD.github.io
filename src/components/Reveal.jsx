import { useEffect, useRef } from 'react'

const REVEAL_FALLBACK_MS = 5000

/**
 * Reveals its children once they scroll into view: a short lift and fade.
 *
 * The reveal is an enhancement, never a gate on the content being visible.
 * Three things guarantee that:
 *   1. An element already in the viewport on mount is shown immediately.
 *   2. The IntersectionObserver shows it when it scrolls in.
 *   3. A timeout shows it regardless, if neither of the above happens.
 *
 * Without the third, a broken or unsupported observer would leave whole
 * sections permanently invisible.
 */
export function Reveal({ as: Tag = 'div', className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => el.classList.add('is-visible')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }

    // Already on screen — no animation, no waiting.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    observer.observe(el)

    // Backstop: the content must never depend on the observer to be seen.
    const fallback = setTimeout(show, REVEAL_FALLBACK_MS)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
