# Grace Backwater Villa — Website

A premium, single-page website for **Grace Backwater Villa, Coorg**. Built with
plain HTML5, modern CSS, and vanilla JavaScript — no build step required.

## File Structure

```
index.html            Main single-page site
privacy-policy.html    Privacy policy page
terms.html             Terms & conditions page
css/style.css          All styling (design tokens, layout, components, responsive)
js/script.js           Sticky nav, mobile menu, scroll animations, back-to-top
images/                Photos & logo (see "Replacing Images" below)
favicon/               Favicons & apple-touch-icon
robots.txt             Search engine crawl rules
sitemap.xml            XML sitemap for SEO
```

## Quick Start

No build tools needed. To preview locally, serve the folder with any static
server, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly in a browser also works, but the Google Maps
embed and some fonts load better over `http://`.)

## Replacing Placeholder Images

All images in `/images` are auto-generated placeholders labelled with their
intended subject (e.g. "Master Bedroom", "Backwater View") so you can tell at
a glance what each one should become. To replace them:

1. Prepare your real photos and **keep the exact same filenames** listed below
   (or update the `src` attributes in `index.html` if you rename them).
2. Recommended sizes: hero images ~1920×1080px, gallery/amenity photos
   ~1600×1067px, about photo ~1200×1500px (portrait). Compress to keep files
   under ~300KB each (use tools like Squoosh or TinyPNG) for best performance.

| Filename            | Used For                          |
|----------------------|------------------------------------|
| `hero.jpg`           | Hero background (desktop)          |
| `hero-mobile.jpg`    | Hero background (mobile, portrait) |
| `about.jpg`          | About section photo                |
| `exterior.jpg`       | Villa exterior                     |
| `room1.jpg`          | Master bedroom                     |
| `room2.jpg`          | Garden view bedroom                |
| `room3.jpg`          | Twin bedroom                       |
| `living-room.jpg`    | Living room                        |
| `view.jpg`           | Backwater view                     |
| `lake.jpg`           | The backwaters                     |
| `food.jpg`           | Home cooked food                   |
| `campfire.jpg`       | Evening campfire                   |
| `garden.jpg`         | Private garden                     |
| `balcony.jpg`        | Private balcony                    |
| `sunrise.jpg`        | Coorg sunrise                      |
| `dining.jpg`         | Outdoor dining                     |
| `bbq.jpg`            | BBQ evenings                       |
| `og-image.jpg`       | Social share preview (1200×630)    |
| `logo.png`           | Site logo (header & footer)        |

Favicons in `/favicon` are generated from the same logo — regenerate them
from your final logo using a tool like [RealFaviconGenerator](https://realfavicongenerator.net/)
if you update the brand mark.

## Placeholders to Update Before Launch

Search the codebase for these and replace with real values:

- **Phone / WhatsApp number**: `+91 80737 13857` — appears in `index.html`
  (header CTA, hero buttons, contact section, floating WhatsApp button,
  `tel:`/`wa.me` links) and in the JSON-LD schema.
- **Email**: `Nahimsh22@gmail.com`
- **Address**: "Backwater Road, Coorg, Karnataka 571201" (in the Location
  section, footer, and JSON-LD schema).
- **Google Maps embed**: replace the `src` of the `<iframe>` in the Location
  section with your own [Google Maps embed link](https://support.google.com/maps/answer/144361)
  (Share → Embed a map).
- **Social & booking links**: Instagram, Facebook, Airbnb, and Booking.com
  URLs in the footer and JSON-LD `sameAs` array.
- **Canonical domain**: `https://www.gracebackwatervillacoorg.com/` — update in
  `<link rel="canonical">`, Open Graph tags, JSON-LD, `robots.txt`, and
  `sitemap.xml` once your final domain is live.
- **Guest reviews**: sample reviews in the Reviews section — swap in real
  guest testimonials as they come in.

## SEO

- Semantic HTML5 with a single `<h1>` and logical heading hierarchy.
- Meta description, Open Graph, and Twitter Card tags for rich social
  previews.
- JSON-LD structured data: `LodgingBusiness` (with amenities & ratings) and
  `LocalBusiness`.
- `robots.txt` and `sitemap.xml` included — update the domain before
  deploying, and submit the sitemap in Google Search Console.
- All images use descriptive `alt` text; update it if you swap in new photos.

## Performance Notes

- Hero image is preloaded and served responsively (`<picture>` with a
  portrait crop for mobile).
- All below-the-fold images use `loading="lazy"`.
- Fonts are loaded from Google Fonts with `preconnect` hints; consider
  self-hosting for even faster loads and better privacy.
- Animations use `transform`/`opacity` only and respect
  `prefers-reduced-motion`.
- No JavaScript frameworks — a single small vanilla JS file.

## Accessibility

- Skip-to-content link, visible focus states, semantic landmarks
  (`header`, `main`, `footer`, `nav`).
- All interactive icons have accessible labels (`aria-label`) or adjacent
  text.
- Color contrast follows WCAG AA for text against its background.

## Deployment

This is a fully static site — deploy it as-is to any static host: Netlify,
Vercel, GitHub Pages, Cloudflare Pages, or a traditional web server. No
server-side code or database is required.
