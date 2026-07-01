'use client'

export function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sorizon Solar Solutions',
    url: 'https://sorizonsolar.com',
    logo: 'https://sorizonsolar.com/images/image.png',
    description:
      'Leading solar energy solutions for residential and commercial properties',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Solar Street',
      addressLocality: 'Green City',
      addressRegion: 'ST',
      postalCode: '12345',
      addressCountry: 'IN',
    },
    telephone: '+91-98765-43210',
    email: 'info@sorizonsolar.com',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61591653653520',
      'https://www.instagram.com/sorizonsolar/',
      'https://www.linkedin.com/company/sorizon-solar-solutions-llp/',
      'https://x.com/sorizonsolar',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-98765-43210',
      email: 'info@sorizonsolar.com',
      areaServed: ['IN', 'US'],
      availableLanguage: ['en', 'hi'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'Solar Energy Team',
    },
    foundingDate: '2010',
    knowsAbout: [
      'Solar Panel Installation',
      'Renewable Energy',
      'Solar Energy Systems',
      'Commercial Solar Solutions',
      'Residential Solar Solutions',
    ],
    award: [
      'ISO 9001 Certified',
      'Licensed & Insured',
      '25-Year Warranty Provider',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sorizonsolar.com',
    name: 'Sorizon Solar Solutions',
    image: 'https://sorizonsolar.com/images/hero-bg.jpg',
    description:
      'Professional solar panel installation and sustainable energy solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Solar Street',
      addressLocality: 'Green City',
      addressRegion: 'ST',
      postalCode: '12345',
      addressCountry: 'IN',
    },
    telephone: '+91-98765-43210',
    email: 'info@sorizonsolar.com',
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: 'India',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    hasMap: 'https://maps.google.com/?cid=123456789',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Panel Installation',
    description:
      'Professional installation of high-quality solar panels for homes and businesses',
    provider: {
      '@type': 'Organization',
      name: 'Sorizon Solar Solutions',
    },
    areaServed: {
      '@type': 'State',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Solar Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Solar Installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Solar Installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Solar Solutions',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
