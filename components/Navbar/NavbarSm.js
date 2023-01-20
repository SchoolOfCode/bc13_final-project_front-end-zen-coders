//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';

// Navbar component
export default function Navbar() {
  return (
    // add fixed to div
    <div className="bg-white px-3 pb-3 fixed md:hidden bottom-0 w-full z-10">
      <nav className="flex h-12 items-center rounded-full border-2 border-black bg-white p-3">
        <div className="flex justify-between w-full">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/explore" className="">
            Explore
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Auth />
          <Link href="/profile" className="font-bold text-indigo-600">
            PK
          </Link>
        </div>
      </nav>
    </div>
  );
}
