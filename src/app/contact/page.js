
"use client"
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}
