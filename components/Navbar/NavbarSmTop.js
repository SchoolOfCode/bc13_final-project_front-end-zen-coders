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
      <Link href="/profile" className="flex">
        <div className="ml-1 mr-1 flex align-middle">
          <img className="h-12 w-12 bg-white" src="/icons/profile-black.svg" />
        </div>
      </Link>
    </div>
  );
}
