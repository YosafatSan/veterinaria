import { ArrowRightIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router'

const press =
  'transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:scale-[0.97]'

/** Botón de WhatsApp: verde exclusivo, texto e ícono siempre en tinta (7.6:1). */
export function WaButton({
  href,
  children,
  size = 'md',
  className = '',
}: {
  href: string
  children: ReactNode
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-wa font-semibold text-tinta shadow-[0_8px_20px_-10px_rgb(20_40_59/0.55)] hover:bg-[#3ddc79] ${press} ${
        size === 'lg' ? 'min-h-14 px-7 text-[1.0625rem]' : 'min-h-12 px-5 text-base'
      } ${className}`}
    >
      <WhatsappLogoIcon weight="bold" className={size === 'lg' ? 'size-6' : 'size-5'} aria-hidden="true" />
      {children}
    </a>
  )
}

/** Enlace secundario con borde azul clínico. */
export function GhostLink({
  to,
  children,
  className = '',
  ...rest
}: { to: string; children: ReactNode; className?: string } & Omit<ComponentProps<typeof Link>, 'to'>) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-clinico px-6 font-semibold text-clinico hover:bg-clinico hover:text-white ${press} ${className}`}
      {...rest}
    >
      {children}
      <ArrowRightIcon
        weight="bold"
        aria-hidden="true"
        className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
      />
    </Link>
  )
}
