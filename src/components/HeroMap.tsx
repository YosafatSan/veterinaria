import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { DoorScene } from './DoorScene'

// Mapa ilustrativo de la ZMG. Trazos aproximados de vialidades reales, no a escala.
const AVENUES: { d: string; name: string }[] = [
  { name: 'Av. Vallarta', d: 'M338 236 L250 232 L150 238 L20 248' },
  { name: 'Av. López Mateos', d: 'M318 250 L282 312 L248 392 L214 560' },
  { name: 'Calz. Independencia', d: 'M352 40 L346 150 L342 236 L346 330' },
  { name: 'Av. Lázaro Cárdenas', d: 'M150 342 L268 318 L390 300 L540 284' },
  { name: 'Av. Ávila Camacho', d: 'M334 232 L292 196 L240 150 L190 112' },
  { name: 'Av. Patria', d: 'M190 112 C162 176 160 250 176 300 C188 340 214 372 244 394' },
  { name: 'Av. Mariano Otero', d: 'M322 262 L260 302 L170 366 L100 426' },
  { name: 'Carr. a Chapala', d: 'M380 300 L452 380 L530 480' },
  { name: 'Av. Río Nilo', d: 'M360 262 L452 246 L600 236' },
]

const PERIFERICO =
  'M300 72 C380 62 452 86 492 150 C528 210 512 290 470 338 C420 394 340 414 268 398 C196 382 150 330 142 262 C134 190 178 120 240 88 C258 79 280 74 300 72 Z'

const BARRANCA = 'M300 26 C340 46 370 18 410 34 S470 66 512 44 S572 30 600 52'

// La ruta del veterinario: sale por Lázaro Cárdenas, sube por Independencia y Ávila Camacho hasta Zapopan.
const ROUTE = 'M392 300 L346 306 L342 236 L292 196 L240 150 L226 132'
const START = { x: 392, y: 300 }
const END = { x: 226, y: 132 }

const LABELS: { text: string; x: number; y: number; mobile?: string }[] = [
  { text: 'Zapopan', x: 96, y: 96 },
  // En celular los rótulos crecen; Guadalajara se recorre para no tocar a Tonalá.
  { text: 'Guadalajara', x: 396, y: 196, mobile: 'max-sm:[transform:translateX(-46px)]' },
  { text: 'Tlaquepaque', x: 410, y: 352 },
  { text: 'Tonalá', x: 520, y: 206 },
  { text: 'Tlajomulco', x: 268, y: 492 },
]

const DRAW_DELAY = 0.15
const DRAW_DURATION = 0.95

