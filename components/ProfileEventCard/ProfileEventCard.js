import React from "react";
import EventModal from "../EventModal/EventModal";

export default function ProfileEventCard({
  title,
  area,
  location,
  description,
  startTime,
  skill,
  eventPic,
  authId,
  userId,
}) {
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
    <card className="mb-6 flex rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <img
            className="h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none"
            src={eventPic}
            alt="knitting img"
          />
        </div>
        <div className="col-span-3 rounded-b-lg border-b-2 border-l-2 border-r-2 border-black p-3 md:rounded-l-none md:rounded-r-lg md:border-t-2 md:border-l-0">
          <div className="flex flex-row">
            {/* <div className="mr-3 h-14 w-14 rounded-full bg-red-100"></div> */}
            <div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <h3 className="text-base font-light">
                {area},{location}
              </h3>
            </div>
          </div>
          <h2 className="pt-3 text-xl font-bold">Description:</h2>
          <p className="">{description}</p>
          <div className="flex flex-row justify-between gap-3 pt-3">
            <div>
              <h3 className="font-bold">
                {hour}:{minutes}
              </h3>
              <h3 className="">
                {weekday} {day} {month}
              </h3>
            </div>
            <div>
              {/* If id of user who is logged in matches the id of the propfile being viewed shows the edit event modal */}
              {authId === `"${userId}"` ? <EventModal /> : null}
            </div>
          </div>
        </div>
      </div>
    </card>
  );
}
