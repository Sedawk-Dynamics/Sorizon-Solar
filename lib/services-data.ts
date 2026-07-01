// Content for all service pages. Each entry drives one route + one <ServicePage>.
// Edit copy here — the page components read from this single source.

export type Service = {
  slug: string
  navLabel: string
  title: string
  tagline: string
  metaDescription: string
  kicker: string
  intro: string
  benefits: { title: string; description: string }[]
  process: { title: string; description: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'residential',
    navLabel: 'Residential',
    title: 'Residential Rooftop Solar',
    tagline: 'Cut your home electricity bills by up to 90% with a rooftop solar system.',
    metaDescription:
      'Residential rooftop solar installation in Surat & Gujarat. Cut home electricity bills, claim PM Surya Ghar subsidy, and enjoy a 25-year panel warranty.',
    kicker: 'For Homes',
    intro:
      'A rooftop solar system turns your roof into a power plant, protecting your family from rising electricity tariffs for the next 25 years. Our Surat team handles everything — site survey, design, subsidy paperwork, installation and net-metering — so you start saving from day one.',
    benefits: [
      { title: 'Lower Bills', description: 'Offset most of your monthly consumption and slash your electricity bill.' },
      { title: 'Govt. Subsidy', description: 'We handle your PM Surya Ghar (Muft Bijli Yojana) subsidy application end-to-end.' },
      { title: '25-Year Warranty', description: 'Tier-1 panels backed by a 25-year performance warranty.' },
      { title: 'Adds Home Value', description: 'A solar-powered home is a more valuable, future-ready asset.' },
    ],
    process: [
      { title: 'Free Site Survey', description: 'We assess your roof, shading and consumption to size the right system.' },
      { title: 'Design & Quote', description: 'You get a transparent proposal with savings, subsidy and payback.' },
      { title: 'Installation', description: 'Certified installers set up your system, usually within 2–3 days.' },
      { title: 'Net Metering', description: 'We complete DISCOM paperwork so you get credit for surplus power.' },
    ],
    faqs: [
      { q: 'How much roof area do I need?', a: 'Roughly 100 sq ft per kW. A typical 3 kW home system needs about 300 sq ft of shade-free roof.' },
      { q: 'What subsidy can I get?', a: 'Under PM Surya Ghar, residential systems up to 3 kW are eligible for central subsidy. We manage the full application for you.' },
      { q: 'How long does payback take?', a: 'Most homes in Gujarat recover their investment in about 3–4 years, then enjoy free power for 20+ years.' },
    ],
  },
  {
    slug: 'commercial',
    navLabel: 'Commercial',
    title: 'Commercial Solar Solutions',
    tagline: 'Reduce operating costs and lock in predictable energy rates for your business.',
    metaDescription:
      'Commercial solar EPC in Surat & Gujarat for shops, offices, showrooms and hotels. Reduce operating costs with rooftop solar and net metering.',
    kicker: 'For Businesses',
    intro:
      'Electricity is one of the largest fixed costs for shops, offices, showrooms and hospitality businesses. A commercial solar system converts that cost into an asset — with strong ROI, accelerated depreciation benefits and a hedge against tariff hikes.',
    benefits: [
      { title: 'Strong ROI', description: 'Commercial tariffs are high, so savings and payback are excellent.' },
      { title: 'Tax Benefits', description: 'Claim accelerated depreciation on your solar investment.' },
      { title: 'Brand Value', description: 'Show customers your business runs on clean, green energy.' },
      { title: 'Scalable', description: 'Systems designed to grow with your energy needs.' },
    ],
    process: [
      { title: 'Energy Audit', description: 'We review your load profile and tariff to maximise savings.' },
      { title: 'Custom Design', description: 'A system engineered for your rooftop and usage pattern.' },
      { title: 'Turnkey Install', description: 'Full EPC — supply, installation, commissioning and safety.' },
      { title: 'Monitoring', description: 'Ongoing performance monitoring and support.' },
    ],
    faqs: [
      { q: 'Is solar worth it for my business?', a: 'Yes — commercial electricity tariffs are high, so a well-sized system typically pays back in 3–5 years with 25 years of savings.' },
      { q: 'Can I claim depreciation?', a: 'Businesses can claim accelerated depreciation on solar assets, improving overall returns. Consult your accountant for specifics.' },
      { q: 'Will it disrupt operations?', a: 'No. Installation is planned around your working hours to minimise any disruption.' },
    ],
  },
  {
    slug: 'industrial',
    navLabel: 'Industrial',
    title: 'Industrial Solar EPC',
    tagline: 'Megawatt-scale rooftop and ground-mount solar for factories and industries.',
    metaDescription:
      'Industrial solar EPC in Gujarat — rooftop and ground-mount MW-scale systems for factories and manufacturing units. Reduce power costs and improve margins.',
    kicker: 'For Industries',
    intro:
      'For manufacturing units, power is a major input cost. Our industrial EPC team designs and delivers high-capacity rooftop and ground-mount solar plants that cut energy costs, stabilise expenses and improve your margins — engineered to industrial safety and reliability standards.',
    benefits: [
      { title: 'Lower Power Cost', description: 'Significantly reduce your per-unit energy cost at scale.' },
      { title: 'MW-Scale Capacity', description: 'Rooftop and ground-mount plants designed for heavy loads.' },
      { title: 'Reliable EPC', description: 'End-to-end engineering, procurement and construction.' },
      { title: 'Long-Term Support', description: 'O&M plans to keep plants running at peak efficiency.' },
    ],
    process: [
      { title: 'Feasibility Study', description: 'Detailed load, roof/land and structural assessment.' },
      { title: 'Engineering', description: 'Bankable system design and documentation.' },
      { title: 'Construction', description: 'Professional installation with quality and safety compliance.' },
      { title: 'O&M', description: 'Operation and maintenance to protect your investment.' },
    ],
    faqs: [
      { q: 'Do you handle ground-mount plants?', a: 'Yes, we deliver both large rooftop and ground-mount installations depending on available space and load.' },
      { q: 'What about open access / captive?', a: 'We can advise on captive and open-access solar models based on your consumption and location in Gujarat.' },
      { q: 'Do you provide maintenance?', a: 'Yes — we offer dedicated O&M and cleaning contracts to keep generation at peak.' },
    ],
  },
  {
    slug: 'solar-maintenance',
    navLabel: 'O&M / Cleaning',
    title: 'Solar O&M & Panel Cleaning',
    tagline: 'Keep your solar plant generating at peak efficiency, year after year.',
    metaDescription:
      'Solar O&M and panel cleaning services in Surat & Gujarat. Scheduled maintenance, inspection and cleaning to protect generation and system life.',
    kicker: 'Operations & Maintenance',
    intro:
      'Dust, bird droppings and minor faults can quietly cut your solar generation by 15–25%. Our operation & maintenance service keeps panels clean, connections safe and output high — protecting the return on your solar investment.',
    benefits: [
      { title: 'Maximise Output', description: 'Clean panels generate more, so you save more.' },
      { title: 'Extend System Life', description: 'Regular checks catch issues before they become costly.' },
      { title: 'Safety Checks', description: 'Inspection of wiring, inverters and mounting.' },
      { title: 'Flexible Plans', description: 'One-time cleaning or scheduled annual contracts.' },
    ],
    process: [
      { title: 'Inspection', description: 'We assess panel condition, output and safety.' },
      { title: 'Cleaning', description: 'Professional, water-safe cleaning of all modules.' },
      { title: 'Health Report', description: 'A clear report on system performance.' },
      { title: 'Scheduled Care', description: 'Optional recurring visits to keep output high.' },
    ],
    faqs: [
      { q: 'How often should panels be cleaned?', a: 'In dusty Gujarat conditions, cleaning every 1–2 months is ideal. We offer scheduled plans to handle it for you.' },
      { q: 'Do you service systems you didn’t install?', a: 'Yes, we provide O&M and cleaning for solar systems installed by any provider.' },
      { q: 'Will cleaning damage the panels?', a: 'No. We use safe methods and the right water quality to protect module surfaces.' },
    ],
  },
  {
    slug: 'net-metering',
    navLabel: 'Net Metering',
    title: 'Net Metering Assistance',
    tagline: 'Get credited for the surplus power your solar system sends to the grid.',
    metaDescription:
      'Net metering assistance in Gujarat. We handle DISCOM applications and documentation so surplus solar power earns you bill credits.',
    kicker: 'Grid Connection',
    intro:
      'Net metering lets your solar system export surplus electricity to the grid and earn credits on your bill. The paperwork with your DISCOM can be tedious — we handle the entire application and liaison so your system is grid-connected correctly and compliantly.',
    benefits: [
      { title: 'Bill Credits', description: 'Surplus units you export reduce your electricity bill.' },
      { title: 'End-to-End Paperwork', description: 'We manage the full DISCOM application for you.' },
      { title: 'Compliant Setup', description: 'Correct metering and documentation as per norms.' },
      { title: 'Faster Approval', description: 'Experienced liaison to avoid common delays.' },
    ],
    process: [
      { title: 'Eligibility Check', description: 'We confirm your connection and sanctioned load.' },
      { title: 'Application', description: 'We prepare and submit your net-metering request.' },
      { title: 'Meter Installation', description: 'Coordination for the bi-directional meter.' },
      { title: 'Activation', description: 'Your system starts earning export credits.' },
    ],
    faqs: [
      { q: 'What is net metering?', a: 'It is a billing arrangement where surplus solar power you export to the grid is credited against the power you draw.' },
      { q: 'How long does approval take?', a: 'Timelines vary by DISCOM, but our liaison experience helps avoid common paperwork delays.' },
      { q: 'Do you handle the whole process?', a: 'Yes — from application to meter installation and activation, we manage it all.' },
    ],
  },
  {
    slug: 'solar-subsidy',
    navLabel: 'Subsidy Assistance',
    title: 'Solar Subsidy Assistance',
    tagline: 'Claim your PM Surya Ghar rooftop solar subsidy without the hassle.',
    metaDescription:
      'Solar subsidy assistance in Gujarat under PM Surya Ghar (Muft Bijli Yojana). We handle registration, documentation and claims for residential rooftop solar.',
    kicker: 'Government Subsidy',
    intro:
      'The PM Surya Ghar: Muft Bijli Yojana offers central financial assistance for residential rooftop solar. The process involves portal registration, DISCOM approval, installation by a registered vendor and inspection. As a registered installer, we manage the complete subsidy journey for you.',
    benefits: [
      { title: 'Central Subsidy', description: 'Reduce your upfront cost with government assistance.' },
      { title: 'Registered Vendor', description: 'Installation by an authorised vendor as required for the subsidy.' },
      { title: 'Full Documentation', description: 'We handle registration, forms and inspection coordination.' },
      { title: 'Transparent Guidance', description: 'Clear explanation of eligibility and the amount you can claim.' },
    ],
    process: [
      { title: 'Eligibility & Registration', description: 'We register your application on the national portal.' },
      { title: 'DISCOM Approval', description: 'Feasibility approval and documentation.' },
      { title: 'Installation', description: 'System installed by our registered team.' },
      { title: 'Subsidy Claim', description: 'Inspection and subsidy disbursement to your account.' },
    ],
    faqs: [
      { q: 'Who is eligible for the subsidy?', a: 'Residential electricity consumers with a valid connection are generally eligible for rooftop solar subsidy under PM Surya Ghar. We confirm your eligibility during the survey.' },
      { q: 'How much subsidy will I get?', a: 'The amount depends on system size as per the current scheme slabs. We calculate your exact eligible subsidy during the quote.' },
      { q: 'Do you handle the paperwork?', a: 'Yes — from portal registration to the final claim, we manage the entire process.' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
