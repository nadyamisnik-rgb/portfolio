import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { scrollToTop } from '../lib/scroll'

const SHOW_AFTER = 480

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          data-cursor="pointer"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.86 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scrollToTop(false)}
          className="btn-glass fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full md:right-10 md:bottom-10"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 13V3" />
            <path d="M3.5 7.5L8 3L12.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
