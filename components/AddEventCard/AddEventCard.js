import React from "react";
import { useForm } from "react-hook-form";
import {useState} from "react";

export default function AddEventCard() {
  const [event, setEvent] = useState({});
  const [eventPic, setEventPic] = useState();

  const {
    register,
    handleSubmit,
    // error handling with useForm hook method
    formState: { errors },
  } = useForm({});


  function handleEventPic(e) {
    setEventPic(e.target.files[0]);
  }

  function handleChange(e) {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(event);
  }

  async function postEvent() {
    const formData = new FormData();
    formData.append("eventPic", eventPic);
    formData.append("title", event.title);
    formData.append("skill", event.skill);
    formData.append("location", event.location);
    formData.append("area", event.area);
    formData.append("description", event.description);
    formData.append("startTime", event.startTime);
    formData.append("sharerId", userId);
    const response = await fetch(`http://localhost:3003/events/add`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Event successfully updated.");
    } else {
      console.log("An error occurred, please try again later.");
    }
  }



  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        postEvent(data);
      })}
    >
      <card className="mb-6 flex flex-col rounded-lg border-2 border-black bg-gray-200 p-3">
        <div className="flex flex-row">
          <h2 className="text-2xl font-bold">Skill Type: </h2>
          <div className="flex flex-row">
            <select {...register("skill", { required: "Skill is required" })} onChange={handleChange}>
              <option value="">Skill</option>
              <option value="Gardening">Gardening</option>
              <option value="Knitting">Knitting</option>
              <option value="Language">Language</option>
              <option value="Music">Music</option>
              <option value="Paintng">Painting</option>
              <option value="Photography">Photography</option>
              <option value="Sports">Sports</option>
              <option value="Tutoring">Tutoring</option>
              <option value="Writing">Writing</option>
              <option value="Other">Other</option>
            </select>
            <p>{errors.Skill?.message}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <h2 className="text-2xl font-bold">Location: </h2>
          <div className="flex flex-row">
            <select {...register("location", { required: "Location is required" })} onChange={handleChange}
            >
              <option value="">Location</option>
              <option value="City of Westminster">City of Westminster</option>
              <option value="Hammersmith and Fulham">
                Hammersmith and Fulham
              </option>
              <option value="Kensington and Chelsea">
                Kensington and Chelsea
              </option>
              <option value="Lambeth">Lambeth</option>
              <option value="Southwark">Southwark</option>
              <option value="Tower Hamlets">Tower Hamlets</option>
              <option value="Wandsworth">Wandsworth</option>
            </select>
            <p>{errors.Location?.message}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-3">
          <input {...register("title", { required: "Title is required" })}
            placeholder="Title:"
            type="Title"
            className="form-control relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            onChange={handleChange} />
          <p>{errors.Title?.message}</p>
          <input {...register("startTime", { required: "Date/Time is required" })}
            placeholder="startTime:"
            type="datetime-local"
            className="form-control  relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            onChange={handleChange} /><p>{errors.DateTime?.message}</p>
        </div>
        <input {...register("sharerId", { required: "id is required" })}
            placeholder="id:"
            type="text"
            className="form-control  relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            onChange={handleChange}  /><p>{errors.Id?.message}</p>
        
        <div className="mt-3 flex flex-row justify-between  gap-3">
          <textarea {...register("description", { required: "Description is required" })}
            placeholder="Description:"
            type="text"
            rows="5"
            className="form-control  relative m-0 block w-full min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal  text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            onChange={handleChange} /> <p>{errors.Description?.message}</p>
          <input className="h-full rounded-full border-2 border-indigo-700 object-contain py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-indigo-400 hover:bg-opacity-50" id="submit-btn" type="submit" value="Post"/>
        </div>  
      </card>
    </form>
  );
}
