import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import Filter from '../../components/Filter/Filter';

export const getServerSideProps = async () => {
  const res = await fetch(process.env.DATABASE_URL);
  const data = await res.json();

  return {
    props: { events: data },
  };
};

export default function index({ events }) {
  return (
    <div className="mx-3 md:mx-12 md:pt-28">
      {/* <SearchBar /> */}
      <Filter />
      <div className="flex flex-row items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {events.map((event) => (
            <div key={event.id}>
              <ExploreCard
                title={event.title}
                skill={event.skill}
                name={event.sharerName[0].name}
                startTime={event.startTime}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
