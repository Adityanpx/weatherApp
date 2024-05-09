
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    (<header
      className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <CloudIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Weather App</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-10  ">
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-blue-500 before:transition-all hover:before:w-full"
            href="/">
            Home
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-blue-500 before:transition-all hover:before:w-full"
            href="/about">
            About
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-blue-500 before:transition-all hover:before:w-full"
            href="/services">
            Services
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-blue-500 before:transition-all hover:before:w-full"
            href="/contact">
            Contact
          </Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>)
  );
}

function CloudIcon(props) {
  return (
    (<svg
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
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
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
    </svg>)
  );
}
