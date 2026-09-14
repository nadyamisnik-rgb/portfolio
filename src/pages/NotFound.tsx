import { Reveal } from '../components/Reveal'

export function NotFoundPage() {
  return (
    <main>
      <section className="flex min-h-[100svh] flex-col px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem]">
        <div className="mx-auto flex w-full max-w-[89.5rem] flex-1 flex-col">
          <Reveal>
            <p className="mb-6 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase md:mb-8">
              404
            </p>
          </Reveal>
          <Reveal>
            <h1 className="font-serif text-[clamp(40px,6.4vw,6rem)] leading-[1.1] font-light tracking-[-0.03em]">
              This page doesn’t exist.
            </h1>
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap items-center gap-3 md:mt-16">
            <a
              data-cursor="pointer"
              className="btn-glass inline-flex h-12 items-center rounded-full px-6 text-[15px] leading-none"
              href="/"
            >
              Back home
            </a>
            <a
              data-cursor="pointer"
              className="inline-flex h-12 items-center px-2 text-[15px] text-[var(--color-text-muted)] transition-opacity hover:opacity-80"
              href="/work"
            >
              Work
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
