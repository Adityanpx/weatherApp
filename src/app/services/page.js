import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Services/>
        <Footer/>
    </div>
  )
}
