import { profile } from '../data/profile'
import { Monogram } from './Monogram'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <header className="px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-24">
      <div className="mx-auto grid w-full max-w-[64rem] gap-12 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-16">
        <div>
          <Reveal>
            <h1 className="font-display text-4xl text-ink">{profile.name}</h1>
            <p className="mt-7 max-w-[44ch] text-lg text-ash">{profile.lead}</p>
            <p className="mt-6 max-w-[56ch] text-base text-ash">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                View the work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="md:pt-1">
          <Monogram />
        </Reveal>
      </div>
    </header>
  )
}
