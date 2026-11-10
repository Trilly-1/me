import Section from './Section.jsx'
import { about } from '../content.js'

export default function About() {
  return (
    <Section id="about" title={about.heading} ariaLabel="About Tracy" centered>
      <div className="mx-auto grid w-full max-w-5xl items-start gap-8 sm:gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div className="max-w-[64ch] space-y-5 text-lg leading-relaxed sm:text-xl">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="glass-panel h-fit rounded-2xl p-6 sm:p-8">
          {about.facts.map((f) => (
            <div key={f.label} className="mb-7 last:mb-0">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-1 text-base leading-snug text-muted sm:text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
