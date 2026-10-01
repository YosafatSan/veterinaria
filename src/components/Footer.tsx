import { FacebookLogoIcon, InstagramLogoIcon, PhoneIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { zones } from '../data/content'
import { site } from '../data/site'
import { waGeneric } from '../lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  const { contact } = site
  return (
    <footer className="mt-auto bg-profundo text-white">
      <div className="cenefa h-9" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-4 text-celeste">
            Atención veterinaria a domicilio en la {site.region}. Sin consultorio físico: vamos a tu casa.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-base font-bold text-white">Contacto</h2>
          <ul className="mt-3 space-y-2 text-celeste">
            <li>
              <a className="inline-flex min-h-10 items-center gap-2 hover:text-white hover:underline" href={waGeneric()} target="_blank" rel="noopener noreferrer">
                <WhatsappLogoIcon className="size-5" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li className="flex min-h-10 items-center gap-2">
              <PhoneIcon className="size-5" aria-hidden="true" />
              {contact.phone ? (
                <a className="tabular hover:text-white hover:underline" href={`tel:${contact.phone}`}>
                  {contact.phoneDisplay}
                </a>
              ) : (
                <span className="text-white/75 italic">Teléfono por confirmar</span>
              )}
            </li>
            {contact.instagram && (
              <li>
                <a className="inline-flex min-h-10 items-center gap-2 hover:text-white hover:underline" href={contact.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramLogoIcon className="size-5" aria-hidden="true" /> Instagram
                </a>
              </li>
            )}
            {contact.facebook && (
              <li>
                <a className="inline-flex min-h-10 items-center gap-2 hover:text-white hover:underline" href={contact.facebook} target="_blank" rel="noopener noreferrer">
                  <FacebookLogoIcon className="size-5" aria-hidden="true" /> Facebook
                </a>
              </li>
            )}
            {!contact.instagram && !contact.facebook && (
              <li className="flex min-h-10 items-center text-white/75 italic">Redes sociales por confirmar</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-bold text-white">Horario</h2>
          {site.hours.length > 0 ? (
            <dl className="mt-3 space-y-2 text-celeste">
              {site.hours.map((h) => (
                <div key={h.days}>
                  <dt className="font-semibold text-white">{h.days}</dt>
                  <dd className="tabular">{h.time}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-3 text-white/75 italic">Por confirmar</p>
          )}
        </div>

        <div>
          <h2 className="font-sans text-base font-bold text-white">Zona de cobertura</h2>
          <p className="mt-3 text-celeste">{zones.map((z) => z.municipality).join(', ')}.</p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-celeste sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.vet.title}.
          </p>
          <Link to="/aviso-de-privacidad" className="underline hover:text-white">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
