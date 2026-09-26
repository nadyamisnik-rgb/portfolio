import { CasePager } from '../components/CasePager'
import { IgamingBack } from '../components/IgamingBack'
import { Reveal } from '../components/Reveal'
import { withBase } from '../lib/base'
import { igamingConcepts, pokerTablePage as copy, type IgamingConcept } from '../lib/content'
import { EmailCta } from './Home'

const palette = [
  '#075D46',
  '#16936B',
  'radial-gradient(circle at 30% 18%, #FFF4C2 0%, #F5C84C 46%, #B8891A 100%)',
  '#D1AE62',
  '#F2DEAA',
]

const goldBorder =
  'linear-gradient(#081412, #081412) padding-box, linear-gradient(138deg, #F5E7B0 0%, #C39A45 35%, #EFD98A 65%, #9E7A36 100%) border-box'

export function PokerTablePage({ concept }: { concept: IgamingConcept }) {
  const index = igamingConcepts.findIndex((item) => item.slug === concept.slug)
  const prev =
    index >= 0 ? igamingConcepts[(index - 1 + igamingConcepts.length) % igamingConcepts.length] : null
  const next = index >= 0 ? igamingConcepts[(index + 1) % igamingConcepts.length] : null

  return (
    <main className="font-igaming relative overflow-hidden bg-[#020F10] text-[#F6F4E9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(100vw,1080px)]"
      >
        <img
          src={withBase('/images/projects/igaming/poker/hero-bg.jpg')}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#020F10_0%,transparent_35%),linear-gradient(-8deg,transparent_50%,#0A1A13_100%)]" />
      </div>

      <section className="relative px-5 pt-[110px] pb-16 md:px-10 md:pt-[8.75rem] lg:px-[4.5rem] lg:pb-24">
        <IgamingBack className="absolute top-[110px] left-0 z-20 md:top-[8.75rem]" />
        <div className="mx-auto grid max-w-[91rem] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16">
          <Reveal className="relative z-10 text-center lg:text-left">
            <div
              className="mx-auto mb-5 inline-flex rounded-md px-3 py-1 text-[13px] font-semibold tracking-[0.075em] text-[#FFFBE2] uppercase md:text-[20px] lg:mx-0"
              style={{
                border: '1px solid transparent',
                background:
                  'radial-gradient(circle at 50% -40%, #00DDA7 0%, #023D25 100%) padding-box, linear-gradient(138deg, #F5E7B0 0%, #C39A45 35%, #EFD98A 65%, #9E7A36 100%) border-box',
              }}
            >
              {copy.kicker}
            </div>
            <h1
              className="font-unbounded text-[clamp(56px,9vw,100px)] leading-[0.95] font-black uppercase"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #FFF4C2 0%, #F5C84C 46%, #B8891A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Poker
              <br />
              table
            </h1>
            <span
              aria-hidden="true"
              className="mx-auto mt-2 block h-1 w-[min(100%,461px)] rounded-sm bg-[linear-gradient(138deg,#F5E7B0_0%,#C39A45_35%,#EFD98A_65%,#9E7A36_100%)] lg:mx-0"
            />
            <div
              className="mx-auto mt-8 w-full max-w-[476px] rounded-xl border border-transparent p-5 lg:mx-0"
              style={{ background: goldBorder }}
            >
              <p className="text-[16px] leading-6 text-[#E9E7DF] md:text-[18px] md:leading-[1.45]">
                {copy.intro}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[6%] left-[12%] h-[220px] w-[240px] rounded-full opacity-50 blur-[65px] md:h-[351px] md:w-[337px]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(54,255,198,0.6) 0%, rgba(255,233,163,0.49) 40%, rgba(255,206,0,0.49) 100%)',
              }}
            />
            <div className="relative mx-auto w-full max-w-[360px]">
              <img
                src={withBase('/images/projects/igaming/poker/coin.webp')}
                alt=""
                className="pointer-events-none absolute top-[7.5%] left-[85%] z-0 w-[62%] opacity-75 blur-[11px] select-none"
              />
              <img
                src={withBase('/images/projects/igaming/poker/coin.webp')}
                alt=""
                className="pointer-events-none absolute top-[19%] left-[77%] z-0 w-[57%] blur-[5px] select-none"
              />
              <div className="relative z-10">
                <Phone
                  src="/images/projects/igaming/poker/home.webp"
                  alt="Poker table home screen"
                  height={857}
                  cta="Sign Up"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-16">
        <img
          src={withBase('/images/projects/igaming/poker/mid-bg.jpg')}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#020F10_0%,transparent_35%,transparent_70%,#020F10_100%)]" />
        <div className="relative mx-auto grid max-w-[91rem] items-center gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="order-1 lg:order-2 lg:max-w-[345px] lg:justify-self-end">
            <Caption>{copy.color}</Caption>
          </Reveal>
          <Reveal delay={0.06} className="order-2 lg:order-1">
            <Phone
              src="/images/projects/igaming/poker/lobby.webp"
              alt="Poker table casino lobby"
              height={861}
              cta="Deposit"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-10 lg:px-[4.5rem] lg:py-16">
        <div className="mx-auto grid max-w-[91rem] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)]">
          <Reveal className="lg:max-w-[407px]">
            <Caption>{copy.character}</Caption>
          </Reveal>
          <div className="flex items-start">
            <Reveal delay={0.04} className="relative z-10 w-[55%] shrink-0">
              <Phone
                src="/images/projects/igaming/poker/bonuses.webp"
                alt="Poker table bonuses"
                height={745}
                cta="Deposit"
              />
            </Reveal>
            <Reveal delay={0.08} className="relative z-0 -ml-[10%] mt-[2.6%] w-[55%] shrink-0">
              <Phone
                src="/images/projects/igaming/poker/bonuses-modal.webp"
                alt="Poker table bonus details"
                height={788}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 pt-10 pb-20 md:px-10 lg:px-[4.5rem] lg:pt-16 lg:pb-28">
        <img
          src={withBase('/images/projects/igaming/poker/bottom-bg.jpg')}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#020F10_0%,transparent_30%,transparent_75%,#020F10_100%)]" />
        <div className="relative mx-auto grid max-w-[91rem] items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,438px)]">
          <Reveal className="order-1 lg:order-2">
            <Caption>{copy.mascot}</Caption>
          </Reveal>
          <Reveal delay={0.06} className="relative order-2 mx-auto w-full max-w-[30.3rem] lg:order-1 lg:mx-0">
            <div className="relative z-10 ml-auto w-[74%]">
              <Phone
                src="/images/projects/igaming/poker/profile.webp"
                alt="Poker table profile"
                height={780}
                cta="Deposit"
              />
            </div>
            <img
              src={withBase('/images/projects/igaming/poker/mascot.webp')}
              alt=""
              className="pointer-events-none absolute bottom-0 left-0 z-20 w-[66%] select-none"
            />
          </Reveal>
          <Reveal delay={0.1} className="order-3 mx-auto w-full max-w-[30.3rem] lg:mx-0">
            <div
              className="rounded-xl border border-transparent p-5"
              style={{
                background:
                  'linear-gradient(#020F10, #020F10) padding-box, linear-gradient(138deg, rgba(209,174,98,0.25), rgba(209,174,98,0.25)) border-box',
              }}
            >
              <p className="mb-4 text-center text-[16px] leading-6 text-[#B9C2BB] md:text-[18px]">
                {copy.paletteLabel}
              </p>
              <div className="flex gap-1.5">
                {palette.map((swatch) => (
                  <span
                    key={swatch}
                    className="h-10 min-w-0 flex-1 rounded-lg"
                    style={{ background: swatch }}
                  />
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

function Phone({
  src,
  alt,
  height,
  cta,
}: {
  src: string
  alt: string
  height: number
  cta?: 'Sign Up' | 'Deposit'
}) {
  return (
    <div className="mx-auto w-full max-w-[360px] [container-type:inline-size]">
      <div className="relative w-full" style={{ aspectRatio: `360 / ${height}` }}>
        <div
          className="absolute inset-0 z-[2] overflow-hidden"
          style={{ borderRadius: 'calc(20 / 360 * 100cqi)' }}
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
            <span className="poker-stroke">
              <span aria-hidden="true" className="poker-stroke-bloom" />
              <span aria-hidden="true" className="poker-stroke-ring" />
              <span className="poker-stroke-label">
                <span className="poker-stroke-text">{cta}</span>
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <div className="rounded-xl border border-transparent p-4 md:p-5" style={{ background: goldBorder }}>
      <p className="text-[16px] leading-6 text-[#B9C2BB] md:text-[18px]">{children}</p>
    </div>
  )
}
