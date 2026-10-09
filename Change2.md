# Change 2: Clearer portfolio content

## Goals

- Make the homepage less busy by removing repeated product strategy and UX research introductions.
- Keep the name-led hero and “I help teams make better product decisions.” as the main message.
- Preserve the more expressive journey-style illustration beside the name, with its curving paths and varied nodes. Clean it up and explain the journey from people's needs to product decisions, rather than replacing it with a boxed flowchart. Make labels and paths readable in both themes.
- Use direct, descriptive headings instead of vague phrases such as “Decisions, made clearer” and “People first. Then the right next step.”
- Keep the client carousel and add Pinterest, Christie’s Auction House, Roblox, and Snapchat to the existing four clients.
- Make About more active and easier to scan, with local logos beside Berkeley Haas and Hamilton College. Hamilton College was confirmed by the user.
- Preserve the supplied education, leadership, interests, and outcome facts. Leave Experience unchanged.

## Scope and approach

Edit the existing root-level Jekyll site using Markdown, HTML, CSS, local image assets, and the existing minimal JavaScript. Do not add a new app, backend, external fonts, or analytics.

Reduce overlapping homepage copy rather than simply restyling it. Use an explicitly labeled illustration and concise education summaries, with additional detail available without removing supplied facts.

Source genuine client and school logos, keep them local, and record their sources. Client logos identify consulting relationships, not endorsements or attribution of any particular metric.

## Checks

- Build the Jekyll site successfully.
- Check Home and About in Preview at mobile and desktop widths in light and dark themes.
- Confirm the illustration is understandable visually and has a meaningful accessible description.
- Confirm all eight client logos and both school logos load without external image requests.
- Check theme persistence, carousel buttons and keyboard controls, and any expandable education details.
- Confirm no page-level horizontal scrolling at narrow phone widths.
- Confirm Experience content is unchanged.

## Git workflow

- Work on the existing `content-improvements` branch, not `main`.
- Commit message: **Simplify portfolio content and expand client carousel**
- After verification, commit the change and push `content-improvements` to GitHub.
- Do not merge to `main` or publish the site as part of this change.

## Verification results

After feedback, the earlier journey composition was restored instead of using a boxed flowchart. The refined illustration passed the checks below.

- Jekyll builds successfully and the Preview workflow is running.
- Home and About passed all 16 combinations of 320, 390, 768, and 1280 pixel widths in light and dark themes.
- Preview screenshots were reviewed in both themes. Journey labels fit inside their backdrops, and narrow layouts have no page-level horizontal scrolling.
- The original two rising/exploratory curves and all five desktop node positions and sizes match the earlier illustration. A short caption explains the people-to-product decision journey.
- All eight client logos and both school logos load from local assets.
- Carousel buttons and keyboard navigation work, including reaching the final Snapchat card.
- Theme selection persists between pages and after reloading.
- Education details open and close with mouse and keyboard controls. Supplied facts remain present, and expanded details fit on a narrow phone layout.
- All four page routes respond successfully, with no browser errors or external resource requests.
- Experience, the site configuration, and the package files remain unchanged.
- `git diff --check` passes.
