import React from 'react';

export default function AddEventCard() {
  return (
    <card className="mb-6 flex flex-col rounded-lg border-2 border-black bg-gray-200 p-3">
      <div className="flex flex-row">
        <h2 className="text-2xl font-bold">Skill Type :</h2>
        <div className="flex flex-row">
          <h2>skill</h2>
          <h2>skill</h2>
          <h2>skill</h2>
        </div>
      </div>
      <div className="mt-3 flex flex-row gap-3">
        <input
          placeholder="Date:"
          className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-gray-100 bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-indigo-700 focus:bg-white focus:text-gray-700 focus:outline-none"
        />
        <input
          placeholder="Time:"
          className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-gray-100 bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-indigo-700 focus:bg-white focus:text-gray-700 focus:outline-none"
        />
      </div>
      <div className="mt-3 flex flex-row justify-between gap-3">
        <input
          placeholder="Description:"
          className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-gray-100 bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-indigo-700 focus:bg-white focus:text-gray-700 focus:outline-none"
        />
        <button className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-indigo-400 hover:bg-opacity-50">
          {' '}
          Post{' '}
        </button>
      </div>
    </card>
  );
}
