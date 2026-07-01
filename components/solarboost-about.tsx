'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '15+', label: 'years of work' },
  { value: '2,500+', label: 'happy clients' },
  { value: '75+', label: 'expert workers' },
]

export function SolarBoostAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-blue-500 text-sm md:text-base font-medium tracking-wider uppercase mb-6"
        >
          ABOUT COMPANY
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-20 max-w-5xl leading-tight"
        >
          Our company is dedicated to harnessing the power of the sun to provide sustainable and eco-friendly energy solutions
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-24 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-normal text-blue-500 mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-gray-400 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-6 rounded-lg bg-transparent"
          >
            More About Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
