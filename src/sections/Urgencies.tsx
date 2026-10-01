import { FirstAidIcon, PhoneIcon, SirenIcon } from '@phosphor-icons/react'
import { WaButton } from '../components/Buttons'
import { Container, SectionHead } from '../components/Section'
import { urgencyTiers } from '../data/content'
import { site } from '../data/site'
import { waGeneric, waLink } from '../lib/whatsapp'

function Cases({ items, tone }: { items: string[]; tone: 'dark' | 'light' }) {
  return (
    <ul className={`mt-4 space-y-2 ${tone === 'dark' ? 'text-celeste' : 'text-tinta-suave'}`}>
      {items.map((c) => (
        <li key={c} className="flex gap-2.5">
          <span aria-hidden="true" className={`mt-[0.6em] size-1.5 shrink-0 rounded-full ${tone === 'dark' ? 'bg-celeste' : 'bg-clinico'}`} />
          {c}
        </li>
      ))}
    </ul>
  )
}

/** Urgencias con gramática de escalamiento: calma, borde, color pleno. */
export function Urgencies() {
  const { urgencies } = site
  return (
    <section id="urgencias" aria-labelledby="urgencias-title" className="py-20 sm:py-28">
      <Container>
        <SectionHead id="urgencias-title" title="¿Es urgente?">
          Una guía rápida para saber qué hacer. Si dudas, escríbenos: te decimos si podemos ir o si conviene un
          hospital.
        </SectionHead>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1.25fr] lg:items-stretch">
          <div className="rounded-[0.5rem] p-6 ring-1 ring-junta sm:p-7">
            <h3 className="text-[1.45rem] leading-tight font-semibold">{urgencyTiers.calma.title}</h3>
            <Cases items={urgencyTiers.calma.cases} tone="light" />
            <a
              href={waGeneric()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-10 items-center font-semibold text-clinico underline decoration-clinico/30 hover:decoration-clinico"
            >
              Agendar una cita
            </a>
          </div>

          <div className="rounded-[0.5rem] p-6 ring-[2.5px] ring-clinico sm:p-7">
            <div className="flex items-center gap-2.5">
              <FirstAidIcon weight="duotone" className="size-7 text-clinico" aria-hidden="true" />
              <h3 className="text-[1.45rem] leading-tight font-semibold">{urgencyTiers.urgente.title}</h3>
            </div>
            <Cases items={urgencyTiers.urgente.cases} tone="light" />
            <p className="mt-5 text-[0.95rem] text-tinta-suave">
              Horario de urgencias: {urgencies.hours ?? <span className="italic">por confirmar</span>}.
            </p>
            <WaButton href={waLink('Hola, mi mascota tiene una urgencia: ')} className="mt-5">
              Escribir ahora
            </WaButton>
          </div>

          <div className="rounded-[0.5rem] bg-profundo p-6 text-white shadow-[0_20px_40px_-24px_rgb(14_74_123/0.8)] sm:p-8">
            <div className="flex items-center gap-2.5">
              <SirenIcon weight="duotone" className="size-8 text-celeste" aria-hidden="true" />
              <h3 className="text-[1.6rem] leading-tight font-semibold text-white">{urgencyTiers.grave.title}</h3>
            </div>
            <Cases items={urgencyTiers.grave.cases} tone="dark" />
            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="text-sm font-semibold text-celeste">Hospital de referencia</p>
              <p className="mt-1 font-display text-[1.5rem] font-medium">
                {urgencies.hospital ?? <span className="text-white/75 italic">Por confirmar</span>}
              </p>
              {urgencies.hospitalPhone && (
                <a
                  href={`tel:${urgencies.hospitalPhone}`}
                  className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 font-semibold text-profundo transition-transform duration-150 active:scale-[0.97]"
                >
                  <PhoneIcon weight="bold" className="size-5" aria-hidden="true" /> Llamar al hospital
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
