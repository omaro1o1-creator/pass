# Pass | باس — Next.js (Vercel-ready)

## Quick Start
1) `npm install`
2) `npm run dev` → http://localhost:3000

## Brand Colors (Green theme)
- Primary: #10B981
- Secondary: #047857
- Text: #FFFFFF
- Background: #0B1220

## i18n
- Dictionaries: `/locales/ar` & `/locales/en`
- Provider: `lib/i18n.js` with RTL/LTR toggle

## Daily.co
- Set `NEXT_PUBLIC_DAILY_ROOM_URL` (e.g., https://your-subdomain.daily.co/demo)
- Visit `/lesson/demo`

## Stripe
- `STRIPE_SECRET_KEY` (test) required for API routes
- Connect endpoints: `/api/stripe/connect/*`

## Deploy on Vercel
- Import repo to Vercel
- Add env vars (see `.env.example`)
- Add custom domain `pass.sau1.com` (CNAME to Vercel target)
