'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import SignUpImage from '@/shared/images/auth/sign-in.jpg'
import LogoDarkColor from '@/shared/images/logo-dark-color.png'
import { HOME_ROUTE } from '@/utils/constants'

import { VerifyCodeForm } from './verify-code-form'

export default function VerifyCodePage() {
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

          <VerifyCodeForm />
        </div>

        <div className="flex h-full w-1/2 items-center justify-center">
          <Image
            className="h-full w-full rounded-2xl object-cover"
            src={SignUpImage}
            alt="Verify code illustration"
          />
        </div>
      </div>
    </div>
  )
}
