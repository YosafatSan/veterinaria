import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'

// División de código por ruta: la landing va en el bundle inicial, el resto bajo demanda.
const Servicios = lazy(() => import('./pages/Servicios'))
const Catalogo = lazy(() => import('./pages/Catalogo'))
const Aviso = lazy(() => import('./pages/Aviso'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="aviso-de-privacidad" element={<Aviso />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
