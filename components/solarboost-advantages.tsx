'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const advantages = [
  {
    title: 'Saves money on electricity bills',
    content: 'Reduce your monthly energy costs significantly by generating your own clean solar power. Most homeowners see 50-90% reduction in their electricity bills.',
  },
  {
    title: 'Renewable and sustainable energy source',
    content: 'Solar energy is unlimited and renewable, providing a sustainable solution that reduces dependence on fossil fuels and helps combat climate change.',
  },
  {
    title: 'Long-term investment',
    content: 'Solar panels typically last 25-30 years and offer excellent ROI. They increase property value and provide stable energy costs for decades.',
  },
  {
    title: 'Positive environmental impact',
    content: 'By switching to solar, you reduce carbon emissions and help create a cleaner environment for future generations. One home can offset tons of CO₂ annually.',
  },
  {
    title: 'Low maintenance',
    content: 'Solar panel systems require minimal maintenance. With no moving parts, they only need occasional cleaning and an annual inspection to ensure optimal performance.',
  },
  {
    title: 'Good ROI',
    content: 'Most solar installations pay for themselves within 5-8 years through energy savings, with 20+ years of additional free electricity generation.',
  },
]

export function SolarBoostAdvantages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="advantages" ref={ref} className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-blue-500 text-lg md:text-xl font-medium tracking-wider uppercase sticky top-32"
            >
              ADVANTAGES
            </motion.h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-9 space-y-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-2xl md:text-3xl font-normal text-gray-900 group-hover:text-blue-500 transition-colors pr-8">
                    {advantage.title}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-blue-500 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {advantage.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
