'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Send, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig, whatsappHref, telHref, mailHref } from '@/lib/site-config'
import { seoPages } from '@/lib/seo-pages-data'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'Industrial', href: '/industrial' },
  { name: 'Solar Calculator', href: '/#calculator' },
  { name: 'Contact', href: '/contact' },
]

export function SolarBoostFooter() {
  return (
    <footer id="contact" style={{ backgroundColor: '#121212' }} className="pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section - Logo and Navigation */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Left - Logo and Description */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/images/image.png"
                alt="Sorizon Solar"
                width={96}
                height={96}
                className="h-24 w-auto"
              />
              <span className="text-3xl font-bold text-white">Sorizon Solar</span>
            </a>
            <p className="text-white/60 text-base leading-relaxed max-w-md mb-8">
              Leading the solar revolution with innovative, sustainable energy solutions. 
              Empowering homes and businesses to harness the power of the sun.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Serving {siteConfig.coverage.label}</span>
              </div>
              <a
                href={mailHref('Solar enquiry')}
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={telHref()}
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            {/* Service Areas */}
            <div className="mt-8">
              <h4 className="text-white/80 font-medium text-sm mb-3">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.coverage.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Links and CTA */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/60 hover:text-white text-base transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Get Started</h3>
              <p className="text-white/60 text-sm mb-6">
                Ready to make the switch to solar energy? Book a free consultation today.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl text-base shadow-xl shadow-green-600/20 w-full md:w-auto"
              >
                <a
                  href={whatsappHref(
                    `Hi ${siteConfig.name}, I'd like a free solar consultation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>

       
        {/* Popular Searches */}
        <div className="mb-20">
          <h3 className="text-white font-semibold text-lg mb-5">Popular Searches</h3>
          <div className="flex flex-wrap gap-3">
            {seoPages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-colors"
              >
                {p.breadcrumb}
              </Link>
            ))}
          </div>
        </div>

        {/* Large Logo Text */}
<div className="mb-32 overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="
      text-[8rem] 
      md:text-[12rem] 
      lg:text-[16rem] 
      xl:text-[20rem] 
      font-bold 
      leading-none 
      text-white/10 
      select-none
    "
  >
    Sorizon
  </motion.div>
</div>


        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-10 grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright and Links */}
          <div className="flex flex-col gap-3 text-sm text-white/40">
            <p>© All rights reserved / Sorizon Solar 2026 </p>
            <a href="#privacy" className="hover:text-white/60 transition-colors inline-block">
              Privacy Policy
            </a>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61591653653520"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all text-white/70 hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sorizonsolar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all text-white/70 hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/sorizon-solar-solutions-llp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all text-white/70 hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/sorizonsolar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all text-white/70 hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@sorizonsolar.com"
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all text-white/70 hover:text-white"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Credits */}
          <div className="text-sm text-white/40 text-left md:text-right space-y-1">
            <p>Designed by: <span className="text-white/60">Webel.io Team</span></p>
            <p>Developed by: <span className="text-white/60">Webel.io</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
