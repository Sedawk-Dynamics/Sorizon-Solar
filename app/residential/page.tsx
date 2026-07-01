import type { Metadata } from 'next'
import { SolarBoostNav } from '@/components/solarboost-nav'
import { SolarBoostFooter } from '@/components/solarboost-footer'
import { ServicePage } from '@/components/service-page'
import { getService } from '@/lib/services-data'

const service = getService('residential')!

export const metadata: Metadata = {
  title: `${service.title} in Surat & Gujarat | Sorizon Solar`,
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
}

export default function Page() {
  return (
    <main className="bg-white">
      <SolarBoostNav />
      <ServicePage service={service} />
      <SolarBoostFooter />
    </main>
  )
}
