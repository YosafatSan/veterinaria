import { GhostLink, WaButton } from '../components/Buttons'
import { DoorScene } from '../components/DoorScene'
import { Container } from '../components/Section'
import { waGeneric } from '../lib/whatsapp'

/** RF-07: 404 útil, con salida a inicio y a WhatsApp. */
export default function NotFound() {
  return (
    <>
      <title>Página no encontrada · Puerta Azul</title>
      <meta name="robots" content="noindex" />
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <h1 className="text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.5rem]">Tocamos, pero aquí no hay nadie.</h1>
          <p className="mt-5 max-w-md text-lg text-tinta-suave">
            Esta página no existe o cambió de lugar. Vuelve al inicio o escríbenos y te ayudamos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WaButton href={waGeneric()} size="lg">
              Escribir por WhatsApp
            </WaButton>
            <GhostLink to="/">Ir al inicio</GhostLink>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-[0.5rem] border-[3px] border-profundo">
          <DoorScene label="404" className="block h-auto w-full" />
        </div>
      </Container>
    </>
  )
}
