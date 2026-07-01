// Completed solar projects shown in the portfolio (/projects).
//
// TODO(sorizon): Add your REAL installations here. Drop photos into
// /public/images/projects/ and reference them below. Every field except
// `image`/`beforeImage`/`testimonial`/`customer` is required.
//
// Example entry (copy, fill in real details, and uncomment):
//
// {
//   title: '3.5 kW Residential Rooftop',
//   type: 'Residential',
//   systemSize: '3.5 kW',
//   location: 'Surat, Gujarat',
//   unitsGenerated: '~5,000 units / year',
//   image: '/images/projects/prince-radadiya-after.jpg',
//   beforeImage: '/images/projects/prince-radadiya-before.jpg',
//   testimonial:
//     'The team guided me properly throughout the process, from site visit to installation.',
//   customer: 'Prince Radadiya',
// },

export type Project = {
  title: string
  type: 'Residential' | 'Commercial' | 'Industrial'
  systemSize: string // e.g. "3.5 kW"
  location: string // e.g. "Surat, Gujarat"
  unitsGenerated?: string // e.g. "~5,000 units / year"
  image?: string // main / after photo
  beforeImage?: string // optional before photo
  testimonial?: string
  customer?: string
}

export const projects: Project[] = [
  // Add real completed projects here — see the example above.
]
