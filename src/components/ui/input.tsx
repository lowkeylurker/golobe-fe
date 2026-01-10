import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({
  className,
  type,
  label,
  ...props
}: React.ComponentProps<'input'> & {
  label: string
}) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        placeholder=" "
        className={cn(
          'font-montserrat border-input-border file:text-foreground selection:bg-primary selection:text-primary-foreground peer h-14 w-full min-w-52.5 rounded-md border bg-transparent px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent',
          'disabled:border-secondary disabled:text-secondary-foreground disabled:pointer-events-none disabled:cursor-not-allowed',
          'focus:border-primary-focus focus:placeholder:text-foreground focus:border-2',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
      <label
        htmlFor={props.id}
        className={cn(
          'font-montserrat bg-background text-foreground peer-focus:text-primary-focus peer-disabled:text-secondary-foreground absolute top-2 left-3 z-10 origin-left -translate-y-4 scale-[87.5%] transform px-2 text-base duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-[87.5%] peer-focus:px-2',
          className?.includes('border-destructive') ? 'text-destructive' : ''
        )}
      >
        {label}
      </label>
    </div>
  )
}

export { Input }
