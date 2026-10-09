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
