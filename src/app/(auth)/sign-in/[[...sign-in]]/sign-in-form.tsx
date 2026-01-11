'use client'

import { useSignIn } from '@clerk/nextjs'
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

const SignInFormSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
})

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>

export function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const { signIn, isLoaded, setActive } = useSignIn()

  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleLogin = async (data: SignInFormSchemaType) => {
    if (!isLoaded) return
    const signInAttempt = await signIn.create({
      identifier: data.email,
      password: data.password,
    })
    if (signInAttempt.status === 'complete') {
      await setActive({
        session: signInAttempt.createdSessionId,
        navigate: async ({ session }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask)
            return
          }

          router.push(HOME_ROUTE)
        },
      })
    } else {
      // If the status is not complete, check why. User may need to
      // complete further steps.
      console.error('Sign-in attempt not complete:', signInAttempt)
      console.error('Sign-in attempt status:', signInAttempt.status)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        noValidate
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative space-y-0">
                <FormControl>
                  <Input label="Email" type="email" autoFocus {...field} />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
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
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={() => setRememberMe((prev) => !prev)}
            />
            <label
              className="cursor-pointer text-sm font-semibold"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
          <Link
            href={AUTH_ROUTES.FORGOT_PASSWORD}
            className="text-destructive cursor-pointer text-sm font-medium"
          >
            Forgot Password
          </Link>
        </div>
        <Button type="submit" className="mt-4 font-semibold">
          Login
        </Button>
      </form>
    </Form>
  )
}
