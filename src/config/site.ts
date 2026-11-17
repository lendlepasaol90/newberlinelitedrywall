/**
 * SITE CONFIGURATION — the single place to update business details.
 *
 * Anything left as an empty string ('') or null is simply not rendered
 * anywhere on the site (header, footer, structured data, form), so no
 * fake phone numbers, addresses or emails can leak into production.
 *
 * TODO(owner): fill in the values marked PLACEHOLDER when they are available.
 */
export const site = {
  // --- Brand ---------------------------------------------------------------
  name: 'New Berlin Elite Drywall',
  wordmark: { primary: 'New Berlin Elite', secondary: 'Drywall' }, // text fallback, shown only if `logo` is set to null
  logo: '/logo.png' as string | null, // full logo for light backgrounds (file in /public); also used in structured data
  logoLight: '/logo-light.png' as string, // same logo with light lettering, for dark backgrounds
  logoSize: { width: 900, height: 497 },
  url: 'https://newberlinelitedrywall.com',

  // --- Location ------------------------------------------------------------
  city: 'New Berlin',
  state: 'Wisconsin',
  stateAbbr: 'WI',
  mapQuery: 'New Berlin Elite Drywall, 16500 W Glendale Dr #150, New Berlin, WI 53151' as string, // what the footer Google Map shows ('' hides the map)

  // --- Contact ------------------------------------------------------------
  phone: '(262) 710-2107' as string, // displayed as written
  email: 'office@newberlinelitedrywall.com' as string,
  address: {
    street: '16500 W Glendale Dr #150' as string,
    city: 'New Berlin' as string,
    region: 'WI' as string,
    postalCode: '53151' as string,
  },
  hours: 'Mon–Sat 7am–6pm · Sunday closed' as string, // shown in the footer
  // Opening hours for structured data (24-hour times). Days not listed are closed.
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
  ],
  owner: 'Nick Finch' as string,
  category: 'Drywall Contractor',
  about:
    'New Berlin Elite Drywall helps homeowners and businesses throughout New Berlin, WI, transform unfinished, outdated, and damaged interiors into clean, beautifully finished spaces. Our drywall services include new drywall installation, sheetrock replacement, drywall repairs, wall patching, ceiling repairs, taping, mudding, sanding, and professional drywall finishing. From basement finishing and home renovations to new construction and commercial improvements, we handle projects of all sizes with careful attention to detail. Whether you’re repairing a damaged wall or preparing an entire property for painting, New Berlin Elite Drywall is ready to help. Proudly serving New Berlin, Brookfield, Muskego, Waukesha, West Allis, and surrounding Wisconsin communities.',

  // --- Service areas -------------------------------------------------------
  serviceAreas: ['New Berlin', 'Brookfield', 'Muskego', 'Waukesha', 'West Allis'],

  // --- Social profiles (PLACEHOLDERS) --------------------------------------
  social: {
    facebook: '' as string,
    instagram: '' as string,
    googleBusiness: '' as string,
  },

  // --- Estimate form -------------------------------------------------------
  form: {
    /**
     * PLACEHOLDER: URL that receives the estimate request as a multipart
     * POST (Formspree, Web3Forms, Basin, a Cloudflare Worker, a CRM webhook…).
     * While this is empty the form validates but tells the visitor that
     * online requests are not connected yet — it never pretends to send.
     */
    endpoint: '' as string,
    /** Optional Cloudflare Turnstile site key. Honeypot + timing checks run regardless. */
    turnstileSiteKey: '' as string,
    maxPhotos: 5,
    maxPhotoMb: 10,
  },
};

export const telHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, '')}` : '';
