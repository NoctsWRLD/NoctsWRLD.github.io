import { Link, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LegalPage } from './components/LegalPage'
import { Path } from './components/Path'
import { Rail } from './components/Rail'
import { Stack } from './components/Stack'
import { Work } from './components/Work'
import { accessibility, imprint, privacy } from './data/legal'
import { nav } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'
import { useDocumentMeta } from './hooks/useDocumentMeta'
import { useTheme } from './hooks/useTheme'

const SECTION_IDS = nav.map((item) => item.id)

const HOME_TITLE = 'Jan Vidovič — Student developer in Maribor, Slovenia'
const HOME_DESCRIPTION =
  'Jan Vidovič is a student developer in Maribor, Slovenia, building complete products across web, mobile and desktop — React and Tailwind front-ends, Express and PHP back-ends, Flutter and C# applications.'

function Home({ theme, onToggleTheme }) {
  useDocumentMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: '/' })
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <Rail active={active} theme={theme} onToggleTheme={onToggleTheme} />
      <div className="lg:pl-[12rem]">
        <main>
          <Hero />
          <About />
          <Work />
          <Stack />
          <Path />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

function NotFound({ theme, onToggleTheme }) {
  useDocumentMeta({
    title: 'Page not found — Jan Vidovič',
    description: 'This page does not exist.',
    path: '',
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
      <main className="flex-1 px-6 py-20 md:px-10">
        <div className="mx-auto w-full max-w-[52rem]">
          <p className="mono text-xs text-brass">404</p>
          <h1 className="mt-3 font-display text-3xl text-ink">This page does not exist</h1>
          <p className="mt-5 max-w-[46ch] text-lg text-ash">
            The link may be out of date. Everything worth reading is on the main page.
          </p>
          <Link to="/" className="btn btn-primary mt-9">
            Back to the portfolio
          </Link>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Routes>
        <Route path="/" element={<Home theme={theme} onToggleTheme={toggleTheme} />} />
        <Route
          path="/privacy"
          element={
            <LegalPage
              document={privacy}
              theme={theme}
              onToggleTheme={toggleTheme}
              path="/privacy"
            />
          }
        />
        <Route
          path="/imprint"
          element={
            <LegalPage
              document={imprint}
              theme={theme}
              onToggleTheme={toggleTheme}
              path="/imprint"
            />
          }
        />
        <Route
          path="/accessibility"
          element={
            <LegalPage
              document={accessibility}
              theme={theme}
              onToggleTheme={toggleTheme}
              path="/accessibility"
            />
          }
        />
        <Route path="*" element={<NotFound theme={theme} onToggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  )
}
