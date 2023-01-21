//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';

// Navbar component
export default function NavbarSm() {
  return (
    <div className="px-3 pb-3 fixed md:hidden bottom-0 bg-white  w-full z-10">
      <nav className="flex items-center rounded-full border-2 border-black h-12 p-1.5">
        <div className="flex justify-between w-full ml-6 mr-6">
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
