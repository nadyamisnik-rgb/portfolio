import { type ReactNode, useRef } from 'react'
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

  return (
    <div ref={ref} className={`relative overflow-hidden img-skeleton ${className ?? ''}`}>
      <motion.div className="h-[110%] w-full -mt-[5%]" style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
