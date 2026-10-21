/**
 * A shared "is this element on screen" tracker.
 *
 * One scroll listener and one animation frame for the whole page, rather than
 * an observer per element.
 *
 * The reason is behaviour, not performance. The site wants an element to
 * animate when it arrives AND to reset when it is scrolled past, so that
 * scrolling back replays it. Both directions are decided by one rectangle
 * calculation, which keeps them consistent with each other — an element cannot
 * be "arrived" and "gone" at the same time, and the reset always happens
 * strictly after the animation, never during it.
 */

const tracked = new Set()

let frame = 0
let listening = false

function measure() {
  frame = 0

  const viewportHeight = window.innerHeight
  // The arrival band: an element is considered arrived once its top has
  // travelled this far into the viewport, so it is comfortably on screen
  // before it starts moving.
  const band = viewportHeight * 0.12

  for (const entry of [...tracked]) {
    const rect = entry.el.getBoundingClientRect()

    // Arrived: the top has travelled past the arrival band, and the element
    // still reaches into the viewport.
    const arrived = rect.top < viewportHeight - band && rect.bottom > 0
    // Entirely above, or entirely below, the viewport.
    const gone = rect.bottom < 0 || rect.top > viewportHeight

    if (arrived && !entry.active) {
      entry.active = true
      entry.notify(true)
    } else if (gone && entry.active) {
      entry.active = false
      entry.notify(false)
    }
    // Otherwise the element is in the arrival band, or partly on screen but
    // not yet arrived. Either way its state is unchanged.
  }
}

function schedule() {
  if (frame) return
  frame = requestAnimationFrame(measure)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
}

function stopListening() {
  if (listening || tracked.size > 0) return
  listening = false
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
}

/**
 * Track an element. `notify` is called with `true` when the element arrives
 * and `false` when it leaves. Returns the cleanup function.
 */
export function track(element, notify) {
  const entry = { el: element, notify, active: false }
  tracked.add(entry)
  startListening()
  schedule()

  return () => {
    tracked.delete(entry)
    stopListening()
  }
}
