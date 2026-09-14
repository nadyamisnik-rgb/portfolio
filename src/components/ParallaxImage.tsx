import { type ReactNode, useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export function Parallax({
  children,
  className,
  offset = 40,
}: {
  children: ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  useLayoutEffect(() => {
    const img = ref.current?.querySelector('img')
    if (!img) return
    const done = () => {
      img.dataset.loaded = 'true'
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
    <div ref={ref} className={`relative overflow-hidden img-skeleton ${className ?? ''}`}>
      <motion.div className="h-[110%] w-full -mt-[5%]" style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
