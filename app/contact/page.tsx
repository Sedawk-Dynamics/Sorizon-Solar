import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { SolarBoostNav } from '@/components/solarboost-nav'
import { SolarBoostFooter } from '@/components/solarboost-footer'
import { LeadForm } from '@/components/shared/lead-form'
import { Button } from '@/components/ui/button'
import { siteConfig, whatsappHref, telHref, mailHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact Sorizon Solar | Rooftop Solar in Surat & Gujarat',
  description:
    'Get in touch with Sorizon Solar for a free rooftop solar site visit and quote. Serving Surat and across Gujarat. Call or WhatsApp us today.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SolarBoostNav />

      <section className="pt-36 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Get in touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-5">
              Book your free solar site visit
            </h1>
            <p className="text-lg text-gray-600">
              Tell us a little about your requirement and our {siteConfig.coverage.city} team
              will get back to you with a personalised savings estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact details */}
            <div className="space-y-8">
              <a href={telHref()} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={whatsappHref(`Hi ${siteConfig.name}, I'd like a free solar quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Chat with us
                  </p>
                </div>
              </a>

              <a href={mailHref('Solar enquiry')} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

            </div>

            {/* Lead form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a callback</h2>
              <p className="text-gray-600 mb-6">
                Share your details — we&apos;ll reply on WhatsApp.
              </p>
              <LeadForm intent="Contact page enquiry" submitLabel="Send on WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      <SolarBoostFooter />
    </main>
  )
}
