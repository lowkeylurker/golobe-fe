import Image from 'next/image'

import HomeFlightForm from '@/components/features/home/flight-form'
import { Button } from '@/components/ui/button'
import banner from '@/shared/images/flights/banner.jpeg'

export default function FlightsPage() {
  return (
    <div>
      <div
        className="h-[500px]"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="relative h-full text-white"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 35, 77, 0.63) 11.46%, rgba(0, 35, 77, 0) 77.37%)',
          }}
        >
          <div className="absolute top-1/2 ml-20 w-[40%] -translate-y-[80%]">
            <div className="font-trade-gothic text-[45px] font-bold">
              Make your travel whishlist, we&apos;ll do the rest
            </div>
            <div className="text-lg font-medium">
              Special offers to suit your plan
            </div>
          </div>
        </div>
      </div>

      <div className="relative -top-20 container mx-auto rounded-2xl bg-white p-4 shadow-md">
        <div className="mb-4 font-bold">Where are you flying?</div>
        <HomeFlightForm />
      </div>

      <div className="container mx-auto space-y-20">
        <div className="">
          <div className="mb-8 flex items-center justify-between">
            <div className="">
              <h2 className="mb-2 text-3xl font-bold">Fall into travel</h2>
              <p>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <Button variant="outline">See All</Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="relative h-[420px] overflow-hidden rounded-xl bg-transparent shadow-md"
                style={{
                  backgroundImage: 'url("/place1.jpg")',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <div
                  className="h-full"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.65) 11.46%, rgba(0, 35, 77, 0) 77.37%)',
                  }}
                >
                  <div className="absolute bottom-0 w-full p-4 text-white">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="">
                        <h2 className="text-xl font-bold">Melbourne</h2>
                        <p className="text-sm">An amazing journey</p>
                      </div>
                      <span className="text-xl font-bold">$ 700</span>
                    </div>
                    <Button className="bg-mainColor-400 w-full rounded-md py-2 font-semibold text-black transition-colors">
                      Book Flight
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="mb-8 flex items-center justify-between">
            <div className="">
              <h2 className="mb-2 text-3xl font-bold">Fall into travel</h2>
              <p>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <Button variant="outline">See All</Button>
          </div>
          <div className="flex justify-between">
            <div className="bg-primary text-foreground relative w-[40%] rounded-xl p-6">
              <div className="absolute top-4 right-4 rounded-md bg-white px-3 py-1 text-sm font-light shadow-sm">
                From <br />
                <span className="font-bold">$700</span>
              </div>

              <h2 className="font-trade-gothic mb-3 text-3xl font-bold">
                Backpacking <br />
                Sri Lanka
              </h2>

              <p className="text-foreground mb-6 text-sm">
                Traveling is a unique experience as it&apos;s the best way to
                unplug from the pushes and pulls of daily life. It helps us to
                forget about our problems, frustrations, and fears at home.
                During our journey, we experience life in different ways. We
                explore new places, cultures, cuisines, traditions, and ways of
                living.
              </p>

              <button className="text-foreground w-full rounded-md bg-white py-2 font-medium transition hover:bg-gray-100">
                Book Flight
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <Image
                  src="/place3.jpg"
                  alt=""
                  width={500}
                  height={500}
                  className="aspect-video rounded-lg object-cover"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
