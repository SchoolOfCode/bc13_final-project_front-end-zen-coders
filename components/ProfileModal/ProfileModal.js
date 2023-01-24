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
      `http://localhost:3003/users/update/${userId}`,
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
      <div
        className="userUpdate my-6 mr-1 mb-1 flex cursor-progress flex-row justify-center rounded-full border-indigo-900 bg-indigo-700 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-shadow duration-150 ease-linear hover:bg-indigo-500 hover:shadow-lg focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        <button type="button" className="cursor-progress">
          Edit Profile
        </button>
        <img className="w-4/12" src="/editProfileIcon.png" />
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Update profile
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="John Lewis"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
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
                        Upload your photo (not working just now, bear with us)
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
