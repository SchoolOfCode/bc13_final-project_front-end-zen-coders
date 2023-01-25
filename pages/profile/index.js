import React from "react";
import Link from "next/link";
// import { useState } from "react";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";
// import ProfileEventCard from "../../components/ProfileEventCard/ProfileEventCard.js";
// import AddEventCard from "../../components/AddEventCard/AddEventCard.js";

export default function Index({ users }) {
  return (
    <div>
      <h1>Testing</h1>
      <Link className="p-15" href="/explore">
        Valid user not found. Please return to homepage
      </Link>
    </div>
  );
}
// const [show, setShow] = useState(false);
// const [cards, setCards] = useState([]);

// useEffect(() => {
// const gatherProfileEvents = async (obj) => {
//   const profileEvents = await fetch(`http://localhost:3001/users/profile/63bc220a504d64dbff9d1a28`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await profileEvents.json();
//   // setting state with payload of request
//   setCards(data.payload);
// };
// gatherProfileEvents();
//   // Added cards state as a dependency so it reloads when a new resources is posted
// }, [cards]);

// POST request handling to link front and backend
// const postEvent = async (obj) => {
//   const newEvent = await fetch(`http://localhost:3001/events/add`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
//   const data = await newEvent.json();
//   // // updating events with new entered data.
//   setCards([...cards, data]);
// };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 md:mx-12 mb-20 md:pt-28">
//       <div>
//         <ProfileCard className="col-span-1 bg-blue-200" />
//       </div>
//       <div className="col-span-3">
//         <div className="mb-3 flex justify-between">
//           <h1 className="text-4xl font-bold">Available Sessions:</h1>
//           <button
//             onClick={() => setShow(!show)}
//             className="rounded-full border-2 border-indigo-700 py-1 px-4 transition ease-in-out hover:scale-105 hover:bg-indigo-400 hover:bg-opacity-50"
//           >
//             +event
//           </button>
//         </div>
//         {show ? <AddEventCard postEvent = {postEvent}/> : null}
//         <ProfileEventCard className="mt-6" cards = {cards} />
//         <ProfileEventCard className="mt-6" />
//         <ProfileEventCard className="mt-6" />
//         <ProfileEventCard className="mt-6" />
//       </div>
//     </div>
//   );
// }

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("https://releasev1-0.onrender.com/users");
//     const data = await res.json();
//     console.log(data);

//     return {
//       props: {
//         users: data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };
