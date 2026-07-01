import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Camera, Star } from 'lucide-react'
import { SolarBoostNav } from '@/components/solarboost-nav'
import { SolarBoostFooter } from '@/components/solarboost-footer'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects-data'
import { siteConfig, whatsappHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Our Solar Projects in Surat & Gujarat | Sorizon Solar',
  description:
    'See rooftop solar installations completed by Sorizon Solar across Surat and Gujarat — residential, commercial and industrial systems with real results.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  const hasProjects = projects.length > 0

  return (
    <main className="bg-white">
      <SolarBoostNav />

      {/* Header */}
      <section className="pt-36 pb-14 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Work · {siteConfig.coverage.label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 max-w-3xl leading-tight">
            Solar installations we&apos;re proud of
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Real rooftop solar systems installed for homes, businesses and industries
            across Surat and Gujarat.
          </p>
        </div>
      </section>

      {/* Gallery or empty state */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {hasProjects ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Camera className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Project gallery coming soon
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re busy powering homes and businesses across Gujarat — our
                photo gallery is on the way. In the meantime, our customers rated us{' '}
                <span className="inline-flex items-center gap-1 font-semibold text-gray-900">
                  {siteConfig.google.rating.toFixed(1)}
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </span>{' '}
                on Google.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-xl"
                >
                  <a
                    href={whatsappHref(
                      `Hi ${siteConfig.name}, I'd like to see examples of your solar installations.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Us on WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-6 rounded-xl">
                  <Link href="/#reviews">Read Customer Reviews</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <SolarBoostFooter />
    </main>
  )
}
