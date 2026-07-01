'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Building2, Factory, Sun } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Rooftop solar solutions for homes. Reduce your electricity bills and increase property value with clean energy.',
      gradient: 'from-amber-500/10 to-orange-500/10',
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Scalable solar systems for businesses. Cut operational costs and showcase your commitment to sustainability.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Factory,
      title: 'Industrial Solar',
      description: 'High-capacity solar installations for industrial facilities. Maximize efficiency and minimize carbon footprint.',
      gradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: Sun,
      title: 'Solar Farms',
      description: 'Large-scale solar farm development. Generate clean energy at utility scale with advanced technology.',
      gradient: 'from-yellow-500/10 to-amber-500/10',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {'Our Solar Solutions'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Comprehensive solar energy solutions for every need, from residential rooftops to large-scale solar farms.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 space-y-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
