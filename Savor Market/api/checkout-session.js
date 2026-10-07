function reply(res, status, payload) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(payload);
}

module.exports = async function checkoutSession(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return reply(res, 405, { error: 'Method not allowed.' });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey || !/^sk_(test|live)_/.test(stripeSecretKey)) {
    return reply(res, 503, { error: 'Payment verification is not available yet.' });
  }

  const sessionId = typeof req.query.session_id === 'string' ? req.query.session_id : '';
  if (!/^cs_(test|live)_[A-Za-z0-9_]+$/.test(sessionId)) {
    return reply(res, 400, { error: 'The checkout session is invalid.' });
  }

  try {
    const stripeResponse = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { Authorization: `Bearer ${stripeSecretKey}` } }
    );
    const session = await stripeResponse.json();
    if (!stripeResponse.ok) {
      console.error('Stripe could not verify a checkout session.', {
        status: stripeResponse.status,
        type: session.error && session.error.type,
        code: session.error && session.error.code
      });
      return reply(res, 502, { error: 'Payment verification is temporarily unavailable.' });
    }
    if (session.mode !== 'payment' || !session.metadata || session.metadata.store !== 'savor-market') {
      return reply(res, 404, { error: 'The checkout session was not found.' });
    }
    return reply(res, 200, { paid: session.payment_status === 'paid' });
  } catch (error) {
    console.error('Stripe payment verification request failed.', error);
    return reply(res, 502, { error: 'Payment verification is temporarily unavailable.' });
  }
};
