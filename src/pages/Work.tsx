import { Reveal } from '../components/Reveal'
import { WorkGrid } from '../components/WorkGrid'
import { EmailCta } from './Home'

export function WorkPage() {
  return (
    <main>
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-32">
        <div className="mx-auto max-w-[89.5rem]">
          <Reveal className="mb-12 md:mb-16">
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.05] font-light tracking-[-0.04em]">
              Portfolio
            </h1>
          </Reveal>
          <WorkGrid />
        </div>
      </section>
      <EmailCta />
    </main>
  )
}
