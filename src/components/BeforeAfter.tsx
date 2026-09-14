import { animate } from 'motion'
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

const POSITION_MIN = 0
const POSITION_MAX = 100
const POSITION_START = 50
const KEYBOARD_STEP = 5
const KEYBOARD_STEP_LARGE = 15
const INTRO_KEYFRAMES = [30, 72, 50]
const INTRO_DURATION_S = 2.4

function clampPosition(value: number) {
  return Math.min(POSITION_MAX, Math.max(POSITION_MIN, value))
}

export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string
  after: string
  alt: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const interactedRef = useRef(false)
  const draggingRef = useRef(false)
  const inView = useInView(rootRef, { amount: 0.35, margin: '-12% 0px' })
  const reducedMotion = useReducedMotion()
  const position = useMotionValue(POSITION_START)
  const clipPath = useTransform(position, (value) => `inset(0 ${POSITION_MAX - value}% 0 0)`)
  const handleLeft = useTransform(position, (value) => `${value}%`)
  const [value, setValue] = useState(POSITION_START)
  const [dragging, setDragging] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const [ready, setReady] = useState(false)

  useMotionValueEvent(position, 'change', setValue)

  const markInteracted = useCallback(() => {
    if (interactedRef.current) return
    interactedRef.current = true
    setInteracted(true)
  }, [])

  const setFromClientX = useCallback(
    (clientX: number) => {
      const root = rootRef.current
      if (!root) return
      const { left, width } = root.getBoundingClientRect()
      if (width === 0) return
      position.set(clampPosition(((clientX - left) / width) * POSITION_MAX))
    },
    [position],
  )

  useEffect(() => {
    const img = rootRef.current?.querySelector('img')
    if (img?.complete && img.naturalWidth > 0) setReady(true)
  }, [])

  useEffect(() => {
    if (!inView || !ready || reducedMotion || interactedRef.current) return

    const intro = animate(position, INTRO_KEYFRAMES, {
      duration: INTRO_DURATION_S,
      ease: [0.37, 0, 0.2, 1],
    })

    return () => intro.stop()
  }, [inView, position, ready, reducedMotion])

  useEffect(() => {
    if (!dragging) return

    const onMove = (event: PointerEvent) => setFromClientX(event.clientX)
    const onUp = () => {
      draggingRef.current = false
      setDragging(false)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [dragging, setFromClientX])

  return (
    <div
      ref={rootRef}
      role="slider"
      tabIndex={0}
      aria-label={`${alt} before and after`}
      aria-valuemin={POSITION_MIN}
      aria-valuemax={POSITION_MAX}
      aria-valuenow={Math.round(value)}
      aria-valuetext={`${Math.round(value)}% before`}
      data-cursor="pointer"
      data-lenis-prevent
      className="relative w-full touch-none select-none outline-none"
      onPointerDown={(event) => {
        if (event.button !== 0) return
        markInteracted()
        draggingRef.current = true
        try {
          event.currentTarget.setPointerCapture(event.pointerId)
        } catch {}
        setDragging(true)
        setFromClientX(event.clientX)
      }}
      onKeyDown={(event) => {
        const step = event.shiftKey ? KEYBOARD_STEP_LARGE : KEYBOARD_STEP
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          markInteracted()
          position.set(
            clampPosition(position.get() + (event.key === 'ArrowLeft' ? -step : step)),
          )
        }
        if (event.key === 'Home') {
          event.preventDefault()
          markInteracted()
          position.set(POSITION_MIN)
        }
        if (event.key === 'End') {
          event.preventDefault()
          markInteracted()
          position.set(POSITION_MAX)
        }
      }}
    >
      <img
        src={after}
        alt={`${alt} after`}
        className="block h-auto w-full"
        draggable={false}
        loading="lazy"
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth > 0) setReady(true)
        }}
      />
      <motion.img
        src={before}
        alt={`${alt} before`}
        className="absolute inset-0 h-full w-full object-cover object-left"
        draggable={false}
        loading="lazy"
        style={{ clipPath }}
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 z-10 flex -translate-x-1/2 items-center"
        style={{ left: handleLeft }}
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgb(0_0_0_/_0.16)]" />
        <motion.span
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgb(0_0_0_/_0.22)]"
          animate={
            interacted || reducedMotion
              ? { scale: dragging ? 0.94 : 1, x: 0 }
              : { scale: [1, 1.1, 1], x: [0, -6, 6, 0] }
          }
          transition={
            interacted || reducedMotion
              ? { type: 'spring', stiffness: 520, damping: 28 }
              : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-none stroke-[#121417]"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 8 5 12l4 4" />
            <path d="M15 8l4 4-4 4" />
          </svg>
        </motion.span>
      </motion.div>
    </div>
  )
}
