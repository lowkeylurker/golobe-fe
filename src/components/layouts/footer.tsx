import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Footer() {
  return (
    <footer className="bg-mainColor-400 relative mt-64 py-10 text-black">
      <div className="bg-mainColor-200 absolute -top-[140px] left-1/2 container mx-auto -translate-x-1/2 rounded-2xl">
        <div className="flex items-center justify-between p-6">
          <div className="">
            <div className="mb-4 text-5xl font-semibold">
              Subcribe <br />
              Newsletter
            </div>
            <div className="text-xl">The Travel</div>
            <div className="font-light">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </div>
            <form action="" className="mt-4 flex items-center gap-4">
              <Input
                type="text"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
          <Image
            src="/footer.png"
            alt=""
            width={288}
            height={288}
            className="w-72"
          />
        </div>
      </div>

      <div className="container mx-auto flex items-center gap-6 pt-36">
        <div className="w-1/5 space-y-4">
          <div className="rounded-xl bg-transparent">
            <Image src="/Logo1.png" alt="" width={288} height={288} />
          </div>
          <div className="flex gap-3 text-xl text-gray-800">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <RiInstagramFill />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-5">
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
