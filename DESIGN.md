---
name: Lamora Coffee
description: Cà phê nguyên bản từ đất lành, cho quán và những lần pha tại nhà.
colors:
  canvas-ivory: "#f4efe5"
  surface-white: "#fffdf8"
  paper: "#e8ddc8"
  ink: "#2f271f"
  muted: "#756b5f"
  border: "#cfc2ae"
  forest: "#30452f"
  olive: "#667257"
  chocolate: "#4a2f1f"
  kraft: "#8b6545"
  gold: "#b38a54"
  error: "#a64032"
  success: "#2f6345"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2.75rem, 5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2rem, 3.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Be Vietnam Pro, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Be Vietnam Pro, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: "4px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "32px"

# Design System: Lamora Coffee

## Overview

**Creative North Star: “The Grounded Ritual”**

Lamora pairs a quiet Vietnamese coffee palette with editorial typography and generous space. The experience should feel considered and tactile: a visitor can quickly choose between café service and home brewing, then slow down for origin and preparation stories when they want more context.

The visual system preserves the warm ivory, paper, forest and chocolate palette already present in the implementation. Photography carries the sense of place; line art is a restrained supporting layer, never a substitute for a real image. Content stays direct, useful and honest about product availability and contact states.

**Key Characteristics:**
- Warm, earthy surfaces with one confident forest action color.
- Lora display type paired with Be Vietnam Pro for Vietnamese readability.
- Clear product choice first; editorial detail second.
- Responsive layouts that preserve reading order and one-handed actions.

## Colors

The palette moves from warm paper neutrals to forest actions and chocolate storytelling surfaces.

### Primary
- **Forest action** (#30452f): Primary CTA, active controls and links that need immediate attention.
- **Gold focus** (#b38a54): Keyboard focus, small proof markers and warm emphasis.

### Tertiary
- **Kraft** (#8b6545): Signature product atmosphere and supporting surfaces.

### Neutral
- **Warm ivory** (#f4efe5): Page canvas.
- **Surface white** (#fffdf8): Cards, forms and elevated content.
- **Paper** (#e8ddc8): Signature product surfaces.
- **Ink** (#2f271f): Primary text.
- **Muted** (#756b5f): Supporting text; maintain readable contrast.
- **Border** (#cfc2ae): Dividers and control outlines.

### Named Rules
**The One Action Rule.** Each section has one visually dominant next step; supporting links remain quieter.

## Typography

**Display Font:** Lora (with Georgia)
**Body Font:** Be Vietnam Pro (with Arial)

**Character:** Lora gives the brand its calm editorial voice while Be Vietnam Pro keeps Vietnamese copy practical and open at small sizes.

### Hierarchy
- **Display** (600, fluid up to 4.25rem, 1.05): Page and product titles.
- **Headline** (500, fluid up to 3rem, 1.1): Section titles and product stories.
- **Title** (600, up to 2rem, 1.15): Card and step titles.
- **Body** (400, 1rem, 1.65): Main copy in a 45–75ch measure.
- **Label** (600, .875rem, 1.2): Buttons, metadata and form labels.

## Layout

The desktop container is capped at 75rem with 4.5rem gutters; tablet uses 2rem and mobile uses 1.25rem. A 4px-based spacing rhythm runs from .25rem to 6rem. Editorial sections use a two-column grid on wide screens, then a deliberate single-column reading order on mobile. Product grids are two columns on desktop and one column on mobile; brewing cards become a snap-scrolling row so each method remains easy to scan without shrinking below a useful size.

The mobile hero leads with the message and actions before the supporting landscape image. All primary controls remain at least 48px tall, and no critical information depends on hover.

## Elevation & Depth

Lamora uses restrained tonal layering plus soft ambient shadows. Borders define persistent structure; shadows appear on interactive cards and elevated forms to separate them from the warm canvas without making the interface feel glossy.

### Shadow Vocabulary
- **Card rest:** `0 8px 24px rgb(47 39 31 / .05)` for quiet separation.
- **Card hover:** `0 18px 40px rgb(47 39 31 / .12)` for pointer feedback only.
- **Form elevation:** `0 12px 30px rgb(47 39 31 / .07)` for the contact panel.

## Shapes

Large content surfaces use a 20px radius, controls use a 12px radius or pill when they are compact selectors, and the focus ring is always visible in gold. Borders are one pixel and warm; notices use a restrained top accent rather than a heavy side stripe.

## Components

### Buttons
- **Shape:** pill, 999px; minimum height 48px.
- **Primary:** forest background, white text, concise action label.
- **Hover / Focus:** slight lift and soft shadow on fine pointers; gold focus ring for keyboard users.
- **Secondary:** transparent with forest border and text.

### Cards / Containers
- **Corner Style:** 20px for product and editorial cards.
- **Background:** surface white or a product-specific paper surface.
- **Shadow Strategy:** soft rest shadow, stronger hover shadow only where a card is actionable.
- **Border:** one-pixel warm border.
- **Internal Padding:** 24–32px.

### Inputs / Fields
- **Style:** 48px minimum height, warm surface, 12px radius and one-pixel border.
- **Focus:** forest border with a restrained gold/forest ring.
- **Error / Success:** inline message, preserved values and explicit recovery language.

### Navigation

Desktop navigation is inline with a persistent product CTA. On mobile it becomes a clearly labelled menu button with an exposed open/closed state and 48px links.

## Do's and Don'ts

### Do:
- **Do** let product audience, price and size be visible during a quick scan.
- **Do** use forest for the primary action and gold for focus, not decoration everywhere.
- **Do** keep body copy readable at 16px and within a comfortable measure.
- **Do** preserve the message-first mobile hero order.
- **Do** use the poster as the intentional reduced-motion alternative for ambient video.

### Don't:
- **Don't** hide the first meaningful CTA below a full-viewport image on mobile.
- **Don't** repeat operational detail in every product listing when it belongs on the detail page.
- **Don't** use a global transition kill that removes useful state feedback.
- **Don't** claim a contact request was delivered when an endpoint is unavailable.
- **Don't** use decorative glyphs as a substitute for a consistent icon treatment.
