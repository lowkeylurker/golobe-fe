'use client'

import { Label } from 'react-aria-components'

import { DateInput, TimeField } from '@/components/ui/datefield-rac'

export default function TimePicker({ label }: { label: string }) {
  return (
    <TimeField className="*:not-first:mt-2">
      <Label className="text-foreground text-sm font-medium">{label}</Label>
      <DateInput />
    </TimeField>
  )
}
