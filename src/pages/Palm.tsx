import type { CSSProperties } from 'react'
import { CasePager } from '../components/CasePager'
import { IgamingBack } from '../components/IgamingBack'
import { Reveal } from '../components/Reveal'
import { withBase } from '../lib/base'
import { igamingConcepts, palmPage as copy, type IgamingConcept } from '../lib/content'
import { EmailCta } from './Home'

const palette = [
  ['#053B3A', '#087A70', '#55E6C1'],
  ['#9A681B', '#D9AB4A', '#FFF1B8'],
  ['#031A1B', '#0A2929', '#E8EEE8'],
]

const goldText: CSSProperties = {
  background:
    'radial-gradient(circle at 35% 30%, #FFF4C2 0%, #FADE87 23%, #F5C84C 46%, #D7A933 73%, #B8891A 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  filter: 'drop-shadow(0 0 10.7px rgba(255,248,230,0.26))',
}

const card =
  'w-full rounded-xl border border-[#FFF4C2] bg-[rgba(5,18,29,0.82)] p-5 text-left'

export function PalmPage({ concept }: { concept: IgamingConcept }) {
  const index = igamingConcepts.findIndex((item) => item.slug === concept.slug)
  const prev =
    index >= 0 ? igamingConcepts[(index - 1 + igamingConcepts.length) % igamingConcepts.length] : null
  const next = index >= 0 ? igamingConcepts[(index + 1) % igamingConcepts.length] : null

  return (
    <main className="font-igaming relative overflow-hidden bg-[#05121D] text-[#F6F4E9]">
      <Leaves className="-top-16 -left-[22%] z-0 h-[780px] w-[min(78vw,860px)] opacity-50" />
      <Leaves className="top-[6%] -right-[28%] z-0 h-[920px] w-[min(88vw,980px)] opacity-55" />
      <Leaves className="top-[38%] -left-[30%] z-0 h-[820px] w-[min(80vw,900px)] opacity-40" />
      <Leaves className="top-[62%] -right-[24%] z-0 h-[860px] w-[min(84vw,940px)] opacity-45" />

      <section className="relative z-10 px-5 pt-[110px] pb-16 md:px-10 md:pt-[8.75rem] lg:px-[4.5rem] lg:pb-24">
        <IgamingBack className="absolute top-[110px] left-0 z-20 md:top-[8.75rem]" />
        <div className="mx-auto grid max-w-[91rem] items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-16">
          <Reveal className="relative z-10 text-center lg:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span
                className="rounded-md px-3 py-1 text-[13px] font-semibold tracking-[0.075em] text-[#042016] uppercase md:text-[20px] md:tracking-[1.5px]"
                style={{
                  background: 'linear-gradient(180deg, #3DD3A2 0%, #27BF8A 42%, #03A86F 100%)',
                }}
              >
                {copy.kicker}
              </span>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h1
                className="relative font-onest text-[clamp(64px,12vw,120px)] leading-none font-black uppercase"
                style={goldText}
              >
                {copy.title}
                <span className="palm-spark -top-2 -left-3 h-3.5 w-3.5" />
              </h1>
              <span
                aria-hidden="true"
                className="mt-2 block h-1 w-full rounded-sm bg-[linear-gradient(180deg,#4FF0BB_0%,#2EE6A6_42%,#12C98A_100%)]"
              />
            </div>
            <div className="mt-8">
              <Caption className="max-w-[533px]">{copy.intro}</Caption>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative mx-auto w-full max-w-[360px] lg:mx-0">
            <PhoneReel />
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-20">
        <div className="mx-auto flex max-w-[91rem] flex-col items-center gap-8">
          <Reveal className="w-full max-w-[387px]">
            <Caption className="max-w-[387px]">{copy.texture}</Caption>
          </Reveal>
          <Reveal className="w-full max-w-[360px]">
            <Screen src="/images/projects/igaming/palm/slots.webp" alt="PALM slots screen" />
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-20">
        <div className="mx-auto grid max-w-[91rem] items-center gap-10 lg:grid-cols-[minmax(0,428px)_minmax(0,1fr)] lg:gap-12">
          <Reveal className="flex justify-center lg:justify-start">
            <Caption className="max-w-[429px]">{copy.graphics}</Caption>
          </Reveal>
          <div className="relative isolate mx-auto w-full max-w-[661px]" style={{ aspectRatio: '661 / 877' }}>
            <div className="absolute top-0 z-0" style={{ left: '45.537%', width: '54.463%' }}>
              <Reveal delay={0.04}>
                <Screen
                  src="/images/projects/igaming/palm/bonuses-modal.webp"
                  alt="PALM My Bonuses screen"
                  className="relative w-full max-w-none"
                />
              </Reveal>
            </div>
            <div className="absolute z-10" style={{ left: 0, top: '8.78%', width: '54.463%' }}>
              <Reveal delay={0.08}>
                <Screen
                  src="/images/projects/igaming/palm/promo.webp"
                  alt="PALM promo screen"
                  className="relative w-full max-w-none"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-20">
        <div className="mx-auto max-w-[91rem]">
          <div className="mb-8 grid items-center gap-8 lg:mb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,516px)] lg:gap-10">
            <Reveal>
              <h2
                className="text-center font-onest text-[clamp(40px,7vw,120px)] leading-none font-black uppercase lg:text-left"
                style={goldText}
              >
                {copy.hybridTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="flex justify-center lg:justify-end">
              <Caption className="max-w-[516px]" textClassName="text-[16px] leading-[1.35] md:text-[18px]">
                {copy.hybrid}
              </Caption>
            </Reveal>
          </div>
          <div className="relative mx-auto w-full max-w-[661px]" style={{ aspectRatio: '661 / 877' }}>
            <div className="absolute top-0 z-0" style={{ left: '45.537%', width: '54.463%' }}>
              <Reveal delay={0.04}>
                <Screen
                  src="/images/projects/igaming/palm/hybrid-lobby-screen.webp"
                  alt="RIO mascot on the PALM lobby screen"
                  className="relative w-full max-w-none"
                />
              </Reveal>
            </div>
            <div className="absolute z-10" style={{ left: 0, top: '8.78%', width: '54.463%' }}>
              <Reveal delay={0.08}>
                <Screen
                  src="/images/projects/igaming/palm/hybrid-home-screen.webp"
                  alt="RIO mascot on the PALM home screen"
                  className="relative w-full max-w-none"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 pt-6 pb-20 md:px-10 lg:px-[4.5rem] lg:pt-10 lg:pb-28">
        <div className="mx-auto flex max-w-[91rem] justify-center">
          <Reveal className="w-full max-w-[438px]">
            <div className={card}>
              <p className="mb-2.5 text-center text-[18px] leading-[1.24] text-[#E5E2D1]">{copy.paletteLabel}</p>
              <div className="flex gap-1.5">
                {palette.map((column) => (
                  <div key={column.join()} className="flex min-h-[135px] flex-1 flex-col gap-1">
                    {column.map((swatch, i) => (
                      <span
                        key={swatch}
                        className={`h-[42px] w-full ${i === 0 ? 'rounded-t-lg' : ''} ${i === 2 ? 'rounded-b-lg' : ''}`}
                        style={{ background: swatch }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CasePager
        prev={
          prev && prev.slug !== concept.slug
            ? { href: `/work/igaming/${prev.slug}`, title: prev.title }
            : null
        }
        next={
          next && next.slug !== concept.slug
            ? { href: `/work/igaming/${next.slug}`, title: next.title }
            : null
        }
      />
      <EmailCta />
    </main>
  )
}

function PhoneReel() {
  return (
    <div className="palm-reel relative mx-auto w-full max-w-[360px] [container-type:inline-size]">
      <span className="palm-spark top-[8%] left-[4%]" />
      <span className="palm-spark top-[22%] right-[-2%] [animation-delay:0.7s]" />
      <span className="palm-spark bottom-[28%] left-[-4%] [animation-delay:1.3s]" />
      <span className="palm-spark right-[10%] bottom-[8%] [animation-delay:1.9s]" />
      <div className="relative w-full" style={{ aspectRatio: '360 / 800' }}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ borderRadius: 'calc(23 / 360 * 100cqi)', boxShadow: '0 0 47px rgba(85,230,193,0.28)' }}
        >
          <img
            src={withBase('/images/projects/igaming/palm/home.webp')}
            alt="PALM home screen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="palm-shine" />
        </div>
      </div>
    </div>
  )
}

function Screen({
  src,
  alt,
  className = 'relative mx-auto w-full max-w-[360px]',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`${className} [container-type:inline-size]`} style={{ aspectRatio: '360 / 800' }}>
      <div
        className="absolute inset-0 overflow-hidden bg-[#0c111c]"
        style={{ borderRadius: 'calc(23 / 360 * 100cqi)' }}
      >
        <img src={withBase(src)} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  )
}

function Caption({
  children,
  className = '',
  textClassName = 'text-[16px] leading-[1.25] md:text-[20px]',
}: {
  children: string
  className?: string
  textClassName?: string
}) {
  return (
    <div className={`${card} mx-auto lg:mx-0 ${className}`}>
      <p className={`${textClassName} text-[#E5E2D1]`}>{children}</p>
    </div>
  )
}

function Leaves({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute blur-[14px] ${className}`}
      style={{
        maskImage: 'radial-gradient(circle at 50% 45%, #000 0%, transparent 72%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 45%, #000 0%, transparent 72%)',
      }}
    >
      <img
        src={withBase('/images/projects/igaming/palm/leaves.webp')}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  )
}
