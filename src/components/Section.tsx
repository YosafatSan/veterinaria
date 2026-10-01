import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function SectionHead({
  title,
  children,
  id,
  className = '',
}: {
  title: ReactNode
  children?: ReactNode
  id?: string
  className?: string
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className="text-[2.1rem] leading-[1.08] font-semibold sm:text-[2.75rem]">
        {title}
      </h2>
      {children && <div className="mt-4 max-w-[58ch] text-lg text-tinta-suave">{children}</div>}
    </div>
  )
}

/** Marca visible para datos que el cliente aún debe entregar. */
export function Pending({ children = 'Por confirmar' }: { children?: ReactNode }) {
  return (
    <span className="text-tinta-suave italic underline decoration-junta decoration-dotted decoration-2 underline-offset-4">
      {children}
    </span>
  )
}
