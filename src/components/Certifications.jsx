import Section from './Section.jsx'
import { certifications } from '../content.js'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title={certifications.heading}
      intro={certifications.intro}
      compact
      centered
      divider
    >
      <div className="glass-panel mx-auto max-w-3xl rounded-2xl p-6 text-center text-muted sm:p-8">
        Certification details will be added when available.
      </div>
    </Section>
  )
}
