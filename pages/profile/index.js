import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileEventCard from "../../components/ProfileEventCard/profileEventCard";

export default function index() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <ProfileCard className="col-span-1" />
      </div>
      <div className="col-span-3">
        <div className = "flex">
          <h1> Available Sessions</h1>
          <button> + event</button>
        </div>
        <ProfileEventCard />
        <ProfileEventCard />
        <ProfileEventCard />
      </div>
    </div>
  );
}
