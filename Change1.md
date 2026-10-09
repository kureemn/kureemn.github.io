# Change 1: A brighter, more visual portfolio

## Goal

Give the portfolio a brighter, more welcoming first impression while changing its layout and information hierarchy—not just its colors. Make Kureem's name clear in the hero and explain the value of the work immediately. The result should feel professional, personal, and slightly artistic, with less reading required.

## Planned changes

- Use the personal clarity of [Elena Gonci](https://elenagonci.com/) and the visual confidence of [Numa](https://numa.uprock.pro/) as inspiration, without copying either site.
- Put Kureem's name in the main hero instead of repeating it in the top-left navigation.
- Restore the prominent statement: “I help teams make better product decisions.”
- Replace the long text-led homepage with shorter, visually distinct presentations of confirmed experience and outcomes.
- Add locally created graphic elements; do not invent client screenshots, projects, or personal photography.
- Use expressive local typography and a bright, deliberate palette, with a readable complementary dark theme.
- Preserve navigation, the client carousel, light/dark toggle, accessibility, and responsive behavior.
- Keep the root-level Jekyll site with Markdown, HTML, CSS, and minimal JavaScript. Do not add a separate preview application or external dependencies.

## Direction chosen

The initial color-and-typography refresh did not change the structure enough. The revised direction is brighter and more visual, with a clear identity and value proposition rather than a text-heavy introduction. Redesign the existing Jekyll site directly; review it in Preview before any GitHub push.

## Acceptance checks

- Kureem is prominent in the hero, not repeated in the top-left navigation.
- “I help teams make better product decisions.” is easy to find at mobile and desktop widths.
- The homepage has a substantially different layout, with visual elements and shorter summaries rather than successive blocks of prose.
- All achievements and client relationships remain grounded in supplied content.
- Both themes remain readable, and navigation and carousel controls still work.
- No external fonts, new dependencies, or separate preview application are introduced.
- The Jekyll build succeeds, and Preview is checked at mobile and desktop widths in both themes.

## Verification

- Jekyll builds successfully.
- Checked 320px, 390px, 768px, and 1280px widths in both themes, with no page-level horizontal overflow.
- Confirmed the theme control changes theme and saves the preference.
- Confirmed carousel previous/next buttons and keyboard arrows move the logos.
- Home, About, Experience, Contact, and the new local stylesheet respond successfully.
- Visually reviewed desktop and mobile layouts, including dark mode.
- No browser exceptions or external resource requests were recorded during the homepage checks.

Review the new layout in Preview before committing or pushing this revision.
