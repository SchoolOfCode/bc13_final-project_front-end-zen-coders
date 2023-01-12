import React, { useState } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileEventCard from '../../components/ProfileEventCard/profileEventCard';
import AddEventCard from '../../components/AddEventCard/AddEventCard.js';

export default function index() {
  const [show, setShow] = useState(false);

  return (
    <div className="grid grid-cols-4 gap-4 px-12">
      <ProfileCard className="col-span-1 bg-blue-200" />
      <div className="col-span-3">
        <div className="mb-3 flex">
          <h1 className="text-4xl font-bold">Available Sessions:</h1>
          <button onClick={() => setShow(!show)}>+event</button>
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
