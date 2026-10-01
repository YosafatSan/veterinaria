import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { waGeneric } from '../lib/whatsapp'

/** RF-01: botón flotante de WhatsApp. Aparece suave tras el primer scroll; sin rebotes. */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 240))

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waGeneric()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex h-14 items-center gap-2 rounded-full bg-wa pr-5 pl-4 font-semibold text-tinta shadow-[0_12px_28px_-10px_rgb(20_40_59/0.6)] transition-[background-color] duration-150 hover:bg-[#3ddc79] active:scale-[0.97] sm:right-6 sm:bottom-6"
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <WhatsappLogoIcon weight="bold" className="size-6" aria-hidden="true" />
          <span className="hidden sm:inline">Escríbenos</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
