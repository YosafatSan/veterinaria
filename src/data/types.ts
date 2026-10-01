// Tipos de los archivos de datos. Editar los datos en este folder no requiere tocar componentes.

export type Species = 'perro' | 'gato' | 'otra'

export interface Service {
  id: string
  name: string
  /** Descripción en lenguaje simple, una o dos líneas. */
  summary: string
  /** Precio "desde" en pesos mexicanos. `null` = por confirmar. */
  priceFrom: number | null
  category: ServiceCategory
  featured?: boolean
}

export type ServiceCategory =
  | 'consulta'
  | 'vacunacion'
  | 'desparasitacion'
  | 'estudios'
  | 'procedimientos'

export interface Zone {
  municipality: string
  /** Colonias o sectores atendidos; vacío = todo el municipio. */
  areas: string[]
  /** Costo de traslado en pesos. 0 = sin costo, `null` = por confirmar. */
  travelFee: number | null
}

export interface Step {
  title: string
  body: string
}

export interface Faq {
  q: string
  a: string
}

export interface VaccineRow {
  age: string
  what: string
}

export interface Hours {
  days: string
  time: string
}
