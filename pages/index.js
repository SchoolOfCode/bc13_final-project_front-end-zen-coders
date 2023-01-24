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
      <div className="z-0 flex-col px-6 md:mx-12 md:pt-28">
        <h1 className="mt-3 text-8xl font-normal md:hidden">hobï</h1>
        <h2 className="mt-3 text-5xl font-bold md:mt-0 md:text-7xl">
          Learn (almost) anything!
        </h2>
        <p className="mt-3 font-serif text-lg md:mt-3 md:w-2/3 md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-3 flex items-center gap-6 text-2xl md:mt-3">
          <Link
            className="rounded-full border-2 border-blue-700 py-1 px-4 text-xl transition ease-in-out hover:bg-blue-400 hover:bg-opacity-50 md:text-2xl"
            href="/explore"
          >
            EXPLORE
          </Link>
          <Link
            className="text-xl text-blue-700 transition ease-in-out md:text-2xl"
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
