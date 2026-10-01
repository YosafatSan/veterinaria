---
name: Puerta Azul
description: Veterinario a domicilio en la Zona Metropolitana de Guadalajara; la puerta tapatía nombrada por su azulejo.
colors:
  profundo: "#0e4a7b"
  clinico: "#2268a3"
  celeste: "#dcebf7"
  junta: "#c3d9ee"
  esmalte: "#f7fbfe"
  white: "#ffffff"
  tinta: "#14283b"
  tinta-suave: "#3d5268"
  wa: "#25d366"
  wa-hover: "#3ddc79"
  error: "#b42318"
typography:
  display:
    fontFamily: "Fredoka Variable, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.65rem, 5vw, 4.1rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fredoka Variable, ui-rounded, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fredoka Variable, ui-rounded, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 600
    lineHeight: 1.25
  plate-numeral:
    fontFamily: "Fredoka Variable, ui-rounded, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  grout: "0.25rem"
  plate: "0.4rem"
  panel: "0.5rem"
  frame: "0.6rem"
  pill: "9999px"
spacing:
  tile: "4.5rem"
  section: "7rem"
  section-mobile: "5rem"
  gutter: "2rem"
components:
  button-whatsapp:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-whatsapp-hover:
    backgroundColor: "{colors.wa-hover}"
    textColor: "{colors.tinta}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.clinico}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.clinico}"
    textColor: "{colors.white}"
  plate:
    backgroundColor: "{colors.esmalte}"
    textColor: "{colors.profundo}"
    rounded: "{rounded.plate}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.plate}"
    padding: "12px 16px"
    height: "54px"
  nav-link:
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-hover:
    backgroundColor: "{colors.celeste}"
    textColor: "{colors.profundo}"
  urgency-grave:
    backgroundColor: "{colors.profundo}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: Puerta Azul

## Overview

**Creative North Star: "La Placa de la Puerta"**

The system is a Guadalajara doorway rendered in cobalt and white enamel. The square tile module (4.5rem) is the rule of the whole page: it is drawn as fine celeste grout behind the hero, the request form and the reviews band, and it sizes the cenefa border. Against that wall, a painted tile plate (white enamel, double cobalt frame, hand-painted corner florons) carries only the figures and labels that must be believed: step numbers, the professional license, species, vaccination ages.

Hierarchy comes from tone and scale, never from rows of identical cards. Content is set as ruled lists (price rows, zone table, FAQ) hung from a 2px profundo rule; emphasis escalates by ring weight and then by a full profundo field. One active line runs through the whole site: the 5px rounded clinico route stroke drawn across the hero map, which reappears as the steps connector and as the terminus that leads into the form's submit button.

The voice is warm and rounded (Fredoka) on the plates and headings, plain and legible (Figtree) everywhere people read. The visual rejection confirmed by the direction: no dog-photo hero, no grid of matching service cards.

**Key Characteristics:**
- Cobalt on white enamel; celeste as grout and as a quiet section field.
- 4.5rem square tile module as the page's spatial rule.
- The azulejo plate is the only decorated container, reserved for key figures and labels.
- One active line: the 5px rounded clinico route.
- WhatsApp green is functional only, on WhatsApp actions.
- Tone-and-scale hierarchy; ruled lists instead of equal cards.

## Colors

A two-cobalt palette on enamel white, with a pale celeste for grout and fields, ink for text, and a single functional green.

### Primary
- **Azul Profundo** (profundo): headings, plate frames and numerals, the full urgent panel, the vet band and footer field, list rules (2px), the route's start ring and house pin.
- **Azul Clínico** (clinico): the active route stroke and its echoes, ghost button stroke and text, inline links, icons, focus outline, the inner plate frame line, prices.

### Secondary
- **Verde WhatsApp** (wa, hover wa-hover): fill of WhatsApp buttons only (header, hero, FAB, urgent tier, form submit). Text and icon on it are always Tinta.

