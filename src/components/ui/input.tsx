import * as React from 'react'

import { cn } from '@/lib/utils'
import { EyeFilled, EyeOffFilled } from '@/shared/icons'

import { Button } from './button'

type InputProps = React.ComponentProps<'input'> & {
  label: string
}

function Input({ className, type, label, ...props }: InputProps) {
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
          'font-montserrat bg-background text-foreground peer-focus:text-primary-focus peer-disabled:text-secondary-foreground absolute top-1.5 left-3 z-10 origin-left -translate-y-4 scale-[87.5%] transform px-1 text-base duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-[87.5%] peer-focus:px-2',
          'peer-aria-invalid:text-destructive'
        )}
      >
        {label}
      </label>
    </div>
  )
}

function PasswordInput({ className, ...props }: Omit<InputProps, 'type'>) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('pe-12', className)}
        {...props}
      />
      <Button
        type="button"
        variant="icon"
        size="lg"
        className="absolute top-1/2 right-3 -translate-y-1/2"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <EyeFilled className="size-6" />
        ) : (
          <EyeOffFilled className="size-6" />
        )}
      </Button>
    </div>
  )
}

export { Input, PasswordInput }
