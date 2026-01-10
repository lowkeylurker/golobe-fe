import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import FooterImage from '@/shared/images/footer.png'
import LogoDark from '@/shared/images/logo-dark.png'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Footer() {
  return (
    <footer className="bg-primary relative mt-64 py-10 text-black">
      <div className="bg-primary-light absolute -top-1/2 left-1/2 container mx-auto -translate-x-1/2 rounded-3xl">
        <div className="flex items-center justify-between px-6">
          <div className="py-6">
            <div className="font-trade-gothic mb-4 text-[44px] leading-14 font-semibold">
              Subcribe <br />
              Newsletter
            </div>
            <div className="text-foreground-opacity-80 text-lg font-bold">
              The Travel
            </div>
            <div className="text-foreground-opacity-70 text-base font-medium">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </div>
            <form action="" className="mt-4 flex items-center gap-4">
              <Input
                label=""
                type="text"
                placeholder="Your email address"
                className="border-none bg-white"
              />
              <Button size="lg" className="bg-foreground text-white">
                Subscribe
              </Button>
            </form>
          </div>
          <Image src={FooterImage} alt="" width={400} height={305} />
        </div>
      </div>

      <div className="container mx-auto flex items-start justify-between pt-36">
        <div className="w-fit space-y-4">
          <div className="rounded-xl bg-transparent">
            <Image src={LogoDark} alt="" width={120} height={40} />
          </div>
          <div className="flex gap-3 text-xl text-gray-800">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <RiInstagramFill />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div>
            <h2 className="mb-2 font-semibold">Our Destinations</h2>
            <ul className="space-y-1 text-sm font-light">
              <li>Canada</li>
              <li>Alaska</li>
              <li>France</li>
              <li>Iceland</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-semibold">Our Activities</h2>
            <ul className="space-y-1 text-sm font-light">
              <li>Northern Lights</li>
              <li>Cruising & Sailing</li>
              <li>Multi-activities</li>
              <li>Kayaking</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-semibold">Travel Blogs</h2>
            <ul className="space-y-1 text-sm font-light">
              <li>Bali Travel Guide</li>
              <li>Sri Lanka Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Bali Travel Guide</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-semibold">About Us</h2>
            <ul className="mb-4 space-y-1 text-sm font-light">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>

          <div className="">
            <h2 className="mb-2 font-semibold">Contact Us</h2>
            <ul className="space-y-1 text-sm font-light">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
