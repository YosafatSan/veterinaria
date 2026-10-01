import { Faq } from '../sections/Faq'
import { Farewell } from '../sections/Farewell'
import { Hero } from '../sections/Hero'
import { RequestForm } from '../sections/RequestForm'
import { Reviews } from '../sections/Reviews'
import { Services } from '../sections/Services'
import { SpeciesZone } from '../sections/SpeciesZone'
import { Steps } from '../sections/Steps'
import { Urgencies } from '../sections/Urgencies'
import { Vaccination } from '../sections/Vaccination'
import { Vet } from '../sections/Vet'

export default function Home() {
  return (
    <>
      <title>Puerta Azul · Veterinario a domicilio en Guadalajara y Zapopan</title>
      <meta
        name="description"
        content="Consulta veterinaria a domicilio en la zona metropolitana de Guadalajara. Vacunas, desparasitación, consultas y estudios en casa. Agenda por WhatsApp."
      />
      <Hero />
      <Steps />
      <Services />
      <SpeciesZone />
      <Vet />
      <Urgencies />
      <Vaccination />
      <Reviews />
      <Farewell />
      <Faq />
      <RequestForm />
    </>
  )
}
