import BannerImage from '@/shared/images/home/banner.jpg'

import HomeHeader from './header'

export default function Hero() {
  return (
    <div
      className="m-7.5 h-150 overflow-hidden rounded-4xl"
      style={{
        backgroundImage: `url('${BannerImage.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-full flex-col bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]">
        <HomeHeader />

        <div className="flex flex-1 -translate-y-14 flex-col items-center justify-center gap-2 text-white">
          <div className="font-trade-gothic flex flex-col items-center font-bold">
            <p className="text-[45px]">Helping Others</p>
            <p className="text-[80px]">LIVE & TRAVEL</p>
          </div>
          <p className="text-lg font-semibold">
            Special offers to suit your plan
          </p>
        </div>
      </div>
    </div>
  )
}
