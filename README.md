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

## Deployment (VPS)

The site runs as a Docker container behind nginx, alongside the portal.

- `Dockerfile` — multi-stage build producing a small standalone Next.js image.
- `deploy.sh` — on the server: `git pull`, rebuild the image, restart the container on `127.0.0.1:3001`.
- `deploy/nginx-plusnet.ng.conf` — nginx server block for `plusnet.ng` / `www.plusnet.ng` (copy to `/etc/nginx/sites-available/`, enable, then run `certbot --nginx`).

First-time setup on the server:

```bash
cd /root/repos
git clone https://github.com/Anelsonmousse/plusnet-redesign.git
cd plusnet-redesign && ./deploy.sh
cp deploy/nginx-plusnet.ng.conf /etc/nginx/sites-available/plusnet.ng
ln -s /etc/nginx/sites-available/plusnet.ng /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d plusnet.ng -d www.plusnet.ng   # once DNS points here
```

Every later release is just `cd /root/repos/plusnet-redesign && ./deploy.sh`.
