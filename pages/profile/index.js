import React from 'react';
import { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileEventCard from '../../components/ProfileEventCard/profileEventCard';
import AddEventCard from '../../components/AddEventCard/AddEventCard.js';

export default function index() {
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {


    const gatherProfileEvents = async (obj) => {
      const profileEvents = await fetch(`http://localhost:3001/users/profile/63bc220a504d64dbff9d1a28`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await profileEvents.json();
      // setting state with payload of request
      setCards(data.payload);
    };
    gatherProfileEvents();
    // Added cards state as a dependency so it reloads when a new resources is posted
  }, [cards]);

// POST request handling to link front and backend
const postEvent = async (obj) => {
  const newEvent = await fetch(`http://localhost:3001/events/add`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await newEvent.json();
  // // updating resources state with new entered data.
  setCards([...cards, data]);
};

  return (
    <div className="grid grid-cols-4 gap-4 px-12">
    <div>
      <ProfileCard className="col-span-1 bg-blue-200" />
      <button>gggg</button>
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
        {show ? <AddEventCard postEvent = {postEvent}/> : null}
        <ProfileEventCard className="mt-6" cards = {cards} />
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
      </div>
    </div>
  );
}
