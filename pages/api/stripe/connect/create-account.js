import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(400).json({ error: 'Missing STRIPE_SECRET_KEY' })
  }
  try {
    const account = await stripe.accounts.create({ type: 'express' })
    res.status(200).json({ accountId: account.id })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
