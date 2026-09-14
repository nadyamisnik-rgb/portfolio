import { Reveal } from '../components/Reveal'
import { site } from '../lib/content'

export function ContactPage() {
  const [local, domain] = site.email.split('@')

  return (
    <main>
      <section className="flex min-h-[100svh] flex-col px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem]">
        <div className="mx-auto flex w-full max-w-[89.5rem] flex-1 flex-col">
          <Reveal>
            <p className="mb-6 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase md:mb-8">
              Let’s work together
            </p>
          </Reveal>
          <Reveal>
            <h1 className="font-serif text-[clamp(40px,6.4vw,6rem)] leading-[1.1] font-light tracking-[-0.03em]">
              Have a product, a dashboard, or a site that could feel clearer? Write me.
            </h1>
          </Reveal>
          <Reveal className="mt-12 md:mt-16">
            <a
              href={`mailto:${site.email}`}
              data-cursor="link"
              className="group relative inline-block max-w-full font-serif text-[clamp(22px,6.2vw,96px)] leading-[1.05] font-light tracking-[-0.04em]"
            >
              <span className="text-gradient relative inline-block whitespace-nowrap">
                {local}@{domain}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.06em] h-[0.04em] origin-left scale-x-0 bg-[#AEA8FE] transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </span>
            </a>
          </Reveal>
          <Reveal className="mt-auto grid grid-cols-2 gap-x-6 gap-y-8 pt-20 text-[15px] md:grid-cols-4">
            <Field label="Location" value={site.location} />
            <Field label="Phone" value={site.phone} href={site.phoneHref} />
            <Field label="LinkedIn" value="nadyakarpovich" href={site.linkedin} external />
            <Field label="Behance" value="nadya_karp" href={site.behance} external />
          </Reveal>
        </div>
      </section>
    </main>
  )
}

function Field({
  label,
  value,
  href,
  external,
}: {
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = href ? (
    <a
      href={href}
      data-cursor="pointer"
      className="mt-[0.375rem] inline-block transition-opacity hover:opacity-80"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {value}
    </a>
  ) : (
    <dd className="mt-[0.375rem]">{value}</dd>
  )

  return (
    <div>
      <dt className="text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
        {label}
      </dt>
      {content}
    </div>
  )
}
