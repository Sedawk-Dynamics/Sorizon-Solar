import Link from 'next/link'
import { ArrowRight, Phone, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import type { Block, SeoPage } from '@/lib/seo-pages-data'
import { siteConfig, whatsappHref, telHref } from '@/lib/site-config'

function ContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-12 mb-5">{block.text}</h2>
    case 'p':
      return <p className="text-lg text-gray-700 leading-relaxed mb-5">{block.text}</p>
    case 'ul':
      return (
        <ul className="space-y-3 mb-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-700">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-gray-50">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-gray-900">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'note':
      return (
        <p className="my-6 rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 text-sm text-amber-800">
          {block.text}
        </p>
      )
  }
}

export function SeoArticle({ page }: { page: SeoPage }) {
  const whatsappMessage = `Hi ${siteConfig.name}, I have a question about "${page.breadcrumb}". Please share a free quote.`

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="pt-36 pb-14 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">{page.breadcrumb}</span>
          </nav>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            {page.kicker}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-5 leading-tight">{page.h1}</h1>
          <p className="text-lg text-white/80">{page.intro}</p>
        </div>
      </section>

      {/* Body */}
      <article className="py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          {page.blocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}

          {/* Inline CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-xl">
              <a href={whatsappHref(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 rounded-xl">
              <a href={telHref()}>
                <Phone className="mr-2 w-5 h-5" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-2xl px-6 shadow-sm">
            {page.faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-base md:text-lg text-gray-900 py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
