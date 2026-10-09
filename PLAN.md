# Portfolio site plan

## Goal

Create a personal portfolio for Kureem at `kureemn.github.io`, built with Jekyll and published directly from the `main` branch and repository root on GitHub Pages. The site will use Markdown pages with YAML front matter, reusable Jekyll layouts and includes, semantic HTML, and plain CSS with only minimal JavaScript.

## Pages and content

- **Home:** Introduce Kureem as a Berkeley Haas MBA candidate with experience in product strategy, UX research, and cross-functional product work.
- **About:** Present the supplied education, fellowship, leadership, languages, volunteering, and interests.
- **Work Experience:** Organize the supplied BlueRobins, AnswerLab, and MDRC roles, responsibilities, and results without adding claims or projects.
- **Contact:** Provide a contact route without displaying an email address. Use a clearly marked placeholder for a professional profile or other contact link until one is supplied.

## Design and accessibility

- Draw on the sleek, modern feel the user likes in Stripe and Airbnb, without copying either site.
- Support light and dark themes; use a clean, modern sans-serif feel.
- Keep the experience responsive and single-column, with accessible contrast, semantic landmarks, keyboard-operable navigation and theme controls, and reduced-motion support.

## Jekyll and publishing

- Keep the complete website at the repository root: `index.md`, the other Markdown pages, `_config.yml`, `_layouts/`, `_includes/`, and website assets.
- Configure `url` as `https://kureemn.github.io` and leave `baseurl` empty; use Jekyll URL filters for internal links.
- Include navigation, a shared footer, SEO metadata, a sitemap, a favicon, and a README with content-editing, local-preview, GitHub Pages publishing, and Lighthouse instructions.
- Avoid a backend, database, contact-form backend, blog, CMS, framework, unnecessary libraries, and third-party trackers. GitHub Pages should build the site directly from `main` and `/` without a separate manual build step.

## Assumptions and approval needed

- No email address will be published. No LinkedIn or other contact URL was supplied, so it will remain an explicit placeholder.
- No portrait or project portfolio examples were supplied; the site will not invent or imply any.
- The current project contains a pnpm workspace starter with an API server, canvas mockup, shared libraries, and scripts. Replacing it with the requested root-level Jekyll site means removing those starter application files and manifests. Replit-managed project metadata and internal configuration will be preserved where required.

**Please approve this plan, including replacing the current starter application scaffold with the root-level Jekyll-only site, before I build it.**
