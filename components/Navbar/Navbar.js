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
    <div className="z-50 hidden h-20 w-full md:fixed md:flex">
      <nav className="mx-6 mt-6 flex w-full flex-row items-baseline rounded-full border-2 border-white bg-white/30 p-2 shadow-lg backdrop-blur-lg">
        <div className="flex w-full items-baseline justify-between ">
          <div className="ml-3 flex items-baseline gap-10">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              hobï
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/explore" className="hover:underline">
              Explore
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
          <div className="flex items-center gap-10">
            {/* <h3 className="text-m underline decoration-indigo-400">Location</h3> */}
            <Auth />
            {/* If user is not logged in doesn't show link to profile page. If they are logged in link is for their own profile page */}
            {user ? (
              <Link
                href={`/profile/${newAuthId}`}
                className="mt-0 rounded-full border-2 border-slate-800 text-2xl font-bold leading-none hover:border-slate-600 hover:text-black"
              >
                <img
                  src="/icons/profile-black.svg"
                  className="m-0.5 h-8 w-8 p-1"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
