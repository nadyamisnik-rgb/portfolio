import { Reveal } from '../components/Reveal'
import { EmailCta } from './Home'
import { education, experience, skills, site } from '../lib/content'

export function AboutPage() {
  return (
    <main>
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="mx-auto max-w-[89.5rem]">
          <Reveal>
            <h1 className="max-w-[22ch] font-serif text-[clamp(36px,5.2vw,64px)] leading-[1.08] font-light tracking-[-0.04em]">
              I design interfaces that hold business goals and user needs in the same frame.
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-7">
              <div className="space-y-6 text-[16px] leading-[1.65] text-[var(--color-text-soft)] md:text-[17px]">
                <p>
                  I’m Nadya, a UX/UI designer based in Minsk. Most of my work sits in dashboards,
                  websites and landing pages — products where the interface has to work hard, not just
                  look finished.
                </p>
                <p>
                  I plan adaptive layouts that stay consistent across devices, and I care about the
                  boring parts: structure, states, admin flows, handoff. An art background —
                  composition, illustration, branding — is a solid foundation, and I apply it to every
                  project.
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5 md:pt-1">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-[15px]">
                <Item label="Role" value={site.role} />
                <Item label="Experience" value="4+ years" />
                <Item label="Languages" value="RU / BE / EN" />
                <Item label="Based" value={site.location} />
              </dl>
              <a
                data-cursor="pointer"
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass mt-10 inline-flex h-11 items-center rounded-full px-5 text-[14px]"
              >
                Download CV
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[89.5rem]">
          <Reveal className="mb-10 md:mb-14">
            <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
              Experience
            </h2>
          </Reveal>
          <div className="border-t border-[var(--color-border)]">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <article className="grid gap-6 border-b border-[var(--color-border)] py-10 md:grid-cols-12 md:gap-10 md:py-14">
                  <div className="md:col-span-4">
                    <h3 className="text-[19px]">{job.company}</h3>
                    <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">{job.role}</p>
                    <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">{job.period}</p>
                  </div>
                  <div className="space-y-4 text-[15px] leading-[1.6] text-[var(--color-text-muted)] md:col-span-8 md:max-w-[58ch]">
                    {job.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[89.5rem]">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <Reveal className="mb-8">
                <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-light tracking-[-0.03em]">
                  Education
                </h2>
              </Reveal>
              <div className="border-t border-[var(--color-border)]">
                {education.map((item) => (
                  <Reveal key={item.title + item.period}>
                    <div className="flex items-baseline justify-between gap-6 border-b border-[var(--color-border)] py-5">
                      <div>
                        <p className="text-[16px]">{item.title}</p>
                        <p className="mt-1 text-[14px] text-[var(--color-text-muted)]">{item.place}</p>
                      </div>
                      <p className="shrink-0 text-[13px] text-[var(--color-text-muted)]">{item.period}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal className="mb-8">
                <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-light tracking-[-0.03em]">
                  Skills
                </h2>
              </Reveal>
              <div className="space-y-8">
                {skills.map((group) => (
                  <Reveal key={group.label}>
                    <p className="mb-3 text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
                      {group.label}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[13px] text-[var(--color-text-muted)]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailCta />
    </main>
  )
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
        {label}
      </dt>
      <dd className="mt-[0.375rem]">{value}</dd>
    </div>
  )
}
