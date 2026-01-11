'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import clsx from 'clsx'
import { BedDouble, Heart, Plane } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  CardFilled,
  ChevronForward,
  LogoutFilled,
  SettingsFilled,
  SupportFilled,
  UserFilled,
} from '@/shared/icons'
import Logo from '@/shared/images/logo-dark-color.png'
import {
  ACCOUNT_ROUTES,
  AUTH_ROUTES,
  FAVORITES_ROUTE,
  FLIGHT_ROUTES,
  HOME_ROUTE,
  HOTEL_ROUTES,
} from '@/utils/constants'

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
} from '../ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const user = useUser()

  const { signOut } = useClerk()

  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    signOut()
  }

  return (
    <header className="sticky top-0 left-0 z-10 flex h-22.5 items-center justify-between border-b border-solid border-b-[#F4EFE6] bg-white px-10 whitespace-nowrap shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
      <div className="flex items-center gap-8 font-bold text-[#1C160C]">
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-2 py-4 text-sm transition-transform hover:scale-105',
            {
              'border-b-primary border-b-[3px]':
                pathname.startsWith('/flights'),
            }
          )}
          onClick={() => router.push(FLIGHT_ROUTES.MAIN)}
        >
          <Plane />
          Find Flights
        </div>
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-2 py-4 text-sm transition-transform hover:scale-105',
            {
              'border-b-primary border-b-[3px]': pathname.startsWith('/hotels'),
            }
          )}
          onClick={() => router.push(HOTEL_ROUTES.MAIN)}
        >
          <BedDouble />
          Find Stays
        </div>
      </div>

      <Image
        src={Logo}
        alt=""
        width={100}
        height={100}
        className="cursor-pointer"
        onClick={() => router.push(HOME_ROUTE)}
      />

      <div className="flex justify-end gap-8">
        {user.isSignedIn ? (
          <div className="flex items-center gap-4">
            <div
              className={clsx(
                'flex cursor-pointer items-center gap-2 py-4 text-sm font-bold transition-transform hover:scale-105',
                {
                  'border-b-primary border-b-[3px]':
                    pathname.startsWith('/favorites'),
                }
              )}
              onClick={() => router.push(FAVORITES_ROUTE)}
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
                    <AvatarFallback className="text-gray-900">
                      CN
                    </AvatarFallback>
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
          <div className="flex gap-2">
            <button
              className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#F4EFE6] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#1C160C] transition-all hover:scale-105 hover:duration-300 hover:ease-in-out"
              onClick={() => router.push(AUTH_ROUTES.SIGN_IN)}
            >
              <span className="truncate">Log In</span>
            </button>
            <button
              className="bg-mainColor-600 flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#FFFFFF] transition-all hover:scale-105 hover:duration-300 hover:ease-in-out"
              onClick={() => router.push(AUTH_ROUTES.SIGN_UP)}
            >
              <span className="truncate">Sign Up</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
