// Content for SEO landing pages. Each entry drives one route + <SeoArticle>.
// Prices/figures are INDICATIVE and localised for Gujarat — a disclaimer note
// is shown on cost pages. Edit copy here.

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'note'; text: string }

export type SeoPage = {
  slug: string
  breadcrumb: string
  h1: string
  metaTitle: string
  metaDescription: string
  kicker: string
  intro: string
  blocks: Block[]
  faqs: { q: string; a: string }[]
}

export const seoPages: SeoPage[] = [
  {
    slug: 'solar-company-in-surat',
    breadcrumb: 'Solar Company in Surat',
    h1: 'Solar Company in Surat',
    metaTitle: 'Best Solar Company in Surat | Rooftop Solar Installation | Sorizon Solar',
    metaDescription:
      'Looking for a trusted solar company in Surat? Sorizon Solar offers rooftop solar installation for homes, businesses and industries with subsidy support and 25-year warranty.',
    kicker: 'Surat, Gujarat',
    intro:
      'Sorizon Solar is a rooftop solar EPC company based in Surat, helping homes, shops, offices and factories across the city switch to clean, affordable solar energy. From a free site survey to subsidy paperwork and net metering, we handle the entire journey.',
    blocks: [
      { type: 'h2', text: 'Why go solar in Surat?' },
      {
        type: 'ul',
        items: [
          'Surat gets strong year-round sunlight, giving excellent solar generation.',
          'Rising electricity tariffs make rooftop solar a smart long-term investment.',
          'Central subsidy (PM Surya Ghar) lowers the upfront cost for homes.',
          'Systems typically pay for themselves in about 3–4 years.',
        ],
      },
      { type: 'h2', text: 'Our solar services in Surat' },
      {
        type: 'ul',
        items: [
          'Residential rooftop solar for homes and bungalows',
          'Commercial solar for shops, showrooms, offices and hotels',
          'Industrial solar EPC for factories and manufacturing units',
          'Net metering, subsidy assistance and O&M / panel cleaning',
        ],
      },
      { type: 'h2', text: 'Why choose Sorizon Solar' },
      {
        type: 'p',
        text: 'We are a local Surat team offering end-to-end service — transparent quotes, tier-1 panels with a 25-year performance warranty, and complete handling of subsidy and DISCOM paperwork so you start saving without the hassle.',
      },
    ],
    faqs: [
      { q: 'Which areas in Surat do you cover?', a: 'We serve all of Surat and surrounding areas across Gujarat. Contact us with your location for a free site visit.' },
      { q: 'Do you handle the subsidy paperwork?', a: 'Yes. As a registered installer we manage the complete PM Surya Ghar subsidy process for residential customers.' },
      { q: 'How do I get a quote?', a: 'Call or WhatsApp us for a free site survey. You’ll receive a transparent quote with savings, subsidy and payback details.' },
    ],
  },
  {
    slug: 'rooftop-solar-gujarat',
    breadcrumb: 'Rooftop Solar in Gujarat',
    h1: 'Rooftop Solar in Gujarat',
    metaTitle: 'Rooftop Solar in Gujarat | Installation, Cost & Subsidy | Sorizon Solar',
    metaDescription:
      'Complete guide to rooftop solar in Gujarat — benefits, cost, subsidy and net metering. Get a free site survey from Sorizon Solar across Gujarat.',
    kicker: 'Gujarat',
    intro:
      'Gujarat is one of India’s leading states for solar energy, with abundant sunlight and strong policy support. Rooftop solar lets homes and businesses across Gujarat cut electricity bills dramatically while contributing to a greener grid.',
    blocks: [
      { type: 'h2', text: 'Benefits of rooftop solar in Gujarat' },
      {
        type: 'ul',
        items: [
          'High solar irradiation — roughly 1,500 units generated per kW per year.',
          'Central subsidy for residential systems under PM Surya Ghar.',
          'Net metering lets you earn credit for surplus power exported to the grid.',
          '25-year panel life means decades of low-cost electricity.',
        ],
      },
      { type: 'h2', text: 'How much does rooftop solar cost in Gujarat?' },
      {
        type: 'p',
        text: 'Cost depends on system size and rooftop type. As an indicative guide, a residential system costs roughly ₹60,000–₹75,000 per kW before subsidy, with the effective cost coming down further after the PM Surya Ghar subsidy for eligible homes.',
      },
      {
        type: 'table',
        head: ['System Size', 'Suitable For', 'Approx. Monthly Units', 'Indicative Cost (before subsidy)'],
        rows: [
          ['1 kW', 'Small home', '~120 units', '₹60,000–75,000'],
          ['3 kW', 'Average home', '~360 units', '₹1.8–2.1 lakh'],
          ['5 kW', 'Large home', '~600 units', '₹3.0–3.5 lakh'],
        ],
      },
      { type: 'note', text: 'Figures are indicative and vary by site, brand and installation. Get a free survey for an exact quote.' },
    ],
    faqs: [
      { q: 'Is Gujarat good for solar?', a: 'Yes — Gujarat has excellent sunlight and supportive policies, making it one of the best states in India for rooftop solar.' },
      { q: 'What subsidy is available in Gujarat?', a: 'Residential rooftop systems are eligible for central subsidy under PM Surya Ghar. We handle the full application for you.' },
      { q: 'How long does installation take?', a: 'A typical home system is installed in 2–3 days after approvals. Net-metering timelines depend on your DISCOM.' },
    ],
  },
  {
    slug: '1kw-solar-cost',
    breadcrumb: '1 kW Solar Cost',
    h1: '1 kW Solar System Cost in Gujarat',
    metaTitle: '1 kW Solar System Cost in Gujarat (2026) | Price & Subsidy | Sorizon Solar',
    metaDescription:
      'How much does a 1 kW solar system cost in Gujarat? See indicative price, generation, subsidy and savings for a 1 kW rooftop solar system.',
    kicker: 'Cost Guide',
    intro:
      'A 1 kW rooftop solar system is a popular starting point for small homes. Here’s a clear breakdown of what a 1 kW system costs in Gujarat, how much power it generates and what you can expect to save.',
    blocks: [
      { type: 'h2', text: '1 kW solar system: quick facts' },
      {
        type: 'table',
        head: ['Detail', 'Approximate Value'],
        rows: [
          ['Roof area required', '~100 sq ft'],
          ['Monthly generation', '~120 units'],
          ['Yearly generation', '~1,500 units'],
          ['Indicative cost (before subsidy)', '₹60,000–75,000'],
          ['Ideal for', 'Homes with a bill up to ~₹1,000/month'],
        ],
      },
      { type: 'h2', text: 'What affects the price?' },
      {
        type: 'ul',
        items: [
          'Panel and inverter brand (tier-1 vs budget)',
          'Type of mounting structure and roof condition',
          'Wiring runs and site complexity',
          'Whether net metering and subsidy processing are included',
        ],
      },
      { type: 'h2', text: 'Subsidy on a 1 kW system' },
      {
        type: 'p',
        text: 'Residential 1 kW systems are eligible for central subsidy under PM Surya Ghar, which reduces your effective cost. We calculate your exact eligible subsidy during the free survey.',
      },
      { type: 'note', text: 'Prices are indicative for Gujarat and change with market rates. Contact us for a current, exact quote.' },
    ],
    faqs: [
      { q: 'How much does a 1 kW solar system cost?', a: 'In Gujarat, a 1 kW rooftop system is indicatively ₹60,000–₹75,000 before subsidy, depending on brand and site. The effective cost is lower after PM Surya Ghar subsidy.' },
      { q: 'How many units does 1 kW generate?', a: 'Around 120 units per month (about 1,500 units per year) in Gujarat conditions.' },
      { q: 'Is 1 kW enough for my home?', a: 'A 1 kW system suits small homes with a monthly bill up to roughly ₹1,000. For higher bills, consider 3 kW or 5 kW.' },
    ],
  },
  {
    slug: '3kw-vs-5kw-solar',
    breadcrumb: '3 kW vs 5 kW Solar',
    h1: '3 kW vs 5 kW Solar: Which Should You Choose?',
    metaTitle: '3 kW vs 5 kW Solar System — Cost, Savings & Comparison | Sorizon Solar',
    metaDescription:
      'Confused between a 3 kW and 5 kW solar system? Compare cost, generation, roof area and savings to pick the right rooftop solar size for your home.',
    kicker: 'Comparison',
    intro:
      'Choosing the right system size is the most important solar decision. This comparison of 3 kW vs 5 kW rooftop solar helps you match capacity to your electricity bill, roof area and budget.',
    blocks: [
      { type: 'h2', text: '3 kW vs 5 kW at a glance' },
      {
        type: 'table',
        head: ['Parameter', '3 kW', '5 kW'],
        rows: [
          ['Roof area needed', '~300 sq ft', '~500 sq ft'],
          ['Monthly generation', '~360 units', '~600 units'],
          ['Ideal monthly bill', '₹2,500–3,500', '₹4,000–6,000'],
          ['Indicative cost (before subsidy)', '₹1.8–2.1 lakh', '₹3.0–3.5 lakh'],
        ],
      },
      { type: 'h2', text: 'Which one is right for you?' },
      {
        type: 'ul',
        items: [
          'Choose 3 kW if you have an average home, moderate bill and limited roof area.',
          'Choose 5 kW if you have a larger home, higher bill, or plan to add AC / EV charging.',
          'Still unsure? Size it to your last 12 months of electricity usage — we do this during the survey.',
        ],
      },
      { type: 'note', text: 'Figures are indicative for Gujarat. A free site survey gives you an exact, personalised recommendation.' },
    ],
    faqs: [
      { q: 'Is 5 kW better than 3 kW?', a: 'Not always — the best size matches your electricity usage and roof area. 5 kW suits larger homes or higher bills; 3 kW is ideal for average homes.' },
      { q: 'How much more does 5 kW cost?', a: 'A 5 kW system costs more upfront than 3 kW but generates proportionally more power, so savings scale with usage.' },
      { q: 'Can I upgrade later?', a: 'It’s usually more cost-effective to install the right size now. We help you plan for future loads like AC or EV charging.' },
    ],
  },
  {
    slug: 'solar-subsidy-gujarat',
    breadcrumb: 'Solar Subsidy Gujarat',
    h1: 'Solar Subsidy in Gujarat (PM Surya Ghar)',
    metaTitle: 'Solar Subsidy in Gujarat 2026 — PM Surya Ghar Guide | Sorizon Solar',
    metaDescription:
      'How to get the rooftop solar subsidy in Gujarat under PM Surya Ghar: eligibility, process and documents. Sorizon Solar handles the full application for you.',
    kicker: 'Subsidy Guide',
    intro:
      'The PM Surya Ghar: Muft Bijli Yojana provides central subsidy for residential rooftop solar. Here’s how the solar subsidy works in Gujarat, who is eligible, and how Sorizon Solar handles the entire process for you.',
    blocks: [
      { type: 'h2', text: 'Who is eligible?' },
      {
        type: 'ul',
        items: [
          'Residential electricity consumers with a valid connection.',
          'A rooftop with enough shade-free space for the system.',
          'Installation by a registered vendor (like Sorizon Solar).',
        ],
      },
      { type: 'h2', text: 'How the subsidy process works' },
      {
        type: 'ul',
        items: [
          'Register your application on the national PM Surya Ghar portal.',
          'Get feasibility approval from your DISCOM.',
          'Install the system through a registered vendor.',
          'Net-meter installation and inspection.',
          'Subsidy is disbursed to your bank account after approval.',
        ],
      },
      { type: 'h2', text: 'We handle it end-to-end' },
      {
        type: 'p',
        text: 'The paperwork can be confusing. As a registered installer, Sorizon Solar manages your registration, DISCOM approvals, installation and the final subsidy claim — so you get the benefit without the runaround.',
      },
      { type: 'note', text: 'Subsidy amounts follow current government scheme slabs and can change. We confirm your exact eligible subsidy during the free survey.' },
    ],
    faqs: [
      { q: 'How much solar subsidy can I get in Gujarat?', a: 'The subsidy depends on system size as per current PM Surya Ghar slabs. We calculate your exact eligible amount during the quote.' },
      { q: 'Is the subsidy only for homes?', a: 'The PM Surya Ghar residential subsidy applies to homes. Commercial and industrial systems benefit from other savings like accelerated depreciation.' },
      { q: 'Do you help with the application?', a: 'Yes — we handle the entire subsidy process from portal registration to the final claim.' },
    ],
  },
]

export function getSeoPage(slug: string) {
  return seoPages.find((p) => p.slug === slug)
}
