
import Link from "next/link"

export function Footer() {
  return (
    (<footer className="bg-gray-100 py-8 dark:bg-gray-800">
      <div
        className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <div className="flex items-center space-x-2">
            <CloudIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="text-lg font-bold">Weather App</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Get the latest weather updates for your location.</p>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400"
            href="/">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400"
            href="/about">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400"
            href="/services">
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400"
            href="/contact">
            Contact
          </Link>
        </nav>
      </div>
      <div
        className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        © 2024 Weather App. All rights reserved.
      </div>
    </footer>)
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
