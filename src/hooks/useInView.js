import { useEffect, useRef, useState } from 'react'
import { track } from '../lib/inView'

/**
 * Reports whether an element is on screen, and tells you when that changes.
 *
 * `active` is true while the element is in the viewport and false once it has
 * been scrolled past, so a consumer can animate on arrival and reset on
 * departure. Scrolling back replays whatever the consumer does with it.
 */
export function useInView() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return track(el, setActive)
  }, [])

  return [ref, active]
}
