# Northmark agency website

The Northmark public-facing website is built with Astro and Tailwind CSS.

## Before launch
- Northmark is a working name; verify trademark and domain availability.
- Replace `YOUR-DOMAIN.example` in `astro.config.mjs` with the production domain.
- Configure the Formspree endpoint before building or running the site:
  1. From `northmark/northmark-agency-starter`, run:
     ```sh
     cp .env.example .env
     ```
  2. Confirm `.env` contains `FORMSPREE_ENDPOINT=https://formspree.io/f/xppdrbjaI` (the supplied Formspree endpoint).
  3. Restart `npm run dev`, or set `FORMSPREE_ENDPOINT` in your production host's build environment and rebuild/redeploy.
- `FORMSPREE_ENDPOINT` is used as the form's submission URL. The endpoint is necessarily visible in the rendered page so the browser can submit to Formspree; do not put private credentials or API keys in this variable.
- Verify a submission using the Formspree inbox and publish accurate privacy details before launch.
- Confirm introductory pricing and document deliverables, hosting, support responsibilities, and exclusions in the written project scope.
- Portfolio examples are fictional concept studies, not client projects. Keep them clearly identified unless replaced with authorized, accurate case studies.
- Review all copy, accessibility, and responsive layouts on the final production domain.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

Astro and Cloudflare deployment documentation:
- https://docs.astro.build/
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
