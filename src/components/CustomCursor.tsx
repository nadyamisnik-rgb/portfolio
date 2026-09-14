import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const spring = { type: 'spring' as const, stiffness: 700, damping: 50, mass: 0.5 }

type CursorKind = 'default' | 'pointer' | 'link' | 'card'

const sizeByKind: Record<CursorKind, number> = {
  default: 28,
  pointer: 14,
  link: 96,
  card: 77,
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [kind, setKind] = useState<CursorKind>('default')
  const [pressed, setPressed] = useState(false)
  const [left, setLeft] = useState(false)
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const x = useSpring(mx, spring)
  const y = useSpring(my, spring)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setLeft(false)
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setLeft(true)
    const onEnter = () => setLeft(false)
    const onOver = (e: PointerEvent) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const hit = target.closest('[data-cursor]')
      const value = hit?.getAttribute('data-cursor')
      if (value === 'link' || value === 'pointer' || value === 'card') setKind(value)
      else setKind('default')
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointerover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.documentElement.classList.add('custom-cursor-active')

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [enabled, mx, my])

  if (!enabled) return null

  const size = sizeByKind[kind]
  const showArrow = kind === 'link' || kind === 'card'

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ x, y }}
      animate={{
        width: size,
        height: size,
        opacity: left ? 0 : kind === 'default' ? 0.25 : 1,
        scale: pressed ? 0.92 : 1,
      }}
      transition={{
        width: { type: 'spring', stiffness: 320, damping: 28 },
        height: { type: 'spring', stiffness: 320, damping: 28 },
        opacity: { duration: 0.15 },
        scale: { type: 'spring', stiffness: 500, damping: 28 },
      }}
    >
      <motion.div
        className="flex h-full w-full items-center justify-center rounded-full border-[1.5px] border-white"
        animate={{
          backgroundColor: kind !== 'default' ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.18 }}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="h-1/2 w-1/2 fill-none stroke-black"
          animate={{ opacity: showArrow ? 1 : 0, scale: showArrow ? 1 : 0.6 }}
          transition={{ duration: 0.18 }}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H8M17 7V16" />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
