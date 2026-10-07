# Savor Market Website

A responsive static storefront for Savor Market. The catalog contains 37 products from the Savor Market product reference PDF.

## Open the website

Open `index.html` in a browser to preview the storefront. Use **Shop** to browse the catalog, organized into product categories and the Clean nutrition, Skin & hair ritual, and Morning reset collections. Category links show product counts and can be shared by URL. Products without images use placeholders. The cart is saved in this browser.

## Stripe checkout (Vercel)

The cart can create a Stripe-hosted Checkout session from a Vercel deployment. The server validates every product ID and quantity and calculates prices from `api/product-catalog.js`; it does not trust prices sent by the browser. Checkout collects billing details, a Malaysian shipping address, and a phone number. Successful sessions can be verified before the local cart is cleared.

To enable it:

1. Create a Stripe account and use **test mode** first. Obtain a secret test key (`sk_test_...`) from the Stripe Dashboard. Never place a Stripe secret key in browser code or commit it.
2. In the Vercel project, add `STRIPE_SECRET_KEY` as an encrypted environment variable. Add `SITE_URL` as the site's exact HTTPS origin, for example `https://your-project.vercel.app` (no path or trailing slash). Add both variables to the environments you plan to test, then redeploy.
3. Test a full checkout using Stripe's test card numbers in test mode. Switch to a live key only after the business, payment methods, product information, and delivery process are ready.

**Important:** delivery rates are not included in checkout yet. Stripe charges only the product subtotal, while collecting the delivery address; confirm delivery charges separately with customers before accepting real orders. Orders and refunds are visible in Stripe Dashboard, but this site does not yet store a separate order record, send its own order emails, or manage/adjust stock. Enable receipt emails in Stripe if you want Stripe to send payment receipts. Do not advertise checkout as fully operational until delivery and order-fulfilment steps are ready.

The checkout asks for a Malaysian delivery address and phone number. Pos Laju is the stated carrier, but there is no Pos Laju rate lookup, label purchase, tracking, or dispatch integration yet; delivery fees must be confirmed separately before accepting orders.

## Store language selector

The language selector is available on the home, shop, product, cart, and account pages. It translates common storefront controls and checkout instructions into English, Bahasa Melayu, Simplified Chinese, or Tamil, and remembers the choice in that browser. Product names and detailed product descriptions remain in their supplied language (currently English); this is a basic built-in interface translation, not an automatic page translator.

Product pages include a local review prototype. Reviews and ratings are saved only in that browser on that device; they are not sent to the store, visible to other shoppers, or verified purchases. Connect shared, moderated storage before presenting these reviews as store customer reviews.

## Configure real authentication

Authentication uses Supabase Auth and remains disabled until a Supabase project is configured. Do not use `file://` to test authentication: Supabase redirect URLs and browser security require an HTTP origin.

1. Create a Supabase project. In **Authentication → Providers → Email**, enable email/password sign-in and require email confirmation.
2. In Supabase **Authentication → Settings**, set the minimum password length to **12**, require uppercase and lowercase letters, numbers, and symbols, and enable leaked-password protection. Keep Supabase authentication rate limits enabled; configure CAPTCHA/Turnstile if sign-up or reset endpoints need additional abuse protection.
3. Set the project **Site URL** to the deployed HTTPS origin. Add the exact deployed `login.html` URL and its `?recover=1` variant to the allowed redirect URLs so confirmation and password-reset emails return to this site.
4. Copy the project URL and its **publishable** key into `auth-config.js`. The publishable key is intended for browser use; **never put a `service_role` or secret key in this file or any frontend code**. Protect database data with Supabase Row Level Security policies.
5. Deploy to Vercel over HTTPS. `vercel.json` applies a Content Security Policy and additional browser security headers. If hosting elsewhere, configure equivalent headers and allow the Supabase project domain and `esm.sh` in the relevant policies.
6. Before launch, configure a production email provider/SMTP sender and verify its domain (SPF/DKIM) in Supabase so confirmation and recovery messages are deliverable.

The account page supports email/password sign-in, email-confirmed account creation, sign-out, and password-reset links. New and reset passwords must contain at least 12 characters, uppercase and lowercase letters, a number, and a symbol; enforce the same policy in Supabase because browser checks can be bypassed. Supabase stores and refreshes the authentication session in the browser, where it is accessible to page JavaScript; the Content Security Policy helps reduce script-injection risk but is not a substitute for preventing XSS. These controls reduce common risks but cannot make a public website impossible to attack: keep dependencies and hosting current, avoid untrusted scripts, use HTTPS, and do not store sensitive customer data in the static frontend. Newsletter actions are not connected to a backend.

For a local visual preview without authentication, open `index.html`. Authentication requires a configured project and a local HTTP server or deployed HTTPS site. Stripe checkout requires Vercel serverless functions and the environment variables above; it cannot run from a `file://` preview.

## Files

- `index.html` — page content
- `products.html` — searchable, filterable catalog of products
- `product.html` — product detail page used by every catalog product
- `cart.html` — saved shopping cart with quantity controls and item removal
- `login.html` — sign-in, account-creation, and password-reset interface
- `auth-config.js` — public Supabase project URL and publishable key configuration (fill in to enable authentication)
- `translations.js` — built-in English, Bahasa Melayu, Simplified Chinese, and Tamil interface translations
- Product detail pages include browser-local review and rating previews; they are not shared with other shoppers or verified purchases
- `assets/savor-market-logo.png` — supplied Savor Market leaf mark used in the header, footer, account page, and favicon
- `styles.css` — layout and responsive styling
- `app.js` — product listing, search, category filters, product details, and cart interactions
- `vercel.json` — production security headers for Vercel deployments
- `api/` — server-side Stripe Checkout and payment-verification endpoints; keep secret keys in Vercel environment variables
- `api/product-catalog.js` — authoritative server-side Stripe prices in Malaysian sen; keep these aligned with `app.js`
- `assets/savor-market/` — local product image files

Authentication is provided by Supabase once configured. Stripe checkout requires Vercel configuration. Newsletter actions are not connected to a backend.
