# Oslo Adventure design system

## Visual world

Oslo Adventure is a bright field note from the fjord: useful enough to plan from, specific enough to feel like a friend’s annotated map. It uses glacier paper as the daylight ground, deep fjord blue for structure and trust, sea-glass mint for secondary emphasis, saffron for route/selection, and coral only for sauna warmth.

The interface is intentionally not a travel-directory grid. The first viewport is a panorama and a thesis; the core workspace is a two-part atlas with the place library beside a schematic Oslo map; the day strip turns discovery into a small commitment.

## Tokens

- `--paper` / `--glacier`: daylight paper surfaces.
- `--fjord-950` / `--fjord-900` / `--fjord-800`: ink, dark panels, and structural blue.
- `--mint` / `--mint-strong`: supportive state and water-like highlight.
- `--saffron`: active route, selected markers, and the main action accent.
- `--coral`: sauna warmth and error-adjacent emphasis.
- `--line`: quiet rules that keep the planner legible without heavy cards.

## Type

DM Serif Display carries the local voice in the hero, major section headings, details, and empty states. DM Sans handles controls, metadata, navigation, and readable descriptions. The system fallbacks preserve the hierarchy if Google Fonts are unavailable.

## Components and interaction

- The wordmark combines a circular `O` mark with a two-line lockup.
- Filter pills are compact controls with explicit counts and `aria-pressed` state.
- Place rows use one image, one short descriptor, and a time/duration edge so the library remains scanable.
- Markers are category-coded and always have an accessible title/label. A selected marker and selected row share the same state.
- The detail panel is the bridge between browsing and commitment. Its button adds a stop to one of three day slots.
- The schematic map is intentionally honest: it is a local’s sketch, not turn-by-turn navigation.

## Responsive behavior

At tablet width the library becomes a two-column image list above the map. On phones it becomes one scanable list, a compact map, a stacked detail panel, and horizontal ritual cards. The three day slots become a vertical sequence while preserving the morning/afternoon/evening order.

## Motion and accessibility

The authored motion is the slow panorama drift and one upward reveal in the opening; selection and hover transitions stay short and functional. `prefers-reduced-motion` removes authored movement. Focus rings use saffron against both paper and dark panels. Images in the below-the-fold ritual rail are lazy-loaded, and every image has a useful alternative or an empty alt where the adjacent text already carries the place name.
