'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'Switching to solar with Sorizon was the best decision we made. Our electricity bills dropped by 75% in the first year, and the installation process was seamless.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    content: 'The team at Sorizon helped us reduce our commercial property\'s energy costs significantly. Their professionalism and expertise are unmatched.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Sustainability Director',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    content: 'Outstanding service from consultation to installation. The monitoring app gives us complete visibility into our energy production. Highly recommend!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied customers who made the switch to solar energy
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary/50 transition-all"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
