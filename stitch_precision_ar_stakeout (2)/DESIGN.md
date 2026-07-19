---
name: Next-Gen Field Logic
colors:
  surface: '#1c110b'
  surface-dim: '#1c110b'
  surface-bright: '#45362f'
  surface-container-lowest: '#160c06'
  surface-container-low: '#251913'
  surface-container: '#291d16'
  surface-container-high: '#352720'
  surface-container-highest: '#40322a'
  on-surface: '#f6ded3'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#f6ded3'
  inverse-on-surface: '#3c2d26'
  outline: '#a78b7d'
  outline-variant: '#584237'
  surface-tint: '#ffb690'
  primary: '#ffb690'
  on-primary: '#552100'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#9d4300'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#93ccff'
  on-tertiary: '#003351'
  tertiary-container: '#00a2f4'
  on-tertiary-container: '#003554'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#1c110b'
  on-background: '#f6ded3'
  surface-variant: '#40322a'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
This design system shifts from legacy engineering aesthetics to a high-performance, "Next-Gen Construction" interface. The brand personality is authoritative, precise, and technologically advanced, bridging the gap between heavy machinery and digital intelligence.

The visual style is **Modern Corporate with Glassmorphism influences**. It prioritizes high-contrast legibility for outdoor site conditions while utilizing subtle depth, backdrop blurs, and sophisticated lighting to signify a premium, modern software experience. We move away from flat, heavy borders toward layered surfaces that feel like a high-tech HUD (Heads-Up Display).

## Colors
The palette is optimized for field visibility and reduced eye strain in high-brightness environments. 

- **Primary Slate (#0f172a):** The foundation. Used for deep backgrounds to provide maximum contrast for overlays.
- **Electric Orange (#f97316):** The high-visibility action color. Used sparingly for primary buttons, active states, and critical wayfinding.
- **Surface & Secondary (#334155):** Used for component backgrounds and secondary UI elements to create hierarchical depth.
- **Semantic Status:** Emerald, Amber, and Rose are used strictly for system feedback, ensuring safety and operational awareness are never ambiguous.

## Typography
The typographic system emphasizes clarity and technical precision.

- **Headlines (Geist):** Provides a sharp, modern, and slightly technical feel for titles and major section headers.
- **Body (Inter):** Leverages industry-standard legibility for all descriptive text, inputs, and general interface elements.
- **Technical Data (JetBrains Mono):** This is reserved exclusively for coordinates, measurements, hardware IDs, and telemetry data. It distinguishes "raw data" from "interface guidance" at a glance.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 4px increments to maintain a compact, "instrument panel" feel.

- **Desktop/Tablet:** 12-column grid for complex data dashboards.
- **Mobile/Handheld:** 4-column grid with a minimum 24px side margin to account for ruggedized case bezels.
- **HUD Elements:** Floating panels should maintain a 16px distance from the screen edge and use 24px internal padding for touch-target safety.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Base Level:** Deep Slate (#0f172a).
- **Surface Level:** Semi-transparent fills (Slate 800 at 80% opacity) with a `20px` backdrop blur. This allows the AR camera feed or map background to remain contextually visible behind the UI.
- **Inner Glow:** Instead of dark shadows, use a 1px inner stroke of `white / 10%` on the top and left edges to simulate light hitting a physical glass panel.
- **Active Elevation:** When a component is interacted with, increase the transparency of the background and add a subtle `primary-orange` outer glow (8px blur, 20% opacity).

## Shapes
We move away from 90-degree "engineering" corners to a **softened geometric** language. 

Standard components use an 8px (0.5rem) radius. Large HUD panels and cards use a 16px (1rem) radius to feel more approachable and modern. This subtle rounding prevents the UI from feeling "sharp" or "hostile" while maintaining the structural integrity of a professional tool.

## Components

- **Primary Action Buttons:** Solid Electric Orange background with white semi-bold text. High-contrast, no border, 8px corner radius.
- **Secondary Buttons:** Ghost style with a 1px white/20% border. On hover, the background fills with a 10% white tint.
- **HUD Panels:** Utilize the Glassmorphism style (backdrop blur, semi-transparent slate). These panels house technical data and secondary controls.
- **Input Fields:** Darker than the background with a 1px bottom-border highlight. Focus state triggers a primary orange border glow.
- **Data Chips:** Small, monospaced text inside a subtle slate container with a 4px radius. Used for tagging material types or sensor status.
- **Status Indicators:** Small, circular "LED" pips next to text labels. For critical errors, the entire chip background takes on a low-opacity version of the status color (e.g., 15% Emerald for "OK").
- **Telemetry Readouts:** Grouped monospaced values with a small `label-caps` header to ensure quick scanning of site coordinates and tolerances.