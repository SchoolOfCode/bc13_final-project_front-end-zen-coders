import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import FilterSm from "../../components/Filter/FilterSm";
import NavbarSmTop from "../../components/Navbar/NavbarSmTop";

export const getServerSideProps = async ({ params }) => {
  const skill = params.skill;
  const event = await fetch(
    `${process.env.DATABASE_URL}/events/explore/skill?skill=${skill}`
  ).then((res) => res.json());
  return {
    props: { event, skill },
  };
};

export default function Skill({ event }) {
  return (
    <div>
      <div className="fixed h-screen w-full -scale-x-100 transform">
        <img
          src="https://res.cloudinary.com/drseapwgz/image/upload/v1675183277/clear-background_gn7vvt.jpg"
          alt="home"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-3 mb-20 md:mx-12 md:pt-24">
        <Filter />
        <FilterSm />
        <NavbarSmTop />
        <div className="z-0 flex flex-row items-center pt-20 md:mt-6 md:pt-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:mx-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {event.map((event) => (
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
