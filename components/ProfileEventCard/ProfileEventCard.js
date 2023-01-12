import React from 'react';

export default function ProfileEventCard() {
  return (
    <card className="mb-6 flex flex-row rounded-xl bg-gray-200">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <img
            className="h-full rounded-l-lg"
            src="/knitting-event.jpg"
            alt="knitting img"
          />
        </div>
        <div className="col-span-3 p-3">
          <h1 className="text-4xl font-bold">Knitting with Julie</h1>
          <h3 className="text-base font-light">Knightsbridge, London</h3>
          <h2 className="pt-3 text-xl font-bold">Description:</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row pt-3">
            <h3 className="">17:00 - 18:30</h3>
            <h3 className="">Thur 12 Dec</h3>
          </div>
        </div>
      </div>
    </card>
  );
}

{
  /* <a className="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
        <img
          className="h-full w-48 rounded-none rounded-t-lg rounded-l-lg object-cover"
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
      </a> */
}
