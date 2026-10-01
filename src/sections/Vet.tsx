import { ArrowSquareOutIcon, CameraIcon } from '@phosphor-icons/react'
import { Plate } from '../components/Plate'
import { Container, Pending } from '../components/Section'
import { site } from '../data/site'

export function Vet() {
  const { vet } = site
  return (
    <section id="veterinario" aria-labelledby="vet-title" className="bg-profundo py-20 text-white sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* PENDIENTE: foto real del Dr. Eric trabajando. Nunca foto de stock. */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[0.5rem] border-[3px] border-white/90 bg-clinico">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:var(--spacing-tile)_var(--spacing-tile)]"
            />
            <div className="relative grid h-full place-items-center p-8 text-center">
              <div>
                <CameraIcon weight="duotone" className="mx-auto size-12 text-celeste" aria-hidden="true" />
                <p className="mt-4 font-display text-2xl font-medium">Foto del Dr. Eric en consulta</p>
                <p className="mt-2 text-celeste">Espacio reservado para una foto real</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 id="vet-title" className="text-[2.1rem] leading-[1.08] font-semibold text-white sm:text-[2.75rem]">
            Te atiende el {vet.shortName}
          </h2>
          <p className="mt-5 text-xl text-celeste">
            {vet.name}, {vet.title.toLowerCase()}.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-celeste">Formación</dt>
              <dd className="mt-1 text-lg">{vet.education ?? <span className="text-white/75 italic">Por confirmar</span>}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-celeste">Experiencia</dt>
              <dd className="mt-1 text-lg">
                {vet.yearsExperience ? `${vet.yearsExperience} años` : <span className="text-white/75 italic">Por confirmar</span>}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Plate shape="wide" className="w-full max-w-[19rem] shrink-0">
              <span className="block text-[0.8rem] font-semibold text-tinta-suave">Cédula profesional</span>
              <span className="tabular mt-0.5 block font-display text-[1.9rem] leading-none font-semibold">
                {vet.license ?? <Pending>Número pendiente</Pending>}
              </span>
            </Plate>
            <p className="text-celeste">
              Cualquiera puede verificarla en el Registro Nacional de Profesionistas.{' '}
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-white underline decoration-white/40 hover:decoration-white"
              >
                Verificar en la SEP
                <ArrowSquareOutIcon className="size-4" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
