import { BedDouble } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AirplaneFilled } from '@/shared/icons'

import HomeFlightForm from './flight-form'

export default function HomeBooking() {
  return (
    <div className="bg-background relative -top-20 mx-auto w-[90%] rounded-2xl p-8 pt-4 shadow-[0px_4px_16px_rgba(141,211,187,0.15)]">
      <Tabs defaultValue="flights" className="">
        <TabsList>
          <TabsTrigger value="flights">
            <AirplaneFilled className="size-6" /> Flights
          </TabsTrigger>
          <Separator orientation="vertical" className="mx-2" />
          <TabsTrigger value="stays">
            <BedDouble />
            Stays
          </TabsTrigger>
        </TabsList>
        <TabsContent value="flights">
          <HomeFlightForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
