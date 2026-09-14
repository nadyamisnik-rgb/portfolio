import { motion } from 'motion/react'

export const curtainEase = [0.7, 0, 0.3, 1] as const
export const curtainDuration = 0.4
export const curtainCoverMs = 550
export const curtainUncoverMs = 610

export function PageCurtain({
  phase,
  className = 'pointer-events-none fixed inset-0 z-[8000] flex',
}: {
  phase: 'cover' | 'uncover'
  className?: string
}) {
  return (
    <div aria-hidden="true" className={className}>
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: phase === 'cover' ? '0%' : '100%' }}
          transition={{
            duration: curtainDuration,
            delay: phase === 'cover' ? (3 - i) * 0.05 : 0.05 * i,
            ease: curtainEase,
          }}
          className="h-full flex-1 bg-white"
        />
      ))}
    </div>
  )
}
