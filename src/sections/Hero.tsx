import { MapPinIcon, SealCheckIcon } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { GhostLink, WaButton } from '../components/Buttons'
import { HeroMap } from '../components/HeroMap'
import { Container } from '../components/Section'
import { site } from '../data/site'
import { waGeneric } from '../lib/whatsapp'

export function Hero() {
  const reduce = useReducedMotion()
  // El CTA aparece cuando la ruta llega a la casa (PRD §15: todo el momento dura menos de 1.5 s).
  const arrive = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="tile-wall absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] max-sm:opacity-45"
      />
      <Container className="grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-6">
          <h1
            id="hero-title"
            className="text-[2.65rem] leading-[1.02] font-semibold tracking-[-0.02em] sm:text-[3.6rem] lg:text-[4.1rem]"
          >
            La consulta veterinaria <span className="text-clinico">llega a tu puerta.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-tinta-suave sm:text-xl">
            Atendemos a tu perro o gato en casa, en toda la {site.region}. Sin traslados, sin sala de
            espera y sin el estrés de la transportadora.
          </p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" {...arrive(1.0)}>
            <WaButton href={waGeneric()} size="lg">
              Agendar por WhatsApp
            </WaButton>
            <GhostLink to="/servicios">Ver servicios y precios</GhostLink>
          </motion.div>

          <ul className="mt-10 grid gap-3 text-[0.98rem] text-tinta sm:grid-cols-2 sm:gap-5">
            <li className="flex gap-3">
              <SealCheckIcon weight="duotone" className="mt-0.5 size-6 shrink-0 text-clinico" aria-hidden="true" />
              <span>
                <strong className="font-semibold">{site.vet.shortName}</strong>, médico veterinario con cédula
                verificable en la SEP.
              </span>
            </li>
            <li className="flex gap-3">
              <MapPinIcon weight="duotone" className="mt-0.5 size-6 shrink-0 text-clinico" aria-hidden="true" />
              <span>Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco.</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 lg:pl-4 xl:pl-8">
          <HeroMap />
        </div>
      </Container>
    </section>
  )
}
