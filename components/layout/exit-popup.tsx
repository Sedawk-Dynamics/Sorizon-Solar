'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { LeadForm } from '@/components/shared/lead-form'

const STORAGE_KEY = 'sorizon_exit_popup_seen'

/**
 * Desktop exit-intent lead popup. Fires once per browser session when the
 * cursor leaves the top of the viewport (a common "about to close the tab"
 * signal). Guarded by sessionStorage so it never nags a returning visitor.
 */
export function ExitPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    function handleMouseOut(e: MouseEvent) {
      // Only trigger when leaving through the top edge and not to another element
      if (e.clientY <= 0 && !e.relatedTarget) {
        setOpen(true)
        sessionStorage.setItem(STORAGE_KEY, '1')
        document.removeEventListener('mouseout', handleMouseOut)
      }
    }

    document.addEventListener('mouseout', handleMouseOut)
    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Wait — get a free solar quote in 60 seconds
          </DialogTitle>
          <DialogDescription className="text-base">
            Share your details and our Surat team will send you a personalised
            savings estimate on WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <LeadForm
          intent="Free Quote (exit popup)"
          submitLabel="Get My Free Quote"
          onSubmitted={() => setOpen(false)}
          className="mt-2"
        />
      </DialogContent>
    </Dialog>
  )
}
