'use client'

import { useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AUTH_ROUTES, HOME_ROUTE } from '@/utils/constants'

const VerifyCodeFormSchema = z.object({
  code: z.string().min(1, 'Verification code is required'),
})

type VerifyCodeFormSchemaType = z.infer<typeof VerifyCodeFormSchema>

export function VerifyCodeForm() {
  const router = useRouter()
  const { signUp, isLoaded, setActive } = useSignUp()

  const form = useForm<VerifyCodeFormSchemaType>({
    resolver: zodResolver(VerifyCodeFormSchema),
    defaultValues: {
      code: '',
    },
  })

  const handleVerify = async (data: VerifyCodeFormSchemaType) => {
    if (!isLoaded) return

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.code,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({
          session: completeSignUp.createdSessionId,
          navigate: () => {
            router.push(HOME_ROUTE)
          },
        })
      } else {
        console.log('Verification incomplete:', completeSignUp.status)
      }
    } catch (error) {
      console.error('Verification error:', error)
    }
  }

  const handleResendCode = async () => {
    if (!isLoaded) return

    try {
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
    } catch (error) {
      console.error('Resend code error:', error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleVerify)}
        noValidate
        className="flex flex-col gap-6"
      >
        <div className="mb-6">
          <Link
            href={AUTH_ROUTES.SIGN_IN}
            className="text-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="size-4" /> Back to Login
          </Link>
        </div>

        <div className="mb-6">
          <div className="font-trade-gothic mb-1 text-4xl font-bold">
            Verify Code
          </div>
          <p className="text-foreground-opacity-75">
            An authentication code has been sent to your email.
          </p>
        </div>

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormControl>
                <Input label="Enter Code" maxLength={8} autoFocus {...field} />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <div className="text-foreground text-sm">
          Didn&apos;t receive a code?{' '}
          <button
            type="button"
            onClick={handleResendCode}
            className="text-destructive hover:text-destructive/80 font-medium transition-colors"
          >
            Resend
          </button>
        </div>

        <Button type="submit" className="font-semibold">
          Verify
        </Button>
      </form>
    </Form>
  )
}
