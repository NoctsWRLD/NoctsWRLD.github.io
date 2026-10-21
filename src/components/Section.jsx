import { Reveal } from './Reveal'

/**
 * The shared section frame. The number is a document index marker, matching
 * the rail, not a decorative badge.
 */
export function Section({ id, index, title, lede, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto w-full max-w-[64rem]">
        <Reveal>
          <header className="mb-10 md:mb-14">
            <div className="mono text-xs text-brass tabular-nums">{index}</div>
            <h2 className="mt-3 font-display text-3xl text-ink">{title}</h2>
            {lede ? <p className="mt-5 max-w-[54ch] text-lg text-ash">{lede}</p> : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
