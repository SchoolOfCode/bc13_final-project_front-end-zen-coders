//* Description: This is the home page of the site

// Import statements
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/Home.module.css';

// Component imports
import Navbar from '../components/Navbar/Navbar';

// Home component
export default function Home() {
  return (
    <main>
      <div className="md:pt-28 z-0 flex-col px-6 md:mx-12">
        <h1 className="text-8xl md:hidden mt-3 font-normal">hobï</h1>
        <h2 className="text-5xl md:text-7xl mt-3 md:mt-0 font-bold">
          Learn (almost) anything!
        </h2>
        <p className="md:w-2/3 md:mt-3 mt-3 font-serif text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center gap-6 mt-3 md:mt-3 text-2xl">
          <Link
            className="rounded-full border-2 text-xl md:text-2xl border-indigo-700 py-1 px-4 transition ease-in-out hover:bg-indigo-400 hover:bg-opacity-50"
            href="/explore"
          >
            EXPLORE
          </Link>
          <Link
            className="text-indigo-700 text-xl md:text-2xl transition ease-in-out"
            href="/about"
          >
            ABOUT
          </Link>
        </div>
        <div className="">
          <img src="/team-work.svg" alt="home" />
        </div>
      </div>
    </main>
  );
}
