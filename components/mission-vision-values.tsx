'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Shield, Globe } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly pushing the boundaries of solar technology',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Delivering consistent, dependable energy solutions',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Building a greener future for generations',
  },
]

export function MissionVisionValues() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 md:p-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                To accelerate the world's transition to sustainable energy by providing innovative, accessible, and efficient solar solutions that empower individuals and businesses to take control of their energy future while reducing their carbon footprint.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-8 md:p-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                To become the most trusted name in renewable energy, leading the charge towards a carbon-neutral future where clean, affordable solar power is accessible to every home and business across the nation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              What Drives Us Forward
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
