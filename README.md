# SUNING — Landing Page

Premium, calm, editorial artist landing page.

## What’s inside
- **English landing page**: `/en`
- **Chinese placeholder**: `/zh` (ready for later content)
- Extracts text from DOCX at build time and renders it as editorial typography
- Embeds a playable video in-page

## Content sources

### Text (DOCX → HTML at build time)
- `content/docx/en/text-1.docx`
- `content/docx/en/text-2.docx`

These are parsed with `mammoth` and sanitized before rendering.

### Video
- `public/media/reel.mp4`

### Hero visual
- Placeholder: `public/hero.svg`
- Replace it later with your real hero image (e.g., `public/hero.jpg`) and update `src/components/Hero.tsx`.

## Quick edits you’ll likely want
- Hero statement: `src/app/en/page.tsx`
- Contact email: `src/app/en/page.tsx`

## Development

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open:
- http://localhost:3000/en
- http://localhost:3000/zh

## Deploy on Vercel
1. Push this project to GitHub
2. In Vercel, **Import Project** → select the repo
3. Framework preset: Next.js (auto)
4. Build command: `npm run build` (default)

This project is designed to be statically generated (no server dependency at runtime).
