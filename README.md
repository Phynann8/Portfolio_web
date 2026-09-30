# Portfolio_web

Personal portfolio for Chhun Phynann (IT support & network administration). Static HTML/CSS/vanilla JS with a glassmorphism design; no framework, no runtime dependencies.

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
- Optional: set `FORM_ENDPOINT` in `script.js` (e.g. a Formspree URL) so the contact form sends without opening a mail app.

## Deploy on Cloudflare (Workers static assets)
`wrangler.jsonc` serves the repo root; `.assetsignore` keeps config/dev files private.
Dashboard settings: build command empty, deploy command `npx wrangler deploy`, project name `portfolio-web`.
