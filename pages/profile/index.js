import React from 'react';
import { useState } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileEventCard from '../../components/ProfileEventCard/profileEventCard';
import AddEventCard from '../../components/AddEventCard/AddEventCard.js';

export default function index() {
  const [show, setShow] = useState(false);

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
        {show ? <AddEventCard /> : null}
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
      </div>
    </div>
  );
}
