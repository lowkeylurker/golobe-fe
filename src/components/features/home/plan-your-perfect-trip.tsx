import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function PlanYourPerfectTrip() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl leading-8 font-semibold">
            Plan your perfect trip
          </h2>
          <p className="text-foreground-opacity-75 text-base leading-5">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <Button variant="outline">See more places</Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-6 rounded-2xl bg-white p-4 shadow-[0_4px_16px_0_rgba(17,34,17,0.05)]"
          >
            <Image
              src="/place1.jpg"
              alt=""
              width={100}
              height={100}
              className="aspect-square w-20 rounded-xl"
            />
            <div className="flex flex-1 flex-col items-start gap-2">
              <span className="text-foreground-opacity-70 text-base font-semibold">
                Istanbul, Turkey
              </span>
              <span className="text-sm font-medium">
                Flights . Hotel . Resorts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
