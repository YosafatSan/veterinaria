import { WaButton } from '../components/Buttons'
import { Container } from '../components/Section'
import { categoryLabels, services } from '../data/services'
import type { ServiceCategory } from '../data/types'
import { waGeneric } from '../lib/whatsapp'
import { PriceNote, PriceRow } from '../sections/Services'

export default function Servicios() {
  const groups = (Object.keys(categoryLabels) as ServiceCategory[])
    .map((c) => ({ c, items: services.filter((s) => s.category === c) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <title>Servicios y precios · Puerta Azul, veterinario a domicilio</title>
      <meta name="description" content="Servicios veterinarios a domicilio en Guadalajara con precio desde. Consulta, vacunación, desparasitación y estudios." />
      <section className="relative pt-14 pb-12 sm:pt-20">
        <div aria-hidden="true" className="tile-wall absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_30%,transparent)]" />
        <Container>
          <h1 className="max-w-3xl text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.5rem]">Servicios y precios</h1>
          <div className="mt-5 max-w-2xl text-lg">
            <PriceNote />
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        {groups.map((g) => (
          <section key={g.c} aria-labelledby={`cat-${g.c}`} className="grid gap-6 border-t-2 border-profundo py-10 lg:grid-cols-12">
            <h2 id={`cat-${g.c}`} className="text-[1.9rem] font-semibold lg:col-span-3">
              {categoryLabels[g.c]}
            </h2>
            <ul className="grid gap-x-12 lg:col-span-9 lg:grid-cols-2">
              {g.items.map((s) => (
                <PriceRow key={s.id} service={s} />
              ))}
            </ul>
          </section>
        ))}
        <div className="mt-6 flex flex-col items-start gap-4 rounded-[0.6rem] bg-celeste p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg font-semibold text-profundo">¿No ves lo que buscas? Pregúntanos.</p>
          <WaButton href={waGeneric()}>Escribir por WhatsApp</WaButton>
        </div>
      </Container>
    </>
  )
}
