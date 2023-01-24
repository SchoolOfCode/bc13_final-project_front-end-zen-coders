import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from "react";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";
import AddEventCard from "../../components/AddEventCard/AddEventCard.js";
import { useUser } from "@auth0/nextjs-auth0/client";

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

  const { user, error, isLoading } = useUser();
  const authId = JSON.stringify(user?.sub?.substring(6));
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="mx-3 mb-20 grid grid-cols-1 gap-4 md:mx-12 md:grid-cols-4 md:pt-28">
      <div>
        <ProfileCard
          event={event}
          userId={userId}
          authId={authId}
          className="col-span-1 bg-blue-200"
        />
      </div>
      <div className="col-span-3">
        <div className="mb-3 flex justify-between">
          <h1 className="text-4xl font-bold">Available Sessions:</h1>
          {authId === `"${userId}"` ? (
            <button
              onClick={() => setShow(!show)}
              className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:bg-opacity-50"
            >
              +event
            </button>
          ) : null}
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
              authId={authId}
              userId={userId}
              className="mt-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
