# Fieldnotes design system

The site uses Astro components that render HTML and CSS with no client-side JavaScript. Its layout follows the Fieldnotes mockup while retaining the blog's content, routes, RSS feed, and contact links.

`src/styles/global.css` imports the original zero-style reset in `src/styles/reset.css` first, followed by fonts and tokens. Global and component styles build on that reset, including explicit emphasis and visible keyboard focus styles.

## Tokens

`src/styles/tokens.css` follows Material Design 3 naming and token tiers:

| Tier | Prefix | Purpose | Example |
| --- | --- | --- | --- |
| Reference | `--md-ref-*` | Palette, font families, weights | `--md-ref-palette-primary-40` |
| System | `--md-sys-*` | Semantic colors, typography, shape | `--md-sys-color-on-surface` |
| Component | `--md-comp-*` | Tokens assigned to component properties | `--md-comp-filter-chip-container-color` |

Spacing, layout, size, navigation, and prose roles are project extensions using the same naming pattern. They are not official Material component specifications. Change reference values to retheme the site; change a component role to customize one component.

Use semantic color roles in components. For example, text uses `--md-sys-color-on-surface`, secondary text uses `--md-sys-color-on-surface-variant`, and dividers use `--md-sys-color-outline-variant`.

## Typography

Roboto Serif is self-hosted in `public/fonts/roboto-serif/`, including upright and italic variable fonts, their language subsets, and the OFL license. `src/styles/fonts.css` declares the font faces with `font-display: swap`. The Latin upright font is preloaded; other subsets and italics load as needed. Georgia and the system serif font are fallbacks. Code examples use a system monospace font.

The approved 16px Major Third scale is mapped to semantic roles below. These are the project's editorial values, rather than Material's default type sizes. Heading levels in HTML describe document structure; choose the visual role independently.

| Approved style | M3-style token role | Font size | Line height |
| --- | --- | --- | --- |
| H1 | `display-large` | 76px | 92px |
| H2 | `display-medium` | 60px | 72px |
| H3 | `display-small` | 48px | 56px |
| H4 | `headline-large` | 40px | 48px |
| H5 | `headline-medium` | 32px | 40px |
| H6 | `headline-small` | 24px | 28px |
| Paragraph large | `body-large` | 20px | 24px |
| Paragraph medium | `body-medium` | 16px | 20px |
| Paragraph small | `body-small` | 12px | 16px |
| Caption | `label-small` | 12px | 16px |

Each role exposes `-font`, `-size`, `-line-height`, and `-weight` tokens, plus a shorthand token. For example:

```css
.heading {
    font: var(--md-sys-typescale-headline-small);
    color: var(--md-sys-color-on-surface);
}
```

## Spacing and responsive layout

Spacing tokens are multiples of 4px: `--md-sys-spacing-1` is 4px, `-2` is 8px, `-3` is 12px, and so on. Values are stored in rem units so they follow the reader's font settings. Thin borders and icon strokes are separate from the spacing scale. Interactive links in navigation, chips, cards, and the footer have a minimum 44px touch target.

The [Material breakpoint guidance](https://m3.material.io/foundations/layout/breakpoints/overview) defines these viewport ranges. On the web, dp values map to CSS pixels for layout.

| Class | Viewport width | Minimum outer margin | Pane/grid spacing |
| --- | --- | --- | --- |
| Compact | Below 600px | 16px | 16px |
| Medium | 600–839px | 24px | 24px |
| Expanded | 840–1199px | 24px | 24px |
| Large | 1200–1599px | 24px | 24px |
| Extra-large | 1600px and wider | 24px | 24px |

The centered reading column is capped at 800px, adding whitespace on wider screens. The large and extra-large classes intentionally retain the expanded reading layout. Media query conditions use literal pixel values because native CSS does not support custom properties in those conditions.

Compact layouts put navigation below the site name and dates above post titles. The home headline uses 48/56px, switching to 60/72px at medium and 76/92px at expanded. Page titles use 40/48px on compact and 48/56px on larger screens. Post dates move into a separate column at medium, and header navigation moves alongside the site name at expanded. Interest grids use two columns when space allows and collapse intrinsically on very narrow screens.

## Reusable components

| Component | Responsibility |
| --- | --- |
| `Header` / `Navigation` | Site identity, always-visible navigation, current-page state |
| `Footer` / `Social` | Contact links, decorative icons, arrows only on external websites |
| `Icon` | Shared inline SVG icons with accessible decorative markup |
| `PageIntro` | Eyebrow, title, optional count, description, action slot |
| `SectionHeading` | Section title and optional link with count |
| `TextLink` | Text action with arrow and optional count badge |
| `PostList` / `BlogPost` | Shared dated post rows with descriptions and tag links |
| `PostDate` | UTC dates, stacked or inline presentation |
| `TagList` / `TagLink` | Linked interests as chips or cards with optional counts |

`BaseLayout` supplies the shared shell, metadata, font preload, RSS discovery, and skip link. `MarkdownPostLayout` supplies article metadata, tags, prose styling, and archive links. Content queries and label formatting run during Astro rendering; no scripts are sent to the browser. Reading times are omitted. RSS and Email have their own icons and no arrow.

Keyboard focus remains visible, links use semantic HTML, long text wraps, and code blocks and tables can scroll within the reading column.
