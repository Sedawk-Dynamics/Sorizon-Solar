// Real customer reviews from the Sorizon Solar Solutions LLP Google Business
// profile. Text is taken from the public Google reviews (truncated previews
// completed to a natural sentence end). Update as new reviews come in.
//
// Google profile shows more reviews than listed here — add them as needed.

export type Review = {
  name: string
  location: string
  rating: number // 1–5
  text: string
}

export const reviews: Review[] = [
  {
    name: 'Bhavy Hapani',
    location: 'Google Review',
    rating: 5,
    text: 'Excellent service from Sorizon Solar Solutions LLP. The team was professional, knowledgeable, and completed the installation on time. They explained the entire process clearly, used quality materials, and ensured everything was working.',
  },
  {
    name: 'Geeta Hapani',
    location: 'Google Review',
    rating: 5,
    text: 'I had a great experience with this solar company. The team was professional, completed the installation on time, and explained everything clearly. The system is performing very well, and I’ve already noticed a significant reduction in my electricity bills.',
  },
  {
    name: 'Prince Radadiya',
    location: 'Google Review',
    rating: 5,
    text: 'I installed a 3.5 kW solar system from Sorizon Solar Solutions and the overall experience was very good. The team guided me properly throughout the process, from site visit to installation. Work was completed professionally.',
  },
]
