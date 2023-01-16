import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileCard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="h-screen rounded-lg bg-gray-200">
      <a>
        {user ? (
          <img
            className="rounded-t-lg"
            src={user.picture}
            alt="profile picture"
          />
        ) : (
          "no user info"
        )}
      </a>
      <div className="p-5">
        <div>
          {user ? (
            <h1 className="mb-2 text-4xl font-bold tracking-tight">
              {user.name}
            </h1>
          ) : (
            "Neo from Matrix"
          )}
          <h3 className="text-base font-light">Knightsbridge, London</h3>
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
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <div className="mb-3 flex flex-row gap-3 rounded-xl border-2 border-black bg-white p-3">
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
          </div>
          <button className="h-full w-full rounded-full border-2 border-indigo-900 bg-indigo-700 object-contain py-1 px-4 font-bold text-white transition ease-in-out  hover:bg-indigo-900 hover:bg-opacity-50">
            {user ? (
              <a href={"mailto:" + user.email}> CONTACT </a>
            ) : (
              <a href={"#"}> CONTACT </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
