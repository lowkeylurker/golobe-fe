'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import clsx from 'clsx'
import { Bed, Heart } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { AirplaneFilled } from '@/shared/icons'
import Logo from '@/shared/images/logo-light.png'
import {
  ACCOUNT_ROUTES,
  AUTH_ROUTES,
  FLIGHT_ROUTES,
  HOTEL_ROUTES,
} from '@/utils/constants'

export default function HomeHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { signOut } = useClerk()
  const user = useUser()
  const pathname = usePathname()

  const handleLogout = () => {
    signOut()
  }
  return (
    <div className="z-10 flex items-center justify-between px-8 py-6 text-white">
      <div className="flex items-center gap-5 text-sm font-semibold">
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={() => router.push(FLIGHT_ROUTES.SEARCH)}
        >
          <AirplaneFilled />
          <span>Find Flight</span>
        </div>
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={() => router.push(HOTEL_ROUTES.SEARCH)}
        >
          <Bed />
          <span>Find Stays</span>
        </div>
      </div>
      <Image src={Logo} alt="" width={100} height={100} />

      {user.isSignedIn ? (
        <div className="flex items-center gap-4">
          <div
            className={clsx(
              'flex cursor-pointer items-center gap-2 text-sm font-bold transition-transform hover:scale-105',
              {
                'border-b-mainColor-400 border-b-[3px]':
                  pathname.startsWith('/favorites'),
              }
            )}
            onClick={() => router.push(ACCOUNT_ROUTES.FAVORITES)}
          >
            <Heart />
            Favorites
          </div>
          <Separator orientation="vertical" className="h-8" />
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center gap-2 rounded-2xl transition-all hover:scale-105 hover:duration-300 hover:ease-in-out">
                <Avatar>
                  <AvatarImage src={user.user?.imageUrl || ''} />
                  <AvatarFallback className="text-gray-900">CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1">
                  <div className="text-sm font-semibold">
                    {user.user?.fullName}
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => router.push(ACCOUNT_ROUTES.ACCOUNT)}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="text-destructive hover:!bg-destructive/10 hover:!text-destructive cursor-pointer"
                    onSelect={(event) => {
                      event.preventDefault()
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Warning!</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure to log you out?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex gap-8">
          <button
            className="cursor-pointer text-sm font-semibold text-white"
            onClick={() => router.push(AUTH_ROUTES.SIGN_IN)}
          >
            Log In
          </button>
          <Button
            className="bg-white"
            onClick={() => router.push(AUTH_ROUTES.SIGN_UP)}
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  )
}
