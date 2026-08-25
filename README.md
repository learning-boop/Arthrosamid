# Arthrosamid® at Joint Care Clinics

Marketing and information website for Arthrosamid® knee osteoarthritis
treatment at Joint Care Clinics (Rugby, Birmingham, Milton Keynes and
Newcastle upon Tyne).

Built with [Next.js 16](https://nextjs.org) (App Router, React Server
Components), React 19 and Tailwind CSS 4. Every page is statically rendered at
build time — there is no database, no authentication and no third-party API.

## Requirements

- Node.js 20.9 or newer (Node 22 LTS recommended)
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command             | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the development server with hot reload                        |
| `npm run build`     | Create the optimised production build in `.next/`                   |
| `npm start`         | Serve the production build (run `build` first)                      |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)                 |
| `npm run typecheck` | TypeScript type check (`tsc --noEmit`)                              |
| `npm test`          | Smoke test the production build: every route, 404, sitemap, headers |
| `npm run check`     | lint → typecheck → build → test, in one go (use before deploying)   |

## Configuration

Copy `.env.example` to `.env.local` and set:

| Variable               | Purpose                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site, no trailing slash. Used for canonical URLs, Open Graph, `robots.txt` and `sitemap.xml`. On Vercel it falls back to the project production URL automatically. |

## Project layout

```
app/
  layout.tsx            root layout + site-wide metadata (Open Graph, Twitter, icons)
  page.tsx              home page
  site-config.ts        site URL / name / booking link
  robots.ts             /robots.txt
  sitemap.ts            /sitemap.xml
  not-found.tsx         404 page
  globals.css           design tokens + site styles (Tailwind imported here)
  home-scroll-overrides.css
  components/
    site-shell.tsx      header, footer, Arthrosamid® mark
    legal-page.tsx      layout for legal pages
  arthrosamid/          /arthrosamid
  joint-care-clinics/   /joint-care-clinics
  knee-arthritis/       /knee-arthritis
  working-lives/        /working-lives
  our-clinics/          /our-clinics
  privacy-policy/       /privacy-policy
  cookie-policy/        /cookie-policy
  terms-and-conditions/ /terms-and-conditions
  medical-disclaimer/   /medical-disclaimer
public/                 images (WebP), favicon, Open Graph image
tests/smoke.test.mjs    production smoke test
next.config.ts          security headers, image formats
```

## Deploying

The site is a standard Next.js app and deploys unchanged to any Next.js host.

**Vercel (recommended):** import the Git repository, keep the detected
Next.js settings, and add `NEXT_PUBLIC_SITE_URL` under Environment Variables
once a custom domain is attached.

**Netlify:** enable the Next.js runtime; build command `npm run build`.

**Self-hosted (Node):** `npm ci && npm run build && npm start` behind a reverse
proxy that terminates TLS. Set `PORT` to change the listening port.

Before pushing a release, run `npm run check`.

## Security headers

`next.config.ts` sets `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy` and `Strict-Transport-Security` on
every response and disables the `X-Powered-By` header. Adjust
`Permissions-Policy` if you later embed maps or video.
