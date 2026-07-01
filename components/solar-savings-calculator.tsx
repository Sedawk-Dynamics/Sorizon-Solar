'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calculator, Zap, DollarSign, Clock, Leaf } from 'lucide-react'
import { siteConfig, whatsappHref } from '@/lib/site-config'

export function SolarSavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [roofArea, setRoofArea] = useState(500)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState('')
  const [results, setResults] = useState({
    systemSize: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    co2Reduction: 0,
  })

  function handleQuote() {
    const cleanMobile = mobile.replace(/\D/g, '')
    if (name.trim().length < 2) {
      setError('Please enter your name')
      return
    }
    if (cleanMobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    setError('')
    const message = [
      `Hi ${siteConfig.name}, I'd like a detailed solar quote.`,
      `Name: ${name.trim()}`,
      `Mobile: ${cleanMobile}`,
      `Monthly bill: ₹${monthlyBill}`,
      `Roof area: ${roofArea} sq ft`,
      `Estimated system: ${results.systemSize} kW`,
      `Estimated annual savings: ₹${results.annualSavings}`,
    ].join('\n')
    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    // Calculate system size based on monthly bill and roof area (India/Gujarat)
    // Rough calc: 1 kW offsets ~₹1000/month of bill, limited by roof area
    const billBasedSize = monthlyBill / 1000
    const areaBasedSize = roofArea / 100 // Assuming ~100 sq ft per kW
    const systemSize = Math.min(billBasedSize, areaBasedSize)

    // Annual savings: ~1500 kWh per kW per year in Gujarat, tariff ~₹8/kWh
    const annualSavings = systemSize * 1500 * 8

    // Payback period: ~₹60,000 per kW installed cost (before subsidy)
    const installationCost = systemSize * 60000
    const paybackPeriod = annualSavings > 0 ? installationCost / annualSavings : 0

    // CO2 reduction: ~0.82 kg CO2 per kWh (India grid), converted to tonnes
    const co2Reduction = (systemSize * 1500 * 0.82) / 1000

    setResults({
      systemSize: Math.round(systemSize * 10) / 10,
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10,
    })
  }, [monthlyBill, roofArea])

  return (
    <section id="calculator" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4">
            Solar Savings Calculator
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Calculate Your Solar Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate of how much you can save with solar energy
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Input Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Details</h3>
            </div>

            {/* Monthly Bill Input */}
            <div className="mb-8">
              <label className="block text-base font-medium text-gray-900 mb-4">
                Average Monthly Electricity Bill
              </label>
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                  ₹
                </span>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  min="0"
                  max="20000"
                />
              </div>
              <input
                type="range"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                min="0"
                max="20000"
                step="500"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-600 [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Roof Area Input */}
            <div className="mb-8">
              <label className="block text-base font-medium text-gray-900 mb-4">
                Available Roof Area (sq ft)
              </label>
              <div className="relative mb-4">
                <input
                  type="number"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full px-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  min="0"
                  max="2000"
                />
              </div>
              <input
                type="range"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                min="0"
                max="2000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-600 [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Lead capture */}
            <div className="space-y-3 mb-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base"
                aria-label="Your name"
              />
              <Input
                type="tel"
                inputMode="numeric"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="h-12 text-base"
                aria-label="Mobile number"
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleQuote}
              size="lg"
              className="w-full bg-orange-700 hover:bg-orange-800 text-white py-6 rounded-xl text-base font-semibold shadow-lg"
            >
              Get Detailed Quote on WhatsApp
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Estimates are indicative. Final quote after a free site survey.
            </p>
          </motion.div>

          {/* Right Side - Results Cards */}
          <div className="space-y-6">
            {/* System Size */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-600 mb-2">Recommended System Size</p>
                <p className="text-4xl font-bold text-gray-900">
                  {results.systemSize}
                  <span className="text-xl font-normal text-gray-600 ml-2">kW</span>
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
            </motion.div>

            {/* Annual Savings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-600 mb-2">Estimated Annual Savings</p>
                <p className="text-4xl font-bold text-gray-900">
                  ₹{results.annualSavings.toLocaleString('en-IN')}
                  <span className="text-xl font-normal text-gray-600 ml-2">per year</span>
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </motion.div>

            {/* Payback Period */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-600 mb-2">Estimated Payback Period</p>
                <p className="text-4xl font-bold text-gray-900">
                  {results.paybackPeriod}
                  <span className="text-xl font-normal text-gray-600 ml-2">years</span>
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>

            {/* CO2 Reduction */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-600 mb-2">Annual CO₂ Reduction</p>
                <p className="text-4xl font-bold text-gray-900">
                  {results.co2Reduction}
                  <span className="text-xl font-normal text-gray-600 ml-2">tons</span>
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-teal-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
