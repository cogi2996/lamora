# Lamora animation direction

## Library review — 29/08/2026

Lamora uses Next.js App Router with React 19 and a small content-led surface. The review compared the current, maintained options that fit that runtime:

| Library | Strength | Fit for Lamora |
| --- | --- | --- |
| [Motion for React](https://motion.dev/docs/react) 13.1.1 | Declarative React gestures, layout transitions, scroll triggers, tree-shaking and user reduced-motion policy | **Selected**: expressive interaction feedback without building a timeline layer or taking over page scrolling |
| [GSAP](https://gsap.com/docs/v3/) 3.15.0 | Best-in-class imperative timelines, SVG/canvas control and ScrollTrigger | Strong for an art-directed campaign or complex choreography, but more runtime surface than this product needs today |
| [Lenis](https://github.com/darkroomengineering/lenis) 1.3.25 | Smooth scrolling and scroll synchronization | Not selected: changing the root scroll model would add accessibility, keyboard and navigation risk without improving a required task |

Motion is compatible with React 18.2+ and both Next.js routers. The implementation imports `motion/react` only inside the existing client-side size selector and uses `MotionConfig reducedMotion="user"` so the device setting remains authoritative.

## Motion thesis

- **Focal moment:** changing a product size should feel like moving a physical label across the same coffee pack. A shared `layoutId` indicator travels between the selected options while the price/code summary updates in place.
- **Feedback:** press and hover states acknowledge the tap without shifting surrounding content or changing the information architecture.
- **Budget:** one small client island, transform/layout animation only, no global smooth-scroll hijack, no per-section scroll reveal, and no animated image hover.
- **Fallback:** selected state, price, code and order status are rendered normally even when Motion is unavailable. Reduced motion keeps the selected indicator static and removes transform/layout movement while preserving state feedback.

## Implementation

- `components/product-size-selector.tsx` uses Motion for the shared selected-size indicator, tap scale and pointer lift.
- `app/globals.css` keeps the indicator layered behind the label and preserves the existing 44/48px touch targets, focus ring and color contrast.
- Existing ambient video remains poster-first and is not coupled to the interaction library.

## Audit checklist

- Desktop and mobile size controls remain keyboard reachable and readable.
- Repeated selection does not duplicate indicators or summaries.
- `prefers-reduced-motion: reduce` disables movement while retaining selected state.
- No horizontal overflow is introduced by the animated control.
- Typecheck, lint, route QA and production build pass after the change.
