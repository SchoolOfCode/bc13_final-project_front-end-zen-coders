//* Description: This component will render the list of events that the user can explore

// Import statements
import React from 'react';
import Link from 'next/link';

// Component imports
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import EventCard from '../EventCard/EventCard';

// ExploreList component
export default function ExploreList() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div>
        <ul>
          <Link href="/explore/knitting">Knitting</Link>
          <Link href="/explore/pottery">Pottery</Link>
        </ul>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}
