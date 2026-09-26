import { withBase } from '../lib/base'

export function IgamingBack({ className = '' }: { className?: string }) {
  return (
    <a
      data-cursor="pointer"
      href={withBase('/work/igaming')}
      aria-label="Назад к описанию кейса"
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#E5E2D1] transition-opacity hover:text-[#F6F4E9] lg:h-14 lg:w-14 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 lg:h-8 lg:w-8"
      >
        <path d="M15 5L8 12L15 19" />
      </svg>
    </a>
  )
}
