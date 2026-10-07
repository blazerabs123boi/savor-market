const products = require('./product-catalog');

const MAX_ITEM_QUANTITY = 20;

function reply(res, status, payload) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(payload);
}

function getSiteOrigin(req) {
  const configuredUrl = process.env.SITE_URL;
  if (!configuredUrl) return null;

  try {
    const siteUrl = new URL(configuredUrl);
    if (siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash) return null;
    if (siteUrl.protocol !== 'https:' && siteUrl.hostname !== 'localhost') return null;
    if (req.headers.origin !== siteUrl.origin) return null;
    return siteUrl.origin;
  } catch (error) {
    console.error('SITE_URL is invalid.', error);
    return null;
  }
}

module.exports = async function createCheckoutSession(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(res, 405, { error: 'Method not allowed.' });
  }

  const origin = getSiteOrigin(req);
  if (!origin) return reply(res, 403, { error: 'Checkout is not available for this site.' });

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey || !/^sk_(test|live)_/.test(stripeSecretKey)) {
    return reply(res, 503, { error: 'Payments are not configured yet. Please try again later.' });
  }

  const items = req.body && req.body.items;
  if (!Array.isArray(items) || items.length < 1 || items.length > Object.keys(products).length) {
    return reply(res, 400, { error: 'Your cart is empty or invalid. Please refresh it and try again.' });
  }

  const quantities = new Map();
  for (const item of items) {
    if (!item || typeof item.id !== 'string' || !Number.isInteger(item.quantity)
      || item.quantity < 1 || item.quantity > MAX_ITEM_QUANTITY
      || !Object.prototype.hasOwnProperty.call(products, item.id)
      || quantities.has(item.id)) {
      return reply(res, 400, { error: 'Your cart contains an invalid item or quantity. Please review your cart.' });
    }
    quantities.set(item.id, item.quantity);
  }

  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('success_url', `${origin}/cart.html?checkout=success&session_id={CHECKOUT_SESSION_ID}`);
  form.set('cancel_url', `${origin}/cart.html?checkout=cancelled`);
  form.set('billing_address_collection', 'required');
  form.set('shipping_address_collection[allowed_countries][0]', 'MY');
  form.set('phone_number_collection[enabled]', 'true');
  form.set('customer_creation', 'always');
  form.set('metadata[store]', 'savor-market');
  form.set('metadata[product_count]', String(quantities.size));

  for (const [index, [id, quantity]] of [...quantities].entries()) {
    const product = products[id];
    form.set(`line_items[${index}][price_data][currency]`, 'myr');
    form.set(`line_items[${index}][price_data][product_data][name]`, product.name);
    form.set(`line_items[${index}][price_data][unit_amount]`, String(product.unitAmount));
    form.set(`line_items[${index}][quantity]`, String(quantity));
  }

  try {
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Idempotency-Key': require('node:crypto').randomUUID()
      },
      body: form
    });
    const session = await stripeResponse.json();
    if (!stripeResponse.ok || !session.url || !session.url.startsWith('https://checkout.stripe.com/')) {
      console.error('Stripe could not create a checkout session.', {
        status: stripeResponse.status,
        type: session.error && session.error.type,
        code: session.error && session.error.code
      });
      return reply(res, 502, { error: 'Secure checkout could not be started. Please try again later.' });
    }
    return reply(res, 200, { url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout request failed.', error);
    return reply(res, 502, { error: 'Secure checkout could not be started. Please try again later.' });
  }
};
