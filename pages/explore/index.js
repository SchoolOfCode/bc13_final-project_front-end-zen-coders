import React from "react";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import Filter from "../../components/Filter/Filter";
import FilterSm from "../../components/Filter/FilterSm.js";
import NavbarSmTop from "../../components/Navbar/NavbarSmTop.js";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.DATABASE_URL}/events/explore`);
  const data = await res.json();
  return {
    props: { events: data },
  };
};

export default function index({ events }) {
  return (
    <div>
      <div className="fixed h-screen w-full -scale-x-100 transform">
        <img
          src="https://res.cloudinary.com/drseapwgz/image/upload/v1675183277/clear-background_gn7vvt.jpg"
          alt="home"
          className="h-full w-full object-cover opacity-75"
        />
      </div>
      <div className="mx-3 mb-20 md:mx-12 md:pt-24">
        <Filter />
        <FilterSm />
        <NavbarSmTop />
        <div className="z-0 flex flex-row items-center pt-20 md:mt-6 md:pt-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:mx-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {events.map((event) => (
              <div key={event.id}>
                <ExploreCard
                  sharerId={event.sharerId}
                  title={event.title}
                  skill={event.skill}
                  name={event.sharerName[0].name}
                  startTime={event.startTime}
                  eventPic={event.eventPic}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
