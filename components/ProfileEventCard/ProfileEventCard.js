import React from "react";
import EventModal from "../EventModal/EventModal";

export default function ProfileEventCard() {
  return (
    <card className="mb-6 flex flex-row rounded-xl">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <img
            className="h-full rounded-l-lg"
            src="/knitting-event.jpg"
            alt="knitting img"
          />
        </div>
        <div className="col-span-3 rounded-r-lg border-y-2 border-r-2 border-black p-3">
          <div className="flex flex-row">
            <div className="mr-3 h-14 w-14 rounded-full bg-red-100"></div>
            <div>
              <h1 className="text-4xl font-bold">Knitting with Julie</h1>
              <h3 className="text-base font-light">Knightsbridge, London</h3>
            </div>
          </div>
          <h2 className="pt-3 text-xl font-bold">Description:</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row justify-between gap-3 pt-3">
            <div>
              <h3 className="font-bold">17:00 - 18:30</h3>
              <h3 className="">Thur 12 Dec</h3>
            </div>
            <div>
              {/* <h3 className="rounded-full border-2 border-indigo-700 object-contain py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-indigo-400 hover:bg-opacity-50">
                Edit
              </h3> */}
              <EventModal />
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}
