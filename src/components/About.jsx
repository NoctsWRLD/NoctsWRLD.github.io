import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="profile" index="01" title="Who I am">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base text-ash">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h3 className="mono text-xs text-dim">What I like to work on</h3>
            <ul className="mt-6 space-y-7">
              {profile.likes.map((item) => (
                <li key={item.title} className="border-l border-line pl-5">
                  <h4 className="font-display text-lg text-ink">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-9 max-w-[50ch] text-base text-ash">{profile.likesClosing}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
