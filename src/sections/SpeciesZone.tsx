import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { CatFace, DogFace } from '../components/Pets'
import { Plate } from '../components/Plate'
import { Container, SectionHead } from '../components/Section'
import { species, zones } from '../data/content'
import { waLink } from '../lib/whatsapp'

const portraits = { perro: DogFace, gato: CatFace, otra: DogFace } as const

function fee(value: number | null) {
  if (value === null) return 'Por confirmar'
  if (value === 0) return 'Sin costo'
  return value.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })
}

export function SpeciesZone() {
  return (
    <section aria-label="Especies y zona de cobertura" className="py-20 sm:py-28">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHead id="especies" title="A quién atendemos" />
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:max-w-md">
            {species.map((s) => {
              const Portrait = portraits[s.id]
              return (
                <li key={s.id}>
                  <Plate>
                    <Portrait className="w-full" />
                  </Plate>
                  <h3 className="mt-4 text-[1.5rem] font-semibold">{s.name}</h3>
                  <p className="mt-1 text-tinta-suave">{s.note}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div id="zona" className="lg:col-span-6 lg:col-start-7">
          <SectionHead title="Hasta dónde llegamos">
            Municipios de la zona metropolitana de Guadalajara donde damos consulta a domicilio.
          </SectionHead>
          <table className="mt-10 w-full text-left">
            <caption className="sr-only">Municipios atendidos y costo de traslado</caption>
            <thead>
              <tr className="border-b-2 border-profundo text-[0.95rem] text-tinta-suave">
                <th scope="col" className="py-3 font-semibold">Municipio</th>
                <th scope="col" className="py-3 text-right font-semibold">Traslado</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((z) => (
                <tr key={z.municipality} className="border-b border-junta">
                  <th scope="row" className="py-4 font-display text-[1.35rem] font-medium text-profundo">
                    {z.municipality}
                    {z.areas.length > 0 && (
                      <span className="mt-1 block font-sans text-sm font-normal text-tinta-suave">{z.areas.join(', ')}</span>
                    )}
                  </th>
                  <td
                    className={`tabular py-4 text-right ${z.travelFee === null ? 'text-tinta-suave italic' : 'font-semibold text-tinta'}`}
                  >
                    {fee(z.travelFee)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-tinta-suave">
            ¿Tu colonia queda en el límite?{' '}
            <a
              href={waLink('Hola, ¿llegan a mi colonia? Vivo en: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-clinico underline decoration-clinico/30 hover:decoration-clinico"
            >
              <WhatsappLogoIcon weight="bold" className="size-[1.1em]" aria-hidden="true" />
              Pregúntanos
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
