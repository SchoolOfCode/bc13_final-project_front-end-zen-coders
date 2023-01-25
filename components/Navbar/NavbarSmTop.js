//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';

// Navbar component
export default function NavbarSmTop() {
  return (
    <div className="fixed top-0 right-0 z-10 mr-3 mt-3 md:hidden">
      <Link
        href="/profile"
        className="flex h-12 w-12 items-center rounded-full border-2 border-blue-700 bg-white/50 p-1.5 backdrop-blur-md"
      >
        <div className="ml-1 mr-1 flex align-middle">
          <div className="text-xl font-bold text-indigo-500">PK</div>
        </div>
      </Link>
    </div>
  );
}
