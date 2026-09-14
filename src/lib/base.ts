const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const routerBasename = BASE || undefined

export function withBase(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  return `${BASE}${path}`
}

export function toRoute(href: string) {
  const [path] = href.split('#')
  if (!path) return '/'
  if (!BASE) return path
  if (path === BASE || path === `${BASE}/`) return '/'
  if (path.startsWith(`${BASE}/`)) return path.slice(BASE.length) || '/'
  return path
}
