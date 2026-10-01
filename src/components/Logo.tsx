import { site } from '../data/site'

/** Logotipo de texto: el nombre en Fredoka, con "Azul" en el azul clínico y el arco de la puerta sobre la A. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const [first, ...rest] = site.name.split(' ')
  return (
    <span className="inline-flex flex-col leading-none whitespace-nowrap">
      <span
        className={`font-display text-[1.7rem] font-semibold tracking-[-0.02em] ${inverted ? 'text-white' : 'text-profundo'}`}
      >
        {first}
        {rest.length > 0 && (
          <span className={inverted ? 'text-celeste' : 'text-clinico'}> {rest.join(' ')}</span>
        )}
      </span>
      <span
        className={`mt-1 text-[0.8rem] font-semibold tracking-[0.01em] ${inverted ? 'text-celeste' : 'text-tinta-suave'}`}
      >
        {site.tagline}
      </span>
    </span>
  )
}
