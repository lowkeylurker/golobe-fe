'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Apple, Facebook, Google } from '@/shared/icons'
import SignInImage from '@/shared/images/auth/sign-in.jpg'
import LogoDarkColor from '@/shared/images/logo-dark-color.png'
import { AUTH_ROUTES, HOME_ROUTE } from '@/utils/constants'

import { SignInForm } from './sign-in-form'

export default function SignInPage() {
  const router = useRouter()

  return (
    <div className="font-montserrat flex h-screen w-screen items-center justify-center">
      <div className="bg-background flex h-[90%] w-[75%] items-center">
        <div className="w-1/2 pr-20">
          <div className="mb-16 flex justify-start">
            <Image
              className="cursor-pointer"
              src={LogoDarkColor}
              width={110.35}
              height={36}
              alt="Logo"
              onClick={() => router.push(HOME_ROUTE)}
            />
          </div>
          <div className="mb-12">
            <div className="font-trade-gothic mb-1 text-4xl font-bold">
              Login
            </div>
            <p className="text-foreground-opacity-75">
              Login to access your Golobe Account
            </p>
          </div>

          <SignInForm />

          <div className="text-foreground mt-4 flex justify-center gap-1 text-sm font-medium">
            <p>Don&apos;t have an account? </p>
            <Link href={AUTH_ROUTES.SIGN_UP} className="text-destructive">
              Sign up
            </Link>
          </div>

          <div className="text-foreground-opacity-50 font-montserrat my-10 flex items-center justify-between">
            <div className="border-foreground-opacity-25 h-1 w-[40%] border-b"></div>
            <div className="mx-3 text-sm whitespace-nowrap">Or login with</div>
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

        <div className="flex h-full w-1/2 items-center justify-center">
          <Image
            className="h-full w-full rounded-2xl object-cover"
            src={SignInImage}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  )
}