export function HeroMap() {
  const reduce = useReducedMotion()
  const routeRef = useRef<SVGPathElement>(null)
  const figureRef = useRef<HTMLElement>(null)
  // En celular el mapa queda bajo el primer pantallazo: la ruta se dibuja cuando el mapa se ve.
  const inView = useInView(figureRef, { once: true, amount: 0.45 })
  const progress = useMotionValue(reduce ? 1 : 0)
  const [arrived, setArrived] = useState(Boolean(reduce))

  const point = (p: number) => {
    const path = routeRef.current
    if (!path) return p >= 1 ? END : START
    const pt = path.getPointAtLength(path.getTotalLength() * p)
    return { x: pt.x, y: pt.y }
  }
  const markerX = useTransform(progress, (p) => point(p).x)
  const markerY = useTransform(progress, (p) => point(p).y)
  const markerOpacity = useTransform(progress, [0, 0.85, 1], [1, 1, 0])

  useEffect(() => {
    if (reduce) {
      progress.set(1)
      setArrived(true)
      return
    }
    if (!inView) return
    const controls = animate(progress, 1, {
      delay: DRAW_DELAY,
      duration: DRAW_DURATION,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setArrived(true),
    })
    return () => controls.stop()
  }, [progress, reduce, inView])

  return (
    <figure ref={figureRef} className="relative">
      <div className="cenefa rounded-[0.6rem] p-[1.125rem] shadow-[0_24px_48px_-28px_rgb(14_74_123/0.55)] sm:p-[1.5rem]">
        <div className="relative overflow-hidden rounded-[0.25rem] bg-white ring-2 ring-profundo">
          <svg
            viewBox="0 0 600 560"
            className="block h-auto w-full"
            role="img"
            aria-label="Mapa ilustrativo de la zona metropolitana de Guadalajara con la ruta del veterinario hasta una casa en Zapopan"
          >
            <defs>
              <clipPath id="centro">
                <circle cx="342" cy="238" r="64" />
              </clipPath>
              <pattern id="cuadricula" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(-7)">
                <path d="M11 0H0V11" fill="none" stroke="#DCEBF7" strokeWidth="1.2" />
              </pattern>
            </defs>

            {/* Barranca de Huentitán */}
            <path d={BARRANCA} fill="none" stroke="#DCEBF7" strokeWidth="14" strokeLinecap="round" />
            <path d={BARRANCA} fill="none" stroke="#C3D9EE" strokeWidth="1.5" strokeLinecap="round" />
            <text className="max-sm:hidden" x="420" y="86" fontSize="15" fill="#3D5268" fontStyle="italic" fontFamily="Figtree Variable, sans-serif">
              Barranca de Huentitán
            </text>

            {/* Cuadrícula del centro */}
            <rect x="270" y="170" width="150" height="140" fill="url(#cuadricula)" clipPath="url(#centro)" />

            {/* Avenidas */}
            <g fill="none" stroke="#C3D9EE" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              {AVENUES.map((a) => (
                <path key={a.name} d={a.d} />
              ))}
            </g>

            {/* Periférico */}
            <path d={PERIFERICO} fill="none" stroke="#DCEBF7" strokeWidth="9" />
            <path d={PERIFERICO} fill="none" stroke="#9CBCDB" strokeWidth="2" strokeDasharray="1 0" />
            <path id="periferico-label" d="M286 412 C356 424 430 402 480 346" fill="none" />
            <text className="max-sm:hidden" fontSize="14" fill="#3D5268" fontFamily="Figtree Variable, sans-serif" fontWeight="600" letterSpacing=".04em">
              <textPath href="#periferico-label" startOffset="12%">
                Anillo Periférico
              </textPath>
            </text>

            {/* Municipios */}
            <g className="max-sm:text-[25px]" fontFamily="Figtree Variable, sans-serif" fontSize="19" fontWeight="600" fill="#3D5268">
              {LABELS.map((l) => (
                <text key={l.text} x={l.x} y={l.y} className={l.mobile}>
                  {l.text}
                </text>
              ))}
            </g>

            {/* Ruta: casing blanco + trazo activo */}
            <motion.path
              d={ROUTE}
              fill="none"
              stroke="#fff"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: progress }}
            />
            <motion.path
              ref={routeRef}
              d={ROUTE}
              fill="none"
              stroke="#2268A3"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: progress }}
            />

            {/* Salida */}
            <circle cx={START.x} cy={START.y} r="7" fill="#fff" stroke="#0E4A7B" strokeWidth="3" />
            <g fill="#14283B" fontFamily="Figtree Variable, sans-serif" fontWeight="600">
              <text className="max-sm:hidden" x={START.x + 12} y={START.y + 22} fontSize="16">
                Sale el veterinario
              </text>
              <text className="sm:hidden" x={START.x + 12} y={START.y + 24} fontSize="25">
                Salida
              </text>
            </g>

            {/* Llegada: aro que se expande una vez */}
            {arrived && !reduce && (
              <motion.circle
                cx={END.x}
                cy={END.y}
                fill="none"
                stroke="#2268A3"
                strokeWidth="2"
                initial={{ r: 10, opacity: 0.7 }}
                animate={{ r: 30, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <g transform={`translate(${END.x} ${END.y})`}>
              <circle r="13" fill="#0E4A7B" />
              <path d="M-6 1 0-5 6 1M-4 0v6h8V0" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </g>

            {/* Maletín del veterinario recorriendo la ruta */}
            <motion.g style={{ x: markerX, y: markerY, opacity: markerOpacity }}>
              <circle r="10" fill="#0E4A7B" stroke="#fff" strokeWidth="3" />
              <path d="M-4 0h8M0-4v8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            </motion.g>

            {/* Línea guía hacia la fachada */}
            <motion.path
              d="M226 146 L226 168 L190 196"
              fill="none"
              stroke="#0E4A7B"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              initial={false}
              animate={{ opacity: arrived ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </svg>

          {/* Fachada con la placa "Tu casa" */}
          <motion.div
            className="absolute left-[3%] top-[34%] w-[46%] origin-top-right overflow-hidden rounded-[0.35rem] border-2 border-profundo bg-white shadow-[0_14px_28px_-14px_rgb(14_74_123/0.6)]"
            initial={reduce ? false : { opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
            animate={arrived ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <DoorScene className="block h-auto w-full" />
          </motion.div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-tinta-suave">
        Mapa ilustrativo. Atendemos en Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco.
      </figcaption>
    </figure>
  )
}
