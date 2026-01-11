'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import clsx from 'clsx'
import { Bed } from 'lucide-react'
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  AirplaneFilled,
  ChevronForward,
  UserFilled,
  CardFilled,
  SettingsFilled,
  SupportFilled,
  LogoutFilled,
  HeartFilled,
} from '@/shared/icons'
import Logo from '@/shared/images/logo-light.png'
import {
  ACCOUNT_ROUTES,
  AUTH_ROUTES,
  FAVORITES_ROUTE,
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
          onClick={() => router.push(FLIGHT_ROUTES.MAIN)}
        >
          <AirplaneFilled className="text-base text-white" />
          <span>Find Flight</span>
        </div>
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={() => router.push(HOTEL_ROUTES.MAIN)}
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
            onClick={() => router.push(FAVORITES_ROUTE)}
          >
            <HeartFilled className="text-white" />
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
            <DropdownMenuContent className="w-72" align="end">
              {/* User Profile Header */}
              <div className="flex items-center gap-3">
                <Avatar className="size-14">
                  <AvatarImage src={user.user?.imageUrl || ''} />
                  <AvatarFallback className="text-foreground">
                    {user.user?.firstName?.charAt(0)}
                    {user.user?.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-foreground font-semibold">
                    {user.user?.fullName}
                  </div>
                  <div className="text-foreground-opacity-75 text-sm">
                    Online
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                {/* Main Menu Items */}
                <DropdownMenuItem
                  onClick={() => router.push(ACCOUNT_ROUTES.ACCOUNT)}
                >
                  <div className="flex items-center gap-3">
                    <UserFilled className="text-[18px]" />
                    <span className="font-medium">My account</span>
                  </div>
                  <ChevronForward className="text-base" />
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <CardFilled className="text-[18px]" />
                    <span className="font-medium">Payments</span>
                  </div>
                  <ChevronForward className="text-base" />
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <SettingsFilled className="text-[18px]" />
                    <span className="font-medium">Settings</span>
                  </div>
                  <ChevronForward className="text-base" />
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                {/* Support & Logout */}
                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <SupportFilled className="text-[18px]" />
                    <span className="font-medium">Support</span>
                  </div>
                  <ChevronForward className="text-base" />
                </DropdownMenuItem>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem
                      onSelect={(event) => {
                        event.preventDefault()
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <LogoutFilled className="text-[18px]" />
                        <span className="font-medium">Logout</span>
                      </div>
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Warning!</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to log out?
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
              </DropdownMenuGroup>
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
