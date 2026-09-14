import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useParams } from 'react-router-dom'
import { BeforeAfter } from '../components/BeforeAfter'
import { Reveal } from '../components/Reveal'
import { EmailCta } from './Home'
import { NotFoundPage } from './NotFound'
import { withBase } from '../lib/base'
import { isGalleryCompare, type Project, projects } from '../lib/content'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  return <ProjectView key={project.slug} project={project} />
}

function ProjectView({ project }: { project: Project }) {
  const [heroReady, setHeroReady] = useState(false)
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = index >= 0 ? projects[(index - 1 + projects.length) % projects.length] : null
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  useEffect(() => {
    if (heroReady) return
    const id = window.setTimeout(() => setHeroReady(true), 8000)
    return () => window.clearTimeout(id)
  }, [heroReady])

  return (
    <main aria-busy={!heroReady}>
      <AnimatePresence>
        {!heroReady && <ProjectLoader title={project.title} />}
      </AnimatePresence>
      <section className="pt-20 md:pt-[4.75rem]">
        {project.gallery.map((item, index) =>
          isGalleryCompare(item) ? (
            <GalleryFrame
              key={`${item.before}-${item.after}`}
              fill={index === 0}
              onReady={index === 0 ? () => setHeroReady(true) : undefined}
            >
              <BeforeAfter
                before={withBase(item.before)}
                after={withBase(item.after)}
                alt={project.title}
              />
            </GalleryFrame>
          ) : (
            <GalleryFrame
              key={item}
              fill={index === 0}
              onReady={index === 0 ? () => setHeroReady(true) : undefined}
            >
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

function ProjectLoader({ title }: { title: string }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-[var(--color-bg)]"
    >
      <p className="mb-4 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
        Loading
      </p>
      <motion.p
        className="font-serif text-[clamp(32px,6vw,72px)] leading-[1.05] font-light tracking-[-0.04em]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {title}
      </motion.p>
    </motion.div>
  )
}

function GalleryFrame({
  children,
  fill,
  onReady,
}: {
  children: ReactNode
  fill?: boolean
  onReady?: () => void
}) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady

  useLayoutEffect(() => {
    const img = ref.current?.querySelector('img')
    if (!img) return
    const done = () => {
      img.dataset.loaded = 'true'
      setLoaded(true)
      onReadyRef.current?.()
    }
    if (img.complete && img.naturalWidth > 0) {
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
