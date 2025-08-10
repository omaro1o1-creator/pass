import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { priceId } = req.body || {}
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(400).json({ error: 'Missing STRIPE_SECRET_KEY' })
  }
  if (!priceId) return res.status(400).json({ error: 'Missing priceId' })
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: process.env.SUCCESS_URL || 'http://localhost:3000/success',
      cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/cancel',
    })
    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
