import React from 'react';
import Link from 'next/link';

export default function ExploreCard({title}) {
  return (
    <div className="flex flex-row flex-wrap">
      <div class="m-auto grid grid-cols-2  p-7 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-14 ">
        <Link href="/profile">
          <div className="m-3 flex flex-col items-center justify-center rounded-3xl bg-gray-400 hover:scale-110 hover:bg-gray-800 lg:w-60">
            <div className="m-5 flex h-36 w-36 items-center justify-center self-end rounded-full bg-gray-500">
              <img
                className="h-20 w-20 object-contain p-2"
                src="/knitting.svg"
              />
            </div>
            <div className="px-5 pb-5">
              <h1 className="font-bold  ">{title}</h1>
              <p className=" ">Name Surname</p>
              <div className="mt-2.5 mb-5 flex items-center">
                <img className="h-30 w-24" src="/arrow.svg" />
                <div className="-mb-12 flex flex-col">
                  <p>11:30</p>
                  <p>Thur 12 Dec</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
