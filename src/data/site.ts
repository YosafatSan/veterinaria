import type { Hours } from './types'

// Datos generales del negocio.
// Todo lo marcado PENDIENTE es provisional y debe reemplazarse con datos del cliente antes de publicar.

export const site = {
  /** PENDIENTE: nombre provisional del negocio. */
  name: 'Puerta Azul',
  tagline: 'Veterinaria a domicilio',
  region: 'zona metropolitana de Guadalajara',

  vet: {
    name: 'Eric Ismael Rosales Sánchez',
    shortName: 'Dr. Eric Rosales',
    title: 'Médico Veterinario Zootecnista',
    /** PENDIENTE: número de cédula y autorización para mostrarlo. */
    license: null as string | null,
    /** PENDIENTE: formación y años de experiencia. */
    education: null as string | null,
    yearsExperience: null as number | null,
  },

  contact: {
    /** PENDIENTE: número de WhatsApp Business en formato internacional, sin signos. */
    whatsapp: '523300000000',
    /** PENDIENTE: teléfono para llamadas, p. ej. '+523312345678' y '33 1234 5678'. */
    phone: null as string | null,
    phoneDisplay: null as string | null,
    /** PENDIENTE: redes sociales. Dejar en null las que no existan. */
    instagram: null as string | null,
    facebook: null as string | null,
    /** PENDIENTE: enlace directo para dejar reseña en Google Business Profile. */
    googleReviews: null as string | null,
  },

  /** PENDIENTE: horarios reales, p. ej. [{ days: 'Lunes a viernes', time: '9:00 a 19:00' }]. */
  hours: [] as Hours[],

  /** PENDIENTE: formas de pago, p. ej. ['Efectivo', 'Transferencia']. */
  payments: [] as string[],
  invoices: null as boolean | null,

  /** PENDIENTE: si los precios incluyen IVA (LFPC exige informarlo). */
  pricesIncludeVat: null as boolean | null,
  /** Fecha visible de última actualización de precios. */
  pricesUpdated: '30 de septiembre de 2026',

  urgencies: {
    /** PENDIENTE: horario en que se atienden urgencias. */
    hours: null as string | null,
    /** PENDIENTE: hospital veterinario 24 h de referencia. */
    hospital: null as string | null,
    hospitalPhone: null as string | null,
  },

  /** PENDIENTE: confirmar que ofrece eutanasia humanitaria a domicilio. */
  offersEuthanasia: true,

  /** Registro Nacional de Profesionistas (SEP) para verificar la cédula. */
  licenseVerifyUrl: 'https://www.cedulaprofesional.sep.gob.mx/',
} as const
