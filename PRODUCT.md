# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Friends and first-time visitors coming to Oslo who want a confident, personal-feeling day plan without spending the day stitching together tabs, maps, and reviews.

## Product Purpose

Oslo Adventure is a visual day planner for experiencing Oslo through a short list of trusted coffee shops, cultural landmarks, and saunas. Success means a visitor can discover a balanced route, understand how the stops relate geographically, and save a day they are excited to follow.

## Positioning

The product is a point of view, not a directory: it translates a local's way of seeing Oslo into an editable day on a map, with the city told as a sequence of pauses rather than a list of attractions.

## Operating Context

Visitors use it on a phone while walking or on a laptop while planning before a trip. They browse by place type, inspect a stop, add it to a day, and use the map to understand the shape of the route. The source asset folder is the initial content library.

## Capabilities and Constraints

- Filter the place library by coffee, places, and sauna.
- Show every place on a map-like view and highlight the selected place.
- Add and remove stops from a personal day plan.
- Keep the first release static and deployable as a GitHub Pages site with no server or API key.
- Place details are curated demo content; opening hours, pricing, booking, and routing are intentionally not represented as verified live data.
- The map must remain useful without a paid map provider, so the first release uses a self-contained Oslo map composition with an optional link-out to external directions.

## Brand Commitments

The name “Oslo Adventure” and the supplied images in `Assets/` are the only existing brand commitments. The voice should feel like a local friend: observant, warm, specific, and never tourist-brochure generic.

## Evidence on Hand

`Assets/manifest.json` maps seven coffee stops, five attractions, five saunas, and one Oslo panorama to source pages. `Assets/README.md` notes that source licenses and attribution should be checked before public shipping. No testimonials, live listings, or booking integrations are available.

## Product Principles

- Make a point of view useful: every suggestion should help a visitor choose.
- Let geography shape the story: a day should feel like a route, not a pile of pins.
- Favor a few vivid details over exhaustive directory metadata.
- Keep planning lightweight enough to do between trains and coffee.
- Be honest about demo content and avoid inventing live operational claims.

## Accessibility & Inclusion

Use semantic controls, visible keyboard focus, text alternatives for imagery, sufficient color contrast, reduced-motion support, and a responsive layout that keeps the planner usable on narrow screens.
