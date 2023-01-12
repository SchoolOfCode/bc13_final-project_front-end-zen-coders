import React from "react";

export default function ExploreTiles() {
  return (
    <div className="flex w-1/3 flex-col items-center justify-center bg-gray-400">
      <div className="flex h-36 w-36 bg-gray-500 m-4 rounded-full">
        <img
          className="h-20 w-20 flex rounded-full object-contain m-4"
          src="/arrow.svg"
        />
      </div>
      <div className="px-5 pb-5">
        <h1 className="font-bold">Skill</h1>
        <p>Name Surname</p>
        <div className="mt-2.5 mb-5 flex items-center">
          <img className="h-30 w-24" src="/knitting.svg" />
          <p>11:30</p>
          <p>Thur 12 Dec</p>
        </div>
      </div>
    </div>
  );
}
