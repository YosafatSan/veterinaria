import { ListIcon, XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { waGeneric } from '../lib/whatsapp'
import { WaButton } from './Buttons'
import { Logo } from './Logo'

const LINKS = [
  { to: '/servicios', label: 'Servicios y precios' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/#como-funciona', label: 'Cómo funciona' },
  { to: '/#zona', label: 'Zona' },
  { to: '/#preguntas', label: 'Preguntas' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
        scrolled || open ? 'shadow-[0_1px_0_var(--color-junta),0_8px_24px_-18px_rgb(14_74_123/0.4)]' : ''
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Puerta Azul, inicio" className="rounded-md">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors duration-150 hover:bg-celeste hover:text-profundo ${
                    isActive && !l.to.includes('#') ? 'text-clinico' : 'text-tinta'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <WaButton href={waGeneric()}>Agendar</WaButton>
          </span>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full text-profundo transition-[background-color,transform] duration-150 hover:bg-celeste active:scale-[0.95] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="size-6" weight="bold" /> : <ListIcon className="size-6" weight="bold" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="menu-movil"
            className="overflow-hidden border-t border-junta bg-white lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 0, transition: { duration: 0.16 } }}
            transition={{ duration: 0.26, ease: [0.32, 0.72, 0, 1] }}
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex min-h-12 items-center rounded-lg px-2 text-lg font-semibold text-tinta hover:bg-celeste"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 pb-2 sm:hidden">
                <WaButton href={waGeneric()} size="lg" className="w-full">
                  Agendar por WhatsApp
                </WaButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
