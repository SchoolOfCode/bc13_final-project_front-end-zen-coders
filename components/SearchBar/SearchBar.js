//* Description: This component will render the search bar that the user can use to search for events

// Import statements
import React from 'react';

// SearchBar component
export default function SearchBar() {
  return (
    <div className='px-6'>
      <input
        type="search"
        class="form-control  relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        placeholder="Search"
      ></input>
    </div>
  );
}
