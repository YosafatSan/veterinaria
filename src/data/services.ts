import type { Service, ServiceCategory } from './types'

// PENDIENTE: lista real de servicios y precios "desde". priceFrom: null muestra "Precio por confirmar".

export const categoryLabels: Record<ServiceCategory, string> = {
  consulta: 'Consulta',
  vacunacion: 'Vacunación',
  desparasitacion: 'Desparasitación',
  estudios: 'Estudios',
  procedimientos: 'Procedimientos',
}

export const services: Service[] = [
  {
    id: 'consulta-general',
    name: 'Consulta general a domicilio',
    summary: 'Revisión completa en tu casa: peso, temperatura, corazón, piel, oídos y dientes.',
    priceFrom: null,
    category: 'consulta',
    featured: true,
  },
  {
    id: 'vacunacion',
    name: 'Vacunación',
    summary: 'Cartilla al día para cachorros, adultos y gatitos, con registro en su cartilla.',
    priceFrom: null,
    category: 'vacunacion',
    featured: true,
  },
  {
    id: 'desparasitacion',
    name: 'Desparasitación',
    summary: 'Interna y externa, con la dosis según el peso de tu mascota.',
    priceFrom: null,
    category: 'desparasitacion',
    featured: true,
  },
  {
    id: 'estudios',
    name: 'Toma de muestras y estudios',
    summary: 'Análisis de sangre, orina y heces tomados en casa y enviados a laboratorio.',
    priceFrom: null,
    category: 'estudios',
    featured: true,
  },
  {
    id: 'geriatrico',
    name: 'Control de mascota mayor',
    summary: 'Seguimiento para perros y gatos mayores, sin el estrés del traslado.',
    priceFrom: null,
    category: 'consulta',
    featured: true,
  },
  {
    id: 'curaciones',
    name: 'Curaciones y aplicación de tratamientos',
    summary: 'Heridas, vendajes, sueros e inyecciones indicadas en la consulta.',
    priceFrom: null,
    category: 'procedimientos',
    featured: true,
  },
]

export const featuredServices = services.filter((s) => s.featured)
