import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { GhostLink } from '../components/Buttons'
import { Container, SectionHead } from '../components/Section'
import { featuredServices } from '../data/services'
import { site } from '../data/site'
import type { Service } from '../data/types'
import { formatPrice, waService } from '../lib/whatsapp'

export function PriceRow({ service }: { service: Service }) {
  return (
    <li className="border-b border-profundo/15 py-6">
      <h3 className="font-sans text-[1.15rem] leading-snug font-bold text-profundo">{service.name}</h3>
      <p
        className={`tabular mt-1 font-semibold ${
          service.priceFrom === null ? 'text-[0.95rem] text-tinta-suave italic' : 'text-lg text-clinico'
        }`}
      >
        {formatPrice(service.priceFrom)}
      </p>
      <p className="mt-2 max-w-[46ch] text-tinta">{service.summary}</p>
      <a
        href={waService(service.name.toLowerCase())}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-10 items-center gap-2 font-semibold text-clinico underline decoration-clinico/30 hover:decoration-clinico"
      >
        <WhatsappLogoIcon weight="bold" className="size-5" aria-hidden="true" />
        Agendar por WhatsApp
      </a>
    </li>
  )
}

export function PriceNote() {
  const vat =
    site.pricesIncludeVat === null ? 'IVA por confirmar' : site.pricesIncludeVat ? 'Precios con IVA incluido' : 'Precios más IVA'
  return (
    <p className="text-[0.95rem] text-tinta-suave">
      El precio final depende del peso y la especie de tu mascota, los medicamentos que necesite y la distancia. Te
      lo confirmamos antes de la visita. {vat}. Actualizado el {site.pricesUpdated}.
    </p>
  )
}

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-celeste py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-4">
            <SectionHead id="servicios-title" title="Lo que hacemos en tu casa" />
            <div className="mt-6 max-w-sm">
              <PriceNote />
            </div>
            <GhostLink to="/servicios" className="mt-8 bg-white">
              Todos los servicios
            </GhostLink>
          </div>
          <ul className="grid min-w-0 gap-x-12 border-t-2 border-profundo lg:col-span-8 lg:grid-cols-2">
            {featuredServices.map((s) => (
              <PriceRow key={s.id} service={s} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
