import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileModal from "../ProfileModal/ProfileModal";

export default function ProfileCard({ event, userId, authId }) {
  // Getting data from auth0 logged in user
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="h-screen rounded-lg bg-gray-200">
      <a>
        {event ? (
          <img
            className="rounded-t-lg"
            src={event[0].profilePic}
            alt="profile picture"
          />
        ) : (
          "no user info"
        )}
      </a>
      <div className="p-5">
        <div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            {event[0].name}
          </h1>
          <h3 className="text-base font-light">{event[0].location}</h3>
          <div className="flex flex-row items-center gap-3">
            <div className="mt-2 flex h-5 flex-row">
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/half-star.svg" />
            </div>
            <h3 className="text-sm">(12 REVIEWS)</h3>
          </div>
          <h2 className="pt-3 text-2xl font-bold">About me:</h2>
          <p className="mb-3">{event[0].aboutMe}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3 flex flex-row gap-3 rounded-xl border-2 border-black bg-white p-3">
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
          </div>
          <button className="h-full w-full rounded-full border-2 border-indigo-900 bg-indigo-700 object-contain py-1 px-4 font-bold text-white transition ease-in-out  hover:bg-indigo-900 hover:bg-opacity-50">
            {/* If user is logged in. This will show the contact button to get in touch with sharer. If they are not logged in will show prompt for login */}
            {user ? (
              <a href={"mailto:" + event[0].email}> CONTACT </a>
            ) : (
              <h3>Please login for contact info</h3>
            )}
          </button>
          {/* If id of user who is logged in matches the id of the propfile being viewed shows the edit profile modal */}
          {authId === `"${userId}"` ? <ProfileModal userId={userId} /> : null}
        </div>
      </div>
    </div>
  );
}
