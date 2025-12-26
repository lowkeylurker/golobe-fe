import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm gap-2 px-4 py-2 text-primary-foreground font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:aspect-square outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary hover:bg-primary-hover focus-visible:bg-primary-focus disabled:bg-secondary disabled:text-secondary-foreground active:bg-primary-pressed [&_svg]:disabled:text-secondary-foreground [&_svg]:disabled:bg-secondary-foreground',
        outline:
          'border bg-transparent border-primary hover:border-primary-hover focus-visible:border-primary-focus focus-visible:border-2 active:border-primary-pressed disabled:border-secondary disabled:text-secondary-foreground [&_svg]:disabled:text-secondary-foreground',
        ghost:
          'hover:text-primary-hover active:text-primary-pressed disabled:text-secondary-foreground [&_svg]:disabled:text-secondary-foreground',
      },
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'md',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
