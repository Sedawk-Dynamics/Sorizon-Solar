"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Calculator", href: "#calculator" },
  { name: "Contact", href: "#contact" },
]

export function PremiumNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(18,18,18,0.85)", "rgba(18,18,18,0.98)"]
  )

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(10px)", "blur(18px)"]
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* HEADER */}
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-shadow ${
          isScrolled
            ? "border-white/10 shadow-2xl shadow-primary/10"
            : "border-white/5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/image.png"
                alt="Sorizon Solar"
                width={140}
                height={60}
                className="h-16 w-auto object-contain"
                priority
              />
              <span className="text-xl font-bold text-white leading-none">
                Sorizon Solar
              </span>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-white/80 hover:text-primary relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                Get Started
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.35 }}
        className="fixed top-28 left-0 right-0 z-40 bg-[#121212] backdrop-blur-lg border-b border-white/10 md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-2 text-white hover:text-primary"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 space-y-2">
            <Button variant="outline" size="sm" className="w-full text-white border-white/20">
              Sign In
            </Button>
            <Button size="sm" className="w-full bg-primary">
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
