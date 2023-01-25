//* Description: This component is used to display the cards on the explore page. It takes in the title, name, start time and skill as props. It then displays the relevant icon based on the skill

// Import statements
import React from 'react';
import Link from 'next/link';

// Component
export default function ExploreCard({
  title,
  name,
  startTime,
  skill,
  sharerId,
  eventPic,
}) {
  //lists of weekdays and month format .
  const weekdayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //date() function turns date into a date that js can read
  const date = new Date(startTime);
  // extracts relevant date/time from Date function
  let weekday = weekdayList[date.getDay()];
  let month = monthList[date.getMonth()];
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let newMinutes = minutes.toString().padStart(2, '0')


  return (
    <Link href={`/profile/${sharerId}`}>
      <div className="hover:rounder flex h-full flex-row items-start items-center justify-center justify-between rounded-3xl border-2 border-white bg-slate-100 shadow-xl backdrop-blur-2xl hover:border-blue-500  hover:shadow-md md:flex-col">
        <img
          src={eventPic}
          className="top-0 flex  h-full w-36 shrink-0 rounded-l-3xl object-cover md:h-36 md:w-full md:rounded-t-3xl md:rounded-bl-none"
        ></img>

        <div className="w-full p-3">
          <div>
            <h1 className="w-full text-lg font-bold">{title}</h1>
            <p className="text-lg font-light">{name}</p>
          </div>
          <div className="mt-2.5 ml-1 flex flex-row">
            <img className="h-30 mr-3 mb-3 w-24" src="/icons/arrow-black.svg" />
            <div className="flex flex-col justify-end text-sm ">
              <p className="flex flex-row">
                {hour}:{newMinutes}
              </p>
              <p className="font-bold">
                {weekday} {day} {month}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
