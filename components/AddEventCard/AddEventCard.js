import React from 'react';

export default function AddEventCard() {
  return (
    <card className="rounded-lg bg-red-300">
      <div className="flex flex-row">
        <h2> Skill Type :</h2>
        <div className="flex flex-row">
          <h2> skill</h2>
          <h2> skill</h2>
          <h2> skill</h2>
        </div>
      </div>
      <div className="flex flex-row">
        <input placeholder="Date" />
        <input placeholder="Time" />
      </div>
      <div className="flex flex-row">
        <input placeholder="Description" />
        <button> Post </button>
      </div>
    </card>
  );
}
