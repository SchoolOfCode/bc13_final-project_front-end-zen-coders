import React from "react";
import Link from "next/link";

export default function ExploreCard({ title, name, startTime }) {
  //lists of weekdays and month format .
  const weekdayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //date() function turns date into a date that js can read
  const date = new Date(startTime);
  // extracts relevant date/time from Date function
  let weekday = weekdayList[date.getDay()];
  let month = monthList[date.getMonth()];
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return (
    <Link href="/profile">
      <div className="m-3 flex flex-col items-center justify-center rounded-3xl bg-gray-400 hover:scale-110 hover:bg-gray-600 lg:w-60">
        <div className="m-5 flex h-36 w-36 items-center justify-center self-end rounded-full bg-gray-500">
          <img className="h-20 w-20 object-contain p-2" src="/knitting.svg" />
        </div>
        <div className="px-5 pb-5">
          <h1 className="font-bold">{title}</h1>
          <p className="font-light">{name}</p>
          <div className="mt-2.5 mb-5 flex items-center">
            <img className="h-30 w-24" src="/arrow.svg" />
            <div className="-mb-12 flex flex-col">
              <p>
                {hour}:{minutes}
              </p>
              <p>
                {weekday} {day} {month}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
