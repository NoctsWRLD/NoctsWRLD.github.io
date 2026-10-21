import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

const legal = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/imprint', label: 'Imprint' },
  { to: '/accessibility', label: 'Accessibility' },
]

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-[64rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm text-ash">
            © 2026 {profile.name}. Maribor, Slovenia.
          </div>
          <div className="mono mt-1.5 text-xs text-dim">
            Built with React, Vite and Tailwind.
          </div>
        </div>

        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {legal.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ash transition-colors hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
