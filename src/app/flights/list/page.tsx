import Image from 'next/image'

import FilterRangeSlider from '@/components/features/flights/filter-range-picker'
import RatingPicker from '@/components/features/flights/rating-picker'
import TimePicker from '@/components/features/flights/time-picker'
import HomeFlightForm from '@/components/features/home/flight-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, HeartFilled, MenuFilled } from '@/shared/icons'

export default function FlightListPage() {
  return (
    <div className="container mx-auto pt-6">
      <div className="container mx-auto mb-6 rounded-2xl bg-white p-4 shadow-md">
        <div className="mb-4 font-bold">Where are you flying?</div>
        <HomeFlightForm />
      </div>

      <div className="relative flex items-start">
        <div className="sticky top-20 left-0 w-[25%]">
          <div className="mb-6 text-lg font-bold">Filters</div>
          <div className="space-y-6">
            <FilterRangeSlider maxValue={1200} minValue={0} label="Price" />
            <Separator />
            <div>
              <Label className="text-md mb-2 block font-semibold">
                Departure Time
              </Label>
              <div className="flex items-center justify-between">
                <TimePicker label="From" />
                <TimePicker label="To" />
              </div>
            </div>
            <Separator />
            <RatingPicker />
            <Separator />
            <div>
              <Label className="mb-2 block text-base font-semibold">
                Airlines
              </Label>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="emirates" />
                  <Label htmlFor="emirates">Emirates</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="fly-dubai" />
                  <Label htmlFor="fly-dubai">Fly Dubai</Label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <Label className="mb-2 block text-base font-semibold">
                Trips
              </Label>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="Oneway" />
                  <Label htmlFor="Oneway">One Way</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="roundtrip" />
                  <Label htmlFor="roundtrip">Round Trip</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="sticky top-20 mx-4 h-screen"
        />
        <div className="flex-1">
          <Tabs defaultValue="cheapest" className="">
            <TabsList className="h-fit w-full justify-between bg-white text-black drop-shadow-md">
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="cheapest"
              >
                Cheapest
                <span className="text-muted-foreground text-sm font-light">
                  $99 . 2h18m
                </span>
              </TabsTrigger>
              <Separator orientation="vertical" className="mx-2 h-10" />
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="best"
              >
                Best
                <span className="text-muted-foreground text-sm font-light">
                  $99 . 2h18m
                </span>
              </TabsTrigger>
              <Separator orientation="vertical" className="mx-2 h-10" />
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="quickest"
              >
                Quickest
                <span className="text-muted-foreground text-sm font-light">
                  $99 . 2h18m
                </span>
              </TabsTrigger>
              <Separator orientation="vertical" className="mx-2 h-10" />
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 items-center gap-2 rounded-none p-4 font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="other"
              >
                <MenuFilled />
                Other sort
              </TabsTrigger>
            </TabsList>
            <div className="my-4 flex items-center justify-between">
              <div>
                Showing 4 of{' '}
                <span className="text-mainColor1-500">257 places</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Sort by</span>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 font-bold">
                    Recommend <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <TabsContent value="cheapest">
              <div className="space-y-6">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-md"
                  >
                    <Image
                      src="/emirates.png"
                      alt=""
                      width={100}
                      height={100}
                      className="h-auto w-40 object-contain"
                    />
                    <div className="flex-1">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="border-mainColor-400 rounded-sm border px-2 py-1 text-xs">
                            4.2
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <b>Very Good</b>
                            54 reviews
                          </div>
                        </div>
                        <div className="text-muted-foreground text-end text-sm">
                          starting from
                          <br />{' '}
                          <span className="text-mainColor1-500 text-end text-2xl font-bold">
                            $104
                          </span>
                        </div>
                      </div>
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label
                            htmlFor="option-one"
                            className="flex items-start gap-8"
                          >
                            <div className="flex flex-col">
                              <span className="mb-1 text-base font-semibold">
                                12:00pm - 01.28pm
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Emirates
                              </span>
                            </div>
                            <div className="relative top-1">non stop</div>
                            <div className="flex flex-col">
                              <span className="mb-1 text-base font-semibold">
                                2h 28m
                              </span>
                              <span className="text-muted-foreground text-xs">
                                EWR - BNA
                              </span>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label
                            htmlFor="option-one"
                            className="flex items-start gap-8"
                          >
                            <div className="flex flex-col">
                              <span className="mb-1 text-base font-semibold">
                                12:00pm - 01.28pm
                              </span>
                              <span className="text-muted-foreground text-xs">
                                Emirates
                              </span>
                            </div>
                            <div className="relative top-1">non stop</div>
                            <div className="flex flex-col">
                              <span className="mb-1 text-base font-semibold">
                                2h 28m
                              </span>
                              <span className="text-muted-foreground text-xs">
                                EWR - BNA
                              </span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                      <Separator className="my-4" />
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          className="border-mainColor-400 aspect-square"
                        >
                          <HeartFilled />
                        </Button>
                        <Button className="bg-mainColor-400 flex-1 font-medium text-black">
                          View Deals
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="bg-foreground mt-6 w-full text-white">
                  Show more results
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
