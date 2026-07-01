'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Calculator, Zap, TrendingDown, Leaf } from 'lucide-react'

export function SolarCalculator() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [monthlyBill, setMonthlyBill] = useState([5000])
  const [roofArea, setRoofArea] = useState([500])

  // Calculations
  const annualBill = monthlyBill[0] * 12
  const systemSize = Math.floor(roofArea[0] / 100) // Rough estimate: 100 sq ft per kW
  const estimatedCost = systemSize * 50000 // ₹50,000 per kW
  const annualSavings = annualBill * 0.8 // 80% savings
  const paybackPeriod = (estimatedCost / annualSavings).toFixed(1)
  const co2Reduced = (systemSize * 1.5).toFixed(1) // Tons per year

  return (
    <section id="calculator" ref={ref} className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span>{'Solar Savings Calculator'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {'Calculate Your Solar Savings'}
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            {'See how much you can save by switching to solar energy. Get instant estimates tailored to your needs.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardContent className="p-8 space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-semibold text-card-foreground">
                      {'Monthly Electricity Bill'}
                    </label>
                    <span className="text-2xl font-bold text-primary">₹{monthlyBill[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={monthlyBill}
                    onValueChange={setMonthlyBill}
                    min={1000}
                    max={50000}
                    step={500}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{'₹1,000'}</span>
                    <span>{'₹50,000'}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-semibold text-card-foreground">
                      {'Available Roof Area (sq ft)'}
                    </label>
                    <span className="text-2xl font-bold text-primary">{roofArea[0]} sq ft</span>
                  </div>
                  <Slider
                    value={roofArea}
                    onValueChange={setRoofArea}
                    min={100}
                    max={5000}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{'100 sq ft'}</span>
                    <span>{'5,000 sq ft'}</span>
                  </div>
                </div>

                <motion.div
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  >
                    {'Get Detailed Quote'}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{'Recommended System Size'}</div>
                    <div className="text-3xl font-bold text-foreground">{systemSize} kW</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/20 bg-gradient-to-br from-card to-green-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{'Annual Savings'}</div>
                    <div className="text-3xl font-bold text-foreground">₹{annualSavings.toLocaleString()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-500/20 bg-gradient-to-br from-card to-amber-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{'Estimated Investment'}</div>
                    <div className="text-3xl font-bold text-foreground">₹{estimatedCost.toLocaleString()}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    {'Payback Period: '}
                    <span className="font-bold text-foreground">{paybackPeriod} years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-card to-blue-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{'CO₂ Reduction (Annual)'}</div>
                    <div className="text-3xl font-bold text-foreground">{co2Reduced} tons</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
