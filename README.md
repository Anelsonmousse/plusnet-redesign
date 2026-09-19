# Plusnet Broadband — Next.js site

Recreation of [plusnet.ng](https://plusnet.ng/) as a Next.js (App Router) + Tailwind CSS site.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

- `app/` — one folder per route (`/`, `/our-network`, `/why-plusnet`, `/switching-to-plusnet`, `/customer-testimonial`, `/partner-with-us`, `/package-guide`, `/contact-us`, `/support-portal`, `/frequently-asked-questions`)
- `components/` — Header (with dropdown + mobile nav), Footer, Button, PageHero, Section, forms
- `lib/site.ts` — contact details, navigation, packages (edit here to change content site-wide)
- `lib/faq.tsx` — FAQ content
- `public/images/` — logo, hero and icon assets

## Not yet wired up

The contact, newsletter and support-portal forms are front-end only. Hook them to an API route or a service (e.g. Resend, Formspree, or the existing MemberPress backend) when ready.
