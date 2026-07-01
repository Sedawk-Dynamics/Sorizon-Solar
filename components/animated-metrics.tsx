'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Users, Leaf, Award } from 'lucide-react'

const metrics = [
  {
    icon: Zap,
    value: 50,
    suffix: 'MW+',
    label: 'Energy Generated',
    color: 'text-primary',
  },
  {
    icon: Users,
    value: 2500,
    suffix: '+',
    label: 'Happy Customers',
    color: 'text-accent',
  },
  {
    icon: Leaf,
    value: 30000,
    suffix: 't',
    label: 'CO₂ Reduced',
    color: 'text-primary',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-accent',
  },
]

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function AnimatedMetrics() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
                >
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </motion.div>
                
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    <CountUp end={metric.value} />
                    <span className={metric.color}>{metric.suffix}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
