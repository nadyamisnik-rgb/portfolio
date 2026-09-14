import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import UnicornScene from 'unicornstudio-react'

const UNICORN_PROJECT = 'e8rNGA3o1GVhPu54S5UR'
const SDK =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.11/dist/unicornStudio.umd.js'

export function SceneBackground() {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (value) =>
    size ? Math.max(-(size.h * 0.4), -(0.05 * value)) : 0,
  )

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      const h = Math.max(
        window.innerHeight,
        window.screen?.height ?? 0,
        window.screen?.availHeight ?? 0,
      )
      setSize((prev) => (prev && prev.w === w ? prev : { w, h }))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  if (!size) return null

  const height = Math.round(1.4 * size.h)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 top-0">
        <div className="absolute inset-0">
          <UnicornScene
            projectId={UNICORN_PROJECT}
            width={`${size.w}px`}
            height={`${height}px`}
            scale={1}
            dpi={1.5}
            sdkUrl={SDK}
            lazyLoad={false}
            production
          />
        </div>
      </motion.div>
    </div>
  )
}
