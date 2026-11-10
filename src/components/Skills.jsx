import Section from './Section.jsx'
import { skills } from '../content.js'

export default function Skills() {
  return (
    <Section id="skills" title={skills.heading} tone="featured" centered divider>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((g) => (
          <section key={g.name} className="glass-panel rounded-2xl p-6">
            <h3 className="text-2xl">{g.name}</h3>
            <ul className="mt-4 space-y-2 text-lg text-muted">
              {g.items.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="glass-panel mt-8 rounded-2xl p-6">
        <h3 className="eyebrow">Languages</h3>
        <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-2 text-muted">
          {skills.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
