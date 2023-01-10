//* Description: This is the home page of the site

// Import statements
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "../styles/Home.module.css";

// Component imports
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Home component
export default function Home() {
  return (
    <>
      <Head>
        <title>Site being built</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="flex-col items-center justify-center w-2/3 p-6">
          <h1 className="text-7xl font-bold">Learn (almost) anything!</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-6 text-2xl p-3">
            <Link className="py-1 px-4 bg-red-400 rounded-lg" href="/explore">
              EXPLORE
            </Link>
            <Link className="py-1 px-4 bg-red-400 rounded-lg" href="/about">
              ABOUT
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
