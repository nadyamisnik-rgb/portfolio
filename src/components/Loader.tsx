import { type ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { motion } from 'motion/react'
import { projects } from '../lib/content'
import { withBase } from '../lib/base'
import { curtainCoverMs, curtainUncoverMs, PageCurtain } from './PageCurtain'

const slides = projects.map((p) => withBase(p.image))

export function Loader({ children }: { children: ReactNode }) {
  const [seen, setSeen] = useState(false)

  useLayoutEffect(() => {
    if (document.documentElement.hasAttribute('data-loader-seen')) setSeen(true)
  }, [])

  return (
    <>
      {children}
      {!seen && <LoaderOverlay onFinished={() => setSeen(true)} />}
    </>
  )
}

function LoaderOverlay({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'cover' | 'uncover' | 'done'>('loading')
  const [progress, setProgress] = useState(0)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (phase === 'done') {
      document.body.style.overflow = ''
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'loading') return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / 2400))
      setProgress(Math.round(100 * t))
      if (t < 1) frame = requestAnimationFrame(tick)
      else window.setTimeout(() => setPhase('cover'), 180)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [phase])

  useEffect(() => {
    if (phase !== 'loading') return
    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % slides.length)
    }, 700)
    return () => window.clearInterval(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'cover') return
    const id = window.setTimeout(() => setPhase('uncover'), curtainCoverMs)
    return () => window.clearTimeout(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'uncover') return
    const id = window.setTimeout(() => {
      setPhase('done')
      onFinished()
    }, curtainUncoverMs)
    return () => window.clearTimeout(id)
  }, [phase, onFinished])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      data-site-loader=""
      className={`fixed inset-0 z-[9000] ${phase === 'loading' ? 'bg-[var(--color-bg)]' : 'bg-transparent'}`}
    >
      <motion.div
        animate={{ opacity: phase === 'loading' ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0"
      >
        {slides.map((src, i) => (
          <motion.div
            key={src}
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-[clamp(64px,14vw,160px)] leading-none font-light tracking-[-0.05em] text-white tabular-nums">
            {progress}%
          </span>
        </div>
      </motion.div>
      {phase !== 'loading' && (
        <PageCurtain
          phase={phase === 'cover' ? 'cover' : 'uncover'}
          className="pointer-events-none absolute inset-0 z-10 flex"
        />
      )}
    </div>
  )
}
