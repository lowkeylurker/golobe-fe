import clsx from 'clsx'
import { BedDouble, Heart, Plane } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

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
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'

import { logoutUserAction, selectCurrentUser } from '~/redux/slices/userSlice'
import { AppDispatch } from '~/redux/store'
import { ROUTES } from '~/routes'

function Header() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch<AppDispatch>()

  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    toast.promise(dispatch(logoutUserAction()).unwrap(), {
      loading: 'Sign out is in progress...',
      success: 'Logout successfully!',
      error: (error) => error.message,
    })
  }

  return (
    <header className="sticky top-0 left-0 z-10 flex items-center justify-between border-b border-solid border-b-[#F4EFE6] bg-white px-10 whitespace-nowrap shadow-md">
      <div className="flex items-center gap-8 font-bold text-[#1C160C]">
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-2 py-4 text-sm transition-transform hover:scale-105',
            {
              'border-b-mainColor-400 border-b-[3px]':
                pathname.startsWith('/flights'),
            }
          )}
          onClick={() => navigate(ROUTES.FLIGHTS_SEARCH_PAGE)}
        >
          <Plane />
          Find Flights
        </div>
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-2 py-4 text-sm transition-transform hover:scale-105',
            {
              'border-b-mainColor-400 border-b-[3px]':
                pathname.startsWith('/hotels'),
            }
          )}
          onClick={() => navigate(ROUTES.HOTEL_SEARCH_PAGE)}
        >
          <BedDouble />
          Find Stays
        </div>
      </div>

      <Image
        src="/Logo2.png"
        alt=""
        className="cursor-pointer"
        onClick={() => navigate(ROUTES.LANDING_PAGE)}
      />

      <div className="flex justify-end gap-8">
        {currentUser ? (
          <div className="flex items-center gap-4">
            <div
              className={clsx(
                'flex cursor-pointer items-center gap-2 py-4 text-sm font-bold transition-transform hover:scale-105',
                {
                  'border-b-mainColor-400 border-b-[3px]':
                    pathname.startsWith('/favorites'),
                }
              )}
              onClick={() => navigate(ROUTES.FAVORITES_PAGE)}
            >
              <Heart />
              Favorites
            </div>
            <Separator orientation="vertical" className="h-8" />
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 transition-all hover:bg-gray-200 hover:duration-300 hover:ease-in-out">
                  <Avatar>
                    <AvatarImage src={currentUser?.avatar || ''} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <div className="text-sm font-semibold">
                      {currentUser?.name || 'Ẩn danh'}
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate(ROUTES.ACCOUNT_PAGE)}
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
          <div className="flex gap-2">
            <button
              className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#F4EFE6] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#1C160C] transition-all hover:scale-105 hover:duration-300 hover:ease-in-out"
              onClick={() => navigate(ROUTES.LOGIN_PAGE)}
            >
              <span className="truncate">Log In</span>
            </button>
            <button
              className="bg-mainColor-600 flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#FFFFFF] transition-all hover:scale-105 hover:duration-300 hover:ease-in-out"
              onClick={() => navigate(ROUTES.SIGNUP_PAGE)}
            >
              <span className="truncate">Sign Up</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
