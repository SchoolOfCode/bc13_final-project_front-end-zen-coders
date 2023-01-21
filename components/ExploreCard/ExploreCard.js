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
      <div className="flex w-full flex-col items-center justify-center rounded-3xl border-2 border-black bg-white hover:bg-gray-100 hover:shadow-xl">
        <div className="m-5 flex border-2 border-black items-center justify-center self-end rounded-full">
          {skill === 'Knitting' ? (
            <img className="h-20 w-20 object-contain p-2" src="/knitting.svg" />
          ) : null}
          {skill === 'Music' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/musicIcon.svg"
            />
          ) : null}
          {skill === 'Gardening' ? (
            <img className="h-20 w-20 object-contain p-2" src="/shears.svg" />
          ) : null}
          {skill === 'Photography' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/photoIcon.svg"
            />
          ) : null}
          {skill === 'Painting' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/paintingIcon.svg"
            />
          ) : null}
          {skill === 'Writing' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/writingIcon.svg"
            />
          ) : null}
          {skill === 'Language' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/languageIcon.svg"
            />
          ) : null}
          {skill === 'Tutoring' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/tutorIcon.svg"
            />
          ) : null}
          {skill === 'Sports' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/sportIcon.svg"
            />
          ) : null}
          {skill === 'Other' ? (
            <img
              className="h-20 w-20 object-contain p-2"
              src="/otherIcon.svg"
            />
          ) : null}
        </div>
        <div className="m-3">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="font-light text-lg">Name</p>
          <div className="mt-2.5 flex flex-row">
            <img className="h-30 w-24 mr-3" src="/arrow.svg" />
            <div className="flex flex-col  justify-end">
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
