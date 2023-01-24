//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import { useUser } from "@auth0/nextjs-auth0/client";

// Navbar component
export default function Navbar() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const authId = user ? (JSON.stringify(user?.sub?.substring(6))): null
  const newAuthId =  user ? (authId.replaceAll('"','')): null

  return (
    // add fixed to div
    <div className="w-full bg-white hidden md:fixed md:flex z-10">
      <nav className="flex mt-6 mx-6 flex-row items-center justify-between rounded-full border-2 border-black bg-white p-2 w-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex text-m items-center">
            <img src="/logo.svg" alt="logo" className="h-12 pr-3" />
            <Link
              href="/"
              className="mr-4 text-black hover:text-indigo-700 hover:underline mt-0"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="mr-4 text-black hover:text-indigo-700 hover:underline mt-0"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-indigo-700 hover:underline mt-0"
            >
              About
            </Link>
          </div>
          <div className="flex gap-3">
            <h3 className="text-m underline decoration-indigo-400">Location</h3>
            <Auth />
            { user ? (   <Link
              href={`/profile/${newAuthId}`}
              className="text-2xl pr-3 font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black mt-0"
            >
              PK
            </Link>) : null}
            
          </div>
        </div>
      </nav>
    </div>
  );
}
