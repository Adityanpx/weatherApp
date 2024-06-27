import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
        </div>
  )
}
