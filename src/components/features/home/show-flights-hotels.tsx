import { Button } from '@/components/ui/button'
import { PaperPlaneFilled } from '@/shared/icons'
import FlightsImage from '@/shared/images/home/flights.jpg'
import HotelsImage from '@/shared/images/home/hotels.jpg'

export default function ShowFlightsHotels() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div
        style={{
          backgroundImage: `url('${FlightsImage.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative aspect-square overflow-hidden rounded-3xl"
      >
        <div className="absolute bottom-0 flex h-1/2 w-full items-center justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(18,18,18,0.75)_48.67%)] text-white">
          <div className="absolute bottom-5 flex w-[80%] flex-col items-center space-y-4">
            <span className="font-trade-gothic text-4xl font-bold">
              Flights
            </span>
            <span className="text-center text-base">
              Search Flights & Places Hire to our most popular destinations
            </span>
            <Button size="lg">
              <PaperPlaneFilled className="size-6" />
              Show Flights
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('${HotelsImage.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative aspect-square overflow-hidden rounded-3xl"
      >
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(18, 18, 18, 0.75) 48.67%)',
          }}
          className="absolute bottom-0 flex h-1/2 w-full items-center justify-center text-white"
        >
          <div className="absolute bottom-5 flex w-[80%] flex-col items-center space-y-4">
            <span className="font-trade-gothic text-4xl font-bold">Hotels</span>
            <span className="text-center text-base">
              Search Flights & Places Hire to our most popular destinations
            </span>
            <Button size="lg">
              <PaperPlaneFilled className="size-6" />
              Show Hotels
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
