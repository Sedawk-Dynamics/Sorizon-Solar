'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function FounderMessage() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                    A Message from Our Founder
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  When I founded Sorizon Solar Solutions fifteen years ago, I had a simple yet powerful vision: to make clean, renewable energy accessible to everyone. Today, I'm proud to say we've helped thousands of families and businesses take control of their energy future.
                </p>
                
                <p className="text-pretty">
                  The journey hasn't always been easy, but seeing the impact of our work—reducing carbon emissions, lowering energy costs, and creating energy independence—makes every challenge worthwhile. We're not just installing solar panels; we're building a sustainable future, one rooftop at a time.
                </p>
                
                <p className="text-pretty">
                  As we look to the future, our commitment remains unwavering: to provide innovative, reliable, and affordable solar solutions while delivering exceptional customer service. Thank you for trusting us with your energy needs.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="font-bold text-xl text-foreground">Rajesh Kumar</div>
                <div className="text-primary font-medium">Founder & CEO, Sorizon Solar Solutions</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
