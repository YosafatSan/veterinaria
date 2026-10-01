/** Fachada tapatía: puerta de arco con marco de cantera, placa de azulejo con el número y maceta. */
export function DoorScene({ label = 'Tu casa', className = '' }: { label?: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 200" className={className} role="img" aria-label={`Puerta de una casa con placa de azulejo que dice ${label}`}>
      {/* Muro y cornisa */}
      <rect width="260" height="200" fill="#F7FBFE" />
      <rect y="0" width="260" height="14" fill="#DCEBF7" />
      <rect y="14" width="260" height="3" fill="#C3D9EE" />
      {/* Banqueta */}
      <rect y="180" width="260" height="20" fill="#DCEBF7" />
      <path d="M0 180h260" stroke="#C3D9EE" strokeWidth="2" />
      {/* Marco de cantera */}
      <path d="M42 182V92a48 48 0 0 1 96 0v90" fill="none" stroke="#DCEBF7" strokeWidth="12" />
      {/* Puerta */}
      <path d="M50 180V92a40 40 0 0 1 80 0v88z" fill="#0E4A7B" />
      <path d="M90 56v124" stroke="#2268A3" strokeWidth="2" />
      <g fill="none" stroke="#2268A3" strokeWidth="2" strokeLinejoin="round">
        <rect x="60" y="104" width="22" height="30" rx="2" />
        <rect x="98" y="104" width="22" height="30" rx="2" />
        <rect x="60" y="144" width="22" height="26" rx="2" />
        <rect x="98" y="144" width="22" height="26" rx="2" />
        <path d="M60 94a30 30 0 0 1 60 0" />
      </g>
      <circle cx="84" cy="128" r="3" fill="#DCEBF7" />
      <circle cx="96" cy="128" r="3" fill="#DCEBF7" />
      {/* Escalón */}
      <rect x="38" y="180" width="104" height="7" rx="1.5" fill="#C3D9EE" />
      {/* Placa de azulejo: doble marco y florones pintados en las esquinas */}
      <g>
        <rect x="146" y="58" width="106" height="64" rx="3.5" fill="#fff" stroke="#0E4A7B" strokeWidth="3" />
        <rect x="151.5" y="63.5" width="95" height="53" rx="1.5" fill="none" stroke="#2268A3" strokeWidth="1.3" />
        {[
          [151.5, 63.5, 0],
          [246.5, 63.5, 90],
          [246.5, 116.5, 180],
          [151.5, 116.5, 270],
        ].map(([x, y, r]) => (
          <g key={r} transform={`translate(${x} ${y}) rotate(${r})`}>
            <path d="M0 0h7.5A7.5 7.5 0 0 1 0 7.5z" fill="#0E4A7B" />
            <path d="M0 11.5A11.5 11.5 0 0 0 11.5 0" fill="none" stroke="#2268A3" strokeWidth="1.3" />
            <circle cx="10" cy="10" r="1.7" fill="#2268A3" />
          </g>
        ))}
        <text
          x="199"
          y="97"
          textAnchor="middle"
          fontFamily="Fredoka Variable, ui-rounded, sans-serif"
          fontWeight="600"
          fontSize="19"
          fill="#0E4A7B"
        >
          {label}
        </text>
      </g>
      {/* Maceta */}
      <g>
        <path d="M196 166c-14-10-18-24-10-34 8 6 12 18 10 34z" fill="#2268A3" />
        <path d="M206 166c2-18 10-30 22-32 2 12-6 26-22 32z" fill="#0E4A7B" />
        <path d="M201 166c-4-16 0-30 6-38 6 10 4 26-6 38z" fill="#2268A3" opacity=".75" />
        <path d="M186 164h34l-4 18h-26z" fill="#0E4A7B" />
        <path d="M184 162h38v5h-38z" fill="#2268A3" />
      </g>
    </svg>
  )
}
