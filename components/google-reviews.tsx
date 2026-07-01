import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { reviews } from '@/lib/reviews-data'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.round(rating)
              ? 'w-4 h-4 fill-yellow-400 text-yellow-400'
              : 'w-4 h-4 text-gray-300'
          }
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const { rating, count, reviewsUrl } = siteConfig.google

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4">
            Customer Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Trusted by homes &amp; businesses across Gujarat
          </h2>
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-5 py-2.5">
            <span className="text-2xl font-bold text-gray-900">{rating.toFixed(1)}</span>
            <Stars rating={rating} />
            <span className="text-sm text-gray-500">{count} Google reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars rating={review.rating} />
              <p className="text-gray-700 leading-relaxed flex-1">“{review.text}”</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl px-8 py-6 text-base"
          >
            <a href={reviewsUrl} target="_blank" rel="noopener noreferrer">
              Read all reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
