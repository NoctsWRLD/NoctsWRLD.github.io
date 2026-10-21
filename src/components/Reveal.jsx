import { useEffect } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import { useInViewOnce } from '../hooks/useInViewOnce'

/**
 * Arrives its children when they scroll into view: a short lift and a fade,
 * decelerating on the "instrument" curve so the element settles rather than
 * springs.
 *
 * The reveal is an enhancement, never a gate on the content being visible.
 * Three things guarantee that: content already on screen is shown at once,
 * the observer shows it when it scrolls in, and a timeout shows it regardless.
 * If the animation itself fails, the fallback class makes it visible anyway.
 */
export function Reveal({ as: Tag = 'div', className = '', children, delay = 0 }) {
  const [ref, inView] = useInViewOnce()
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return

    if (reduce) {
      el.classList.add('is-visible')
      return
    }

    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--motion-distance')
      .trim()
    const distance = raw.endsWith('px') ? raw.slice(0, -2) : raw

    let controls
    try {
      controls = animate(
        el,
        {
          opacity: [0, 1],
          transform: [`translateY(${distance}px)`, 'translateY(0px)'],
        },
        { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
      )
    } catch {
      el.classList.add('is-visible')
    }

    return () => controls?.stop()
  }, [ref, inView, reduce, delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
