//* Description: This component will render the Navbar component

// Import statements
import React from "react";
import Link from "next/link";
import Auth from "../Auth/Auth.js";
import { useUser } from "@auth0/nextjs-auth0/client";

// Navbar component
export default function Navbar() {
  // Getting data from auth0 logged in user
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // Getting user id from JSON and removing "auth0|" from the start of userid
  const authId = user ? JSON.stringify(user?.sub?.substring(6)) : null;
  // Removing extra quotes from authId to make comparisons to user id string easier
  const newAuthId = user ? authId.replaceAll('"', "") : null;

  return (
    <div className="z-10 hidden w-full bg-white md:fixed md:flex">
      <nav className="mx-6 mt-6 flex w-full flex-row items-center justify-between rounded-full border-2 border-black bg-white p-2">
        <div className="flex w-full items-center justify-between">
          <div className="text-m flex items-center">
            <img src="/logo.svg" alt="logo" className="h-12 pr-3" />
            <Link
              href="/"
              className="mr-4 mt-0 text-black hover:text-indigo-700 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="mr-4 mt-0 text-black hover:text-indigo-700 hover:underline"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="mt-0 text-black hover:text-indigo-700 hover:underline"
            >
              About
            </Link>
          </div>
          <div className="flex gap-3">
            <h3 className="text-m underline decoration-indigo-400">Location</h3>
            <Auth />
            {/* If user is not logged in doesn't show link to profile page. If they are logged in link is for their own profile page */}
            {user ? (
              <Link
                href={`/profile/${newAuthId}`}
                className="mt-0 pr-3 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black"
              >
                PK
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
