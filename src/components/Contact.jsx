import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" index="05" title="Get in touch">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="max-w-[44ch] text-lg text-ash">{profile.contactLead}</p>
            <a href={profile.cv} className="btn btn-secondary mt-8" download>
              Download my CV
            </a>
          </div>

          <dl className="space-y-0">
            {profile.contactDetails.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-4 first:border-t first:pt-0"
              >
                <dt className="mono text-xs text-dim">{row.label}</dt>
                <dd className="break-words text-base text-ink">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="link"
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
