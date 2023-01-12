import React from 'react';

export default function AddEventCard() {
  return (
    <card className="mb-6 flex flex-col rounded-lg border-2 border-black bg-gray-200 p-3">
      <div className="flex flex-row">
        <h2> Skill Type :</h2>
        <div className="flex flex-row">
          <h2>skill</h2>
          <h2>skill</h2>
          <h2>skill</h2>
        </div>
      </div>
      <div className="flex flex-row">
        <input placeholder="Date" className="" />
        <input placeholder="Time" className="" />
      </div>
      <div className="flex flex-row justify-between">
        <input placeholder="Description" className="" />
        <button className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-indigo-400 hover:bg-opacity-50">
          Post
        </button>
      </div>
    </card>
  );
}
