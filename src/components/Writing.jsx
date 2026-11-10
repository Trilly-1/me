import Section from './Section.jsx'
import { writing } from '../content.js'

export default function Writing() {
  return (
    <Section
      id="writing"
      title={writing.heading}
      intro={writing.intro}
      centered
      divider
      singleLine
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        {writing.items.map((item) => (
          <article
            key={item.title}
            className="glass-panel h-full rounded-[1.2rem] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">{item.type}</p>
              <p className="text-xs text-muted">{item.status}</p>
            </div>
            <h3 className="mt-5 text-2xl leading-tight sm:text-3xl">{item.title}</h3>
            <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
