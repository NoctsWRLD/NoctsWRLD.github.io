import { useEffect } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import { useInView } from '../hooks/useInView'

function motionDistance() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--motion-distance')
    .trim()
  return raw.endsWith('px') ? raw.slice(0, -2) : raw
}

/**
 * Arrives its children when they scroll into view: a short lift and a fade,
 * decelerating on the "instrument" curve so the element settles rather than
 * springs.
 *
 * When the element is scrolled past, it resets to its hidden state, so
 * scrolling back replays the arrival. The reset is instant — the element is
 * off screen by then, and a fade-out would only be seen as a flicker on the
 * way back in.
 *
 * The hidden state is expressed as a class, never as an inline style, so the
 * print and reduced-motion rules can still override it.
 *
 * With reduced motion the content is simply there. No reveal, no reset, no
 * movement at all — the thing to arrive at is the text, and the text is
 * always present.
 */
export function Reveal({ as: Tag = 'div', className = '', children, delay = 0 }) {
  const [ref, active] = useInView()
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return

    const distance = motionDistance()

    if (!active) {
      // Gone again — snap back to the hidden state.
      el.classList.remove('is-visible')
      el.style.removeProperty('opacity')
      el.style.removeProperty('transform')
      return
    }

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
  }, [ref, active, reduce, delay])

  return (
    <Tag ref={ref} className={`reveal ${reduce ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
