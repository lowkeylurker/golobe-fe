import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
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
import { cn } from '@/lib/utils'
import { PaperPlaneFilled } from '@/shared/icons'

const formSchema = z.object({
  fromToPlace: z.string(),
  trip: z.string(),
  departReturnDate: z.date(),
  passengerNumber: z.number(),
})

export default function HomeFlightForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromToPlace: 'Lahore - Karachi',
      trip: 'return',
      departReturnDate: new Date(),
      passengerNumber: 1,
    },
  })

  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex items-center gap-6">
          <FormField
            control={form.control}
            name="fromToPlace"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Input label="From - To" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="trip"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger label="Trip">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oneway">Oneway</SelectItem>
                    <SelectItem value="return">Return</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="departReturnDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Popover>
                  <PopoverTrigger asChild label="Depart Return Date">
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'h-14 pl-4 text-left text-base font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Chọn ngày đi</span>
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
            name="passengerNumber"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Input label="Passenger - Class" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6 flex items-center justify-end">
          <Button type="submit" size="lg">
            <PaperPlaneFilled className="size-4" />
            Show Flights
          </Button>
        </div>
      </form>
    </Form>
  )
}
