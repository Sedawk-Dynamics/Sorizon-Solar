'use client'

import { motion } from 'framer-motion'
import { 
  Battery, 
  Cloud, 
  Smartphone, 
  TrendingDown, 
  Shield, 
  Wrench,
  Sun,
  BarChart
} from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Premium Solar Panels',
    description: 'High-efficiency monocrystalline panels with 25-year performance warranty',
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-500',
  },
  {
    icon: Battery,
    title: 'Energy Storage',
    description: 'Advanced battery systems for 24/7 power availability and backup',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Smart Monitoring',
    description: 'Real-time energy tracking and analytics through mobile app',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
  {
    icon: Cloud,
    title: 'AI-Powered Optimization',
    description: 'Machine learning algorithms maximize your energy production',
    color: 'from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-500',
  },
  {
    icon: TrendingDown,
    title: 'Cost Reduction',
    description: 'Reduce your electricity bills by up to 80% with solar power',
    color: 'from-green-500/20 to-lime-500/20',
    iconColor: 'text-green-500',
  },
  {
    icon: Shield,
    title: 'Comprehensive Warranty',
    description: '25-year product warranty with performance guarantees',
    color: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Certified technicians ensure perfect installation every time',
    color: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-red-500',
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Detailed insights into your energy production and savings',
    color: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-600',
  },
]

export function FeatureGrid() {
  return (
    <section className="py-20 md:py-32 relative" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Sorizon
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Complete Solar Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need for a seamless transition to clean energy, backed by industry-leading technology and support
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-balance">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {feature.description}
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
