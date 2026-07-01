import Image from 'next/image'
import { Sun, MapPin, Zap } from 'lucide-react'
import type { Project } from '@/lib/projects-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
      {/* Image / placeholder */}
      <div className="relative h-64 w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-orange-400">
            <Sun className="h-14 w-14 text-white/80" />
          </div>
        )}

        {/* System size badge */}
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-gray-900 backdrop-blur">
          <Zap className="h-4 w-4 text-orange-500" />
          {project.systemSize}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          {project.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {project.location}
          </span>
          {project.unitsGenerated && (
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              {project.unitsGenerated}
            </span>
          )}
        </div>

        {project.testimonial && (
          <p className="mt-4 text-sm italic text-gray-600">“{project.testimonial}”</p>
        )}
        {project.customer && (
          <p className="mt-2 text-sm font-medium text-gray-900">— {project.customer}</p>
        )}
      </div>
    </div>
  )
}
