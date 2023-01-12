import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileEventCard from '../../components/ProfileEventCard/profileEventCard';

export default function index() {
  return (
    <div className="grid grid-cols-4 gap-4 px-12">
      <ProfileCard className="col-span-1 bg-blue-200" />
      <div className="col-span-3">
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
        <ProfileEventCard className="mt-6" />
      </div>
    </div>
  );
}
