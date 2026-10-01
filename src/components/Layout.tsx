import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { WhatsAppFab } from './WhatsAppFab'

/** Lleva al ancla (#zona, #preguntas…) o al inicio de la página al cambiar de ruta. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduce = useReducedMotion()
  useScrollOnNavigate()

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-profundo px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="contenido"
          key={location.pathname}
          className="flex-1"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.12 } }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        >
          <Suspense fallback={<div className="min-h-[60vh]" />}>{outlet}</Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
