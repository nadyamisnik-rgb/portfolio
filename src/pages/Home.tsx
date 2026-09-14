import { motion } from 'motion/react'
import { Parallax } from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { WorkGrid } from '../components/WorkGrid'
import { services, site } from '../lib/content'
import { withBase } from '../lib/base'

export function HomePage() {
  return (
    <main>
      <section className="relative flex flex-col px-5 pt-32 pb-12 md:px-10 md:pt-[8.75rem] md:pb-16">
        <div className="relative mx-auto flex w-full max-w-[89.5rem] flex-col">
          <Reveal className="relative z-10">
            <h1 className="font-serif text-[clamp(40px,6.4vw,6rem)] leading-[1] font-light tracking-[-0.04em] md:max-w-[64.0625rem] 2xl:max-w-[73rem]">
              Designer with{' '}
              <span className="text-gradient font-serif font-light italic underline decoration-[#AEA8FE] decoration-[0.09375rem] underline-offset-[0.18em]">
                4+ years
              </span>
              <br />
              experience. Ensure that high-load services are{' '}
              <span className="whitespace-nowrap">user-friendly</span> and valuable for business.
            </h1>
          </Reveal>
          <div className="relative z-0">
            <motion.div
              className="relative z-0 mx-auto -mt-8 w-[min(100%,18rem)] md:absolute md:top-[-9rem] md:right-0 md:z-0 md:mx-0 md:mt-0 md:h-[28rem] md:w-[21rem] 2xl:top-[-10.5rem] 2xl:right-[8rem]"
              initial={{ opacity: 0, y: 96, clipPath: 'inset(22% 22% 22% 22%)' }}
              whileInView={{ opacity: 0.9, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.25, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-auto w-full overflow-hidden bg-[#4A45A8] md:h-full">
                <Parallax offset={88} className="aspect-[3/4] w-full md:h-full md:aspect-auto">
                  <motion.img
                    src={withBase('/images/portrait.jpg')}
                    alt={site.name}
                    className="absolute inset-0 h-full w-full origin-center object-cover object-top"
                    initial={{ scale: 1.32 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.85, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Parallax>
              </div>
            </motion.div>
            <div aria-hidden="true" className="hidden md:block md:h-[19rem] 2xl:h-[17.5rem]" />
            <Reveal className="relative z-10 mt-12 md:absolute md:bottom-0 md:left-0 md:mt-0 md:max-w-[39.25rem]">
              <dl className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1.375rem] text-[0.9375rem]">
                <Meta label="Role" value={site.role} />
                <Meta label="Focus" value="Product UX/UI, Design Systems" />
                <Meta label="Languages" value="RU / BE / EN" />
                <Meta label="Based" value={site.location} />
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[89.5rem]">
          <Reveal className="mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
              Portfolio
            </h2>
          </Reveal>
          <WorkGrid />
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[89.5rem]">
          <Reveal>
            <h2 className="mb-10 text-center font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em] max-md:text-left md:mb-16">
              What I do
            </h2>
          </Reveal>
          <ul className="grid border-t border-[var(--color-border)] md:grid-cols-3">
            {services.map((item) => (
              <Reveal
                key={item.n}
                className="border-b border-[var(--color-border)] md:[&:not(:nth-child(3n))]:border-r md:[&:not(:nth-child(3n))]:border-[var(--color-border)]"
              >
                <li className="py-6 md:p-8">
                  <span className="text-[11px] text-[var(--color-text-muted)]">{item.n}</span>
                  <h3 className="mt-5 font-serif text-[26px] leading-tight font-light md:mt-8 md:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-[var(--color-text-muted)] md:mt-6 md:max-w-[34ch]">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-b border-[var(--color-border)] py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[28ch]">
                <span className="text-gradient">Have a project in mind? Let’s talk.</span>
              </p>
              <a
                data-cursor="pointer"
                className="btn-glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] leading-none"
                href={withBase('/contact')}
              >
                Get in touch
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7h8" />
                  <path d="M7.5 3.5L11 7L7.5 10.5" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <EmailCta />
    </main>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
        {label}
      </dt>
      <dd className="mt-[0.375rem]">{value}</dd>
    </div>
  )
}

export function EmailCta() {
  const [local, domain] = site.email.split('@')
  return (
    <section className="px-5 pt-16 pb-12 md:px-10 md:pt-32 md:pb-16">
      <div className="mx-auto w-full max-w-[89.5rem] [container-type:inline-size]">
        <Reveal>
          <p className="mb-6 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase md:mb-8">
            Let’s work together
          </p>
        </Reveal>
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            data-cursor="link"
            className="group relative inline-block max-w-full font-serif text-[length:min(128px,calc(100cqi/11.85))] leading-[1.05] font-light tracking-[-0.04em]"
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
      </div>
    </section>
  )
}
