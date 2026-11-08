# Om Sai Batteries Website

Om Sai Batteries is a responsive, single-page enquiry website for a local battery shop in Kon Gaon, Bhiwandi. Customers can browse battery categories, request help, call the shop, start a WhatsApp conversation, get directions, save the shop contact, and ask about Bajaj Finance EMI.

This is an enquiry and contact website. It does not display live inventory, prices, model numbers, technical specifications, or guaranteed warranty claims.

## What the website contains

1. **Top bar and navigation** — Shop location, phone number, and desktop section links.
2. **Hero section** — Introduction with Call Now, WhatsApp, and Get Directions buttons.
3. **Quick actions** — Call, WhatsApp, directions, and downloadable contact card shortcuts.
4. **Trust strip** — Genuine-brand enquiry support, local service, fit guidance, and assistance.
5. **Bajaj Finance EMI banner** — EMI information and WhatsApp enquiry link.
6. **Product catalogue** — Filters for car, two-wheeler, inverter/UPS, and commercial batteries.
7. **How it works** — Explains how customers can share vehicle or battery details.
8. **Why choose us** — Presents the shop’s main service benefits.
9. **Enquiry form** — Collects customer, vehicle, phone, language, call-time, EMI, and exchange details.
10. **Contact section** — Address, phone, email, hours, GST number, map, and contact actions.
11. **Mobile action bar** — Persistent mobile Call, WhatsApp, and enquiry actions.

## Main features

- Responsive layout for desktop, tablet, and mobile screens.
- Direct phone links using `tel:`.
- WhatsApp links with pre-filled enquiry messages.
- Google Maps directions link.
- Downloadable `.vcf` contact card.
- Product filtering without a page reload.
- English, Hindi, and Marathi interface text.
- Semantic sections, accessible labels, keyboard-friendly buttons, and image alt text.
- SEO metadata, Open Graph metadata, canonical URL, and LocalBusiness structured data.
- No build tool or backend is required; this is a static website.

## Project files

```text
OmSaiBatteries/
├── index.html                         Main webpage markup and content
├── styles.css                         Layout, colours, responsive styles, and animations
├── script.js                          Language switcher, filters, icons, and form handling
├── om-sai-batteries-contact.vcf       Downloadable shop contact card
├── README.md                          This documentation
└── assets/pictures/                   Logos, product images, QR code, and favicon files
```

## How the JavaScript works

`script.js` handles the interactive parts of the page:

- The `translations` object stores English, Hindi, and Marathi text.
- `setLanguage()` updates elements with `data-i18n` attributes and form placeholders.
- Product cards are filtered using each card’s `data-category` value.
- The enquiry form is converted into a URL-encoded WhatsApp message and opened in a new tab.
- Lucide icons are initialized after the page content is loaded.
- The footer year is filled automatically from the current year.

The enquiry form does not submit to a server or store customer data. It opens WhatsApp with the entered details.

## Local usage

The site can be opened directly by double-clicking `index.html`. For a more reliable local preview, run a server from the project folder:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser. No `npm install` or build command is needed.

## Important customization points

Before publishing, review these values in `index.html` and `script.js`:

- Shop name and tagline.
- Phone number: currently `+91 92708 01701`.
- WhatsApp number: currently `919270801701`.
- Shop address and Google Maps link.
- Email address, business hours, and GST number.
- Netlify URL in the canonical tag, Open Graph tags, JSON-LD data, and QR-related links.
- Product descriptions and brand wording.
- EMI wording and Bajaj Finance information.

When changing a WhatsApp link, URL-encode spaces and special characters in the pre-filled message. Keep `target="_blank"` and `rel="noopener"` on external links.

## Updating images

Place new images in `assets/pictures/` and update the matching `src` in `index.html`. Keep meaningful `alt` text and add explicit `width` and `height` values when possible to reduce layout shift.

Current visual assets include the navigation logo, favicon, hero battery image, brand display images, Bajaj Finance logo, and QR code.

## Deployment with Netlify

1. Confirm that `index.html`, `styles.css`, `script.js`, the `assets` folder, and the `.vcf` file are together.
2. Open <https://app.netlify.com/drop> and sign in to Netlify.
3. Drag the project folder into the upload area, or upload a ZIP containing the project files.
4. Open the generated `netlify.app` URL and test the complete page.
5. Replace placeholder site URLs in `index.html` with the final deployed URL.
6. Redeploy after changing the URLs.
7. Test the final page on desktop and mobile.

## Pre-publish checklist

- [ ] Phone links open the correct number.
- [ ] WhatsApp links open the correct business chat.
- [ ] Directions open the correct shop location.
- [ ] Save Contact downloads the `.vcf` file.
- [ ] The enquiry form opens WhatsApp with the expected fields.
- [ ] English, Hindi, and Marathi buttons update the page correctly.
- [ ] Product filters show and hide the correct cards.
- [ ] All images load correctly.
- [ ] The page works at approximately 320px, 375px, 768px, and desktop widths.
- [ ] Canonical, Open Graph, JSON-LD, and QR URLs use the final deployed domain.
- [ ] Business hours, address, email, GST number, and phone number are accurate.

## Maintenance notes

This project intentionally has no framework, database, or server-side code. Make content changes in `index.html`, visual changes in `styles.css`, and interactive or translation changes in `script.js`. After editing, refresh the page and test the affected action on both mobile and desktop widths.
