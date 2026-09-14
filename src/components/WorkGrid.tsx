import { behanceProjects, projects, site } from '../lib/content'
import { Reveal } from './Reveal'
import { WorkCard } from './WorkCard'

function bySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function WorkGrid() {
  const hero = bySlug('flexiflow')
  const rightTop = bySlug('status')
  const rightBottom = bySlug('miscellaneous')
  const leftTop = bySlug('casino-platform')
  const leftBottom = bySlug('casino-ui-style')
  const rightLarge = bySlug('echo')
  if (!hero || !rightTop || !rightBottom || !leftTop || !leftBottom || !rightLarge) return null

  return (
    <div className="flex flex-col gap-y-14 md:gap-y-24">
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-8">
        <Reveal className="h-full md:col-span-8 md:row-span-2">
          <WorkCard project={hero} fill />
        </Reveal>
        <Reveal className="md:col-span-4">
          <WorkCard project={rightTop} aspectClass="aspect-[3/2]" />
        </Reveal>
        <Reveal className="md:col-span-4">
          <WorkCard project={rightBottom} aspectClass="aspect-[3/2]" />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-8">
        <Reveal className="order-1 md:col-span-4 md:col-start-1 md:row-start-1">
          <WorkCard project={leftTop} aspectClass="aspect-[3/2]" />
        </Reveal>
        <Reveal className="order-3 h-full md:order-2 md:col-span-8 md:col-start-5 md:row-span-2 md:row-start-1">
          <WorkCard project={rightLarge} fill />
        </Reveal>
        <Reveal className="order-2 md:order-3 md:col-span-4 md:col-start-1 md:row-start-2">
          <WorkCard project={leftBottom} aspectClass="aspect-[3/2]" />
        </Reveal>
      </div>

      <div>
        <Reveal className="mb-10 md:mb-12">
          <h3 className="font-serif text-[clamp(24px,2.8vw,40px)] leading-[1.1] font-light tracking-[-0.03em]">
            Additionally on{' '}
            <a
              href={site.behance}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-[0.3em] underline decoration-[#AEA8FE] decoration-[0.09375rem] underline-offset-[0.18em] transition-opacity hover:opacity-80"
            >
              Behance
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
                className="shrink-0"
              >
                <path d="M4 10L10.5 3.5" />
                <path d="M6 3.5h4.5V8" />
              </svg>
            </a>
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-8">
          {behanceProjects.map((project) => (
            <Reveal key={project.href}>
              <WorkCard
                project={project}
                href={project.href}
                external
                caption={false}
                aspectClass="aspect-[16/9]"
                imageClassName="object-top"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
