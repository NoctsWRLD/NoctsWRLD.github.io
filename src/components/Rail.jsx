import { nav } from '../data/profile'
import { SectionLink } from './SectionLink'
import { ThemeToggle } from './ThemeToggle'

/**
 * The left rail is a document index, not a nav bar: a number and a name for
 * each section, in reading order. On small screens it collapses to a
 * horizontal strip under the top of the page.
 */
export function Rail({ active, theme, onToggleTheme }) {
  return (
    <>
      <nav
        aria-label="Sections"
        className="fixed inset-y-0 left-0 z-30 hidden w-[12rem] flex-col border-r border-line px-6 py-12 lg:flex"
      >
        <div className="font-display text-sm text-ink">Jan Vidovič</div>
        <div className="mono mt-1 text-xs text-dim">Portfolio</div>

        <ul className="mt-12 space-y-3.5">
          {nav.map((item, index) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <SectionLink
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-baseline gap-3"
                >
                  <span
                    className={`rail-num mono text-xs tabular-nums transition-colors ${
                      isActive ? 'text-brass' : 'text-dim group-hover:text-ash'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-sm transition-colors ${
                      isActive ? 'text-ink' : 'text-ash group-hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </span>
                </SectionLink>
              </li>
            )
          })}
        </ul>

        <div className="mt-auto space-y-5 pt-8">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <SectionLink
            href="#contact"
            className="mono block text-xs text-dim transition-colors hover:text-brass"
          >
            Get in touch
          </SectionLink>
        </div>
      </nav>

      <nav
        aria-label="Sections"
        className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur lg:hidden"
      >
        <div className="flex items-center gap-5 px-5 py-3">
          <ul className="flex flex-1 items-center gap-5 overflow-x-auto">
            {nav.map((item, index) => (
              <li key={item.id} className="shrink-0">
                <SectionLink href={`#${item.id}`} className="flex items-baseline gap-2">
                  <span className="mono text-xs text-dim tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ash">{item.label}</span>
                </SectionLink>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </>
  )
}
