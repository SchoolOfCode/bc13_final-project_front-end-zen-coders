import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from "react";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";
import AddEventCard from "../../components/AddEventCard/AddEventCard.js";
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
export default function Index({ event }) {
  const [show, setShow] = useState(false);
  // const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 md:mx-12 mb-20 md:pt-28">
      <div>
        <ProfileCard event={event} className="col-span-1 bg-blue-200" />
      </div>
      <div className="col-span-3">
        <div className="mb-3 flex justify-between">
          <h1 className="text-4xl font-bold">Available Sessions:</h1>
          <button
            onClick={() => setShow(!show)}
            className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:bg-opacity-50"
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
