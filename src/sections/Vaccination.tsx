import { motion } from 'motion/react'
import { useId, useState, type KeyboardEvent } from 'react'
import { WaButton } from '../components/Buttons'
import { Plate } from '../components/Plate'
import { Container, SectionHead } from '../components/Section'
import { deworming, vaccination } from '../data/content'
import { waService } from '../lib/whatsapp'

const TABS = [
  { id: 'perro', label: 'Perros' },
  { id: 'gato', label: 'Gatos' },
] as const

type TabId = (typeof TABS)[number]['id']

export function Vaccination() {
  const [tab, setTab] = useState<TabId>('perro')
  const uid = useId()

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const i = TABS.findIndex((t) => t.id === tab)
    const next = TABS[(i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length]
    setTab(next.id)
    document.getElementById(`${uid}-${next.id}`)?.focus()
  }

  return (
    <section id="vacunacion" aria-labelledby="vacunacion-title" className="bg-celeste py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead id="vacunacion-title" title="Su calendario de vacunas y desparasitación">
            Una guía general por edad. En la consulta el veterinario lo ajusta a la salud y el historial de tu
            mascota.
          </SectionHead>
          <WaButton href={waService('vacunación')} size="lg" className="shrink-0 self-start lg:self-end">
            Agendar vacuna
          </WaButton>
        </div>

        <div role="tablist" aria-label="Especie" className="mt-12 inline-flex rounded-full bg-white p-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              id={`${uid}-${t.id}`}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={`${uid}-panel`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={onKey}
              className={`relative min-h-11 rounded-full px-6 font-semibold transition-colors duration-200 ${
                tab === t.id ? 'text-white' : 'text-profundo hover:text-clinico'
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId={`${uid}-pill`}
                  className="absolute inset-0 rounded-full bg-profundo"
                  transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${tab}`} className="mt-8">
          <motion.ol
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5"
            aria-label={`Calendario orientativo para ${tab === 'perro' ? 'perros' : 'gatos'}`}
          >
            {vaccination[tab].map((row) => (
              <li key={row.age}>
                <Plate>
                  <span className="tabular block font-display text-[1.35rem] leading-[1.1] font-semibold sm:text-[1.5rem]">
                    {row.age}
                  </span>
                </Plate>
                <p className="mt-4 text-tinta">{row.what}</p>
              </li>
            ))}
          </motion.ol>
          <p className="mt-10 max-w-[62ch] border-t border-profundo/15 pt-5 text-tinta-suave">{deworming}</p>
        </div>
      </Container>
    </section>
  )
}
