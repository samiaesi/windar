# Windar Aluminium — one-page website

Showcase site for Windar Aluminium (Middle East subsidiary of MASTER Group Italy).
Plain HTML, CSS and JavaScript — no build step, no framework.

- Live preview: https://windar.vercel.app (Vercel publishes every push to `main` of GitHub `samiaesi/windar` in about a minute)
- Contact address used everywhere on the site: **info@windar.ae** (`OFFICE_EMAIL` in `js/main.js`)

## View it locally

Serve the folder and open it in a browser:

```
python -m http.server 8000
```

then http://localhost:8000. The catalogue reader needs a server (it does not work by double-clicking `index.html`).

## Files

| Path | What it is |
|---|---|
| `index.html` | The page (all sections, the catalogue reader, the modals) |
| `privacy.html` | Privacy policy (linked under the contact form and in the footer) |
| `css/style.css` | All styles |
| `js/main.js` | Content lists at the top, then the behaviour of each section |
| `assets/img/`, `assets/bg/`, `assets/icons/` | Pictures, drawn backgrounds, site icons |
| `assets/media/` | Catalogue, brochures, company video (see below) |
| `tools/build_catalogue.py` | Rebuilds the catalogue files from a new MASTER PDF |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Search engines and "add to home screen" |

## Page structure

| # | Section | What it does |
|---|---|---|
| — | Main banner | Rotating highlights: corporate, events (Big 5), products, Brital systems, catalogue. "Talk to sales" finder by country. |
| 01 | About | Short description, company video, key figures, MASTER Italy link. |
| 02 | Product categories | The 7 MASTER lines, product search, MASTER configurator, the complete catalogue card. |
| 03 | Product range | 39 references from the MASTER catalogue, quote list. A search also offers "Search in the full MASTER catalogue". |
| 04 | Aluminium systems by Brital | TB-25 Slim Sliding and TB-50 Minimal Folding: drawn pictograms, 3D views, specs from the Brital brochures, quotation, brochure in the reader. |
| 05 | Certified quality | MASTER Italy certifications (real documents only). |
| 06 | Reference projects | Projects by country with details. |
| 07 | News & events | Big 5 Dubai / Big 5 Saudi with countdown, add-to-calendar, meeting booking; product news. |
| 08 | Sales network | Sales engineers by region, Sales Director. |
| 09 | Contact | Business / technical request form, then the footer. |

## Where to edit content

All content lists are at the top of `js/main.js`:

- `BANNERS` — main banner slides
- `SYSTEMS` / `PRODUCTS` — product categories and references
- `PROJECTS` — reference projects
- `EVENTS` — exhibitions (they also appear in the banner automatically until they end)
- `OFFICE_PHONE`, `OFFICE_EMAIL`, `REPS`, `SALES_DIRECTOR`, `SALES_REGIONS` — contacts and who covers which country / emirate
- `CONTACT`, `WHATSAPP`, `ABOUT_VIDEO` — form recipients and form service, WhatsApp number, company video.
  The form is sent directly through Formspree (`CONTACT.endpoint`, form "Windar website" of the account info@windar.ae;
  free plan with a monthly limit of submissions). Empty endpoint = the visitor's email application opens instead.
- `READER` (further down) — documents that open in the catalogue reader

If you change what the site collects or which outside services it uses (e.g. adding Formspree or visitor statistics), update `privacy.html` and its "Last updated" date.

## Catalogue reader

Any link with `data-read="<key>"` opens a document of `READER.docs` inside the site:
`master` (MASTER technical catalogue), `tb25` and `tb50` (Brital brochures).
A shared link `…/#catalogue` (or `#catalogue-tb25`, `#catalogue-tb50`) opens it directly.

- **Book** view (pages that turn, double pages on a computer, one page on a phone) or **Scroll** view (with zoom). The choice is remembered.
- **Chapters** menu and **search** (magnifier) for the MASTER catalogue: a reference (`3106`, `3091` finds 3091.30…) or a name (`KARMA`, `hinge`).
- **Download** (↓): "These pages" joins the chosen pages (up to 30) into one full-quality PDF in the visitor's browser; "Whole catalogue" opens the complete 115 MB PDF on masteritaly.com.
- The browser Back button, "Back to the site" and Escape close the reader.
- Libraries loaded only when needed, from cdnjs: PDF.js 3.11 (display) and pdf-lib 1.17 (joining pages).

| File in `assets/media/` | Used for |
|---|---|
| `master-technical-catalogue-2023.pdf` (58 MB) | Reading online. Light copy (pages as images) because GitHub refuses files over 100 MB. |
| `catalogue-pages/p001.pdf` … `p668.pdf` (155 MB) | "Download these pages": each page on its own, text and drawings sharp. |
| `master-catalogue-index.json` (300 KB, 79 KB compressed) | Search: 2,167 references and 6,251 words → pages. |
| `brital-tb25-slim-sliding.pdf`, `brital-tb50-minimal-folding.pdf` | Brital brochures. |

Page numbers in the reader and the search are the page numbers of the PDF file (page 248 of the file is printed "184").

### New MASTER catalogue

1. Put the new PDF somewhere on the computer (`pip install pymupdf pillow` once).
2. From the site folder: `python tools/build_catalogue.py "path/to/new-catalogue.pdf"` (about 2 minutes).
3. In `js/main.js`, `READER.docs.master`: update `chapters` (names and first pages), `size`, and the `download` link of the complete PDF on masteritaly.com (the same link is also in the catalogue card and in the banner).
4. Check `CHAPTERS` at the top of the script (English chapter names, same order as the catalogue's bookmarks).

A new Brital brochure: `python tools/build_catalogue.py "Brochure.pdf" --brochure assets/media/brital-tb25-slim-sliding.pdf`

## Still to provide before going live

- Direct phone / email / photos of the sales engineers, and the WhatsApp number
- Confirm the product selection (39 references from the MASTER catalogue) and mark the best sellers
- Real photos of the reference projects (and the cities for Kuwait)
- MASTER Italy stand numbers at Big 5 Dubai and Big 5 Saudi
- Company video (24 MB): compressed file or YouTube link
- The windar.ae domain on Vercel; then replace `windar.vercel.app` in `index.html`, `privacy.html`, `robots.txt` and `sitemap.xml`
- Internal review of `privacy.html` (retention period, Saudi data protection law if needed)
