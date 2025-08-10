import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { accountId } = req.body || {}
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(400).json({ error: 'Missing STRIPE_SECRET_KEY' })
  }
  if (!accountId) return res.status(400).json({ error: 'Missing accountId' })
  try {
    const link = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: process.env.CONNECT_REFRESH_URL || 'http://localhost:3000/dashboard/student',
      return_url: process.env.CONNECT_RETURN_URL || 'http://localhost:3000/dashboard/student',
      type: 'account_onboarding',
    })
    res.status(200).json({ url: link.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
