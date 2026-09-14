import type Lenis from 'lenis'

let instance: Lenis | null = null

export function setLenis(lenis: Lenis | null) {
  instance = lenis
}

export function scrollToTop(immediate = true) {
  if (instance) {
    instance.scrollTo(0, { immediate, force: true })
    return
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'auto' : 'smooth' })
}
