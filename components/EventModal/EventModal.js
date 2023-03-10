import React, { useState, useEffect } from "react";

export default function EventModal({ eventId, userId }) {
  const [showModal, setShowModal] = React.useState(false);
  const [event, setEvent] = useState({});
  const [eventPic, setEventPic] = useState();

  console.log("line 8", eventId);
  // console.log("line 9", userId);
  function handleEventPic(e) {
    setEventPic(e.target.files[0]);
  }

  function handleChange(e) {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(event);
  }

  async function editEvent() {
    const formData = new FormData();
    formData.append("eventPic", eventPic);
    formData.append("title", event.title);
    formData.append("skill", event.skill);
    formData.append("location", event.location);
    formData.append("area", event.area);
    formData.append("description", event.description);
    formData.append("startTime", event.startTime);
    formData.append("sharerId", userId);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/events/update/${eventId}`,
      {
        method: "PATCH",
        body: formData,
      }
    );

    if (response.ok) {
      console.log("Event successfully updated.");
    } else {
      console.log("An error occurred, please try again later.");
    }
  }

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
          <div className="justify-center outline-none fixed inset-0 z-50 flex items-center pt-80 focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Update event
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="Event name here..."
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="skill"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Skill
                      </label>
                      <select
                        name="skill"
                        id="skill"
                        onChange={handleChange}
                        className="rounded-md bg-gray-600 p-2 text-gray-100"
                      >
                        <option value="Music">Music</option>
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
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="London"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="area"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Area
                      </label>
                      <input
                        type="text"
                        name="area"
                        id="area"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="startTime"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Start Time
                      </label>
                      <input
                        type="datetime-local"
                        name="startTime"
                        id="startTime"
                        className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="eventPic"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload your photo
                      </label>
                      <input
                        type="file"
                        name="eventPic"
                        id="eventPic"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        required
                        onChange={handleEventPic}
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
                      editEvent();
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
