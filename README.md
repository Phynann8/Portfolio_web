# Portfolio_web

Personal portfolio for Chhun Phynann. Static HTML/CSS/vanilla JS with a glassmorphism design; no framework, no runtime dependencies.

## Develop
```bash
npm install         # installs clean-css-cli (dev only)
npm start           # serve locally
npm run build       # regenerate style.min.css from style.css (commit the result)
```

## Structure
- `index.html`: markup and content
- `style.css` → `style.min.css`: styles (the page loads the minified file)
- `script.js`: typing effect, scroll reveal, active nav link, mobile menu, contact form (mailto)
- `Resume/resume.pdf`

## Deploy
GitHub Pages or Vercel: publish the repo root.

## TODO
- Add your LinkedIn URL (hero + contact section) and "View Code" links for the CRM and Inventory projects (marked TODO in `index.html`).
- Optional: set `FORM_ENDPOINT` in `script.js` (e.g. a Formspree URL) so the contact form sends without opening a mail app.
