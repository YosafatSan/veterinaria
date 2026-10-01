# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript + Tailwind CSS v4 (plugin de Vite) + React Router + Motion. Fuentes Fredoka y Figtree autoalojadas vía Fontsource. Despliegue en GitHub Pages como sitio de proyecto (`base: '/<repo>/'`, `404.html` = copia de `index.html`). Sin backend, sin analítica, sin scripts de terceros (CSP estricta en `<meta>`, solo en producción). Fuente completa: PRD v0.4 del 30 de septiembre de 2026 entregado por el cliente.

## Users

Dueños de mascotas en la Zona Metropolitana de Guadalajara (Jalisco, México) que prefieren no trasladar a su mascota: personas con poco tiempo, mascotas mayores o nerviosas, adultos mayores, hogares con varias mascotas. Llegan mayormente desde el celular, vía Google, redes o un enlace compartido por WhatsApp. Su trabajo: decidir si confían en un veterinario que no tiene local y pedir una cita sin fricción.

## Product Purpose

Presentar los servicios del veterinario a domicilio, generar confianza sin establecimiento físico y convertir visitas en conversaciones de WhatsApp. Éxito = solicitudes de cita por WhatsApp. No hay pagos ni cuentas.

## Positioning

La consulta llega a tu puerta: servicio 100 % a domicilio, sin local, atendido personalmente por el MVZ Eric Ismael Rosales Sánchez, con cédula verificable en el Registro Nacional de Profesionistas.

## Operating Context

- Flujo: visitante → revisa servicios/precios "desde" → formulario arma mensaje de WhatsApp prellenado → conversación en WhatsApp Business.
- Catálogo solo de exhibición (alimento, accesorios, higiene, libre venta; NOM-064-ZOO-2000 excluye medicamentos con receta).
- Rutas: `/`, `/servicios`, `/catalogo`, `/aviso-de-privacidad`, 404 útil.
- Contenido editable en archivos de datos tipados, separados de los componentes.

## Capabilities and Constraints

- Mobile-first; Chrome, Safari iOS, Samsung Internet (últimas 2).
- Core Web Vitals móviles: LCP < 2.5 s, INP < 200 ms, CLS < 0.1; landing < 500 KB transferidos.
- Precios "desde $X"; indicar si incluyen IVA (LFPC).
- Aviso de privacidad (LFPDPPP) integral y simplificado junto al formulario.
- Sin `dangerouslySetInnerHTML`, enlaces externos `noopener noreferrer`.
- **Pendientes (no inventar como hechos):** nombre del negocio (provisional por ahora), especies (provisional: perros y gatos), cédula, colonias/municipios exactos y costo de traslado, servicios y precios, horarios y urgencias, hospital 24 h de referencia, formas de pago/factura, número de WhatsApp, redes, reseñas reales, productos, fotos.
- Incluye sección de eutanasia humanitaria a domicilio, sobria y separada del resto.

## Brand Commitments

- Paleta del cliente (azules y blanco): Azul profundo `#0E4A7B`, Azul clínico `#2268A3`, Celeste `#DCEBF7`, Blanco `#FFFFFF`, Tinta `#14283B`, Verde WhatsApp `#25D366` (solo botones de WhatsApp, texto en Tinta).
- Tipografía: Fredoka (títulos/logotipo, solo tamaños grandes) + Figtree (texto, botones, formularios).
- Logo: solo texto, nombre del negocio en Fredoka trabajado como logotipo.
- Idea central: "la consulta llega a tu puerta" — en el hero, una ruta que se dibuja por un mapa estilizado de la ZMG y termina en una casa (< 1.5 s).
- Animaciones sutiles: solo hero, respuestas a interacción, transición de ruta y aparición del botón flotante de WhatsApp. Nada de reveals en cada sección al hacer scroll.
- Evitar: secciones idénticas en tarjetas, etiquetas en mayúsculas sobre títulos, fotos de stock.

## Evidence on Hand

- Veterinario: MVZ Eric Ismael Rosales Sánchez (nombre confirmado).
- Sin fotos reales todavía: usar espacios de foto marcados, nunca stock.
- Sin reseñas reales todavía: no inventar testimonios; mostrar el espacio con contenido claramente provisional.
- Sin cédula, precios, zona exacta ni número de WhatsApp: datos provisionales marcados en los archivos de datos.

## Product Principles

1. Confianza antes que persuasión: credenciales verificables, precios claros y datos reales pesan más que el adorno.
2. Cada camino termina en WhatsApp con el contexto ya escrito.
3. Ligero en un celular de gama media: cada visita debe costar poco.
4. El cliente edita datos, no componentes.
5. Honestidad legal: nada de medicamentos con receta, precios totales claros, privacidad explícita.

## Accessibility & Inclusion

WCAG 2.2 AA: contrastes verificados en la paleta, foco visible, alt en imágenes, etiquetas reales en el formulario, `prefers-reduced-motion` respetado. Público incluye adultos mayores: tamaños de texto y objetivos táctiles generosos.
