//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';

// Navbar component
export default function Navbar() {
  return (
    // add fixed to div
    <div className="w-full bg-white p-6">
      <nav className="flex flex-wrap items-center justify-between rounded-full border-2 border-black bg-white p-2">
        <img src="/logo.svg" alt="logo" className="h-12" />
        <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="mt-4 mr-4 block text-black hover:text-white lg:mt-0 lg:inline-block"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="mt-4 mr-4 block text-black hover:text-white lg:mt-0 lg:inline-block"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="mt-4 block text-black hover:text-white lg:mt-0 lg:inline-block"
            >
              About
            </Link>
          </div>
          <h3 className="pr-4 underline decoration-orange-400">Location</h3>
          <div>
            <a
              href="#"
              className="mt-4 inline-block  px-4 py-2 text-lg leading-none text-indigo-700 hover:border-transparent  hover:text-white lg:mt-0"
            >
              PK
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
