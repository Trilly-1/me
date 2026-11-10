import Section from './Section.jsx'
import { projects } from '../content.js'

function Project({ item }) {
  return (
    <article className="glass-panel h-full rounded-[1.2rem] p-5 sm:p-6">
      <p className="eyebrow leading-relaxed">{item.role}</p>
      <h3 className="mt-2 text-3xl leading-none sm:text-4xl">{item.title}</h3>
      <span className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </span>
      <p className="mt-5 text-base leading-relaxed text-muted">
        {item.summary}
      </p>
      <div className="project-detail mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-gold">Status</p>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="gold-link mt-1 inline-block text-sm underline"
          >
            {item.status}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <p className="mt-1 text-sm text-muted">{item.status}</p>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title={projects.heading}
      intro={projects.intro}
      tone="featured"
      centered
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((item) => (
          <Project key={item.title} item={item} />
        ))}
      </div>
    </Section>
  )
}
