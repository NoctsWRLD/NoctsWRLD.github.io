import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

/**
 * A legal page. It keeps the site's type and spacing but drops the rail —
 * these are appendices, not sections of the document.
 */
export function LegalPage({ document, theme, onToggleTheme, path }) {
  useDocumentMeta({
    title: `${document.title} — Jan Vidovič`,
    description: document.intro,
    path,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line px-6 py-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[52rem] items-center justify-between gap-6">
          <Link to="/" className="font-display text-sm text-ink transition-colors hover:text-brass">
            Jan Vidovič
          </Link>
          <button
            type="button"
            onClick={onToggleTheme}
            className="mono text-xs text-dim transition-colors hover:text-brass"
          >
            {theme === 'dark' ? 'Light' : 'Dark'} theme
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-[52rem]">
          <h1 className="font-display text-3xl text-ink">{document.title}</h1>
          <p className="mono mt-3 text-xs text-dim">Last updated {document.updated}</p>
          <p className="mt-8 max-w-[54ch] text-lg text-ash">{document.intro}</p>

          <div className="mt-12 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="max-w-[62ch] text-base leading-relaxed text-ash">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <Link to="/" className="link text-sm">
              Back to the portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
