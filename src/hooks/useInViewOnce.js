import { useEffect, useRef, useState } from 'react'

/**
 * Reports when an element has entered the viewport, once.
 *
 * Three guarantees, in order:
 *   1. An element already on screen when the page mounts counts as in view.
 *   2. The IntersectionObserver reports it when it scrolls in.
 *   3. A timeout reports it regardless.
 *
 * The third exists because content that depends on an observer firing is
 * content that can be invisible. A slow or broken observer must never cost the
 * reader the content.
 */
export function useInViewOnce({ amount = 0.15, margin = '0px 0px -8% 0px', timeout = 8000 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin, threshold: amount },
    )

    observer.observe(el)

    const fallback = setTimeout(() => setInView(true), timeout)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [amount, margin, timeout])

  return [ref, inView]
}
