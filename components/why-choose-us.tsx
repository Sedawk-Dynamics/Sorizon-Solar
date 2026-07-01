'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, Users, Award, Wrench, DollarSign } from 'lucide-react'

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Shield,
      title: '25-Year Warranty',
      description: 'Industry-leading warranty on all solar panels and equipment.',
    },
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Premium solar panels with up to 22% efficiency ratings.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 15+ years of experience.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'ISO certified and compliant with all industry standards.',
    },
    {
      icon: Wrench,
      title: 'Full Service',
      description: 'From design to installation to maintenance, we handle it all.',
    },
    {
      icon: DollarSign,
      title: 'Best Value',
      description: 'Competitive pricing with flexible financing options.',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {'Why Choose Sorizon Solar'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'We deliver excellence through quality products, expert service, and unwavering commitment to customer satisfaction.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
