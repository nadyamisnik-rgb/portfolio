import { useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { withBase } from '../lib/base'
import {
  igamingConcepts,
  igamingPage as copy,
  projects,
  type IgamingConcept,
  type Project,
} from '../lib/content'
import { CasePager } from '../components/CasePager'
import { EmailCta } from './Home'
import { NotFoundPage } from './NotFound'
import { PalmPage } from './Palm'
import { PokerTablePage } from './PokerTable'
import { RioPage } from './Rio'

export function IgamingPage({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = index >= 0 ? projects[(index - 1 + projects.length) % projects.length] : null
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  return (
    <main className="font-igaming relative bg-[#031413] text-[#F6F4E9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[180px] left-[-120px] h-[560px] w-[606px] rounded-full bg-[rgba(11,190,123,0.14)] blur-[145px]"
      />

      <section className="relative px-5 pt-[110px] pb-8 md:px-10 lg:px-[4.5rem] lg:pb-[33px]">
        <div className="mx-auto flex max-w-[91rem] flex-col gap-10 lg:flex-row lg:items-end lg:gap-20">
          <Reveal className="min-w-0 flex-1">
            <p className="mb-[22px] text-[13px] font-bold tracking-[0.18em] text-[#E6C36A] uppercase">
              {copy.kicker}
            </p>
            <h1 className="text-[clamp(40px,6.3vw,101px)] leading-[0.98] font-extrabold tracking-[-0.04em]">
              {copy.headline[0]}
              <br />
              {copy.headline[1]}
            </h1>
            <p className="mt-[22px] max-w-[850px] text-[clamp(16px,1.4vw,22px)] leading-[1.45] text-[#9FB2AA]">
              {copy.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="w-full shrink-0 lg:w-[363px]">
            <div className="relative rounded-xl bg-[#00755A]/10 p-5 text-left lg:text-right">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl"
                style={{
                  padding: 1,
                  background: 'linear-gradient(164deg, #53D590 0%, #175B3D 100%)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
              />
              <p className="text-[12px] font-bold tracking-[0.12em] text-[#20D18A] uppercase">
                {copy.taskLabel}
              </p>
              <p className="mt-2.5 text-[16px] leading-[1.55] text-[#F6F4E9]">{copy.task}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-16 md:px-10 lg:px-[4.5rem] lg:py-20">
        <div className="mx-auto max-w-[91rem]">
          <Reveal className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[clamp(26px,2.4vw,34px)] font-bold">{copy.strategyTitle}</h2>
            </div>
            <p className="max-w-[40ch] text-[14px] leading-[1.5] text-[#9FB2AA] lg:text-right">
              {copy.strategyCaption}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,439px)_1fr]">
            <Reveal>
              <StrategyBlock label={copy.introLabel} body={[copy.intro]} />
            </Reveal>
            <Reveal delay={0.06}>
              <StrategyBlock label={copy.approvalLabel} body={copy.approval} />
            </Reveal>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_minmax(0,437px)]">
            <Reveal>
              <StrategyBlock label={copy.roleLabel} body={copy.role} />
            </Reveal>
            <Reveal delay={0.06}>
              <StrategyBlock label={copy.accentLabel} body={[copy.accent]} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-8 md:px-10 lg:px-[4.5rem]">
        <Reveal className="mx-auto flex max-w-[91rem] items-center gap-6 pt-7">
          <span aria-hidden="true" className="h-0.5 w-24 shrink-0 bg-[#E6C36A]" />
          <p className="text-[clamp(16px,1.4vw,20px)] leading-[1.45] font-semibold">{copy.conclusion}</p>
        </Reveal>
      </section>

      <section className="relative px-5 py-16 md:px-10 lg:px-[4.5rem] lg:py-[113px]">
        <div className="mx-auto max-w-[91rem]">
          <Reveal className="mb-[26px] flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold tracking-[0.14em] text-[#20D18A] uppercase">
                {copy.conceptsKicker}
              </p>
              <h2 className="mt-2 text-[clamp(26px,2.4vw,34px)] font-bold">{copy.conceptsTitle}</h2>
            </div>
            <p className="max-w-[34ch] text-[14px] leading-[1.5] text-[#9FB2AA] lg:text-right">
              {copy.conceptsCaption}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {igamingConcepts.map((concept, i) => (
              <Reveal key={concept.slug} delay={i * 0.06}>
                <ConceptCard concept={concept} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CasePager
        prev={prev ? { href: `/work/${prev.slug}`, title: prev.title } : null}
        next={next ? { href: `/work/${next.slug}`, title: next.title } : null}
      />
      <EmailCta />
    </main>
  )
}

export function IgamingConceptPage() {
  const { slug, concept } = useParams()
  if (slug !== 'igaming') return <NotFoundPage />
  const item = igamingConcepts.find((c) => c.slug === concept)
  if (!item) return <NotFoundPage />
  if (item.slug === 'rio') return <RioPage concept={item} />
  if (item.slug === 'poker-table') return <PokerTablePage concept={item} />
  if (item.slug === 'palm') return <PalmPage concept={item} />

  return (
    <main className="font-igaming relative min-h-[100svh] bg-[#031413] text-[#F6F4E9]">
      <section className="flex min-h-[100svh] flex-col px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem]">
        <div className="mx-auto flex w-full max-w-[89.5rem] flex-1 flex-col">
          <Reveal>
            <p
              className="mb-6 text-[12px] font-bold tracking-[0.12em] uppercase md:mb-8"
              style={{ color: item.accent }}
            >
              {item.n}
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-[clamp(40px,6.4vw,6rem)] leading-[1.05] font-extrabold tracking-[-0.04em]">
              {item.title}
            </h1>
          </Reveal>
          <Reveal className="mt-12 md:mt-16">
            <a
              data-cursor="pointer"
              className="inline-flex h-12 items-center text-[15px] text-[#9FB2AA] transition-opacity hover:text-[#F6F4E9] hover:opacity-100"
              href={withBase('/work/igaming')}
            >
              ← Back
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

function ConceptCard({ concept }: { concept: IgamingConcept }) {
  return (
    <a
      data-cursor="card"
      href={withBase(`/work/igaming/${concept.slug}`)}
      aria-label={concept.title}
      className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[24px] p-[26px] shadow-[0_18px_48px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out hover:-translate-y-1"
    >
      <img
        src={withBase(concept.image)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#031413]/90 via-[#031413]/45 to-transparent"
      />
      <div className="relative flex items-center justify-between">
        <span className="text-[12px] font-bold tracking-[0.12em]" style={{ color: concept.accent }}>
          {concept.n}
        </span>
        <span className="flex gap-[5px]">
          {concept.swatches.map((swatch) => (
            <span
              key={swatch}
              className="h-[5px] w-[22px] rounded-full"
              style={{ background: swatch }}
            />
          ))}
        </span>
      </div>
      <div className="relative flex flex-col gap-[14px]">
        <h3 className="text-[clamp(24px,2vw,30px)] leading-none font-extrabold tracking-[-0.02em]">
          {concept.title}
        </h3>
        <span className="h-0.5 w-[72px]" style={{ background: concept.accent }} />
        <p className="text-[14px] leading-[1.55] text-[#D5E0DB]">{concept.text}</p>
      </div>
    </a>
  )
}

function StrategyBlock({ label, body }: { label: string; body: string[] }) {
  return (
    <div className="flex h-full flex-col gap-3.5 rounded-[18px] border border-white/[0.08] bg-[#081D1B] p-7">
      <p className="text-[12px] font-bold tracking-[0.12em] text-[#20D18A] uppercase">{label}</p>
      {body.map((paragraph) => (
        <p key={paragraph} className="text-[15px] leading-[1.55] text-[#F6F4E9]">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

