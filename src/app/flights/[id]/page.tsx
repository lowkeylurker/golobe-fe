import {
  ChevronRight,
  Heart,
  LucideAlarmCheck,
  MapPinIcon,
  Share2,
} from 'lucide-react'
import Image from 'next/image'
import { FaPlane, FaWheelchair, FaWifi } from 'react-icons/fa'
import { IoIosAlarm } from 'react-icons/io'
import { IoFastFood } from 'react-icons/io5'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { FLIGHT_ROUTES } from '@/utils/constants'

export default function FlightDetailPage() {
  return (
    <div className="container mx-auto mt-6 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-mainColor1-700 hover:text-mainColor1-500"
              href={FLIGHT_ROUTES.MAIN}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-mainColor1-700 hover:text-mainColor1-500"
              href={FLIGHT_ROUTES.LIST}
            >
              Flights
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Flight Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <div className="text-3xl font-bold">Emirates A380 Airbus</div>
          <div className="flex items-center gap-1">
            <MapPinIcon />
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </div>
          <div className="flex items-center gap-2">
            <div className="border-mainColor-400 rounded-sm border px-2 py-1 text-xs">
              4.2
            </div>
            <div className="flex items-center gap-1 text-sm">
              <b>Very Good</b>
              54 reviews
            </div>
          </div>
        </div>
        <div className="text-end">
          <div className="text-mainColor1-600 mb-4 text-4xl font-bold">
            $240
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant={'outline'}
              className="border-mainColor-500 h-10 w-10"
            >
              <Heart />
            </Button>
            <Button
              variant={'outline'}
              className="border-mainColor-500 h-10 w-10"
            >
              <Share2 />
            </Button>
            <Button className="bg-mainColor-400 h-10 px-10 text-black">
              Book now
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/flight-detail.jpeg"
        alt=""
        width={100}
        height={100}
        className="h-[395px] w-full rounded-xl object-cover"
      />

      <div className="">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Basic Economy Features</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Checkbox id="economy" />
              <Label htmlFor="economy">Economy</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="business" />
              <Label htmlFor="business">Business Class</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="firstclass" />
              <Label htmlFor="firstclass">First Class</Label>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-9 gap-4">
          {[...Array(9)].map((i) => (
            <div key={i} className="">
              <Image
                src="/place4.jpg"
                alt=""
                width={100}
                height={100}
                className="aspect-square rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-mainColor-200 rounded-xl p-4">
        <div className="mb-4 text-2xl font-bold">
          Emirates Airlines Policies
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2">
            <LucideAlarmCheck />
            <span className="leading-none">
              Pre-flight cleaning, installation of cabin HEPA filters.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LucideAlarmCheck />
            <span className="leading-none">
              Pre-flight health screening questions.
            </span>
          </div>
        </div>
      </div>

      {[...Array(2)].map((i) => (
        <div key={i} className="rounded-xl bg-white px-8 py-4 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xl font-semibold">Return Wed, Dec 8</div>
            <div className="text-muted-foreground text-xl">2h 28m</div>
          </div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4 rounded-md border border-gray-200 px-6 py-1">
              <Image
                src="/emirates.png"
                alt=""
                width={100}
                height={100}
                className="aspect-square w-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Emirates</span>
                <span className="text-muted-foreground text-xs">
                  Airbus A320
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPlane className="m-4" />
              <Separator orientation="vertical" className="h-10" />
              <FaWifi className="m-4" />
              <Separator orientation="vertical" className="h-10" />
              <IoIosAlarm className="m-4" />
              <Separator orientation="vertical" className="h-10" />
              <IoFastFood className="m-4" />
              <Separator orientation="vertical" className="h-10" />
              <FaWheelchair className="m-4" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold">12:00 pm</div>
              <div className="text-muted-foreground text-sm">Newark(EWR)</div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-black"></div>
                <div className="h-0 w-8 border border-black"></div>
              </div>
              <FaPlane size={40} />
              <div className="flex items-center">
                <div className="h-0 w-8 border border-black"></div>
                <div className="h-1 w-1 rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold">12:00 pm</div>
              <div className="text-muted-foreground text-sm">Newark(EWR)</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
