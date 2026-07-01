'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'House',
    image: '/images/house-solar.jpg',
    href: '/residential',
  },
  {
    title: 'Commercial facilities',
    image: '/images/commercial-field.jpg',
    href: '/commercial',
  },
]

export function SolarBoostServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-blue-500 text-sm md:text-base font-medium tracking-wider uppercase mb-6"
        >
          WE WORK WITH
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-normal text-gray-900 mb-16 max-w-4xl leading-tight"
        >
          We install high-quality solar panels both in homes and in large-scale industries
        </motion.h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <h3 className="text-4xl md:text-5xl font-normal text-white">
                  {service.title}
                </h3>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 self-start px-6 py-6 rounded-lg"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
