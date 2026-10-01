// Retratos de línea en cobalto, en el mismo trazo redondeado que la placa de azulejo.

const line = {
  fill: 'none',
  stroke: 'var(--color-profundo)',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function DogFace({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <ellipse cx="71" cy="51" rx="10" ry="9" fill="var(--color-celeste)" />
      <ellipse cx="60" cy="75" rx="14" ry="11" fill="var(--color-celeste)" />
      <path {...line} d="M36 46C36 30 48 22 60 22s24 8 24 24v20c0 18-12 28-24 28S36 84 36 66z" />
      <path {...line} fill="var(--color-clinico)" d="M38 36c-12-2-20 10-16 28 2 8 10 8 14 0z" />
      <path {...line} fill="var(--color-clinico)" d="M82 36c12-2 20 10 16 28-2 8-10 8-14 0z" />
      <circle cx="50" cy="54" r="3.6" fill="var(--color-profundo)" />
      <circle cx="70" cy="54" r="3.6" fill="var(--color-profundo)" />
      <path d="M53.5 68h13c0 5-3.5 8-6.5 8s-6.5-3-6.5-8z" fill="var(--color-profundo)" />
      <path {...line} strokeWidth={3} d="M60 76v5m-7 1c3 3 11 3 14 0" />
      <path {...line} strokeWidth={3} d="M44 98h32" />
      <circle cx="60" cy="104" r="5" fill="var(--color-clinico)" />
    </svg>
  )
}

export function CatFace({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M38 40V24l13 11z" fill="var(--color-celeste)" />
      <path d="M82 40V24L69 35z" fill="var(--color-celeste)" />
      <path {...line} d="M34 48V16l22 16M86 48V16L64 32" />
      <path {...line} d="M30 60c0-18 14-28 30-28s30 10 30 28c0 22-14 34-30 34S30 82 30 60z" />
      <ellipse cx="48" cy="60" rx="4" ry="5.6" fill="var(--color-profundo)" />
      <ellipse cx="72" cy="60" rx="4" ry="5.6" fill="var(--color-profundo)" />
      <path d="M55.5 69h9L60 74z" fill="var(--color-clinico)" stroke="var(--color-clinico)" strokeWidth="2" strokeLinejoin="round" />
      <path {...line} strokeWidth={3} d="M60 74c-2 4-6 5-9 3m9-3c2 4 6 5 9 3" />
      <path {...line} strokeWidth={2.5} d="M40 70H22m18 6-16 4m56-10h18m-18 6 16 4" />
    </svg>
  )
}
