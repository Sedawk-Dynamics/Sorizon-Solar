// Central source of truth for business contact details & info.
//
// TODO(sorizon): The phone/WhatsApp number below is a PLACEHOLDER that matches
// the one currently used across the site. Replace it with the REAL business
// number before going live — every "Get Quote" / site-visit CTA opens a
// WhatsApp chat to `whatsapp` and every call button dials `phone`.
export const siteConfig = {
  name: 'Sorizon Solar Solutions',

  // Human-readable phone number (used for display + tel: link)
  phone: '+91 98765 43210',

  // WhatsApp number in international format — DIGITS ONLY (no +, spaces or dashes)
  whatsapp: '919876543210',

  email: 'info@sorizonsolar.com',

  coverage: {
    city: 'Surat',
    state: 'Gujarat',
    label: 'Surat & across Gujarat',
    // Service areas shown in the footer
    areas: [
      'Surat',
      'Ahmedabad',
      'Vadodara',
      'Rajkot',
      'Bharuch',
      'Navsari',
      'Valsad',
      'Anand',
    ],
  },

  // Honest, non-fabricated trust signals for the hero trust bar.
  // (Real installed-capacity / customer-count stats can be added once verified.)
  trustBadges: [
    'Free Site Survey',
    'Subsidy Guidance',
    'Professional Installation',
    '25-Year Panel Warranty',
  ],

  offering: 'Residential · Commercial · Industrial Solar EPC',

  // Google Business profile.
  // TODO(sorizon): Replace `reviewsUrl` with your real Google Business/Maps
  // review link, and set `rating`/`count` to your ACTUAL Google numbers.
  // These drive the reviews section + rating badge — don't leave them fake.
  google: {
    reviewsUrl:
      'https://www.google.com/maps/place/Sorizon+Solar+Solutions+LLP/@21.6215794,73.00257,17z/data=!3m1!4b1!4m6!3m5!1s0x3be023972d376b75:0xf66e48bf599650d0!8m2!3d21.6215794!4d73.0051503!16s%2Fg%2F11ys42pv23',
    rating: 5.0,
    count: 5,
  },
} as const

/** tel: link for the display phone number */
export function telHref() {
  return `tel:${siteConfig.phone.replace(/\s+/g, '')}`
}

/** mailto: link, optionally with a prefilled subject */
export function mailHref(subject?: string) {
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${siteConfig.email}${q}`
}

/** WhatsApp deep link (wa.me) with an optional prefilled message */
export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
