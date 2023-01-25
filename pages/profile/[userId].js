import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from "react";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";
import AddEventCard from "../../components/AddEventCard/AddEventCard.js";
import { useUser } from "@auth0/nextjs-auth0/client";

export const getServerSideProps = async ({ params }) => {
  const userId = params.userId;
  const event = await fetch(
    `${process.env.DATABASE_URL}/users/profile/${userId}`
  ).then((res) => res.json());
  return {
    props: { event, userId },
  };
};

export default function Index({ event, userId }) {
  const [show, setShow] = useState(false);

  // Getting data from auth0 logged in user

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // Getting user id from JSON and removing "auth0|" from the start of userid
  const authId = JSON.stringify(user?.sub?.substring(6));

  return (
    <div className="mx-3 mb-20 grid grid-cols-1 md:mx-12 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:pt-28">
      <div>
        {/* Passing down props to profile card component to render for specific user page navigated to*/}
        <ProfileCard
          event={event}
          userId={userId}
          authId={authId}
          className="col-span-1 bg-blue-200"
        />
      </div>
      <div className="lg:col-span-3 md:col-span-2 mt-3 ">
        <div className="mb-3 flex justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">Available Sessions:</h1>
          {/* If auth0 id equals id of profile beiong viewed show the add event button. User id is in quotes to match format of authId */}
          {authId === `"${userId}"` ? (
            <button
              onClick={() => setShow(!show)}
              className="rounded-full border-2 border-blue-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-blue-400 hover:bg-opacity-50"
            >
              +event
            </button>
          ) : null}
        </div>

        {show ? <AddEventCard userId={userId} /> : null}
        {/* Passing down props to event cards which are mapped over to generate relevant information */}

        {event[0].UsersEvents.map((event) => (
          <div key={event.id}>
            <ProfileEventCard
              userId={userId}
              eventId={event._id}
              title={event.title}
              skill={event.skill}
              location={event.location}
              area={event.area}
              description={event.description}
              eventPic={event.eventPic}
              startTime={event.startTime}
              authId={authId}
              className="mt-6"
              sharerId={event.sharerId}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
