import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import SearchBar from '../../components/SearchBar/SearchBar';
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
    <div className="mx-6 mb-20 md:pt-28">
      {/* <SearchBar /> */}
      <Filter />
      
      <h1 className="text-lg">Learn more about...</h1>
      <div className="flex flex-row flex-wrap">
        <div className="m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-14 ">
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
