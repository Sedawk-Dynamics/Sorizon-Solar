'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function SolarBoostCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-12 max-w-4xl mx-auto leading-tight"
        >
          Are you ready not to pay for electricity anymore?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-8 text-xl rounded-lg shadow-xl"
          >
            {"Yes! Let's do it"}
          </Button>
        </motion.div>

        {/* Energy Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-gray-200"
        >
          <p className="text-gray-600 text-lg mb-8">Solar energy generated:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { period: 'Today', value: '50', unit: 'kw/h' },
              { period: 'Week', value: '320', unit: 'kw/h' },
              { period: 'Month', value: '1280', unit: 'kw/h' },
              { period: 'Year', value: '10k+', unit: 'kw/h' },
            ].map((stat, index) => (
              <div key={stat.period} className="space-y-2">
                <p className="text-sm text-gray-500">{stat.period}</p>
                <p className="text-5xl md:text-6xl font-normal text-blue-500">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.unit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
