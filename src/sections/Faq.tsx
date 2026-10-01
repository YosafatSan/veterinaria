import { PlusIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useId, useState } from 'react'
import { Container, SectionHead } from '../components/Section'
import { faqs } from '../data/content'

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <li className="border-b border-junta">
      <h3 className="font-sans">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-[1.15rem] font-semibold text-profundo transition-colors duration-150 hover:text-clinico"
        >
          {q}
          <PlusIcon
            weight="bold"
            aria-hidden="true"
            className={`size-5 shrink-0 text-clinico transition-transform duration-200 ease-out ${open ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-tinta-suave">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="preguntas-title" title="Preguntas frecuentes" />
        </div>
        <ul className="border-t-2 border-profundo lg:col-span-8">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
