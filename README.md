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

## Technical choices

- The `github-pages` gem and GitHub Pages-supported SEO and sitemap plugins keep the local build compatible with GitHub's automatic Jekyll build.
- System fonts avoid external font requests. CSS variables provide the two themes; the small script remembers a visitor's choice on their device.
- Internal links and assets use Jekyll URL filters, so an empty `baseurl` works for this user site.

## Verification

The production Jekyll build succeeds, with canonical URLs and the sitemap using `https://kureemn.github.io`. Navigation, generated internal links, theme switching and persistence, and overflow checks passed for all four pages at 375px and 1280px.

Local Lighthouse results on the generated Jekyll preview:

| Page / device | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home / mobile | 92 | 100 | 100 | 100 |
| About / mobile | 97 | 100 | 100 | 100 |
| Work Experience / mobile | 99 | 100 | 100 | 100 |
| Contact / mobile | 100 | 100 | 100 | 100 |
| Home / desktop | 100 | 100 | 100 | 100 |

These are local measurements, not published-site measurements. Performance can vary with browser load and hosting conditions; rerun Lighthouse after publishing.

## Assumptions and placeholders

- The display name is **Kureem**; no surname or portrait was supplied.
- The introductory copy summarizes the supplied résumé rather than adding employers, projects, or achievements.
- The Contact page links to the supplied LinkedIn profile. No personal information was fetched from that URL, and no email address is published.
- The source is prepared for GitHub Pages but remains unpublished at the user's request.
- The Home page includes locally stored logo marks for Google, Meta, Amazon, and TikTok. Amazon was supplied later by the user as an additional client reference.
