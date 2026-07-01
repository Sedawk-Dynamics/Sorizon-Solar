'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import gsap from 'gsap'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (titleRef.current && isInView) {
      const letters = titleRef.current.querySelectorAll('.letter')
      
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [isInView])

  const title = "Power Your Future with Clean Energy"
  const words = title.split(' ')

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/10"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-foreground"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span>{'Leading Solar Solutions Provider'}</span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance"
            >
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4">
                  {word.split('').map((letter, letterIndex) => (
                    <span
                      key={`${wordIndex}-${letterIndex}`}
                      className="letter inline-block opacity-0"
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
            >
              {'At Sorizon Solar Solutions LLP, we provide advanced rooftop, commercial, and industrial solar solutions tailored to your needs. Clean, affordable, and efficient energy for a sustainable tomorrow.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
              >
                {'Get Free Quote'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                {'Calculate Savings'}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">{'500+'}</div>
                <div className="text-sm text-muted-foreground">{'Projects Completed'}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">{'50MW+'}</div>
                <div className="text-sm text-muted-foreground">{'Total Capacity'}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">{'100%'}</div>
                <div className="text-sm text-muted-foreground">{'Customer Satisfaction'}</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-3xl"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.img
                src="/images/image.png"
                alt="Solar Energy"
                className="relative z-10 w-full h-full object-contain"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
