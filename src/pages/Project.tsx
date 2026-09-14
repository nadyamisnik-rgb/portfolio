import { useParams } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { Reveal } from '../components/Reveal'
import { EmailCta } from './Home'
import { NotFoundPage } from './NotFound'
import { withBase } from '../lib/base'
import { isGalleryCompare, projects } from '../lib/content'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const index = project ? projects.findIndex((p) => p.slug === project.slug) : -1
  const prev = index >= 0 ? projects[(index - 1 + projects.length) % projects.length] : null
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <main>
      <section className="pt-20 md:pt-[4.75rem]">
        {project.gallery.map((item, index) =>
          isGalleryCompare(item) ? (
            <BeforeAfter
              key={`${item.before}-${item.after}`}
              before={withBase(item.before)}
              after={withBase(item.after)}
              alt={project.title}
            />
          ) : (
            <img
              key={item}
              src={withBase(item)}
              alt={`${project.title} ${index + 1}`}
              className="block h-auto w-full"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ),
        )}
      </section>
      {(prev || next) && (
        <section className="px-5 pb-16 md:px-10">
          <div className="mx-auto grid max-w-[89.5rem] grid-cols-1 gap-10 border-t border-[var(--color-border)] pt-12 md:grid-cols-2 md:gap-8">
            {prev && (
              <Reveal>
                <a
                  data-cursor="link"
                  href={withBase(`/work/${prev.slug}`)}
                  className="group block max-w-[20rem] md:max-w-[28rem]"
                >
                  <p className="mb-3 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                    Previous
                  </p>
                  <span className="block font-serif text-[clamp(28px,4vw,48px)] leading-[1.1] font-light tracking-[-0.03em]">
                    {prev.title}
                  </span>
                </a>
              </Reveal>
            )}
            {next && (
              <Reveal>
                <a
                  data-cursor="link"
                  href={withBase(`/work/${next.slug}`)}
                  className="group block max-w-[20rem] md:ml-auto md:max-w-[28rem] md:text-right"
                >
                  <p className="mb-3 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                    Next
                  </p>
                  <span className="block font-serif text-[clamp(28px,4vw,48px)] leading-[1.1] font-light tracking-[-0.03em]">
                    {next.title}
                  </span>
                </a>
              </Reveal>
            )}
          </div>
        </section>
      )}
      <EmailCta />
    </main>
  )
}
