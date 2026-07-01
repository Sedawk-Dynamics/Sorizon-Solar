import type { Metadata } from 'next'
import { SolarBoostNav } from '@/components/solarboost-nav'
import { SolarBoostFooter } from '@/components/solarboost-footer'
import { SeoArticle } from '@/components/seo-article'
import { getSeoPage } from '@/lib/seo-pages-data'

const page = getSeoPage('1kw-solar-cost')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
}

export default function Page() {
  return (
    <main className="bg-white">
      <SolarBoostNav />
      <SeoArticle page={page} />
      <SolarBoostFooter />
    </main>
  )
}
