# Abhishek Upadhyay - Portfolio Website

Modern premium personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Component Structure

```text
src/
  components/
    BackToTop.jsx
    Hero.jsx
    Navbar.jsx
    Reveal.jsx
    SectionHeading.jsx
  data/
    portfolioData.js
  App.jsx
  index.css
  main.jsx
public/
  favicon.svg
  resume.pdf
```

## Features Included

- Premium dark-themed UI with glassmorphism cards
- Sticky navbar with active section highlighting
- Smooth scroll reveal animations using Framer Motion
- Fully responsive mobile-first layout
- Hero CTA buttons: projects, resume download, contact
- Skills categories with icons
- Featured project card with placeholders for live/demo links
- Education & certifications section
- Fresher-focused experience section
- Contact form (mailto-based), social links, phone/email
- Back-to-top button
- SEO meta tags and favicon support
- Optional Kount device data collection hook (env-based)

## Kount Security Setup

1. Copy `.env.example` to `.env`.
2. Set:
   - `VITE_KOUNT_ENABLED=true`
   - `VITE_KOUNT_MERCHANT_ID=<your-merchant-id>`
   - `VITE_KOUNT_COLLECTOR_URL=<your-kount-collector-url>`
3. Restart dev server.

Note: This frontend integration collects device/session data only. Full fraud screening still requires Kount API usage from your backend.

## Contact Form Setup (Receive Real Submissions)

1. Create a free form at Formspree: `https://formspree.io/`.
2. Copy your endpoint (example: `https://formspree.io/f/xxxxxxxx`).
3. In project root, create `.env` and set:
   - `VITE_FORMSPREE_ENDPOINT=<your-formspree-endpoint>`
4. Restart dev server: `npm run dev`.
5. Submit test message from your portfolio form.

Form submissions will be sent to your Formspree inbox/email.

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deploy

### Vercel

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify

1. Push this repo to GitHub.
2. Import in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

## Customize Later

1. Replace `public/resume.pdf` with your real resume.
2. Update project links in `src/data/portfolioData.js` (`demo`, `github`).
3. Add more projects and map them in `src/App.jsx`.
4. Add real certification records in `certifications` array.
5. Integrate Formspree/Getform or custom backend for contact form instead of `mailto`.
6. Add analytics (Plausible/GA4) and Open Graph preview image for better recruiter sharing.
