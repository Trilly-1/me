export default function Section({
  id,
  title,
  ariaLabel,
  intro,
  tone = 'paper',
  compact = false,
  tight = false,
  centered = false,
  divider = false,
  singleLine = false,
  children,
}) {
  const tones = {
    paper: '',
    featured: 'bg-[linear-gradient(110deg,rgba(201,167,106,0.045),transparent_58%)]',
    contact: 'bg-[linear-gradient(130deg,rgba(201,167,106,0.07),transparent_62%)]',
  }

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-label={!title ? ariaLabel : undefined}
      className={`section-divider ${tones[tone]}`}
    >
      <div
        className={`section-wrap ${compact ? 'section-wrap--compact' : ''} ${
          tight ? 'section-wrap--tight' : ''
        }`}
      >
        {title && (
          <h2
            id={`${id}-title`}
            className={`section-heading ${centered ? 'mx-auto text-center' : ''} ${
              singleLine
                ? 'lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(2.5rem,5vw,4.5rem)]'
                : ''
            }`}
          >
            {title}
          </h2>
        )}
        {divider && (
          <span
            aria-hidden="true"
            className={`mt-5 block h-px w-16 bg-gold ${centered ? 'mx-auto' : ''}`}
          />
        )}
        {intro && (
          <p
            className={`section-intro mt-5 ${
              centered ? 'mx-auto text-center' : ''
            } ${singleLine ? 'lg:max-w-none lg:whitespace-nowrap lg:text-base' : ''}`}
          >
            {intro}
          </p>
        )}
        <div className={`${tight ? 'mt-7 sm:mt-9' : 'mt-10 sm:mt-14'}`}>{children}</div>
      </div>
    </section>
  )
}