### Neutral
- **Esmalte** (esmalte): the enamel ground of plates and the tile wall.
- **Blanco** (white): page ground, nav, form panel, map ground.
- **Celeste** (celeste): selection, nav hover, focus halo on inputs, and a deliberate section field for the services and vaccination bands; secondary text on profundo fields.
- **Junta** (junta): tile grout lines, hairline dividers, input borders at rest, quiet rings.
- **Tinta** (tinta): body text and text on green.
- **Tinta Suave** (tinta-suave): secondary text, captions, map labels, pending data.
- **Error** (error): field error text and border only.

### Named Rules
**The Green Is a Door Rule.** Verde WhatsApp appears only on controls that open WhatsApp, always with Tinta text. Never as decoration, never as a section accent, never with white text.

**The Celeste Two-Jobs Rule.** Celeste is grout and halo at small scale, and a calm field at section scale (services, vaccination). It is never a text color on white.

## Typography

**Display Font:** Fredoka Variable (with ui-rounded, system-ui)
**Body Font:** Figtree Variable (with system-ui, Segoe UI)

**Character:** Fredoka is the hand-lettered house number: rounded, friendly, used for headings and every figure on a plate. Figtree does all the reading and labelling, quietly.

### Hierarchy
- **Display** (600, 2.65rem mobile to 4.1rem desktop, 1.02, -0.02em): the hero headline only; its second clause in clinico.
- **Headline** (600, 2.1rem mobile / 2.75rem desktop, 1.08): section titles in profundo, with an optional 18px tinta-suave lead capped at 58ch.
- **Title** (600, 1.4 to 1.6rem, tight): step, species and urgency tier titles.
- **Plate numeral** (600, 2.4rem to 3rem, line-height 1, tabular): numbers and codes set inside plates.
- **Body** (400, 1.0625rem, 1.6): running text; secondary paragraphs capped around 46 to 62ch.
- **Label** (600, 0.875 to 0.95rem): definition terms, field labels, table heads. Sentence case, no tracking.
- **List item heading** (Figtree 700, 1.15rem, profundo): price rows and FAQ questions are set in Figtree, not Fredoka.

### Named Rules
**The Fredoka-On-Plates Rule.** Fredoka is for headings and plate figures. Anything a person scans in a list (service names, questions, form labels) is Figtree.

**The Quiet Farewell Rule.** The euthanasia section is unornamented and its heading is Figtree in tinta at 1.6rem: no plate, no tile wall, no green, a single underlined text link.

## Layout

A 1280px max container (16px / 24px / 32px side padding) on a 12-column grid at lg. Sections alternate an asymmetric split (title column of 4 or 5, content of 7 or 8) and full-width bands; vertical rhythm is 5rem on mobile and 7rem from sm. The hero splits 6/6 at lg (headline left, map right) and stacks headline, CTAs, then map on mobile. The tile module (4.5rem) is the nav height and the grout pitch. Anchors clear the sticky nav with 5.5rem scroll padding.

**The Tile Module Rule.** The 4.5rem square is the page's unit: grout, nav height and the vet photo frame's grid all key to it.

## Elevation & Depth

Mostly flat, with soft cobalt-tinted drop shadows that suggest a glazed object hung on a wall, not floating UI. Depth comes first from tone (white, celeste field, profundo field), then from these shadows on a few objects.

### Shadow Vocabulary
- **Plate glaze** (`box-shadow: 0 10px 24px -12px rgb(14 74 123 / 0.45), inset 0 0 0 4px var(--color-esmalte), inset 0 0 0 5.5px var(--color-clinico)`): the plate's lift plus its inner painted frame line.
- **Framed object** (`box-shadow: 0 24px 48px -28px rgb(14 74 123 / 0.55)`): the hero map frame and the form panel.
- **Grave panel** (`box-shadow: 0 20px 40px -24px rgb(14 74 123 / 0.8)`): the profundo urgent tier.
- **Green lift** (`box-shadow: 0 8px 20px -10px rgb(20 40 59 / 0.55)`): WhatsApp buttons.
- **Nav scrolled** (`box-shadow: 0 1px 0 var(--color-junta), 0 8px 24px -18px rgb(14 74 123 / 0.4)`): sticky header after 8px of scroll.

### Named Rules
**The Soft Glaze Rule.** Shadows are blurred, negatively spread and cobalt-tinted. No hard offset shadows.

