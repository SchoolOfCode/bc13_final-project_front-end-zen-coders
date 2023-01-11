import React from 'react';

export default function ProfileCard() {
  return (
    <div className="h-screen w-1/4 rounded-lg border-gray-700 bg-gray-800 shadow-md">
      <a>
        <img
          className="rounded-t-lg"
          src="/profile-image.jpg"
          alt="profile picture"
        />
      </a>
      <div className="p-5">
        <div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
            Sharer Name
          </h1>
          <h3>Locaiton</h3>
          <div>
            <p>star</p>
          </div>
          <h2>About me:</h2>
          <p className="mb-3 font-serif text-white">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div>
          <div>
            <p>skill</p>
          </div>
          <a className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Contact
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
