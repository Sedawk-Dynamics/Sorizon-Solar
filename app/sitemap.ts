import { type MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { seoPages } from '@/lib/seo-pages-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sorizonsolar.com'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const seoRoutes: MetadataRoute.Sitemap = seoPages.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...seoRoutes]
}
