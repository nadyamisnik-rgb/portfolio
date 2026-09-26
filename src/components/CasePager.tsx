import { Reveal } from './Reveal'
import { withBase } from '../lib/base'

export type CasePagerItem = {
  href: string
  title: string
}

export function CasePager({
  prev,
  next,
}: {
  prev?: CasePagerItem | null
  next?: CasePagerItem | null
}) {
  if (!prev && !next) return null

  return (
    <section className="px-5 pb-16 md:px-10">
      <div className="mx-auto grid max-w-[89.5rem] grid-cols-1 gap-10 border-t border-[var(--color-border)] pt-12 md:grid-cols-2 md:gap-8">
        {prev && <PagerLink label="Previous" item={prev} />}
        {next && <PagerLink label="Next" item={next} align="right" />}
      </div>
    </section>
  )
}

function PagerLink({
  label,
  item,
  align,
}: {
  label: string
  item: CasePagerItem
  align?: 'right'
}) {
  return (
    <Reveal>
      <a
        data-cursor="link"
        href={withBase(item.href)}
        className={`group block max-w-[20rem] md:max-w-[28rem] ${align === 'right' ? 'md:ml-auto md:text-right' : ''}`}
      >
        <p className="mb-3 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">{label}</p>
        <span className="block font-serif text-[clamp(28px,4vw,48px)] leading-[1.1] font-light tracking-[-0.03em]">
          {item.title}
        </span>
      </a>
    </Reveal>
  )
}
