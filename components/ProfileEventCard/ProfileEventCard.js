import React from "react";

export default function ProfileEventCard() {
  return (
    <div>
      <a className="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
        <img
          className="w-48 h-full rounded-none rounded-t-lg rounded-l-lg object-cover"
          src="/knitting-event.jpg"
          alt="knitting img"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Knitting with Julie
          </h1>
          <h3>Knightsbridge,London</h3>
          <h2> Description</h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3>17:00 - 18:30</h3>
          <h3>Thur 12 Dec</h3>
        </div>
      </a>
    </div>
  );
}
