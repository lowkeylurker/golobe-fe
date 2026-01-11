import { ChevronDown, Coffee, Heart, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
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

export default function FavoritesPage() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="places" className="">
        <TabsList className="h-fit w-full justify-between bg-white text-black drop-shadow-md">
          <TabsTrigger
            className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
            value="flights"
          >
            Flights
            <span className="text-muted-foreground text-sm font-light">
              2 marked
            </span>
          </TabsTrigger>
          <Separator orientation="vertical" className="mx-2 h-10" />
          <TabsTrigger
            className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
            value="places"
          >
            Places
            <span className="text-muted-foreground text-sm font-light">
              3 marked
            </span>
          </TabsTrigger>
        </TabsList>
        <div className="my-4 flex items-center justify-between">
          <div>
            Showing 4 of <span className="text-mainColor1-500">257 places</span>
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
        <TabsContent value="places">
          <div className="space-y-6">
            {[...Array(4)].map((item) => (
              <div
                key={item}
                className="flex h-fit items-center overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <Image
                  src="/carousel_2.jpg"
                  alt=""
                  width={80}
                  height={64}
                  className="aspect-square h-64 w-80 object-cover"
                />
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div className="">
                      <div className="mb-4 text-2xl font-bold tracking-wide">
                        CVK Park Bosphorus Hotel Istanbul
                      </div>
                      <div className="mb-1 flex items-center gap-1">
                        <MapPin />
                        <span>
                          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                        </span>
                      </div>
                      <div className="mb-1 flex items-center gap-6">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map(() => (
                            <FaStar
                              key={Math.random()}
                              className="text-red-400"
                            />
                          ))}
                          <span>5 Star Hotel</span>
                        </div>
                        <div className="flex items-end gap-1">
                          <Coffee />
                          <span>
                            <b>20+</b> Amenities
                          </span>
                        </div>
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
                    <div className="text-muted-foreground text-sm">
                      starting from
                      <br />{' '}
                      <span className="text-end text-3xl font-extrabold text-red-400">
                        $104<span className="text-lg">/night</span>
                      </span>
                      <br />
                      <div className="text-end">excl. tax</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="border-mainColor-400 aspect-square"
                    >
                      <Heart />
                    </Button>
                    <Button className="bg-mainColor-400 flex-1 font-medium text-black">
                      View Deals
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button className="mt-6 w-full bg-gray-800 text-white hover:bg-gray-600">
              Show more results
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="flights">
          <div className="space-y-6">
            {[...Array(4)].map((item) => (
              <div
                key={item}
                className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-md"
              >
                <Image
                  src="/emirates.png"
                  alt=""
                  width={40}
                  height={40}
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
                      <Heart />
                    </Button>
                    <Button className="bg-mainColor-400 flex-1 font-medium text-black">
                      View Deals
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button className="mt-6 w-full bg-gray-800 text-white hover:bg-gray-600">
              Show more results
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
