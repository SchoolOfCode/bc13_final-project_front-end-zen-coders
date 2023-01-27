//* Description: This is the home page of the site

// Import statements
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import NavbarSmTop from "../components/Navbar/NavbarSmTop";
import "../styles/Home.module.css";

// Component imports
import Navbar from "../components/Navbar/Navbar";

// Home component
export default function Home() {
  return (
    <main>
      <NavbarSmTop />
      <div className="absolute z-10 flex-col px-6 md:mt-12 md:ml-28 md:pt-28">
        <h1 className="mt-3 text-8xl font-normal md:hidden">hobï</h1>
        <h2 className="mt-3 text-5xl font-bold md:text-7xl">
          Learn (almost) anything!
        </h2>
        <p className="mt-3 font-serif text-lg md:my-6 md:w-3/4 md:text-xl">
          Struggling to learn a new skill? Have a hobby you want to share with
          others? <strong>hobï</strong> lets you connect with your local
          community to learn and teach new skills.
        </p>
        <p className="mt-3 font-serif text-lg md:my-6 md:w-3/4 md:text-xl">
          To get involved you can{" "}
          <Link href="/explore">
            <strong>explore</strong>
          </Link>{" "}
          the classes that the community is currently offering, or{" "}
          <Link href="/api/auth/login">
            <strong>sign up</strong>
          </Link>{" "}
          to get started teaching what you love.
        </p>
        <div className="mt-3 flex items-center gap-6 text-2xl md:my-12">
          <Link
            className="rounded-full border-2 border-blue-700 py-1 px-8 text-xl transition ease-in-out hover:bg-blue-400 hover:bg-opacity-50 md:text-2xl"
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
      </div>
      <div className="fixed h-screen w-full -scale-x-100 transform">
        <img
          src="/background/joanna-kosinska-RE-8WswW95o-unsplash.jpg"
          alt="home"
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
