import type { Faq, Species, Step, VaccineRow, Zone } from './types'

// PENDIENTE: confirmar los pasos reales con el veterinario.
export const steps: Step[] = [
  {
    title: 'Nos escribes',
    body: 'Por WhatsApp o con el formulario. Cuéntanos de tu mascota y qué necesita.',
  },
  {
    title: 'Agendamos',
    body: 'Te confirmamos día, hora aproximada de llegada y precio estimado.',
  },
  {
    title: 'Llegamos a tu casa',
    body: 'El veterinario atiende a tu mascota en su espacio, sin traslados ni sala de espera.',
  },
  {
    title: 'Damos seguimiento',
    body: 'Te enviamos indicaciones por escrito y te avisamos cuándo toca la siguiente visita.',
  },
]

// PENDIENTE: especies que atiende. Provisional: perros y gatos.
export const species: { id: Species; name: string; note: string }[] = [
  { id: 'perro', name: 'Perros', note: 'De cachorros a mayores, de cualquier tamaño.' },
  { id: 'gato', name: 'Gatos', note: 'Sin transportadora ni viaje en coche: menos estrés.' },
]

// PENDIENTE: municipios, colonias y costo de traslado reales.
export const zones: Zone[] = [
  { municipality: 'Guadalajara', areas: [], travelFee: null },
  { municipality: 'Zapopan', areas: [], travelFee: null },
  { municipality: 'Tlaquepaque', areas: [], travelFee: null },
  { municipality: 'Tonalá', areas: [], travelFee: null },
  { municipality: 'Tlajomulco', areas: [], travelFee: null },
]

// Calendario orientativo. PENDIENTE: validar con el veterinario antes de publicar.
export const vaccination: Record<'perro' | 'gato', VaccineRow[]> = {
  perro: [
    { age: '6 a 8 semanas', what: 'Primera vacuna (parvovirus y moquillo) y desparasitación' },
    { age: '9 a 11 semanas', what: 'Vacuna múltiple' },
    { age: '12 a 14 semanas', what: 'Refuerzo de la múltiple' },
    { age: '16 semanas', what: 'Vacuna antirrábica' },
    { age: 'Cada año', what: 'Refuerzo de múltiple y antirrábica' },
  ],
  gato: [
    { age: '8 semanas', what: 'Triple felina y desparasitación' },
    { age: '12 semanas', what: 'Refuerzo de triple felina' },
    { age: '16 semanas', what: 'Vacuna antirrábica' },
    { age: 'Cada año', what: 'Refuerzo de triple felina y antirrábica' },
  ],
}

export const deworming =
  'Desparasitación: cada 15 días hasta los 3 meses, cada mes hasta los 6 y después cada 3 meses.'

// Guía orientativa de urgencias por nivel. PENDIENTE: validar los casos con el veterinario.
export const urgencyTiers = {
  calma: {
    title: 'Puede esperar a la cita',
    cases: ['Vómito o diarrea leve, una vez', 'Comezón o caída de pelo', 'Vacunas o desparasitación atrasadas', 'Revisión de rutina'],
  },
  urgente: {
    title: 'Escríbenos hoy mismo',
    cases: ['Cojea o se queja al moverse', 'Herida pequeña o mordida', 'Ojo rojo o lloroso', 'No ha comido en más de un día'],
  },
  grave: {
    title: 'Ve directo a un hospital 24 h',
    cases: ['Le cuesta respirar', 'Convulsiones o desmayo', 'Atropellamiento o caída fuerte', 'Sangrado que no se detiene', 'Comió veneno o algo tóxico'],
  },
}

// PENDIENTE: respuestas reales.
export const faqs: Faq[] = [
  {
    q: '¿Cómo puedo pagar?',
    a: 'Te confirmamos el total antes de empezar la consulta. Formas de pago: pendiente de confirmar con el veterinario.',
  },
  {
    q: '¿Cuánto tardan en llegar?',
    a: 'Al agendar te damos una ventana de llegada. El día de la visita te escribimos cuando vamos en camino.',
  },
  {
    q: '¿Qué preparo antes de la visita?',
    a: 'Un espacio con buena luz, la cartilla de vacunación si la tienes y a tu mascota en un cuarto cerrado para que no se esconda.',
  },
  {
    q: '¿Qué pasa si mi mascota necesita hospitalización o cirugía?',
    a: 'Te explicamos las opciones y te referimos a un hospital veterinario de confianza, con su historial para que no empiecen de cero.',
  },
  {
    q: '¿Emiten factura?',
    a: 'Pendiente de confirmar con el veterinario.',
  },
]
