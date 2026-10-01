import { Container } from '../components/Section'
import { site } from '../data/site'
import { waLink } from '../lib/whatsapp'

/** Eutanasia humanitaria: tono sobrio, sin ornamento ni botón verde, separada del resto. */
export function Farewell() {
  if (!site.offersEuthanasia) return null
  return (
    <section id="despedida" aria-labelledby="despedida-title" className="border-y border-junta bg-white py-20 sm:py-28">
      <Container className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="despedida-title" className="font-sans text-[1.6rem] leading-snug font-semibold text-tinta">
            Eutanasia humanitaria en casa
          </h2>
        </div>
        <div className="max-w-[38rem] space-y-5 text-lg leading-relaxed text-tinta-suave lg:col-span-7 lg:col-start-6">
          <p>
            Cuando llega el momento de despedirse, puede ser en su lugar de siempre, con su familia cerca y sin el
            estrés de un traslado.
          </p>
          <p>Te explicamos cada paso antes de empezar y respetamos el tiempo que necesites.</p>
          <p>
            <a
              href={waLink('Hola, quisiera información sobre la eutanasia humanitaria a domicilio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-profundo underline decoration-junta decoration-2 hover:decoration-profundo"
            >
              Escríbenos con calma por WhatsApp
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
