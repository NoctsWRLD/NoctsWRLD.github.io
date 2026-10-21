import { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { authored, barWidth, formatBytes, generated, generatedNote, tooling } from '../data/stack'
import { useInView } from '../hooks/useInView'
import { Reveal } from './Reveal'
import { Section } from './Section'

const EASE = [0.16, 1, 0.3, 1]
const STAGGER = 0.07

/**
 * Counts up to the real byte value while the bar draws. The number arrives
 * with the bar, and it always lands on the truth — with reduced motion it is
 * simply set to the final value. Scrolling past resets it to zero, so
 * scrolling back replays the count.
 */
function CountUp({ value, active, delay }) {
  const reduce = useReducedMotion()
  const progress = useMotionValue(0)
  const text = useTransform(progress, (v) => formatBytes(Math.round(v)))

  useEffect(() => {
    if (reduce) {
      progress.set(active ? value : 0)
      return
    }

    if (!active) {
      progress.set(0)
      return
    }

    const controls = animate(progress, value, { duration: 0.5, delay, ease: EASE })
    return () => controls.stop()
  }, [active, value, delay, reduce, progress])

  return (
    <>
      <motion.span className="count-live">{text}</motion.span>
      {/* The printed value is the real one, whatever the animation is doing. */}
      <span className="count-print">{formatBytes(value)}</span>
    </>
  )
}

/**
 * The calibration chart. Each row plays in sequence: the bar draws to its
 * measured width, the byte count counts up in step with it, and the detail
 * line follows just behind. A scroll reads as an instrument calibrating.
 *
 * Scrolled past, the chart resets to zero, so scrolling back replays it.
 */
function Bars({ rows, muted = false, baseDelay = 0 }) {
  const [ref, active] = useInView()
  const reduce = useReducedMotion()
  const bars = useRef([])

  useEffect(() => {
    rows.forEach((row, index) => {
      const el = bars.current[index]
      if (!el) return

      const delay = baseDelay + index * STAGGER
      const width = `${barWidth(row.bytes, rows)}%`

      if (reduce) {
        el.style.width = active ? width : '0%'
        return
      }

      if (active) {
        animate(el, { width }, { duration: 0.5, delay, ease: EASE })
      } else {
        // Gone again — snap back rather than animating the reversal.
        animate(el, { width: '0%' }, { duration: 0 })
      }
    })
  }, [active, reduce, rows, baseDelay])

  return (
    <ul className="mt-6 space-y-5" ref={ref}>
      {rows.map((row, index) => {
        const delay = baseDelay + index * STAGGER
        return (
          <li key={row.language}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-ink">{row.language}</span>
              <span className="mono text-xs text-dim tabular-nums">
                <CountUp value={row.bytes} active={active} delay={delay} />
              </span>
            </div>

            <div className="mt-2 h-1.5 w-full bg-raised">
              <div
                ref={(el) => {
                  bars.current[index] = el
                }}
                className={`bar h-full ${muted ? 'bg-line-strong' : 'bg-brass'}`}
                style={{ width: '0%', '--bar-final': `${barWidth(row.bytes, rows)}%` }}
              />
            </div>

            <motion.p
              className="mono mt-1.5 text-xs text-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{
                duration: reduce ? 0 : active ? 0.3 : 0,
                delay: reduce ? 0 : delay + 0.3,
                ease: EASE,
              }}
            >
              {row.detail}
            </motion.p>
          </li>
        )
      })}
    </ul>
  )
}

export function Stack() {
  // When the two groups sit side by side, the generated one waits for the
  // authored one to finish, so the reading order holds in motion too.
  const [sideBySide, setSideBySide] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const update = () => setSideBySide(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const generatedDelay = sideBySide ? authored.length * STAGGER : 0

  return (
    <Section
      id="stack"
      index="03"
      title="What I write"
      lede="Measured from the GitHub API across my own repositories — bytes of code, not self-assessed percentages. A progress ring would be a guess. This is a count."
    >
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h3 className="mono text-xs text-dim">Written by me</h3>
            <Bars rows={authored} />
          </div>

          <div>
            <h3 className="mono text-xs text-dim">Generated by the toolchain</h3>
            <Bars rows={generated} muted baseDelay={generatedDelay} />
            <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-ash">
              {generatedNote}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 border-t border-line pt-10">
          <h3 className="mono text-xs text-dim">What I work with</h3>
          <dl className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {tooling.map((row) => (
              <div
                key={row.category}
                className="grid grid-cols-1 gap-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <dt className="text-sm text-ash">{row.category}</dt>
                <dd className="mono text-xs leading-6 text-dim">{row.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
