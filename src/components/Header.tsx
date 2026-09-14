import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { site, nav } from '../lib/content'
import { withBase } from '../lib/base'

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      const href = anchor?.getAttribute('href') ?? ''
      if (href.startsWith('/') && !href.startsWith('//')) setOpen(false)
    }
    window.addEventListener('click', onClick, true)
    return () => window.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 px-5 py-5 transition-opacity duration-500 md:px-10 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-full before:bg-[var(--color-bg)]/55 before:backdrop-blur-xl before:transition-opacity before:duration-500 ${
          scrolled || open ? 'before:opacity-100' : 'before:opacity-0'
        }`}
      >
        <div className="relative mx-auto flex max-w-[89.5rem] items-center justify-between">
          <div className="flex items-baseline gap-[34px] text-[15px] whitespace-nowrap">
            <a
              data-cursor="pointer"
              className="group relative inline-block py-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              href={withBase('/')}
            >
              {site.name}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          </div>
          <nav className="hidden items-center gap-8 text-[15px] md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                data-cursor="pointer"
                className="group relative inline-block py-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                href={withBase(item.href)}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
            <a
              data-cursor="pointer"
              className="btn-glass inline-flex h-9 items-center rounded-full px-4 leading-none"
              href={withBase('/contact')}
            >
              Get in touch
            </a>
          </nav>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            data-cursor="pointer"
            data-no-transition="true"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center text-[var(--color-text)] transition-transform duration-150 active:scale-90 active:opacity-70 md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                aria-hidden="true"
                className={`absolute top-0 right-0 left-0 h-px bg-current transition-transform duration-300 ease-out ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute right-0 bottom-0 left-0 h-px bg-current transition-transform duration-300 ease-out ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
    >
      <div aria-hidden="true" className="absolute inset-0 flex">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-[var(--color-bg)]"
            initial={false}
            animate={{ y: open ? '0%' : '-100%' }}
            transition={{
              duration: 0.45,
              delay: open ? i * 0.05 : (3 - i) * 0.04,
              ease: [0.7, 0, 0.3, 1],
            }}
          />
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="relative flex h-full flex-col px-5 pt-28 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <a key={item.href} data-cursor="pointer" className="block py-2" href={withBase(item.href)} onClick={onClose}>
                  <motion.span
                    className="block font-serif text-[clamp(48px,12vw,80px)] leading-[1] font-light tracking-[-0.03em] text-[var(--color-text)]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.06, duration: 0.4 }}
                  >
                    {item.label}
                  </motion.span>
                </a>
              ))}
              <motion.div
                className="flex items-center gap-3 pt-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.4 }}
              >
                <a
                  data-cursor="pointer"
                  className="btn-glass inline-flex h-14 items-center rounded-full px-7 text-[16px] leading-none"
                  href={withBase('/contact')}
                  onClick={onClose}
                >
                  Get in touch
                </a>
              </motion.div>
            </nav>
            <motion.div
              className="mt-auto flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={`mailto:${site.email}`}
                data-cursor="link"
                className="text-gradient self-start font-serif text-[clamp(20px,5.5vw,28px)] leading-[1.1] font-light tracking-[-0.02em]"
              >
                {site.email}
              </a>
              <span className="text-[14px] text-[var(--color-text-muted)]">{site.location}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