## Shapes

Small, tile-like corners on objects (0.25rem grout insets, 0.4rem plates and inputs, 0.5rem panels, 0.6rem frames) against fully round pills for every button and nav link. Borders do the framing: 3px profundo plate edge, 2px profundo rules over lists, 2px junta input borders, 1px junta hairlines. The route and every connector are rounded-cap strokes; the route's terminus is an open circle (white fill, 3.5px profundo ring).

## Components

### Buttons
- **Shape:** full pill (9999px), 56px tall at lg, 48px at md.
- **WhatsApp:** wa fill, tinta 600 text, bold WhatsApp glyph at 20 to 24px, green lift shadow; hover to wa-hover.
- **Ghost:** 2px clinico stroke, clinico text with a trailing arrow that nudges 2px on hover; hover fills clinico with white text. On celeste bands it takes a white fill.
- **Press:** all buttons scale to 0.97 on active over 150ms ease-out.
- **Text link action:** clinico 600 with a 30% clinico underline that strengthens on hover.

### Cards / Containers
- **Plate (signature):** esmalte ground, 3px profundo border, inner clinico frame line, four painted corner florons, enamel sheen gradient; square for numbers, 2.2:1 for signs. The only decorated container.
- **Form panel:** white, 0.6rem, 1px junta ring, framed-object shadow, 20 to 32px padding, set on the tile wall.
- **Urgency tiers (escalation):** calm tier with a 1px junta ring; urgent tier with a 2.5px clinico ring and green action; grave tier as a full profundo panel with celeste bullets and the grave shadow. On desktop the grave column is wider (1.25fr) but the type scale stays nearly level; escalation is by tone.

### Inputs / Fields
- **Style:** white, 2px junta border, 0.4rem radius, 54px min height, 17px text; selects carry a drawn clinico chevron.
- **Focus:** border to clinico plus a 4px celeste halo, no outline.
- **Error:** border and message in error red with a bold warning glyph; message is 14px 600.

### Navigation
- White sticky bar, 4.5rem tall; links are Figtree 600 at 0.95rem in tinta, pill hover in celeste/profundo, active route in clinico. The WhatsApp button sits at the right. Below lg a 48px round menu toggle reveals a clip-path drawer (260ms, drawer ease) with 48px rows and a full-width WhatsApp button.

### Route (signature)
The hero map draws a 5.5px clinico rounded route over a 12px white casing in under 1.5s (0.95s, ease 0.65/0/0.35/1), a briefcase marker rides it, a ring pulses once on arrival and the "Tu casa" facade card unblurs in. The same stroke at 5px becomes the steps connector (horizontal on desktop, vertical on mobile) and the form terminus: a 9rem clinico bar ending in an open-circle pin beside the submit button. Reduced motion shows the finished route.

### Pending data
Missing client data renders as italic "Por confirmar" in tinta-suave (white at 75% on profundo); inside plates it adds a dotted junta underline.

### Ruled lists
Price rows, the zone table and the FAQ hang from a 2px profundo top rule with 1px junta or 15% profundo dividers between items.

## Do's and Don'ts

### Do:
- **Do** reserve the azulejo plate for figures and labels that must be believed (numbers, license, species, ages).
- **Do** keep the cenefa (2.25rem azulejo, whole tiles only) to the hero map frame and the footer top; plates use their painted florons instead.
- **Do** escalate emphasis by tone: hairline ring, then 2.5px clinico ring, then full profundo field.
- **Do** reuse the 5px rounded clinico stroke as the only active connecting line.
- **Do** set WhatsApp buttons in wa with Tinta text and the bold WhatsApp glyph.
- **Do** mark missing client data as italic "Por confirmar" in tinta-suave rather than inventing values.
- **Do** keep the euthanasia section unornamented, in Figtree, with no green button.

### Don't:
- **Don't** build grids of identical service cards; use ruled lists.
- **Don't** use a dog-photo hero or stock photography.
- **Don't** put WhatsApp green on anything that does not open WhatsApp, or white text on it.
- **Don't** add a second accent stroke or dashed decorative lines beyond the map's guide line.
- **Don't** use hard offset shadows.
