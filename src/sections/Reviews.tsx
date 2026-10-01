import { ArrowSquareOutIcon } from '@phosphor-icons/react'
import { Container } from '../components/Section'
import { site } from '../data/site'

/**
 * Reseñas reales de Google Business Profile. Mientras no existan, se muestra este estado vacío:
 * nunca testimonios inventados (PRD §6.9).
 */
export function Reviews() {
  const link = site.contact.googleReviews
  return (
    <section id="resenas" aria-labelledby="resenas-title" className="py-20 sm:py-28">
      <Container>
        <div className="tile-wall relative overflow-hidden rounded-[0.6rem] px-6 py-14 text-center ring-1 ring-junta sm:px-12 sm:py-20">
          <h2 id="resenas-title" className="mx-auto max-w-2xl text-[2.1rem] leading-[1.08] font-semibold sm:text-[2.75rem]">
            Lo que dicen las familias que atendemos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-tinta-suave">
            Aquí aparecerán las reseñas reales de nuestro perfil de Google. Solo publicamos opiniones de clientes
            verificables.
          </p>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-clinico bg-white px-6 font-semibold text-clinico transition-[background-color,color,transform] duration-150 hover:bg-clinico hover:text-white active:scale-[0.97]"
            >
              Dejar una reseña en Google <ArrowSquareOutIcon className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <p className="mt-8 text-sm font-semibold text-tinta-suave">Perfil de Google: por confirmar</p>
          )}
        </div>
      </Container>
    </section>
  )
}
