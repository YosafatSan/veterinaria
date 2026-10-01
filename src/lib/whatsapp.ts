import { site } from '../data/site'

/** Arma un enlace wa.me con el mensaje codificado. No se guarda ningún dato. */
export function waLink(message: string): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const waGeneric = () =>
  waLink(`Hola, quiero agendar una consulta a domicilio con ${site.name}.`)

export const waService = (service: string) =>
  waLink(`Hola, me interesa el servicio de ${service} a domicilio. ¿Me pueden dar informes?`)

export const waProduct = (product: string) =>
  waLink(`Hola, quiero pedir: ${product}. ¿Tienen existencia?`)

export function formatPrice(value: number | null): string {
  if (value === null) return 'Precio por confirmar'
  return `desde ${value.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })}`
}
