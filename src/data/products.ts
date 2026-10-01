import type { Species } from './types'

// Catálogo en modo exhibición (PRD §8).
// Solo alimento, accesorios, higiene y productos de LIBRE VENTA (NOM-064-ZOO-2000, Grupo III).
// Los medicamentos con receta (Grupos I y II) NO se publican aquí.
// PENDIENTE: productos reales con foto, presentación y precio, validados por el veterinario.

export type ProductCategory = 'alimento' | 'accesorios' | 'higiene' | 'libre-venta'

export interface Product {
  id: string
  name: string
  presentation: string
  price: number | null
  category: ProductCategory
  species: Species[]
  /** Ruta relativa dentro de /public, por ejemplo "productos/croquetas.webp". */
  image: string | null
}

export const productCategoryLabels: Record<ProductCategory, string> = {
  alimento: 'Alimento',
  accesorios: 'Accesorios',
  higiene: 'Higiene',
  'libre-venta': 'Libre venta',
}

export const products: Product[] = []
