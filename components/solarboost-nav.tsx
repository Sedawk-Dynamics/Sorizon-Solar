'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Send, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

// Top-bar links (first 3 shown in the desktop centre)
const navLinks = [
  { name: 'Residential', href: '/residential' },
  { name: 'Industrial', href: '/industrial' },
  { name: 'Commercial', href: '/commercial' },
]

// Full list shown in the fullscreen menu
const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'Industrial', href: '/industrial' },
  { name: 'O&M / Cleaning', href: '/solar-maintenance' },
  { name: 'Net Metering', href: '/net-metering' },
  { name: 'Subsidy', href: '/solar-subsidy' },
  { name: 'Contact', href: '/contact' },
]

export function SolarBoostNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMenu = () => setIsMobileMenuOpen(false)

  // Time
  const [time, setTime] = useState('')
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      setTime(`${h}:${m} GMT / INDIA`)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] bg-black backdrop-blur-md"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/image.png"
                alt="Sorizon Solar"
                width={72}
                height={72}
                className="h-18 w-auto"
              />
              <span className="text-xl font-semibold text-white">
                Sorizon Solar
              </span>
            </Link>

            {/* Desktop Nav - Center */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <span className="hidden md:block text-white/80 text-sm tracking-wide">
                {time}
              </span>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= FULLSCREEN MENU ================= */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed inset-0 z-[150] flex"
      >
        {/* Left Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/images/menu-bg.jpg"
            alt="Solar Panels"
            fill
            className="object-cover"
          />
          <div className="absolute top-8 left-8 flex items-center gap-3">
            <Image
              src="/images/image.png"
              alt="Sorizon Solar"
              width={48}
              height={48}
            />
            <span className="text-xl font-bold text-white">
              Sorizon Solar
            </span>
          </div>
        </div>

        {/* Right Menu */}
        <div className="w-full md:w-1/2 bg-white relative overflow-y-auto">
          {/* ✅ CLOSE BUTTON – ALWAYS WORKS */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed top-8 right-8 z-[200] w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
          >
            <X size={24} />
          </button>

          <div className="px-8 md:px-12 max-w-lg mx-auto py-24">
            {/* Online */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-lg text-gray-600">
                We are online right now
              </span>
            </div>

            {/* Links */}
            <nav className="space-y-5 mb-16">
              {menuLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block w-full text-left text-3xl md:text-4xl text-gray-900 hover:text-blue-500"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact */}
            <div className="border-t pt-8 space-y-6 text-sm">
              <div>
                <p className="text-gray-400">Service Areas:</p>
                <p className="text-gray-700">{siteConfig.coverage.label}</p>
              </div>
              <div>
                <p className="text-gray-400">Phone:</p>
                <p className="text-gray-700">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-gray-700">{siteConfig.email}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8 pb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61591653653520"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/sorizonsolar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/company/sorizon-solar-solutions-llp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-500" />
              </a>
              <a
                href="https://x.com/sorizonsolar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-500" />
              </a>
              <a href="mailto:info@sorizonsolar.com" aria-label="Email">
                <Send className="w-6 h-6 text-gray-600 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
