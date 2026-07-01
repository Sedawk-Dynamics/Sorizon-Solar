'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { SolarBoostNav } from '@/components/solarboost-nav'
import { SolarBoostHero } from '@/components/solarboost-hero'
import { SolarBoostAbout } from '@/components/solarboost-about'
import { SolarBoostServices } from '@/components/solarboost-services'
import { SolarSavingsCalculator } from '@/components/solar-savings-calculator'
import { SolarBoostAdvantages } from '@/components/solarboost-advantages'
import { GoogleReviews } from '@/components/google-reviews'
import { SolarBoostCTA } from '@/components/solarboost-cta'
import { SolarBoostFooter } from '@/components/solarboost-footer'
import { SchemaMarkup } from '@/components/schema-markup'

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative overflow-hidden bg-white">
      <SchemaMarkup />
      <SolarBoostNav />
      <SolarBoostHero />
      <SolarBoostAbout />
      <SolarBoostServices />
      <SolarSavingsCalculator />
      <SolarBoostAdvantages />
      <GoogleReviews />
      <SolarBoostCTA />
      <SolarBoostFooter />
    </main>
  )
}
