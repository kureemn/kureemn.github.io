# Kureem's portfolio

A static Jekyll portfolio for GitHub Pages. The website source lives at the project root.

## Source of truth

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` for page content.
- Shared page structure is in `_layouts/default.html` and `_includes/`.
- Styles and the small theme-toggle script are in `assets/`.
- Keep `_config.yml` set to `url: "https://kureemn.github.io"` and `baseurl: ""` for this GitHub user site.

## Local preview

- `bundle install`
- `bundle exec jekyll serve --host 0.0.0.0`
- Open `http://127.0.0.1:4000`

GitHub Pages builds this site from the `main` branch and repository root. See `README.md` for publishing and Lighthouse instructions.

## User constraints

- Keep the source at the repository root and use Jekyll, Markdown, HTML, CSS, and minimal JavaScript only.
- Do not introduce a Node application, monorepo, React/Vite project, backend, database, CMS, contact-form backend, trackers, or separate preview application.
- Do not fetch personal résumé information from URLs or invent achievements, employers, clients, metrics, or projects.
- Do not publish an email address. Missing personal content or contact links must be clearly marked as placeholders.
