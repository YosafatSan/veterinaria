import { CheckCircleIcon, ClockIcon, CreditCardIcon, PhoneIcon, WarningIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { WaButton } from '../components/Buttons'
import { Container, SectionHead } from '../components/Section'
import { zones } from '../data/content'
import { services } from '../data/services'
import { site } from '../data/site'
import { waGeneric, waLink } from '../lib/whatsapp'

const OTHER = 'Otro'

const FIELDS = {
  owner: { label: 'Tu nombre', max: 60 },
  pet: { label: 'Nombre de tu mascota', max: 40 },
  species: { label: 'Especie', max: 20 },
  age: { label: 'Edad aproximada', max: 30 },
  service: { label: 'Servicio que te interesa', max: 80 },
  municipality: { label: 'Municipio', max: 40 },
  area: { label: 'Colonia', max: 60 },
  time: { label: 'Horario preferido', max: 30 },
  notes: { label: 'Comentarios', max: 400 },
} as const

type Key = keyof typeof FIELDS
type Values = Record<Key, string>
type Errors = Partial<Record<Key | 'privacy', string>>

const empty: Values = { owner: '', pet: '', species: '', age: '', service: '', municipality: '', area: '', time: '', notes: '' }

const REQUIRED_MSG: Record<Exclude<Key, 'notes'>, string> = {
  owner: 'Escribe tu nombre para saber cómo dirigirnos a ti.',
  pet: 'Escribe el nombre de tu mascota.',
  species: 'Elige si es perro, gato u otra especie.',
  age: 'Escribe una edad aproximada, por ejemplo "3 años" o "4 meses".',
  service: 'Elige el servicio que necesitas. Si no estás seguro, elige "Otro".',
  municipality: 'Elige tu municipio para confirmar que llegamos.',
  area: 'Escribe tu colonia para calcular el traslado.',
  time: 'Elige el horario que más te acomoda.',
}

function validate(v: Values, privacy: boolean): Errors {
  const e: Errors = {}
  for (const k of Object.keys(REQUIRED_MSG) as (keyof typeof REQUIRED_MSG)[]) {
    if (!v[k].trim()) e[k] = REQUIRED_MSG[k]
  }
  if (!privacy) e.privacy = 'Para enviar tu solicitud necesitamos que aceptes el aviso de privacidad.'
  return e
}

function buildMessage(v: Values) {
  const t = (s: string) => s.trim().replace(/\s+/g, ' ')
  const lines = [
    `Hola, quiero agendar una consulta a domicilio con ${site.name}.`,
    '',
    `Mi nombre: ${t(v.owner)}`,
    `Mascota: ${t(v.pet)} (${t(v.species)}, ${t(v.age)})`,
    `Servicio: ${t(v.service)}`,
    `Zona: ${t(v.area)}, ${t(v.municipality)}`,
    `Horario preferido: ${t(v.time)}`,
  ]
  if (v.notes.trim()) lines.push(`Comentarios: ${t(v.notes)}`)
  return lines.join('\n')
}

const selectCls = 'select-chevron pr-11'

const inputCls =
  'block min-h-[3.375rem] w-full rounded-[0.4rem] border-2 bg-white px-4 py-3 text-[1.0625rem] text-tinta transition-[border-color,box-shadow] duration-150 placeholder:text-[#5f7489] focus:border-clinico focus:shadow-[0_0_0_4px_var(--color-celeste)] focus:outline-none'

function Field({
  name,
  error,
  hint,
  optional,
  children,
}: {
  name: Key
  error?: string
  hint?: string
  optional?: boolean
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`f-${name}`} className="font-semibold text-tinta">
        {FIELDS[name].label}
        {optional && <span className="font-normal text-tinta-suave"> (opcional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`f-${name}-hint`} className="text-sm text-tinta-suave">
          {hint}
        </p>
      )}
      {error && (
        <p id={`f-${name}-error`} className="flex items-start gap-1.5 text-sm font-semibold text-[#b42318]">
          <WarningIcon weight="bold" className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export function RequestForm() {
  const [values, setValues] = useState<Values>(empty)
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [coverageAck, setCoverageAck] = useState(false)
  const [sent, setSent] = useState(false)
  const [cooldown, setCooldown] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const outOfCoverage = values.municipality === OTHER

  const set = (k: Key) => (e: { target: { value: string } }) => {
    const value = e.target.value.slice(0, FIELDS[k].max)
    setValues((v) => ({ ...v, [k]: value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
    if (k === 'municipality') setCoverageAck(false)
  }

  const a11y = (k: Key, extra = '') => ({
    id: `f-${k}`,
    name: k,
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `f-${k}-error` : undefined,
    className: `${inputCls} ${extra} ${errors[k] ? 'border-[#b42318]' : 'border-junta'}`,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (cooldown) return
    const found = validate(values, privacy)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#f-${first}`)?.focus()
      return
    }
    if (outOfCoverage && !coverageAck) return
    window.open(waLink(buildMessage(values)), '_blank', 'noopener,noreferrer')
    setSent(true)
    setCooldown(true)
    window.setTimeout(() => setCooldown(false), 4000)
  }

  return (
    <section id="agendar" aria-labelledby="agendar-title" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="tile-wall absolute inset-0 -z-10 max-sm:opacity-45" />
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHead id="agendar-title" title="Pide tu cita">
            Llena los datos y abrimos WhatsApp con tu mensaje listo. Tú decides si lo envías.
          </SectionHead>

          <div id="contacto" className="mt-10 space-y-7">
            <div>
              <h3 className="font-sans text-base font-bold text-profundo">¿Prefieres escribir directo?</h3>
              <WaButton href={waGeneric()} className="mt-3">
                Abrir WhatsApp
              </WaButton>
              {site.contact.phone ? (
                <a href={`tel:${site.contact.phone}`} className="mt-3 flex min-h-11 items-center gap-2 font-semibold text-clinico hover:underline">
                  <PhoneIcon weight="bold" className="size-5" aria-hidden="true" />
                  Llamar al <span className="tabular">{site.contact.phoneDisplay}</span>
                </a>
              ) : (
                <p className="mt-3 flex min-h-11 items-center gap-2 text-tinta-suave">
                  <PhoneIcon weight="bold" className="size-5" aria-hidden="true" />
                  <span className="italic">Teléfono por confirmar</span>
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <ClockIcon weight="duotone" className="mt-0.5 size-6 shrink-0 text-clinico" aria-hidden="true" />
              {site.hours.length > 0 ? (
                <dl>
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt className="font-semibold">{h.days}:</dt>
                      <dd className="tabular text-tinta-suave">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p>
                  <span className="font-semibold">Horario: </span>
                  <span className="text-tinta-suave italic">por confirmar</span>
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <CreditCardIcon weight="duotone" className="mt-0.5 size-6 shrink-0 text-clinico" aria-hidden="true" />
              <p>
                <span className="font-semibold">Formas de pago: </span>
                {site.payments.length > 0 ? (
                  <span className="text-tinta-suave">{site.payments.join(', ')}.</span>
                ) : (
                  <span className="text-tinta-suave italic">por confirmar</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          className="rounded-[0.6rem] bg-white p-5 shadow-[0_24px_48px_-30px_rgb(14_74_123/0.6)] ring-1 ring-junta sm:p-8 lg:col-span-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field name="owner" error={errors.owner}>
              <input {...a11y('owner')} type="text" autoComplete="name" value={values.owner} onChange={set('owner')} maxLength={FIELDS.owner.max} />
            </Field>
            <Field name="pet" error={errors.pet}>
              <input {...a11y('pet')} type="text" autoComplete="off" value={values.pet} onChange={set('pet')} maxLength={FIELDS.pet.max} />
            </Field>
            <Field name="species" error={errors.species}>
              <select {...a11y('species', selectCls)} value={values.species} onChange={set('species')}>
                <option value="">Elige una opción</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Otra especie</option>
              </select>
            </Field>
            <Field name="age" error={errors.age} hint='Por ejemplo "3 años" o "4 meses".'>
              <input
                {...a11y('age')}
                aria-describedby={errors.age ? 'f-age-error' : 'f-age-hint'}
                type="text"
                value={values.age}
                onChange={set('age')}
                maxLength={FIELDS.age.max}
              />
            </Field>
            <Field name="service" error={errors.service}>
              <select {...a11y('service', selectCls)} value={values.service} onChange={set('service')}>
                <option value="">Elige una opción</option>
                {services.map((s) => (
                  <option key={s.id}>{s.name}</option>
                ))}
                <option>{OTHER}</option>
              </select>
            </Field>
            <Field name="time" error={errors.time}>
              <select {...a11y('time', selectCls)} value={values.time} onChange={set('time')}>
                <option value="">Elige una opción</option>
                <option>Mañana</option>
                <option>Mediodía</option>
                <option>Tarde</option>
                <option>Cualquier horario</option>
              </select>
            </Field>
            <Field name="municipality" error={errors.municipality}>
              <select {...a11y('municipality', selectCls)} value={values.municipality} onChange={set('municipality')}>
                <option value="">Elige una opción</option>
                {zones.map((z) => (
                  <option key={z.municipality}>{z.municipality}</option>
                ))}
                <option value={OTHER}>Otro municipio</option>
              </select>
            </Field>
            <Field name="area" error={errors.area}>
              <input {...a11y('area')} type="text" autoComplete="address-level3" value={values.area} onChange={set('area')} maxLength={FIELDS.area.max} />
            </Field>
            <div className="sm:col-span-2">
              <Field name="notes" optional>
                <textarea {...a11y('notes')} rows={3} value={values.notes} onChange={set('notes')} maxLength={FIELDS.notes.max} />
              </Field>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {outOfCoverage && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div role="status" className="mt-6 flex gap-3 rounded-[0.4rem] bg-celeste p-4 text-tinta">
                  <WarningIcon weight="duotone" className="mt-0.5 size-6 shrink-0 text-profundo" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-profundo">Tu municipio está fuera de nuestra zona habitual.</p>
                    <p className="mt-1 text-tinta-suave">
                      Puede que no lleguemos o que el traslado cueste más. Envíanos tu solicitud y te confirmamos.
                    </p>
                    <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 font-semibold">
                      <input
                        type="checkbox"
                        checked={coverageAck}
                        onChange={(e) => setCoverageAck(e.target.checked)}
                        className="size-5 accent-clinico"
                      />
                      Entendido, quiero enviarla de todos modos
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-7 border-t border-junta pt-6">
            <label htmlFor="f-privacy" className="flex cursor-pointer items-start gap-3">
              <input
                id="f-privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => {
                  setPrivacy(e.target.checked)
                  if (errors.privacy) setErrors((er) => ({ ...er, privacy: undefined }))
                }}
                aria-invalid={errors.privacy ? true : undefined}
                aria-describedby={errors.privacy ? 'f-privacy-error aviso-simplificado' : 'aviso-simplificado'}
                className="mt-0.5 size-6 shrink-0 cursor-pointer accent-profundo"
              />
              <span className="font-semibold">
                Acepto el{' '}
                <Link to="/aviso-de-privacidad" className="text-clinico underline">
                  aviso de privacidad
                </Link>
                .
              </span>
            </label>
            <p id="aviso-simplificado" className="mt-2 pl-8 text-sm text-tinta-suave">
              {site.name} usa estos datos solo para agendar tu cita. Viajan en tu mensaje de WhatsApp; este sitio no los
              guarda.
            </p>
            {errors.privacy && (
              <p id="f-privacy-error" className="mt-2 flex items-start gap-1.5 pl-8 text-sm font-semibold text-[#b42318]">
                <WarningIcon weight="bold" className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {errors.privacy}
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
            {/* Remate de la ruta: el trazo entra desde el borde del panel y termina en el botón, como en el mapa */}
            <span aria-hidden="true" className="hidden items-center sm:-ml-8 sm:flex">
              <span className="h-[5px] w-36 bg-clinico" />
              <span className="-ml-0.5 size-[1.15rem] shrink-0 rounded-full border-[3.5px] border-profundo bg-white" />
            </span>
            <button
              type="submit"
              disabled={cooldown || (outOfCoverage && !coverageAck)}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-wa px-7 text-[1.0625rem] font-semibold text-tinta shadow-[0_8px_20px_-10px_rgb(20_40_59/0.55)] transition-[transform,background-color,opacity] duration-150 hover:bg-[#3ddc79] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-55 disabled:active:scale-100"
            >
              {cooldown ? 'Abriendo WhatsApp…' : 'Enviar por WhatsApp'}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-2 font-semibold text-profundo sm:ml-5"
                >
                  <CheckCircleIcon weight="fill" className="size-6 text-clinico" aria-hidden="true" />
                  Listo: solo falta que envíes el mensaje en WhatsApp.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </Container>
    </section>
  )
}
