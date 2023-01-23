//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';

// Navbar component
export default function NavbarSm() {
  return (
    <div className="fixed bottom-0 z-10 w-full px-3 pb-3 md:hidden">
      <nav className="flex items-center rounded-full border-2 border-black bg-white p-2 shadow-lg">
        <div className="ml-6 mr-6 flex w-full justify-between">
          <Link href="/" className="flex flex-col">
            <img src="/icons/home.svg" alt="home-icon" className="h-5"></img>
            <h3 className="text-xs">Home</h3>
          </Link>
          <Link href="/explore" className="flex flex-col">
            <img
              src="/icons/search.svg"
              alt="search-icon"
              className="h-5"
            ></img>
            <h3 className="text-xs">Explore</h3>
          </Link>
          <Link href="/about" className="flex flex-col">
            <img src="/icons/info.svg" alt="about-icon" className="h-5"></img>
            <h3 className="text-xs">About</h3>
          </Link>
          <Auth />
        </div>
      </nav>
    </div>
  );
}
