'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useSliderWithInput } from '@/hooks/use-slider-with-input'

export interface FilterRangeSliderProps {
  minValue: number
  maxValue: number
  label: string
}
export default function FilterRangeSlider({
  minValue,
  maxValue,
  label,
}: FilterRangeSliderProps) {
  const initialValue = [minValue, maxValue]

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ minValue, maxValue, initialValue })

  return (
    <div className="*:not-first:mt-3">
      <Label className="text-md mb-2 block font-semibold">{label}</Label>
      <Slider
        className="mb-3"
        value={sliderValue}
        onValueChange={handleSliderChange}
        min={minValue}
        max={maxValue}
        aria-label={label}
      />
      <div className="flex items-center justify-between gap-4">
        <Input
          label=""
          className="w-16 px-2 py-1"
          type="text"
          inputMode="decimal"
          value={inputValues[0]}
          onChange={(e) => handleInputChange(e, 0)}
          onBlur={() => validateAndUpdateValue(inputValues[0], 0)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              validateAndUpdateValue(inputValues[0], 0)
            }
          }}
          aria-label="Enter minimum value"
        />
        <Input
          label=""
          className="w-16 px-2 py-1"
          type="text"
          inputMode="decimal"
          value={inputValues[1]}
          onChange={(e) => handleInputChange(e, 1)}
          onBlur={() => validateAndUpdateValue(inputValues[1], 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              validateAndUpdateValue(inputValues[1], 1)
            }
          }}
          aria-label="Enter maximum value"
        />
      </div>
    </div>
  )
}
