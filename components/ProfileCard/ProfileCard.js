import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileCard() {
  const { user, error, isLoading } = useUser();
  const [showModal, setShowModal] = React.useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="h-screen rounded-lg bg-gray-200">
      <a>
        {user ? (
          <img
            className="rounded-t-lg"
            src={user.picture}
            alt="profile picture"
          />
        ) : (
          "no user info"
        )}
      </a>
      <div className="p-5">
        <div>
          {user ? (
            <h1 className="mb-2 text-4xl font-bold tracking-tight">
              {user.name}
            </h1>
          ) : (
            "Neo from Matrix"
          )}
          <h3 className="text-base font-light">Knightsbridge, London</h3>
          <div className="flex flex-row items-center gap-3">
            <div className="mt-2 flex h-5 flex-row">
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/full-star.svg" />
              <img src="/half-star.svg" />
            </div>
            <h3 className="text-sm">(12 REVIEWS)</h3>
          </div>
          <h2 className="pt-3 text-2xl font-bold">About me:</h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <div className="mb-3 flex flex-row gap-3 rounded-xl border-2 border-black bg-white p-3">
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
            <p>skill icon</p>
          </div>
          <button className="h-full w-full rounded-full border-2 border-indigo-900 bg-indigo-700 object-contain py-1 px-4 font-bold text-white transition ease-in-out  hover:bg-indigo-900 hover:bg-opacity-50">
            {user ? (
              <a href={"mailto:" + user.email}> CONTACT </a>
            ) : (
              <a href={"#"}> CONTACT </a>
            )}
          </button>
          <div className="userUpdate">
          <button
        className="border-indigo-900 text-white bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update User Page
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
     
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update profile</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Lewis" required/>
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="location" name="location" id="location" placeholder="Higham on the Hill" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="Email" id="Email" placeholder="johnlewis@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label htmlFor="sharer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sharer?</label>
                        <input type="checkbox" name="sharer" id="sharer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <label htmlFor="learner" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Learner?</label>
                        <input type="checkbox" name="learner" id="learner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label htmlFor="aboutMe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Description</label>
                        <textarea type="text" name="aboutMe" id="aboutMe" placeholder="I am a biology tutor blablabla" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 h-48 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload your photo (not working just now, bear with us)</label>
                        <input type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                </form>
            </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>

        </div>

              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


          </div>
        </div>
      </div>
    </div>
  );
}
