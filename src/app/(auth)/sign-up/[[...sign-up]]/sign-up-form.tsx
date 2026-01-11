'use client'

import { useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'
import { AUTH_ROUTES, HOME_ROUTE } from '@/utils/constants'

const SignUpFormSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>

export function SignUpForm() {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const router = useRouter()

  const { signUp, isLoaded, setActive } = useSignUp()

  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSignUp = async (data: SignUpFormSchemaType) => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.create({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.email,
        password: data.password,
      })

      if (signUpAttempt.status === 'missing_requirements') {
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
        router.push(AUTH_ROUTES.VERIFY_CODE)
      }

      if (signUpAttempt.status === 'complete') {
        await setActive({
          session: signUpAttempt.createdSessionId,
          navigate: () => {
            router.push(HOME_ROUTE)
          },
        })
      } else {
        // Handle verification or additional steps
        console.log('Sign-up requires additional steps:', signUpAttempt.status)
      }
    } catch (error) {
      console.error('Sign-up error:', error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignUp)}
        noValidate
        className="flex flex-col gap-6"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="relative flex-1 space-y-0">
                <FormControl>
                  <Input label="First Name" autoFocus {...field} />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="relative flex-1 space-y-0">
                <FormControl>
                  <Input label="Last Name" {...field} />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative flex-1 space-y-0">
                <FormControl>
                  <Input label="Email" type="email" {...field} />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="relative flex-1 space-y-0">
                <FormControl>
                  <Input label="Phone Number" type="tel" {...field} />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormControl>
                <PasswordInput label="Password" {...field} />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormControl>
                <PasswordInput label="Confirm Password" {...field} />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={() => setAgreeToTerms((prev) => !prev)}
          />
          <label className="cursor-pointer text-sm font-medium" htmlFor="terms">
            I agree to all the{' '}
            <Link href="/terms" className="text-destructive">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-destructive">
              Privacy Policies
            </Link>
          </label>
        </div>

        {/* Clerk's CAPTCHA widget */}
        <div id="clerk-captcha" />

        <Button
          type="submit"
          className="font-semibold"
          disabled={!agreeToTerms}
        >
          Create account
        </Button>
      </form>
    </Form>
  )
}
