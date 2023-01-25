import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useState } from 'react';
import ProfileEventCard from '../../components/ProfileEventCard/profileEventCard';
import AddEventCard from '../../components/AddEventCard/AddEventCard.js';
// import { useRouter } from 'next/router';
export const getServerSideProps = async ({ params }) => {
  const userId = params.userId;
  const event = await fetch(
    `https://hobi.onrender.com/users/profile/${userId}`
  ).then((res) => res.json());
  return {
    props: { event, userId },
  };
  console.log(userId);
};
export default function Index({ event, userId }) {
  const [show, setShow] = useState(false);
  // const router = useRouter();
  return (
    <div className="mx-3 mb-20 grid grid-cols-1 md:mx-12 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:pt-28">
      <div>
        <ProfileCard
          event={event}
          userId={userId}
          className="col-span-1 bg-blue-200"
        />
      </div>
      <div className="lg:col-span-3 md:col-span-2 mt-3 ">
        <div className="mb-3 flex justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">Available Sessions:</h1>
          <button
            onClick={() => setShow(!show)}
            className="rounded-full border-2 border-blue-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-blue-400 hover:bg-opacity-50"
          >
            +event
          </button>
        </div>
        {show ? <AddEventCard /> : null}

        {event[0].UsersEvents.map((event) => (
          <div key={event.id}>
            <ProfileEventCard
              title={event.title}
              skill={event.skill}
              location={event.location}
              area={event.area}
              description={event.description}
              eventPic={event.eventPic}
              startTime={event.startTime}
              className="mt-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
