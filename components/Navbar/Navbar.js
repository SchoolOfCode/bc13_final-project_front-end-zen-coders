//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';

// Navbar component
export default function Navbar() {
  return (
    <div className="z-20 hidden h-20 w-full md:fixed md:flex">
      <nav className="mx-6 mt-6 flex w-full flex-row items-baseline rounded-full border-2 border-white bg-white/30 p-2 shadow-lg backdrop-blur-lg">
        <div className="flex w-full items-baseline justify-between ">
          <div className="ml-3 flex items-baseline gap-10">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              hobï
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/explore" className="hover:underline">
              Explore
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            {/* <h3 className="text-m underline decoration-indigo-400">Location</h3> */}
            <Auth />
            <Link
              href="/profile"
              className="mt-0 pr-3 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black"
            >
              <img className='h-8 w-8' src="/icons/profile-black.svg" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
