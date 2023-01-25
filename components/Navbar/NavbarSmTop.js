//* Description: This component will render the Navbar component

// Import statements
import React from "react";
import Link from "next/link";
import Auth from "../Auth/Auth.js";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

// Navbar component
export default function NavbarSmTop() {
  // Getting data from auth0 logged in user
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // Getting user id from JSON and removing "auth0|" from the start of userid
  const authId = user ? JSON.stringify(user?.sub?.substring(6)) : null;
  // Removing extra quotes from authId to make comparisons to user id string easier
  const newAuthId = user ? authId.replaceAll('"', "") : null;
  return (
    <div className="fixed top-0 right-0 z-10 mr-3 mt-3 md:hidden">
      {/* If user is not logged in doesn't show link to profile page. If they are logged in link is for their own profile page */}
      {user ? (
        <Link
          href={`/profile/${newAuthId}`}
          className="flex h-12 w-12 items-center rounded-full border-2 border-black bg-white p-1.5"
        >
          <div className="ml-1 mr-1 flex align-middle">
            <div className="text-xl font-bold text-indigo-500">PK</div>
          </div>
        </Link>
      ) : null}
    </div>
  );
}
