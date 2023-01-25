import React from "react";
import { useState } from "react";

export default function ProfileModal({ userId }) {
  const [showModal, setShowModal] = React.useState(false);
  const [profile, setProfile] = useState({});
  const [profilePic, setProfilePic] = useState();

  console.log(userId);

  function handleProfilePic(e) {
    setProfilePic(e.target.files[0]);
  }

  function handleChange(e) {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(profile);
  }

  async function editUser() {
    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("name", profile.name);
    formData.append("location", profile.location);
    formData.append("email", profile.email);
    formData.append("isSharer", Boolean(profile.isSharer));
    formData.append("isLearner", Boolean(profile.isLearner));
    formData.append("aboutMe", profile.aboutMe);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/users/update/${userId}`,
      {
        method: "PATCH",
        body: formData,
      }
    );

    if (response.ok) {
      console.log("Profile successfully updated.");
    } else {
      console.log("An error occurred, please try again later.");
    }
  }

  return (
    <div>
    <div className="userUpdate my-6 flex flex-row border-blue-900 text-white bg-blue-600 font-bold uppercase text-sm px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear justify-center transition-shadow cursor-progress duration-150 hover:bg-blue-500 content-center"  onClick={() => setShowModal(true)}>
    <button
      type="button" className="cursor-progress"

    >
      Edit Profile 
    </button>
    <img className="w-6 h-6 mb-1" src="/editProfileIcon.png" />
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
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johnlewis@gmail.com"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="isSharer"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
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
                        htmlFor="isLearner"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
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
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Profile Description
                      </label>
                      <textarea
                        type="text"
                        name="aboutMe"
                        id="aboutMe"
                        placeholder="I am a biology tutor blablabla"
                        className=" block h-48 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="profilePic"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload your photo
                      </label>
                      <input
                        type="file"
                        name="profilePic"
                        id="profilePic"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleProfilePic}
                      />
                    </div>
                  </form>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      editUser();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
}
