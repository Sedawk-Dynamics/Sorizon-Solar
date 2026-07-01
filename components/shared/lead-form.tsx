'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { whatsappHref } from '@/lib/site-config'

type LeadFormProps = {
  /** What the enquiry is about, e.g. "Free Site Visit" or "Residential Solar" */
  intent?: string
  /** Extra context appended to the WhatsApp message (e.g. a calculator estimate) */
  context?: string
  submitLabel?: string
  className?: string
  /** Called after the WhatsApp chat is opened */
  onSubmitted?: () => void
}

export function LeadForm({
  intent = 'Solar enquiry',
  context,
  submitLabel = 'Send on WhatsApp',
  className,
  onSubmitted,
}: LeadFormProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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

    const lines = [
      `Hi Sorizon Solar, I'd like a quote.`,
      `Name: ${name.trim()}`,
      `Mobile: ${cleanMobile}`,
      `Interested in: ${intent}`,
    ]
    if (context) lines.push(context)

    window.open(whatsappHref(lines.join('\n')), '_blank', 'noopener,noreferrer')
    onSubmitted?.()
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-3">
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
        <Button
          type="submit"
          size="lg"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-base font-semibold"
        >
          {submitLabel}
        </Button>
        <p className="text-xs text-gray-500 text-center">
          We'll reply on WhatsApp. No spam — your details stay private.
        </p>
      </div>
    </form>
  )
}
