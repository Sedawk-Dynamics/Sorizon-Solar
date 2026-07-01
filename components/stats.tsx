'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Users, Award, TrendingUp } from 'lucide-react'

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      icon: Leaf,
      value: '25,000+',
      label: 'Tons CO₂ Reduced',
      color: 'text-green-600',
    },
    {
      icon: Users,
      value: '1,200+',
      label: 'Happy Customers',
      color: 'text-blue-600',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      color: 'text-amber-600',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Energy Efficiency',
      color: 'text-primary',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`p-4 bg-background/10 rounded-2xl ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-secondary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
