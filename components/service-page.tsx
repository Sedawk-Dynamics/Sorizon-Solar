import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import type { Service } from '@/lib/services-data'
import { siteConfig, whatsappHref, telHref } from '@/lib/site-config'

export function ServicePage({ service }: { service: Service }) {
  const whatsappMessage = `Hi ${siteConfig.name}, I'm interested in ${service.title}. Please share a free quote.`

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">{service.navLabel}</span>
          </nav>

          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            {service.kicker} · {siteConfig.coverage.label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-7 text-lg rounded-2xl"
            >
              <a href={whatsappHref(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                Get Free Site Visit
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-7 text-lg rounded-2xl"
            >
              <a href={telHref()}>
                <Phone className="mr-2 w-5 h-5" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            Why choose {siteConfig.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-2xl px-6 shadow-sm">
            {service.faqs.map((faq) => (
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

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 max-w-3xl mx-auto">
            Ready to start saving with solar?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-lg rounded-2xl"
          >
            <a href={whatsappHref(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              Get a Free Quote on WhatsApp
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
