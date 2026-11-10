import { profile } from '../content.js'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="section-divider">
      <div className="mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted">
        <p className="text-balance">
          &copy; {currentYear} {profile.name}
        </p>
        <a href="#top" className="gold-link underline">
          Back to top
        </a>
      </div>
    </footer>
  )
}
