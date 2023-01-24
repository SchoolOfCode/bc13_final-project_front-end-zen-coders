import React from "react";
import { useState } from "react";


export default function ProfileModal({userId}) {

  const [showModal, setShowModal] = React.useState(false);
  const [profile, setProfile] = useState({});
  const [profilePic, setProfilePic] = useState();
console.log(userId)
  function handleProfilePic(e) {
      setProfilePic(e.target.files[0]);
    }

  function handleChange(e) {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(profile);
  }

  async function postUser() {
    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("name", profile.name);
    formData.append("location", profile.location);
    formData.append("email", profile.email);
    formData.append("isSharer", Boolean(profile.isSharer));
    formData.append("isLearner", Boolean(profile.isLearner));
    formData.append("aboutMe", profile.aboutMe);


    const response = await fetch(`http://localhost:3003/users/update/${userId}`, {
      method: "PATCH",
      body: formData
    });

    if(response.ok) {
    console.log("Profile successfully updated.");
  } else {
  console.log("An error occurred, please try again later.");
  }
  } 
  
  return (
    <div>
    <div className="userUpdate my-6 flex flex-row border-indigo-900 text-white bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear justify-center transition-shadow cursor-progress duration-150 hover:bg-indigo-500" onClick={() => setShowModal(true)}>
    <button
      type="button" className="cursor-progress"

    >
      Edit Profile 
    </button>
    <img className="w-4/12" src="/editProfileIcon.png" />
  </div>
  {showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Update profile
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Lewis"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                        type="location"
                        name="location"
                        id="location"
                        placeholder="Higham on the Hill"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johnlewis@gmail.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sharer"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Sharer?
                      </label>
                      <input
  type="checkbox"
  name="isSharer"
  id="isSharer"
  value={profile.isSharer}
  onChange={handleChange}
/>
                      <label
                        htmlFor="learner"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Learner?
                      </label>
                      <input
  type="checkbox"
  name="isLearner"
  id="isLearner"
  value={profile.isLearner}
  onChange={handleChange}
/>
                    </div>
                    <div>
                      <label
                        htmlFor="aboutMe"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Profile Description
                      </label>
                      <textarea
                        type="text"
                        name="aboutMe"
                        id="aboutMe"
                        placeholder="I am a biology tutor blablabla"
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 h-48 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="profilePic"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload your photo (not working just now, bear with us)
                      </label>
                      <input
                        type="file"
                        name="profilePic"
                        id="profilePic"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleProfilePic}
                      />
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
                    onClick={() => {
                      setShowModal(false);
                      postUser();
                    }}
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
  );
}
