import React from 'react';
import Link from 'next/link';

//import all the icons
//store them in an array
//assign correct icon to skill
//if skill = '', img =

export default function ExploreCard({ title, name, startTime, skill }) {
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

  return (
    <Link href="/profile">
      <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-black bg-white hover:bg-gray-100 hover:shadow-xl m-3 md:m-6">
        <div className="m-5 flex border-2 border-black items-center self-end rounded-full">
          {skill === 'Knitting' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/knitting-black.svg"
            />
          ) : null}
          {skill === 'Music' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/music-black.svg"
            />
          ) : null}
          {skill === 'Gardening' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/gardening-black.svg"
            />
          ) : null}
          {skill === 'Photography' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/photography-black.svg"
            />
          ) : null}
          {skill === 'Painting' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/painting-black.svg"
            />
          ) : null}
          {skill === 'Writing' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/writing-black.svg"
            />
          ) : null}
          {skill === 'Language' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/language-black.svg"
            />
          ) : null}
          {skill === 'Tutoring' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/tutoring-black.svg"
            />
          ) : null}
          {skill === 'Sports' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/sport-black.svg"
            />
          ) : null}
          {skill === 'Other' ? (
            <img
              className="h-20 w-20 object-contain p-3"
              src="/icons/other-black.svg"
            />
          ) : null}
        </div>
        <div className="m-3 w-full pb-3 px-6">
          <h1 className="font-bold text-lg w-full">{title}</h1>
          <p className="font-light text-lg">{name}</p>
          <div className="mt-2.5 flex flex-row">
            <img className="h-30 w-24 mr-3" src="/icons/arrow-black.svg" />
            <div className="flex flex-col justify-end">
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
