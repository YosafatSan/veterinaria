import { PackageIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { WaButton } from '../components/Buttons'
import { Container } from '../components/Section'
import { productCategoryLabels, products, type ProductCategory } from '../data/products'
import type { Species } from '../data/types'
import { waGeneric, waProduct } from '../lib/whatsapp'

type Filter<T> = T | 'todas'

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 font-semibold transition-[background-color,color,transform] duration-150 active:scale-[0.97] ${
        active ? 'bg-profundo text-white' : 'bg-white text-profundo ring-1 ring-junta hover:bg-celeste'
      }`}
    >
      {children}
    </button>
  )
}

export default function Catalogo() {
  const [cat, setCat] = useState<Filter<ProductCategory>>('todas')
  const [sp, setSp] = useState<Filter<Species>>('todas')

  const list = useMemo(
    () =>
      products.filter((p) => (cat === 'todas' || p.category === cat) && (sp === 'todas' || p.species.includes(sp))),
    [cat, sp],
  )

  return (
    <>
      <title>Catálogo · Puerta Azul, veterinario a domicilio</title>
      <meta name="description" content="Alimento, accesorios e higiene para tu mascota. Pide por WhatsApp y te lo llevamos en la consulta." />
      <section className="relative pt-14 pb-10 sm:pt-20">
        <div aria-hidden="true" className="tile-wall absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_30%,transparent)]" />
        <Container>
          <h1 className="text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.5rem]">Catálogo</h1>
          <p className="mt-5 max-w-2xl text-lg text-tinta-suave">
            Alimento, accesorios, higiene y productos de libre venta. Pide por WhatsApp; la existencia se confirma al
            hacer tu pedido. Los medicamentos que requieren receta se indican dentro de la consulta.
          </p>
        </Container>
      </section>

      <Container className="pb-24">
        <div className="flex flex-col gap-4 border-y border-junta py-5">
          <div role="group" aria-label="Categoría" className="flex flex-wrap gap-2">
            <Chip active={cat === 'todas'} onClick={() => setCat('todas')}>
              Todo
            </Chip>
            {(Object.keys(productCategoryLabels) as ProductCategory[]).map((c) => (
              <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
                {productCategoryLabels[c]}
              </Chip>
            ))}
          </div>
          <div role="group" aria-label="Especie" className="flex flex-wrap gap-2">
            {(['todas', 'perro', 'gato'] as const).map((s) => (
              <Chip key={s} active={sp === s} onClick={() => setSp(s)}>
                {s === 'todas' ? 'Perros y gatos' : s === 'perro' ? 'Perros' : 'Gatos'}
              </Chip>
            ))}
          </div>
        </div>

        {list.length === 0 ? (
          <div className="mt-12 grid place-items-center rounded-[0.6rem] px-6 py-16 text-center ring-1 ring-junta">
            <PackageIcon weight="duotone" className="size-12 text-clinico" aria-hidden="true" />
            <h2 className="mt-5 text-[1.8rem] font-semibold">
              {products.length === 0 ? 'Estamos armando el catálogo' : 'Nada en esta combinación'}
            </h2>
            <p className="mt-3 max-w-md text-tinta-suave">
              {products.length === 0
                ? 'Mientras tanto, pregúntanos por el alimento o accesorio que buscas y te decimos si lo tenemos.'
                : 'Prueba con otra categoría o especie.'}
            </p>
            <WaButton href={waGeneric()} className="mt-7">
              Preguntar por WhatsApp
            </WaButton>
          </div>
        ) : (
          <motion.ul layout className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.li
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="aspect-square overflow-hidden rounded-[0.5rem] bg-esmalte ring-1 ring-junta">
                    {p.image && (
                      <img
                        src={`${import.meta.env.BASE_URL}${p.image}`}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover"
                      />
                    )}
                  </div>
                  <h2 className="mt-3 font-sans text-base font-bold text-profundo">{p.name}</h2>
                  <p className="text-sm text-tinta-suave">{p.presentation}</p>
                  <p className="tabular mt-1 font-semibold">
                    {p.price === null
                      ? 'Precio por confirmar'
                      : p.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-tinta-suave">Consultar existencia</p>
                  <a
                    href={waProduct(`${p.name} (${p.presentation})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-10 items-center font-semibold text-clinico underline decoration-clinico/30 hover:decoration-clinico"
                  >
                    Pedir por WhatsApp
                  </a>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </Container>
    </>
  )
}
