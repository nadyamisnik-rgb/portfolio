import { type ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { CasePager } from '../components/CasePager'
import { EmailCta } from './Home'
import { IgamingPage } from './Igaming'
import { NotFoundPage } from './NotFound'
import { withBase } from '../lib/base'
import { isGalleryCompare, type Project, projects } from '../lib/content'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  if (project.layout === 'igaming') {
    return <IgamingPage key={project.slug} project={project} />
  }

  return <ProjectView key={project.slug} project={project} />
}

function ProjectView({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = index >= 0 ? projects[(index - 1 + projects.length) % projects.length] : null
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  return (
    <main>
      <section className="pt-20 md:pt-[4.75rem]">
        {project.gallery.map((item, index) =>
          isGalleryCompare(item) ? (
            <GalleryFrame key={`${item.before}-${item.after}`} fill={index === 0}>
              <BeforeAfter
                before={withBase(item.before)}
                after={withBase(item.after)}
                alt={project.title}
              />
            </GalleryFrame>
          ) : (
            <GalleryFrame key={item} fill={index === 0}>
              <img
                src={withBase(item)}
                alt={`${project.title} ${index + 1}`}
                className="block h-auto w-full opacity-0 transition-opacity duration-500 data-[loaded=true]:opacity-100"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
            </GalleryFrame>
          ),
        )}
      </section>
      <CasePager
        prev={prev ? { href: `/work/${prev.slug}`, title: prev.title } : null}
        next={next ? { href: `/work/${next.slug}`, title: next.title } : null}
      />
      <EmailCta />
    </main>
  )
}

function GalleryFrame({
  children,
  fill,
}: {
  children: ReactNode
  fill?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const img = ref.current?.querySelector('img')
    if (!img) return
    const done = () => {
      img.dataset.loaded = 'true'
      setLoaded(true)
    }
    if (img.complete) {
      done()
      return
    }
    img.addEventListener('load', done)
    img.addEventListener('error', done)
    return () => {
      img.removeEventListener('load', done)
      img.removeEventListener('error', done)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative w-full ${loaded ? '' : `img-skeleton ${fill ? 'min-h-[100svh]' : 'min-h-[56vh]'}`}`}
    >
      {children}
    </div>
  )
}
