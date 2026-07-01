'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteConfig, whatsappHref, telHref } from '@/lib/site-config'

gsap.registerPlugin(ScrollTrigger)

export function SolarBoostHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || ''
      // Split into words (kept whole so they never break mid-word),
      // then split each word into animatable letters.
      titleRef.current.innerHTML = text
        .split(' ')
        .map(
          (word) =>
            `<span class="inline-block whitespace-nowrap">${word
              .split('')
              .map((char) => `<span class="char inline-block">${char}</span>`)
              .join('')}</span>`
        )
        .join(' ')

      gsap.fromTo(
        titleRef.current.querySelectorAll('.char'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      )
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Solar Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative min-h-[calc(100vh-6rem)] flex items-end pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* What we do + where we serve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-block bg-blue-500/90 text-white text-sm md:text-base font-medium px-4 py-2 rounded-full">
                {siteConfig.offering}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm md:text-base px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                {siteConfig.coverage.label}
              </span>
            </motion.div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 leading-tight max-w-5xl"
            >
              Save on Electricity Bills with Premium Rooftop Solar
            </h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 text-lg md:text-xl font-light mb-8 max-w-2xl"
            >
              Free Site Survey • Subsidy Guidance • Professional Installation
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-7 text-lg rounded-2xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105"
              >
                <a
                  href={whatsappHref(
                    `Hi ${siteConfig.name}, I'd like to book a FREE site visit for solar installation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Site Visit
                  <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 py-7 text-lg rounded-2xl backdrop-blur-sm"
              >
                <a href={telHref()}>
                  <Phone className="mr-2 w-5 h-5" />
                  {siteConfig.phone}
                </a>
              </Button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mt-10"
            >
              {siteConfig.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-white/90 text-sm md:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
