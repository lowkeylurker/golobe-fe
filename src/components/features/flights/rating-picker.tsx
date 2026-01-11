'use client'

import { useId } from 'react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function RatingPicker() {
  const id = useId()
  return (
    <>
      <fieldset className="space-y-4">
        <legend className="text-foreground text-md leading-none font-semibold">
          Rating
        </legend>
        <RadioGroup className="flex gap-0 -space-x-px rounded-md shadow-xs">
          {['0+', '1+', '2+', '3+', '4+'].map((value) => (
            <label
              key={value}
              className="border-input has-[button[data-state=checked]]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-[button[data-state=checked]]:text-mainColor-700 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm font-medium transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-[button[data-state=checked]]:z-10 has-[button[data-state=checked]]:border-2"
            >
              <RadioGroupItem
                id={`${id}-${value}`}
                value={value}
                className="sr-only after:absolute after:inset-0"
              />
              {value}
            </label>
          ))}
        </RadioGroup>
      </fieldset>
      <div className="mt-1 flex justify-between text-xs font-medium">
        <p>
          <span className="text-base">😡</span> Not likely
        </p>
        <p>
          Very Likely <span className="text-base">😍</span>
        </p>
      </div>
    </>
  )
}
