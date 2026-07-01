'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Calculator, Zap, DollarSign, Clock, Leaf } from 'lucide-react'

export function PremiumCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(150)
  const [roofArea, setRoofArea] = useState(500)
  const [results, setResults] = useState({
    systemSize: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    co2Reduction: 0,
  })

  useEffect(() => {
    // Calculate system size based on roof area (1 kW per 100 sq ft)
    const systemSize = (roofArea / 100) * 1
    
    // Estimate annual savings (assuming $0.12 per kWh and system generates 1200 kWh per kW per year)
    const annualProduction = systemSize * 1200
    const annualSavings = annualProduction * 0.12
    
    // Calculate payback period (assuming $2.50 per watt installed)
    const systemCost = systemSize * 1000 * 2.5
    const paybackPeriod = systemCost / annualSavings
    
    // Calculate CO2 reduction (0.7 pounds per kWh)
    const co2Reduction = (annualProduction * 0.7) / 2000 // Convert to tons

    setResults({
      systemSize: Math.round(systemSize * 10) / 10,
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10,
    })
  }, [monthlyBill, roofArea])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="calculator">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/10" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Solar Savings Calculator
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Calculate Your Solar Savings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get an instant estimate of how much you can save with solar energy
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Your Details</h3>
              </div>

              <div className="space-y-8">
                {/* Monthly Bill Input */}
                <div className="space-y-4">
                  <Label htmlFor="monthly-bill" className="text-base font-medium">
                    Average Monthly Electricity Bill
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="monthly-bill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="pl-8 text-lg h-12"
                      min="50"
                      max="1000"
                    />
                  </div>
                  <Slider
                    value={[monthlyBill]}
                    onValueChange={([value]) => setMonthlyBill(value)}
                    min={50}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Roof Area Input */}
                <div className="space-y-4">
                  <Label htmlFor="roof-area" className="text-base font-medium">
                    Available Roof Area (sq ft)
                  </Label>
                  <Input
                    id="roof-area"
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value))}
                    className="text-lg h-12"
                    min="100"
                    max="5000"
                  />
                  <Slider
                    value={[roofArea]}
                    onValueChange={([value]) => setRoofArea(value)}
                    min={100}
                    max={5000}
                    step={50}
                    className="w-full"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                  Get Detailed Quote
                </Button>
              </div>
            </motion.div>

            {/* Results Display */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <ResultCard
                icon={Zap}
                label="Recommended System Size"
                value={results.systemSize}
                unit="kW"
                color="text-amber-500"
                bgColor="from-amber-500/20 to-orange-500/20"
              />
              <ResultCard
                icon={DollarSign}
                label="Estimated Annual Savings"
                value={results.annualSavings}
                unit="per year"
                prefix="$"
                color="text-green-500"
                bgColor="from-green-500/20 to-emerald-500/20"
              />
              <ResultCard
                icon={Clock}
                label="Estimated Payback Period"
                value={results.paybackPeriod}
                unit="years"
                color="text-blue-500"
                bgColor="from-blue-500/20 to-cyan-500/20"
              />
              <ResultCard
                icon={Leaf}
                label="Annual CO₂ Reduction"
                value={results.co2Reduction}
                unit="tons"
                color="text-teal-500"
                bgColor="from-teal-500/20 to-green-500/20"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultCard({
  icon: Icon,
  label,
  value,
  unit,
  prefix = '',
  color,
  bgColor,
}: {
  icon: any
  label: string
  value: number
  unit: string
  prefix?: string
  color: string
  bgColor: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{label}</p>
          <div className="flex items-baseline gap-2">
            <motion.span
              key={value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-foreground"
            >
              {prefix}{value.toLocaleString()}
            </motion.span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
        </div>
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
      </div>
    </motion.div>
  )
}
