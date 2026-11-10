import { profile } from '../content.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Ventures' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Expertise' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="glass-panel nav-panel sticky top-0 z-40 border-x-0 border-t-0">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[76rem] items-center justify-between gap-4 px-5 py-3"
      >
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 font-body text-sm font-semibold tracking-tight"
          aria-label={`${profile.name}, back to top`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt=""
            className="h-9 w-9 rounded-full border border-gold/60 object-cover object-[33%_center]"
          />
          <span className="hidden sm:inline">Amutuhaire Tracy</span>
        </a>
        <ul className="flex max-w-[calc(100%-3.5rem)] flex-wrap items-center justify-end gap-x-1 gap-y-1 text-xs font-medium sm:max-w-none sm:gap-x-3 sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-2 py-1.5 text-muted transition-colors hover:text-gold-light sm:px-2.5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
