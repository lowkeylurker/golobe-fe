import React from 'react'

import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
