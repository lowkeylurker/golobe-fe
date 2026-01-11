'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import {
  CalendarIcon,
  ChevronDown,
  Coffee,
  Heart,
  MapPin,
  Search,
} from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { FaStar } from 'react-icons/fa'
import z from 'zod'

import FilterRangeSlider from '@/components/features/flights/filter-range-picker'
import RatingPicker from '@/components/features/flights/rating-picker'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  destination: z.string(),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  roomsAndGuests: z.string(),
})

export default function HotelListPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: 'sgn',
      checkInDate: new Date(),
      checkOutDate: new Date(),
      roomsAndGuests: '1',
    },
  })

  const freebies = [
    'breakfast',
    'parking',
    'internet',
    'airport shuttle',
    'cancellation',
  ]

  const amentities = ['24h front desk', 'Air-contitioned', 'Fitness', 'Pool']

  const onSubmit = () => {}
  return (
    <div className="container mx-auto pt-6">
      <div className="container mx-auto mb-6 rounded-2xl bg-white p-4 shadow-md">
        <div className="mb-4 font-bold">Where are you flying?</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem className="col-span-2 flex flex-col">
                    <FormLabel>Destination</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sgn">Istanbul, Turkey</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkInDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check In</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Choose Check In date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkOutDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check Out</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Choose Check Out date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roomsAndGuests"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Rooms & Guests</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại hành trình" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 room, 2 guests</SelectItem>
                        <SelectItem value="2">1 room, 4 guests</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-mainColor-500 self-end text-black"
              >
                <Search />
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="relative flex items-start">
        <div className="sticky top-20 left-0 w-[25%]">
          <div className="mb-6 text-lg font-bold">Filters</div>
          <div className="space-y-6">
            <FilterRangeSlider maxValue={1200} minValue={0} label="Price" />
            <Separator />
            <RatingPicker />
            <Separator />
            <div>
              <Label className="mb-2 block text-base font-semibold">
                Freebies
              </Label>
              <div className="space-y-2">
                {freebies.map((freeby) => (
                  <div key={freeby} className="flex items-center gap-3">
                    <Checkbox id={freeby} />
                    <Label htmlFor={freeby}>Free {freeby}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <Label className="mb-2 block text-base font-semibold">
                Amenities
              </Label>
              <div className="space-y-2">
                {amentities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <Checkbox id={amenity} />
                    <Label htmlFor={amenity}>{amenity}</Label>
                  </div>
                ))}
              </div>
              <span className="mt-2 block cursor-pointer text-sm font-bold text-red-400">
                +24 more
              </span>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="sticky top-20 mx-4 h-screen"
        />
        <div className="flex-1">
          <Tabs defaultValue="hotels" className="">
            <TabsList className="h-fit w-full justify-between bg-white text-black drop-shadow-md">
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="hotels"
              >
                Hotels
                <span className="text-muted-foreground text-sm font-light">
                  257 places
                </span>
              </TabsTrigger>
              <Separator orientation="vertical" className="mx-2 h-10" />
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="motels"
              >
                Motels
                <span className="text-muted-foreground text-sm font-light">
                  51 places
                </span>
              </TabsTrigger>
              <Separator orientation="vertical" className="mx-2 h-10" />
              <TabsTrigger
                className="data-[state=active]:border-mainColor-400 flex flex-1 flex-col items-start gap-1 rounded-none p-4 text-base font-bold data-[state=active]:border-b-4 data-[state=active]:shadow-none"
                value="resorts"
              >
                Resorts
                <span className="text-muted-foreground text-sm font-light">
                  72 places
                </span>
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
            <TabsContent value="hotels">
              <div className="space-y-6">
                {[...Array(4)].map((item) => (
                  <div
                    key={item}
                    className="flex h-fit items-center overflow-hidden rounded-2xl bg-white shadow-md"
                  >
                    <Image
                      src="/carousel_2.jpg"
                      alt=""
                      width={100}
                      height={100}
                      className="aspect-square h-64 object-cover"
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
          </Tabs>
        </div>
      </div>
    </div>
  )
}
