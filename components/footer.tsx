'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/image.png"
                alt="Sorizon Solar"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">{'Sorizon Solar'}</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              {'Power your future with clean, affordable, and efficient solar energy solutions.'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{'Services'}</h3>
            <ul className="space-y-2">
              {['Residential Solar', 'Commercial Solar', 'Industrial Solar', 'Solar Farms'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{'Quick Links'}</h3>
            <ul className="space-y-2">
              {['About Us', 'Why Choose Us', 'Calculator', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{'Contact Info'}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:9313177075"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {'9313177075'}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:Info@sorizonsolar.com"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {'Info@sorizonsolar.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm text-secondary-foreground/80">
            {`© ${currentYear} Sorizon Solar Solutions LLP. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
