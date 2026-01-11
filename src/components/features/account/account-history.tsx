import { MinusIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FaClock, FaDoorClosed } from 'react-icons/fa'

import { Separator } from '@/components/ui/separator'

function HistoryTab() {
  const [data] = useState([])

  return (
    <div>
      <div className="mb-4 text-2xl font-bold">Bookings History</div>
      <div className="space-y-6">
        {data?.map((d: Record<string, unknown>, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl bg-white px-4 py-6 drop-shadow-md"
          >
            <div className="flex items-center gap-6">
              <div className="rounded-md border border-gray-200 p-1">
                <Image src={d.image_url} alt="" className="size-20" fill />
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <div className="text-muted-foreground mb-1">Check In</div>
                  <div className="text-lg leading-none font-semibold">
                    {d.check_in_date}
                  </div>
                </div>
                <MinusIcon />
                <div>
                  <div className="text-muted-foreground mb-1">Check Out</div>
                  <div className="text-lg leading-none font-semibold">
                    {d.check_out_date}
                  </div>
                </div>
              </div>

              <Separator orientation="vertical" className="h-10" />

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="rounded-sm bg-gray-100 p-2">
                    <FaClock size={20} className="text-mainColor-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-0.5 text-sm">
                      Check In Time
                    </div>
                    <div className="leading-none font-medium">
                      {d.checkInTime || '--:--'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="rounded-sm bg-gray-100 p-2">
                    <FaClock size={20} className="text-mainColor-500" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-0.5 text-sm">
                      Check Out Time
                    </div>
                    <div className="leading-none font-medium">
                      {d.checkOutTime || '--:--'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-start">
                <div className="rounded-sm bg-gray-100 p-2">
                  <FaDoorClosed size={20} className="text-mainColor-500" />
                </div>
                <div>
                  <div className="text-muted-foreground mb-0.5 text-sm">
                    Room No.
                  </div>
                  <div className="leading-none font-medium">{d.room_id}</div>
                </div>
              </div>
            </div>
            {/* <div className='flex items-center gap-2'>
              <Button className='bg-mainColor-400 text-gray-800 hover:bg-mainColor-500'>
                Download Ticket
              </Button>
              <Button variant='outline' className='border border-mainColor-400'>
                <ChevronRight />
              </Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryTab
