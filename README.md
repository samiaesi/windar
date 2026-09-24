# Windar Aluminium — one-page website

Showcase site for Windar Aluminium (Middle East subsidiary of MASTER Group Italy).
Plain HTML, CSS and JavaScript — no build step, no framework.

## View it

Open `index.html` in a browser, or serve the folder (e.g. `python -m http.server`) and open http://localhost:8000.

## Page structure

| # | Section | What it does |
|---|---|---|
| — | Main banner | Rotating highlights: corporate, events (Big 5), products, catalogue. "Talk to sales" finder by country. |
| 01 | About | Short description, company video, key figures, MASTER Italy link. |
| 02 | Product categories | The 7 MASTER lines (Window, Sliding, Corner Joint, Door, Handle, Automation, Curtain Wall), product search. |
| 03 | Product range | 39 references from the MASTER Italy catalogue (code, name, picture, product page), quote list. |
| 04 | Aluminium systems by Brital | TB-25 Slim Sliding and TB-50 Minimal Folding (specs from the Brital brochures), quotation, brochures. |
| 04 | Reference projects | Projects by country with details. |
| 05 | News & events | Big 5 Dubai / Big 5 Saudi with countdown, add-to-calendar, meeting booking; product news. |
| 06 | Sales network | Sales engineers by region, Sales Director. |
| 07 | Contact | Business / technical request form. |

## Where to edit content

All content lists are at the top of `js/main.js`:

- `BANNERS` — main banner slides
- `SYSTEMS` / `PRODUCTS` — product categories and references
- `PROJECTS` — reference projects
- `EVENTS` — exhibitions (they also appear in the banner automatically until they end)
- `REPS`, `SALES_DIRECTOR`, `SALES_REGIONS` — sales team and who covers which country / emirate
- `CONTACT`, `WHATSAPP`, `ABOUT_VIDEO` — form recipients, WhatsApp number, company video

## Still to provide before going live

- Direct phone / email / photos of the sales engineers, and the WhatsApp number
- Confirm the product selection (39 references from the MASTER catalogue) and mark the best sellers
- Real photos of the reference projects
- MASTER Italy stand number at Big 5
- Company video (24 MB): compressed file or YouTube link
