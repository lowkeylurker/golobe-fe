'use client'

import { useUser } from '@clerk/nextjs'
import { CheckIcon, Edit3Icon, UploadCloudIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

import HistoryTab from '@/components/features/account/account-history'
import PaymentTab from '@/components/features/account/account-payment'
import AccountTab from '@/components/features/account/account-profile'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AccountPage() {
  const user = useUser()
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState<string>()

  const handleInputAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarPreviewUrl(imageUrl)
      setAvatarFile(file)
    }
  }

  const handleUploadAvatar = () => {
    const data = new FormData()
    data.append('avatar', avatarFile as File)
    data.append('id', String(user.user?.id))

    //
  }

  return (
    <div className="bg-gray-100/50 py-12">
      <div className="container mx-auto">
        <div className="mb-44">
          <div className="relative">
            <Image
              src="/background.jpg"
              alt=""
              width={100}
              height={100}
              className="h-52 w-full rounded-lg object-cover"
            />
            <div className="">
              <input id="upload-cover" type="file" className="hidden" />
              <label
                htmlFor="upload-cover"
                className="bg-mainColor-400 hover:bg-mainColor-600 absolute right-3 bottom-3 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 transition-all hover:duration-300 hover:ease-in-out"
              >
                <UploadCloudIcon />
                Upload new cover
              </label>
            </div>
            <div className="absolute -bottom-32 left-1/2 flex w-fit -translate-x-1/2 flex-col items-center">
              <div className="relative mb-4 w-fit rounded-full bg-white">
                <Image
                  src={
                    avatarPreviewUrl || user.user?.imageUrl || '/hp_card_1.jpg'
                  }
                  alt=""
                  width={100}
                  height={100}
                  className="border-mainColor1-600 size-24 rounded-full border-[3px] object-cover"
                />
                <div className="absolute right-0 bottom-0">
                  <input
                    type="file"
                    name=""
                    id="upload-avatar"
                    className="hidden"
                    onChange={handleInputAvatarChange}
                  />
                  {avatarFile ? (
                    <div
                      className="bg-mainColor-600 hover:bg-mainColor-800 cursor-pointer rounded-full p-1 text-white transition-all hover:duration-300 hover:ease-in-out"
                      onClick={handleUploadAvatar}
                    >
                      <CheckIcon size={20} />
                    </div>
                  ) : (
                    <label
                      htmlFor="upload-avatar"
                      className="bg-mainColor1-600 hover:bg-mainColor1-800 block cursor-pointer rounded-full p-1 transition-all hover:duration-300 hover:ease-in-out"
                    >
                      <Edit3Icon size={20} />
                    </label>
                  )}
                </div>
              </div>
              <div className="text-xl font-semibold">{user.user?.fullName}</div>
              <div className="">
                {user.user?.emailAddresses[0].emailAddress}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-6 grid h-fit w-full grid-cols-3 gap-2 bg-white drop-shadow-sm">
            <TabsTrigger
              className="data-[state=active]:border-mainColor-600 text-md mt-1 data-[state=active]:rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
              value="account"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:border-mainColor-600 text-md my-1 data-[state=active]:rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
              value="history"
            >
              History
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:border-mainColor-600 text-md my-1 data-[state=active]:rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
              value="payment"
            >
              Payment methods
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <AccountTab />
          </TabsContent>
          <TabsContent value="history">
            <HistoryTab />
          </TabsContent>
          <TabsContent value="payment">
            <PaymentTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
