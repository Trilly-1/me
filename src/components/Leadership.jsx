import Section from './Section.jsx'
import { leadership } from '../content.js'

export default function Leadership() {
  return (
    <Section
      id="leadership"
      title={leadership.heading}
      intro={leadership.intro}
      compact
      centered
    >
      <ol className="leadership-list grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {leadership.items.map((item, index) => (
          <li
            key={`${item.role}-${item.org}`}
            className="glass-panel grid grid-cols-[2rem_1fr] gap-3 rounded-xl p-4"
          >
            <span className="eyebrow pt-1 text-xs">0{index + 1}</span>
            <div className="min-w-0">
              <div>
                <h3 className="leading-tight">{item.role}</h3>
                <p className="mt-0.5 text-sm text-muted">{item.org}</p>
              </div>
              <p className="mt-2 text-xs font-medium text-gold-light">{item.period}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
