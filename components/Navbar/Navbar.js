//* Description: This component will render the Navbar component

// Import statements
import React from "react";
import Link from "next/link";

// Navbar component
export default function Navbar() {
  return (
    // add fixed to div
    <div className="w-full bg-white p-6">
      <nav className="flex flex-wrap items-center justify-between rounded-full border-2 border-black bg-white p-2">
        <img src="/logo.svg" alt="logo" className="h-12 pr-3" />
        <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-m lg:flex-grow">
            <Link
              href="/"
              className="mt-4 mr-4 block text-black hover:text-indigo-700 hover:underline lg:mt-0 lg:inline-block"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="mt-4 mr-4 block text-black hover:text-indigo-700 hover:underline lg:mt-0 lg:inline-block"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="mt-4 block text-black hover:text-indigo-700 hover:underline lg:mt-0 lg:inline-block"
            >
              About
            </Link>
          </div>
          <h3 className="text-m pr-4 underline decoration-indigo-400">
            Location
          </h3>
          <div>
            <a
              className="mt-4 inline-block px-4 py-2 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black lg:mt-0"
              href="/api/auth/login"
            >
              Login
            </a>
          </div>
          <div>
            <a
              className="mt-4 inline-block px-4 py-2 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black lg:mt-0"
              href="/api/auth/logout"
            >
              Logout
            </a>
          </div>
          <div>
            <Link
              href="/profile"
              className="mt-4 inline-block px-4 py-2 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black lg:mt-0"
            >
              PK
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
