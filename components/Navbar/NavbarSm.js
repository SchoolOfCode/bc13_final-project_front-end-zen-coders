//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';

// Navbar component
export default function Navbar() {
  return (
    <div className="px-3 pb-3 fixed md:hidden backdrop-blur-sm from-white/30 bottom-0 w-full z-10">
      <nav className="flex h-12 items-center rounded-full border-2 border-black p-3">
        <div className="flex justify-between w-full ml-3 mr-3">
          <Link href="/" className="flex flex-col">
            <img src="/icons/home.svg" alt="home-icon" className="h-5"></img>
            <a className="text-xs">Home</a>
          </Link>
          <Link href="/explore" className="flex flex-col">
            <img
              src="/icons/search.svg"
              alt="search-icon"
              className="h-5"
            ></img>
            <a className="text-xs">Explore</a>
          </Link>
          <Link href="/about" className="flex flex-col">
            <img src="/icons/info.svg" alt="about-icon" className="h-5"></img>
            <a className="text-xs">About</a>
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
