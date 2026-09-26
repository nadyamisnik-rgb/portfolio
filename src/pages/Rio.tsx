import { type CSSProperties, type ReactNode } from 'react'
import { CasePager } from '../components/CasePager'
import { IgamingBack } from '../components/IgamingBack'
import { Reveal } from '../components/Reveal'
import { withBase } from '../lib/base'
import { igamingConcepts, rioPage as copy, type IgamingConcept } from '../lib/content'
import { EmailCta } from './Home'

const palette = [
  ['#015D48', '#007245', 'linear-gradient(164deg, #0E794B 0%, #8AFFC1 100%)'],
  ['#F7A809', '#FFDB8D', '#FFFBE2'],
  ['#121313', '#1C1E1E', '#F7F8F8'],
]

const HERO = [806.5, 854] as const
const PROFILE = [590.65, 825.93] as const

export function RioPage({ concept }: { concept: IgamingConcept }) {
  const index = igamingConcepts.findIndex((item) => item.slug === concept.slug)
  const prev =
    index >= 0 ? igamingConcepts[(index - 1 + igamingConcepts.length) % igamingConcepts.length] : null
  const next = index >= 0 ? igamingConcepts[(index + 1) % igamingConcepts.length] : null

  return (
    <main className="font-igaming relative overflow-hidden bg-[#0A1A13] text-[#F6F4E9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#00CD33_0%,#8AFFA7_50%,#F7A809_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-[-12%] h-[min(90vw,980px)] w-[min(90vw,980px)] opacity-[0.18] blur-[7px]"
      >
        <img src={withBase('/images/projects/igaming/rio/leaves.webp')} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[-18%] h-[min(80vw,860px)] w-[min(80vw,860px)] opacity-[0.18] blur-[5px]"
      >
        <img src={withBase('/images/projects/igaming/rio/leaves.webp')} alt="" className="h-full w-full object-cover" />
      </div>

      <section className="relative px-5 pt-[110px] pb-16 md:px-10 md:pt-[8.75rem] lg:px-[4.5rem] lg:pb-24">
        <IgamingBack className="absolute top-[110px] left-0 z-20 md:top-[8.75rem]" />
        <div className="mx-auto grid max-w-[91rem] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,807px)] lg:gap-8">
          <Reveal className="relative z-10 text-center lg:text-left">
            <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
              <span className="rounded-md bg-[linear-gradient(164deg,#53D590_0%,#175B3D_100%)] px-3 py-1 text-[13px] font-semibold tracking-[0.075em] text-[#FFFBE2] uppercase md:text-[20px]">
                {copy.kicker}
              </span>
            </div>
            <h1
              className="font-onest text-[clamp(64px,12vw,120px)] leading-none font-extrabold uppercase"
              style={{
                background: 'linear-gradient(90deg, #FFFEF4 0%, #E8C459 35%, #FFF6D4 65%, #DE9100 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                filter: 'drop-shadow(0 1px 10px rgba(247,168,9,0.4)) drop-shadow(0 0 10px rgba(0,205,51,0.25))',
              }}
            >
              {copy.title}
            </h1>
            <span
              aria-hidden="true"
              className="mx-auto mt-2 block h-1 w-[min(100%,263px)] rounded-sm bg-[linear-gradient(90deg,#F7A809_0%,#FFF122_50%,#23B647_100%)] lg:mx-0"
            />
            <div
              className="mx-auto mt-8 w-full max-w-[476px] rounded-xl border border-transparent p-5 lg:mx-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,117,90,0.16), rgba(1,95,14,0.06)) padding-box, linear-gradient(90deg, rgba(138,255,167,0.25), rgba(247,168,9,0.13)) border-box',
              }}
            >
              <p className="text-[16px] leading-6 text-[#E5E2D1] md:text-[20px] md:leading-6">
                {copy.introBefore}
                <span
                  className="font-bold"
                  style={{
                    background: 'linear-gradient(180deg, #FFA23E 55%, #FFFA67 100%)',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {copy.introMascot}
                </span>
                {copy.introAfter}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-w-0">
            <FigmaGroup size={HERO}>
              <FigmaSlot
                group={HERO}
                box={[104.69, 0, 329.73, 351.5]}
                className="pointer-events-none rounded-full opacity-50 blur-[65px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,251,234,0.49) 0%, rgba(255,233,163,0.49) 25%, rgba(255,206,0,0.49) 67%, rgba(255,211,110,0.49) 100%)',
                }}
              />
              <FigmaSlot group={HERO} box={[0, 49.5, 360, 785]} className="z-10">
                <Phone
                  fill
                  src="/images/projects/igaming/rio/home.webp"
                  alt="RIO home screen"
                  height={785}
                  glow="0 0 47px rgba(15,175,60,0.5)"
                  cta="Sign Up"
                />
              </FigmaSlot>
              <FigmaSlot group={HERO} box={[338, 286.5, 468.5, 567.5]} className="pointer-events-none z-20">
                <img
                  src={withBase('/images/projects/igaming/rio/toucan-hero.webp')}
                  alt=""
                  className="h-full w-full -scale-x-100 select-none object-contain"
                />
              </FigmaSlot>
            </FigmaGroup>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-16">
        <div className="mx-auto grid max-w-[91rem] items-center gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="order-2 lg:order-none">
            <Phone
              src="/images/projects/igaming/rio/casino.webp"
              alt="RIO casino lobby"
              height={858}
              glow="0 0 89px rgba(15,175,60,0.18)"
              cta="Deposit"
            />
          </Reveal>
          <Reveal delay={0.06} className="order-1 flex justify-center lg:order-none lg:justify-start">
            <Caption>{copy.color}</Caption>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-16">
        <div className="mx-auto grid max-w-[91rem] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)]">
          <Reveal className="flex justify-center lg:justify-start">
            <Caption>{copy.atmosphere}</Caption>
          </Reveal>
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
            <Reveal delay={0.04} className="sm:mt-16">
              <Phone
                src="/images/projects/igaming/rio/bonuses.webp"
                alt="RIO bonuses"
                height={867}
                glow="0 0 89px rgba(15,175,60,0.18)"
                cta="Deposit"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Phone
                src="/images/projects/igaming/rio/promo.webp"
                alt="RIO bonus details"
                height={842}
                glow="0 0 89px rgba(15,175,60,0.18)"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 pt-10 pb-20 md:px-10 lg:px-[4.5rem] lg:pt-16 lg:pb-28">
        <div className="mx-auto grid max-w-[91rem] items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,476px)]">
          <Reveal className="relative min-w-0">
            <FigmaGroup size={PROFILE} className="lg:mx-0">
              <FigmaSlot
                group={PROFILE}
                box={[250.65, 110, 324, 456]}
                className="pointer-events-none rounded-full bg-[rgba(255,188,54,0.45)] opacity-50 blur-[65px]"
              />
              <FigmaSlot group={PROFILE} box={[230.65, 0, 360, 760]} className="z-10">
                <Phone
                  fill
                  src="/images/projects/igaming/rio/profile.webp"
                  alt="RIO profile"
                  height={760}
                  glow="0 0 47px rgba(15,175,60,0.33)"
                  cta="Deposit"
                />
              </FigmaSlot>
              <FigmaSlot group={PROFILE} box={[0, 376.06, 355.65, 449.87]} className="pointer-events-none z-20">
                <img
                  src={withBase('/images/projects/igaming/rio/toucan-suit.webp')}
                  alt=""
                  className="h-full w-full -scale-x-100 select-none object-contain"
                />
              </FigmaSlot>
            </FigmaGroup>
          </Reveal>
          <Reveal delay={0.06} className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[476px] rounded-xl bg-[linear-gradient(180deg,rgba(0,117,90,0.16)_0%,rgba(1,95,14,0.06)_100%)] px-5 py-[22px]">
              <p className="mb-3 text-center text-[16px] leading-6 text-[#E5E2D1]">{copy.paletteLabel}</p>
              <div className="flex gap-1.5">
                {palette.map((column) => (
                  <div key={column.join()} className="flex min-h-[96px] flex-1 flex-col overflow-hidden rounded-lg">
                    {column.map((swatch, i) => (
                      <span
                        key={swatch}
                        className={`h-8 w-full ${i === 0 ? 'rounded-t-lg' : ''} ${i === 2 ? 'rounded-b-lg' : ''}`}
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

function FigmaGroup({
  size,
  className,
  children,
}: {
  size: readonly [number, number]
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`relative mx-auto w-full ${className ?? ''}`}
      style={{ maxWidth: size[0], aspectRatio: `${size[0]} / ${size[1]}` }}
    >
      {children}
    </div>
  )
}

function FigmaSlot({
  group,
  box,
  className,
  style,
  children,
}: {
  group: readonly [number, number]
  box: readonly [number, number, number, number]
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const [gw, gh] = group
  const [x, y, w, h] = box
  return (
    <div
      className={`absolute ${className ?? ''}`}
      style={{
        left: `${(x / gw) * 100}%`,
        top: `${(y / gh) * 100}%`,
        width: `${(w / gw) * 100}%`,
        height: `${(h / gh) * 100}%`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Phone({
  src,
  alt,
  height,
  glow,
  cta,
  fill,
}: {
  src: string
  alt: string
  height: number
  glow: string
  cta?: 'Sign Up' | 'Deposit'
  fill?: boolean
}) {
  return (
    <div
      className={
        fill
          ? 'relative h-full w-full [container-type:inline-size]'
          : 'relative mx-auto w-full max-w-[360px] [container-type:inline-size]'
      }
      style={fill ? undefined : { aspectRatio: `360 / ${height}` }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: 'calc(23 / 360 * 100cqi)', boxShadow: glow }}
      >
        <img src={withBase(src)} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      {cta && (
        <div
          className="pointer-events-none absolute z-10 origin-top-right"
          style={{
            top: `calc(10 / ${height} * 100%)`,
            right: 'calc(16 / 360 * 100%)',
            transform: 'scale(calc(100cqi / 360px))',
          }}
        >
          <span className="rio-stroke">
            <span aria-hidden="true" className="rio-stroke-bloom" />
            <span aria-hidden="true" className="rio-stroke-ring" />
            <span className="rio-stroke-label">
              <span className="rio-stroke-text">{cta}</span>
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <div
      className="mx-auto w-full max-w-[476px] rounded-xl border border-transparent p-5 text-center md:p-[22px] lg:mx-0 lg:text-left"
      style={{
        background:
          'linear-gradient(90deg, rgba(0,117,90,0.16), rgba(1,95,14,0.06)) padding-box, linear-gradient(90deg, rgba(138,255,167,0.25), rgba(247,168,9,0.13)) border-box',
      }}
    >
      <p className="text-[16px] leading-6 text-[#E5E2D1] md:text-[20px]">{children}</p>
    </div>
  )
}
