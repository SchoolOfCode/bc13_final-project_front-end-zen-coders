//* Description: This component will render the search bar that the user can use to search for events

// Import statements
import React from 'react';

// SearchBar component
export default function SearchBar() {
  return (
    <div class="flex justify-center w-full">
      <div class="mb-3">
        <div class="input-group relative flex flex-wrap mb-4 rounded">
          <input
            type="search"
            class="rounded-full  form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          ></input>
        </div>
      </div>
    </div>
  );
}
