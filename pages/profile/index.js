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
        <ProfileEventCard />
        <ProfileEventCard />
        <ProfileEventCard />
      </div>
    </div>
  );
}
