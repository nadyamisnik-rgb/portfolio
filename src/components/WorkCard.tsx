import type { Project } from '../lib/content'
import { withBase } from '../lib/base'
import { Parallax } from './ParallaxImage'

type WorkCardItem = Pick<Project, 'title' | 'summary' | 'image' | 'imageAlt'> & {
  slug?: string
}

export function WorkCard({
  project,
  href,
  external = false,
  aspectClass = 'aspect-[3/2]',
  fill = false,
  imageClassName,
  caption = true,
}: {
  project: WorkCardItem
  href?: string
  external?: boolean
  aspectClass?: string
  fill?: boolean
  imageClassName?: string
  caption?: boolean
}) {
  return (
    <figure
      data-cursor="card"
      className={`group ${fill ? 'md:flex md:h-full md:min-h-0 md:flex-col' : ''}`}
    >
      <a
        className={`block ${fill ? 'md:flex md:h-full md:min-h-0 md:flex-col' : ''}`}
        href={href ?? withBase(`/work/${project.slug}`)}
        aria-label={caption ? undefined : project.title}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <div className={`overflow-hidden ${fill ? 'md:min-h-0 md:flex-1' : ''}`}>
          <Parallax
            offset={40}
            className={fill ? 'aspect-[3/2] w-full md:h-full md:aspect-auto' : `${aspectClass} w-full`}
          >
            <img
              src={withBase(project.image)}
              alt={caption ? project.imageAlt : ''}
              className={`absolute inset-0 h-full w-full object-cover ${imageClassName ?? ''}`}
            />
          </Parallax>
        </div>
        {caption ? (
          <figcaption className="mt-6">
            <span className="text-[19px]">{project.title}</span>
            <span className="mt-1 block text-[15px] leading-[1.5] text-[var(--color-text-muted)] md:max-w-[40ch]">
              {project.summary}
            </span>
          </figcaption>
        ) : null}
      </a>
    </figure>
  )
}
