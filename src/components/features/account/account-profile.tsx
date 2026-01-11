import { useUser } from '@clerk/nextjs'
import { cloneDeep } from 'lodash'
import { Edit2Icon } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function AccountTab() {
  const user = useUser()
  const data = [
    {
      label: 'Name',
      content: user.user?.fullName,
      field: 'name',
    },
    {
      label: 'Email',
      content: user.user?.emailAddresses[0].emailAddress,
      field: 'email',
    },
    {
      label: 'Password',
      content: '********',
      field: 'password',
    },
    {
      label: 'Phone number',
      content: user.user?.phoneNumbers || 'Not Available',
      field: 'phone',
    },
    {
      label: 'Address',
      content: 'Not Available',
      field: 'address',
    },
    {
      label: 'Date of birth',
      content: 'Not Available',
      field: 'dateOfBirth',
    },
  ]

  const [userInfo, setUserInfo] = useState(user.user)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserInfo = cloneDeep(userInfo)
    newUserInfo[e.target.id] = e.target.value
    setUserInfo(newUserInfo)
  }

  const handleUpdateProfile = () => {
    //
  }

  return (
    <div>
      <div className="mb-4 text-2xl font-bold">Account</div>
      <div className="space-y-6 rounded-md bg-white p-6">
        {data.map((d, idx) => (
          <div key={idx} className="mb-3 flex items-center justify-between">
            <div className="">
              <div className="text-muted-foreground mb-1 text-sm">
                {d.label}
              </div>
              <div className="text-lg leading-none font-bold">{d.content}</div>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-mainColor-600 hover:bg-mainColor-100 border p-2"
                  >
                    <Edit2Icon />
                    Change
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        {d?.label}
                      </Label>
                      <Input
                        label=""
                        id={d.field}
                        value={userInfo?.[d.field] || ''}
                        onChange={handleChangeInput}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose>
                      <Button onClick={handleUpdateProfile}>
                        Save changes
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountTab
