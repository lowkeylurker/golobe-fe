'use client'

import Hero from '@/components/features/home/hero'
import HomeBooking from '@/components/features/home/home-booking'
import PlanYourPerfectTrip from '@/components/features/home/plan-your-perfect-trip'
import Reviews from '@/components/features/home/reviews'
import ShowFlightsHotels from '@/components/features/home/show-flights-hotels'
import Footer from '@/components/layouts/footer'

export default function LandingPage() {
  return (
    <div className="bg-background font-montserrat">
      <Hero />
      <HomeBooking />

      <div className="container mx-auto space-y-20">
        <PlanYourPerfectTrip />
        <ShowFlightsHotels />
        <Reviews />
      </div>

      <Footer />
    </div>
  )
}
