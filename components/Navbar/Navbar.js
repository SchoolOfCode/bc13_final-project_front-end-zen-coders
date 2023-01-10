//* Description: This component will render the Navbar component

// Import statements
import React from "react";
import Link from "next/link";

// Navbar component
export default function Navbar() {
  return (
    // add fixed to div
    <div className="w-full p-6">
      <nav className="flex items-center justify-between flex-wrap bg-gray-400 p-6 rounded-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              href="/explore"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Explore
            </Link>
          </div>
          <h3 className="pr-4 underline decoration-orange-400">Location</h3>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
