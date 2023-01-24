//* Description: This component will render the Navbar component

// Import statements
import React from 'react';
import Link from 'next/link';
import Auth from '../Auth/Auth.js';
import Image from 'next/image';
import { useUser } from "@auth0/nextjs-auth0/client";

// Navbar component
export default function NavbarSmTop() {
  const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    const authId = JSON.stringify(user?.sub?.substring(6));
    const newAuthId = authId.replaceAll('"','');
  return (
    <div className="mr-3 fixed md:hidden top-0 z-10 right-0 mt-3">
      <Link
        href={`/profile/${newAuthId}`}
        className="flex items-center bg-white rounded-full border-2 border-black w-12 h-12 p-1.5"
      >
        <div className="flex ml-1 mr-1 align-middle">
          <div className="font-bold text-xl text-indigo-500">PK</div>
        </div>
      </Link>
    </div>
  );
}



//old code below with styling.

// //* Description: This component will render the Navbar component

// // Import statements
// import React from 'react';
// import Link from 'next/link';
// import Auth from '../Auth/Auth.js';
// import Image from 'next/image';
// import { useUser } from "@auth0/nextjs-auth0/client";

// // Navbar component
// export default function NavbarSmTop() {
//   const { user, error, isLoading } = useUser();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   const authId = JSON.stringify(user?.sub?.substring(6));
//   const newAuthId = authId.replaceAll('"','');
//   return (
//     <div className="mr-3 fixed md:hidden top-0 z-10 right-0 mt-3">
//         { user ? (   <Link
//               href={`/profile/${newAuthId}`}
//               className="text-2xl pr-3 font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black mt-0"
//             >
//               PK
//             </Link>) : null}
//         <div className="flex ml-1 mr-1 align-middle font-bold border-2 border-black rounded-full text-xl text-indigo-500">
//           <img src = "/home.svg" alt="" />
//         </div>
   
//     </div>
//   );
// }
