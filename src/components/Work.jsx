import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Work() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="work"
      index="02"
      title="Selected work"
      lede="Four projects that cover the range. Where the source is not published, the description stands on its own."
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id} className="h-full">
            <motion.article
              className="card flex h-full flex-col p-6 md:p-8"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl text-ink md:text-2xl">{project.name}</h3>
                <span className="mono text-xs text-dim">{project.year}</span>
              </div>

              <p className="mono mt-2 text-xs text-brass">{project.kind}</p>

              {project.image ? (
                <figure className="mt-6">
                  <picture>
                    <source
                      srcSet={`${import.meta.env.BASE_URL}${project.image.webp}`}
                      type="image/webp"
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image.jpeg}`}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      loading="lazy"
                      decoding="async"
                      className="block w-full border border-line"
                    />
                  </picture>
                  <figcaption className="mono mt-2 text-xs text-dim">
                    {project.image.caption}
                  </figcaption>
                </figure>
              ) : null}

              <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-ash">
                {project.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {project.stack.map((item) => (
                  <li key={item} className="mono text-xs text-dim">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 md:mt-auto md:pt-7">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
                {project.source === 'private' ? (
                  <span className="mono text-xs text-dim">Source not published</span>
                ) : null}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
