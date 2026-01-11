import React from 'react'

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
