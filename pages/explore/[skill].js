import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import ExploreCard from '../../components/ExploreCard/ExploreCard';

export const getServerSideProps = async ({ params }) => {
  const skill = params.skill;
  const event = await fetch(
    `https://hobi.onrender.com/events/explore/skill?skill=${skill}`
  ).then((res) => res.json());
  return {
    props: { event, skill },
  };
};

export default function Skill({ event, skill }) {

  return (
    <div className="mx-12 mb-20 md:pt-28">
      <Filter />
      <div className="flex flex-row flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-14">
          {event.map((event) => (
            <div key={event.id}>
            {/* <Link href="/profile/${user}"> */}
              <ExploreCard
                title={event.title}
                skill={event.skill}
                name={event.sharerName[0].name}
                startTime={event.startTime}
              />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
