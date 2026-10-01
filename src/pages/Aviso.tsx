import { Container } from '../components/Section'
import { site } from '../data/site'

// PENDIENTE: texto legal definitivo del aviso de privacidad integral (LFPDPPP), revisado por el cliente.
// Este esqueleto lista los apartados que la ley exige; el contenido debe completarse antes de publicar.

const SECTIONS: { title: string; body: string }[] = [
  {
    title: 'Responsable de tus datos',
    body: `${site.vet.name}, que opera con el nombre comercial ${site.name}, es responsable del tratamiento de tus datos personales. Domicilio para oír notificaciones y correo de contacto: por confirmar.`,
  },
  {
    title: 'Datos que recabamos',
    body: 'Tu nombre, el nombre, especie y edad de tu mascota, tu colonia y municipio, tu horario preferido y los comentarios que nos compartas. No recabamos datos sensibles ni financieros a través de este sitio.',
  },
  {
    title: 'Para qué los usamos',
    body: 'Para agendar y dar seguimiento a la consulta veterinaria a domicilio, calcular el traslado y comunicarnos contigo. No los usamos con fines publicitarios.',
  },
  {
    title: 'Cómo se transmiten',
    body: 'Este sitio no almacena tus datos. Al enviar el formulario se abre WhatsApp con un mensaje que tú decides enviar; a partir de ahí, la conversación se rige también por la política de privacidad de WhatsApp.',
  },
  {
    title: 'Transferencias',
    body: 'Solo compartiremos información de tu mascota con un hospital veterinario cuando sea necesario referirla y con tu consentimiento.',
  },
  {
    title: 'Derechos ARCO',
    body: 'Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos, o revocar tu consentimiento, escribiéndonos por WhatsApp o al correo de contacto (por confirmar).',
  },
  {
    title: 'Cambios a este aviso',
    body: 'Cualquier cambio se publicará en esta misma página.',
  },
]

export default function Aviso() {
  return (
    <>
      <title>Aviso de privacidad · Puerta Azul</title>
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-[42rem]">
          <h1 className="text-[2.4rem] leading-[1.06] font-semibold sm:text-[3rem]">Aviso de privacidad</h1>
          <p className="mt-4 text-tinta-suave">Última actualización: por confirmar.</p>
          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2 className="text-[1.5rem] font-semibold">{s.title}</h2>
                <p className="mt-3 text-tinta-suave">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
