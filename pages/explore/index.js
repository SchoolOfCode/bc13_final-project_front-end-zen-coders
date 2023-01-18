import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';

export const getStaticProps = async () => {
  const res = await fetch('https://releasev1-0.onrender.com/events/explore');
  const data = await res.json();

  return {
    props: { events: data },
  };
};

export default function index({ events }) {
  return (
    <div>
      <SearchBar />
      <Filter />
      <h1>Explore Page</h1>
      <div className="flex flex-row flex-wrap">
        <div class="m-auto grid grid-cols-2  p-7 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-14 ">
          {events.map((event) => (
            <div key={event.id}>
              <ExploreCard title={event.title} skill={event.skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
