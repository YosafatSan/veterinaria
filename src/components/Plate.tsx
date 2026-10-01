import type { ReactNode } from 'react'

/** Florón de esquina pintado a mano, como en las placas de número de las fachadas. */
function Corner({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`absolute size-[22%] max-w-7 ${className}`}>
      <path d="M2 2h7.5A7.5 7.5 0 0 1 2 9.5z" fill="var(--color-profundo)" />
      <path d="M2 13a11 11 0 0 0 11-11" fill="none" stroke="var(--color-clinico)" strokeWidth="1.4" />
      <circle cx="11.5" cy="11.5" r="1.6" fill="var(--color-clinico)" />
    </svg>
  )
}

interface PlateProps {
  children: ReactNode
  className?: string
  /** Proporción de la pieza. "square" para números, "wide" para letreros. */
  shape?: 'square' | 'wide'
}

/**
 * Placa de azulejo: esmalte blanco, doble marco cobalto y florones en las esquinas.
 * Es el único "contenedor" decorado del sistema; se reserva para cifras y rótulos clave.
 */
export function Plate({ children, className = '', shape = 'square' }: PlateProps) {
  return (
    <div
      className={`relative isolate grid place-items-center rounded-[0.4rem] border-[3px] border-profundo bg-esmalte text-profundo shadow-[0_10px_24px_-12px_rgb(14_74_123/0.45),inset_0_0_0_4px_var(--color-esmalte),inset_0_0_0_5.5px_var(--color-clinico)] ${
        shape === 'square' ? 'aspect-square' : 'aspect-[2.2/1]'
      } ${className}`}
    >
      {/* Brillo del esmalte */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[0.25rem] bg-[linear-gradient(140deg,#fff_0%,#fff0_45%,#dcebf700_70%,#dcebf780_100%)]"
      />
      <Corner className="left-1.5 top-1.5" />
      <Corner className="right-1.5 top-1.5 rotate-90" />
      <Corner className="bottom-1.5 right-1.5 rotate-180" />
      <Corner className="bottom-1.5 left-1.5 -rotate-90" />
      <div className="relative px-[16%] text-center">{children}</div>
    </div>
  )
}
