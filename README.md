# Sri Venkata Krishna Modern Ricemill

Static marketing website for Sri Venkata Krishna Modern Ricemill, a family-run rice mill in Shadnagar, Telangana, milling since 1981. Bilingual (English / Telugu), no build step, no framework, no dependencies.

## Running locally

Any static file server works. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly in a browser also works, since everything is plain static assets.

## Project structure

```
index.html        Page shell — loads fonts, styles.css, script.js, mounts #app
css/styles.css     All styling (hand-written CSS, no framework)
js/script.js       Entire app: content, state, routing, rendering, form handling
assets/
  logo-full.png    logo-mark.png       Brand logos
  hero/            Hero carousel photos
  products/        Product photos (rice, broken rice, paddy husk, rice bran, cattle feed)
  brands/          Logos for the 8 brands the mill mills
```

There is no `package.json` / npm dependency — `package-lock.json` is a vestigial empty lockfile and can be ignored or removed.

## How it works

`js/script.js` is a small hand-rolled single-page app (no framework):

- **Content** — the `CONTENT` object holds all copy for both languages (`en`, `te`) as parallel structures (nav, hero, about, products, contact, footer).
- **State & rendering** — a single `state` object (current page, language, form fields, hero slide index, modal open/closed) drives one `render()` function that rebuilds `#app` from scratch on every change.
- **Routing** — hash-based (`#home`, `#about`, `#products`, `#contact`), handled by `applyHash()` plus a `hashchange` listener.
- **Events** — one delegated `click` listener on `document`, dispatched by `data-action` / `data-value` attributes (`goto`, `lang`, `reset-form`, `open-logo-modal`, `close-logo-modal`).
- **Hero carousel** — auto-advances every 5s via `setInterval`.
- **Logo modal** — clicking the navbar logo opens a circular popup with the full logo; closable via the × button, overlay click, or Escape.
- **Contact form** — submits via `fetch` to [FormSubmit.co](https://formsubmit.co) (`https://formsubmit.co/ajax/<email>`), a third-party form-relay service — no backend of our own. The recipient address is set by `CONTACT_EMAIL` in `js/script.js`.

## Editing content

All copy (English and Telugu) lives in the `CONTENT` object near the top of `js/script.js`. Update both `CONTENT.en` and `CONTENT.te` together to keep the languages in sync.

Images are wired up through lookup maps in `js/script.js` (`HERO_SLIDE_PHOTOS`, `PRODUCT_PHOTOS`, `BRAND_LOGOS`). A label with no matching entry renders as a dashed placeholder instead of a photo — currently:

- Hero carousel: 2 of 4 slides still unbacked (`mill exterior photo`, `packaging photo`).
- Home page "about" teaser and About page story section: both use a static `[ founders / family photo ]` / `[ mill facility photo ]` placeholder, not yet wired to a real image.

To add a photo, drop the file in the relevant `assets/` folder and add its path to the matching map.

## Deployment

Pure static site — deploy the whole directory as-is to any static host (GitHub Pages, Netlify, Vercel, S3, etc.). No build/compile step required.
