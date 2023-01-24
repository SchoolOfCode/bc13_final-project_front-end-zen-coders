//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';

// Navbar component
export default function NavbarSmTop() {
  return (
    <div className="mr-3 fixed md:hidden top-0 z-10 right-0 mt-3">
      <Link
        href="/profile"
        className="flex items-center bg-white rounded-full border-2 border-black w-12 h-12 p-1.5"
      >
        <div className="flex ml-1 mr-1 align-middle">
          <div className="font-bold text-xl text-indigo-500">PK</div>
        </div>
      </Link>
    </div>
  );
}
