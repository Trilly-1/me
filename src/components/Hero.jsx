import { profile } from '../content.js'

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative -mt-32 overflow-hidden pt-32"
    >
      <img
        src="/hero-background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/65 via-white/58 to-blue-100/68"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-12 h-[28rem] w-[28rem] rounded-full bg-blue-300/30 blur-[100px]"
      />
      <div className="section-wrap relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="hero-arrive">
          <h1
            id="hero-title"
            className="whitespace-nowrap font-display text-[clamp(2rem,6vw,5rem)] leading-none tracking-[-0.055em]"
          >
            Tech with Purpose
          </h1>
          <p className="mt-8 max-w-[47ch] text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 font-body font-semibold">
            <a
              href="#projects"
              className="action-link"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="action-link action-link--quiet"
            >
              Contact me
            </a>
          </div>
        </div>

        <figure className="hero-arrive-delayed mx-auto w-full max-w-[20rem] lg:justify-self-end">
          <div className="glass-panel relative aspect-square overflow-hidden rounded-full p-2.5">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full rounded-full object-cover object-[33%_center]"
              />
            ) : (
              <div className="relative grid h-full place-items-center overflow-hidden rounded-full border border-white/80 bg-[radial-gradient(ellipse_at_55%_38%,rgba(121,160,211,0.28),transparent_44%),radial-gradient(ellipse_at_75%_72%,rgba(201,167,106,0.2),transparent_40%),linear-gradient(145deg,#ffffff,#edf3fb_62%,#e4ecf7)]">
                <span
                  aria-hidden="true"
                  className="font-display text-[clamp(8rem,22vw,14rem)] leading-none tracking-[-0.1em] text-gold/80"
                >
                  {profile.initials}
                </span>
                <span className="absolute bottom-5 left-5 eyebrow text-[0.65rem]">
                  Portrait to be added
                </span>
              </div>
            )}
          </div>
          <figcaption className="mt-5 flex items-center justify-between gap-3 px-1">
            <span>
              <span className="block font-display text-2xl italic">{profile.firstName}</span>
              <span className="text-sm text-muted">{profile.location}</span>
            </span>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} download className="action-link action-link--quiet text-sm">
                Download CV
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="The CV file will be added when it is provided."
                className="action-link action-link--quiet text-sm"
              >
                CV to be added
              </button>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
