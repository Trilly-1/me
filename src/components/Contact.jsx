import { useState } from 'react'
import Section from './Section.jsx'
import { contact, profile } from '../content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Opens the visitor's email app with the message filled in.
  // To receive messages without an email app, swap this for a form service later.
  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Message from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section
      id="contact"
      title={contact.heading}
      intro={contact.intro}
      tone="contact"
      tight
      centered
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <form
          onSubmit={handleSubmit}
          className="glass-panel space-y-3 rounded-[1.3rem] p-4 text-left sm:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Your name
            </label>
            <input id="name" name="name" required autoComplete="name" className="form-field form-field--compact" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="form-field form-field--compact"
            />
          </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              required
              className="form-field form-field--compact"
            />
          </div>
          <button
            type="submit"
            className="action-link"
          >
            Send message
          </button>
          <p role="status" className="min-h-5 text-xs text-muted">
            {sent && 'Your email app should open with the message ready to send.'}
          </p>
        </form>

        <div className="glass-panel h-fit rounded-[1.3rem] p-5 text-left sm:p-6">
          <p>
            <a
              href={`mailto:${profile.email}`}
              className="gold-link break-all text-lg font-semibold underline"
            >
              {profile.email}
            </a>
          </p>
          <ul className="mt-5 space-y-3">
            {profile.socials.map((social) => (
              <li
                key={social.label}
                className="flex items-center justify-between gap-4 border-b border-line pb-2"
              >
                <span>{social.label}</span>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-link underline"
                  >
                    Profile<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-sm text-muted">Link to be added</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
