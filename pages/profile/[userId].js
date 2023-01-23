// import { useRouter } from "next/router";
import { data } from "autoprefixer";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";
import AddEventCard from "../../components/AddEventCard/AddEventCard";

// router.query allows us to access the end of the url (i.e. user id) - Done

// fetch data from user id and display profile information for that user

// fetch event data for user and display relevant events

// if it's an invalid id display an error message

export const getServerSideProps = async ({params}) => {
  const userid =params.userid;
    console.log(userid);
    const users = await fetch(
      `https://hobi.onrender.com/users/profile/${userid}`
    ).then((res)=>res.json());
    return {
      props: {
        users
      }
    };
};

export default function ProfilePage({users}) {
  console.log("this is info from users", users)
  // const router = useRouter();
  // const userid = router.query.userId;
  // getServerSideProps(userid);

  return (
    <div className="grid grid-cols-4 gap-4 px-12">
    {users.map((user, id)=>(
<div key={user.id}>
      <ProfileCard  name={user.name} location={user.location} profilePic={user.profilePic} email={user.email} 
      isLearner={user.isLearner} isSharer={user.isSharer} aboutMe={user.aboutMe}
      className="col-span-1 bg-blue-200" />
      <div className="col-span-3">
        <div className="mb-3 flex justify-between">
          <h1 className="text-4xl font-bold">Available Sessions:</h1>

          <button
            onClick={() => setShow(!show)}
            className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:bg-opacity-50"
          >
            +event
          </button>
        </div>
        {show ? <AddEventCard postEvent = {postEvent}/> : null}
        <ProfileEventCard title={user.UsersEvents.title} skill={user.UsersEvents.skill} location={user.UsersEvents.location} area={user.UsersEvents.area} description={user.UsersEvents.description} time={user.UsersEvents.startTime} pic={user.UsersEvents.eventPic}   className="mt-6" cards = {cards} />
      </div>
</div>
    ))}
    </div>
  );
}
