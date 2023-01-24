//* Description: This component is used to display the cards on the explore page. It takes in the title, name, start time and skill as props. It then displays the relevant icon based on the skill

// Import statements
import React from 'react';
import Link from 'next/link';


// Component
export default function ExploreCard({ title, name, startTime, skill, sharerId }) {

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
    <Link href={`/profile/${sharerId}`>
      <div className="m-3 flex flex-row items-center justify-center rounded-3xl border-2 border-black bg-white hover:bg-gray-100 hover:shadow-xl md:m-6 md:flex-col">
        <div className="m-2 flex w-1/4 items-start self-start md:static md:m-5 md:h-20 md:w-20 md:self-end md:rounded-full md:border-2 md:border-black">
          {skill === 'Knitting' ? (
            <img
              className="object-contain p-1 md:p-3"
              src="/icons/knitting-black.svg"
              x
            />
          ) : null}
          {skill === 'Music' ? (
            <img className="object-contain p-3" src="/icons/music-black.svg" />
          ) : null}
          {skill === 'Gardening' ? (
            <img
              className="object-contain p-3"
              src="/icons/gardening-black.svg"
            />
          ) : null}
          {skill === 'Photography' ? (
            <img
              className="object-contain p-3"
              src="/icons/photography-black.svg"
            />
          ) : null}
          {skill === 'Painting' ? (
            <img
              className="object-contain p-3"
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
              className="object-contain p-3"
              src="/icons/language-black.svg"
            />
          ) : null}
          {skill === 'Tutoring' ? (
            <img
              className="object-contain p-3"
              src="/icons/tutoring-black.svg"
            />
          ) : null}
          {skill === 'Sports' ? (
            <img className="object-contain p-3" src="/icons/sport-black.svg" />
          ) : null}
          {skill === 'Other' ? (
            <img className="object-contain p-3" src="/icons/other-black.svg" />
          ) : null}
        </div>
        <div className="w-full p-3">
          <div>
            <h1 className="w-full text-lg font-bold">{title}</h1>
            <p className="text-lg font-light">{name}</p>
          </div>
          <div className="mt-2.5 flex flex-row">
            <img className="h-30 mr-3 w-24" src="/icons/arrow-black.svg" />
            <div className="flex flex-row items-end justify-end gap-3 md:flex-col md:items-start md:gap-0">
              <p className="flex flex-row">
                {hour}:{minutes}
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
