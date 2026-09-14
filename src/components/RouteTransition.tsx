import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToTop } from '../lib/scroll'
import { curtainCoverMs, curtainUncoverMs, PageCurtain } from './PageCurtain'

function isInternal(href: string, current: string) {
  if (
    !href ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return false
  }
  const [path] = href.split('#')
  return path !== '' && path !== current
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [phase, setPhase] = useState<'idle' | 'cover' | 'uncover'>('idle')
  const pending = useRef<string | null>(null)
  const waitingPath = useRef<string | null>(null)
  const phaseRef = useRef(phase)
  const pathRef = useRef(location.pathname)

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useEffect(() => {
    pathRef.current = location.pathname
  }, [location.pathname])

  const cover = useCallback((href: string) => {
    if (phaseRef.current !== 'idle') return
    pending.current = href
    setPhase('cover')
  }, [])

  useEffect(() => {
    if (phase !== 'cover') return
    const id = window.setTimeout(() => {
      const href = pending.current
      pending.current = null
      if (href) {
        const [path] = href.split('#')
        waitingPath.current = path || '/'
        scrollToTop(true)
        navigate(href)
      } else {
        setPhase('uncover')
      }
    }, curtainCoverMs)
    return () => window.clearTimeout(id)
  }, [phase, navigate])

  useEffect(() => {
    if (phase !== 'cover' || !waitingPath.current) return
    if (location.pathname === waitingPath.current) {
      waitingPath.current = null
      setPhase('uncover')
      return
    }
    const id = window.setTimeout(() => {
      waitingPath.current = null
      setPhase('uncover')
    }, 2000)
    return () => window.clearTimeout(id)
  }, [phase, location.pathname])

  useEffect(() => {
    if (phase !== 'uncover') return
    const id = window.setTimeout(() => setPhase('idle'), curtainUncoverMs)
    return () => window.clearTimeout(id)
  }, [phase])

  useEffect(() => {
    scrollToTop(true)
  }, [location.pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('button')) return
      const anchor = target.closest('a')
      if (
        !anchor ||
        (anchor.target && anchor.target !== '_self') ||
        anchor.hasAttribute('download') ||
        anchor.dataset.noTransition === 'true'
      ) {
        return
      }
      const href = anchor.getAttribute('href') ?? ''
      if (isInternal(href, pathRef.current ?? '/')) {
        event.preventDefault()
        event.stopImmediatePropagation()
        cover(href)
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [cover])

  return (
    <>
      {children}
      {phase !== 'idle' && <PageCurtain phase={phase === 'cover' ? 'cover' : 'uncover'} />}
    </>
  )
}
