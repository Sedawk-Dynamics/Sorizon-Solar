'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 text-pretty">
              Get a free consultation and personalized quote. Join thousands of satisfied customers who've made the switch to clean energy.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12"
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/90 border-white/20 text-foreground h-12"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/90 border-white/20 text-foreground h-12"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/90 border-white/20 text-foreground h-12"
                />
                <Input
                  placeholder="Property Type"
                  className="bg-white/90 border-white/20 text-foreground h-12"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 shadow-xl group h-12"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">Call Us</div>
                <div className="font-semibold">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">Email Us</div>
                <div className="font-semibold">info@sorizonsolar.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
