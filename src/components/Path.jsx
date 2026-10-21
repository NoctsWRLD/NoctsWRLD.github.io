import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

function Timeline({ items }) {
  return (
    <ol className="mt-6 space-y-7">
      {items.map((item) => (
        <li
          key={`${item.org}-${item.period}`}
          className="grid gap-x-6 gap-y-1 border-l border-line pl-5 sm:grid-cols-[minmax(0,1fr)_auto]"
        >
          <div>
            <div className="text-base text-ink">{item.org}</div>
            <div className="mt-1 text-sm text-ash">{item.role}</div>
            <div className="mono mt-1.5 text-xs text-dim">{item.place}</div>
          </div>
          <span className="mono text-xs text-dim sm:pt-1 sm:text-right">{item.period}</span>
        </li>
      ))}
    </ol>
  )
}

export function Path() {
  return (
    <Section id="path" index="04" title="Where I have been">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h3 className="mono text-xs text-dim">Work</h3>
            <Timeline items={profile.experience} />
            <p className="mt-9 max-w-[50ch] text-base text-ash">{profile.experienceClosing}</p>
          </div>

          <div>
            <h3 className="mono text-xs text-dim">Education</h3>
            <Timeline items={profile.education} />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
