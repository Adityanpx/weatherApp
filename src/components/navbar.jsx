"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeSidebar = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeSidebar);
    } else {
      document.removeEventListener('click', closeSidebar);
    }

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <CloudIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Weather App</span>
        </Link>
        <nav className="hidden  md:flex md:items-center md:gap-10">
          <Link className='hover:underline underline-offset-4 ' href="/">Home</Link>
          <Link className='hover:underline underline-offset-4 ' href="/about">About</Link>
          <Link className='hover:underline underline-offset-4 ' href="/services">Services</Link>
          <Link className='hover:underline underline-offset-4 ' href="/contact">Contact</Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline" onClick={toggleSidebar}>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full bg-white w-56 md:w-72 border-l border-gray-200 z-50">
            <nav className="flex hover:border-blue-500 flex-col gap-4 ml-4 mt-16">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
