import { Plate } from '../components/Plate'
import { Container, SectionHead } from '../components/Section'
import { steps } from '../data/content'

/** Cómo funciona: los pasos son números de casa en azulejo, unidos por la ruta. */
export function Steps() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="py-20 sm:py-28">
      <Container>
        <SectionHead id="como-funciona-title" title="Así llega la consulta a tu casa">
          Cuatro pasos, todos desde tu celular.
        </SectionHead>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* El mismo trazo de la ruta del hero une los pasos */}
          <span
            aria-hidden="true"
            className="absolute top-[3.1rem] right-[12%] left-[12%] hidden h-[5px] rounded-full bg-clinico md:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-[2.47rem] w-[5px] rounded-full bg-clinico md:hidden"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[5.25rem_1fr] items-start gap-5 md:grid-cols-1 md:justify-items-center md:text-center">
              <Plate className="w-[5.25rem] md:w-[6.5rem]">
                <span className="tabular font-display text-[2.4rem] leading-none font-semibold md:text-[3rem]">
                  {i + 1}
                </span>
              </Plate>
              <div className="pt-2 md:max-w-[15rem] md:pt-1">
                <h3 className="text-[1.4rem] leading-tight font-semibold">{s.title}</h3>
                <p className="mt-2 text-tinta-suave">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
