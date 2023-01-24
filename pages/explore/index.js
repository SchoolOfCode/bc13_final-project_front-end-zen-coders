import React from 'react';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import Filter from '../../components/Filter/Filter';
import FilterSm from '../../components/Filter/FilterSm.js';

export const getServerSideProps = async () => {
  const res = await fetch(process.env.DATABASE_URL);
  const data = await res.json();
  return {
    props: { events: data },
  };
};

export default function index({ events }) {
  return (
    <div className="mx-3 mb-20 md:mx-12 md:pt-28">
      <Filter />
      <FilterSm />
      <div className="mt-8 flex flex-row items-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {events.map((event) => (
            <div key={event.id}>
              <ExploreCard
                sharerId={event.sharerId}
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
