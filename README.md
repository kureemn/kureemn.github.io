# Kureem's portfolio

A static Jekyll portfolio for the GitHub Pages user site `kureemn.github.io`. The site uses Markdown pages with YAML front matter, reusable layouts and includes, semantic HTML, plain CSS, and a small accessible theme toggle. It has no backend, database, contact form, framework, or third-party trackers.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` to change page content. Keep the YAML front matter at the top of each page.
- Update shared navigation and the footer in `_includes/`; the page shell is in `_layouts/default.html`.
- Adjust colors, responsive styles, and typography in `assets/css/site.css`. The theme control is in `assets/js/theme-toggle.js`.
- Update `url` and `baseurl` in `_config.yml` if the site address changes. For this GitHub user site, `url` is `https://kureemn.github.io` and `baseurl` is empty.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. To generate the production files locally, run `bundle exec jekyll build`; output is written to `_site/`.

## Publish with GitHub Pages

Use a GitHub repository named `kureemn.github.io`. In its **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose `/(root)`. GitHub Pages will build the Jekyll source directly; there is no separate build workflow to run.

## Run Lighthouse

With the local preview running and Chrome available, audit `http://127.0.0.1:4000` in Chrome DevTools → **Lighthouse**. Run both mobile and desktop reports. Alternatively, audit the published site with:

```sh
npx --yes lighthouse https://kureemn.github.io --view
```

Target at least 90 for Performance, Accessibility, Best Practices, and SEO. Review both theme modes and check the layout at 375px and 1280px viewport widths.
