import React, { useState, useEffect } from "react";

export default function EventModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [event, setEvent] = useState({})






  return (
    <div>
      <div className="userUpdate">
        <button
          className="rounded-full border-2 border-blue-700 object-contain py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-blue-400 hover:bg-opacity-50"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit
        </button>
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
                    Update event
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Event name here..."
                        required onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="skill"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Skill
                      </label>
                      <select name="skill" id="skill" onChange={handleChange}>
                        <option value="Music" >Music</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Photograhy">Photograhy</option>
                        <option value="Painting">Painting</option>
                        <option value="Knitting">Knitting</option>
                        <option value="Writting">Writting</option>
                        <option value="Language">Language</option>
                        <option value="Tutoring">Tutoring</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="London"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="area"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Area
                      </label>
                      <input
                        type="text"
                        name="area"
                        id="area"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleChange}
                      />
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="startTime"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Start Time
                      </label>
                      <input
                        type="datetime-local"
                        name="startTime"
                        id="startTime"
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="eventPic"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload your photo (not working just now, bear with us)
                      </label>
                      <input
                        type="file"
                        name="eventPic"
                        id="eventPic"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required onChange={handleChange}
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
  );
}
