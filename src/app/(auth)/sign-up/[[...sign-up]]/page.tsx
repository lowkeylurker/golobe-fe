'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Apple, Facebook, Google } from '@/shared/icons'
import SignUpImage from '@/shared/images/auth/sign-in.jpg'
import LogoDarkColor from '@/shared/images/logo-dark-color.png'
import { AUTH_ROUTES, HOME_ROUTE } from '@/utils/constants'

import { SignUpForm } from './sign-up-form'

export default function SignUpPage() {
  const router = useRouter()

  return (
    <div className="font-montserrat flex h-screen w-screen items-center justify-center">
      <div className="bg-background flex h-[90%] w-[75%] items-center">
        <div className="flex h-full w-1/2 items-center justify-center">
          <Image
            className="h-full w-full rounded-2xl object-cover"
            src={SignUpImage}
            alt="Sign up illustration"
          />
        </div>

        <div className="w-1/2 pl-20">
          <div className="mb-12 flex justify-start">
            <Image
              className="cursor-pointer"
              src={LogoDarkColor}
              width={110.35}
              height={36}
              alt="Logo"
              onClick={() => router.push(HOME_ROUTE)}
            />
          </div>
          <div className="mb-10">
            <div className="font-trade-gothic mb-1 text-4xl font-bold">
              Sign up
            </div>
            <p className="text-foreground-opacity-75">
              Let&apos;s get you all set up so you can access your personal
              account.
            </p>
          </div>

          <SignUpForm />

          <div className="text-foreground mt-4 flex justify-center gap-1 text-sm font-medium">
            <p>Already have an account?</p>
            <Link href={AUTH_ROUTES.SIGN_IN} className="text-destructive">
              Login
            </Link>
          </div>

          <div className="text-foreground-opacity-50 font-montserrat my-10 flex items-center justify-between">
            <div className="border-foreground-opacity-25 h-1 w-[40%] border-b"></div>
            <div className="mx-3 text-sm whitespace-nowrap">
              Or Sign up with
            </div>
            <div className="border-foreground-opacity-25 h-1 w-[40%] border-b"></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Button variant="outline" size="lg">
              <Facebook className="size-6" />
            </Button>
            <Button variant="outline" size="lg">
              <Google className="size-6" />
            </Button>
            <Button variant="outline" size="lg">
              <Apple className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
