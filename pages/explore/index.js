import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ExploreList from '../../components/ExploreList/ExploreList';

export default function index() {
  return (
    <div>
      <Navbar />
      <h1>Explore</h1>
      <ExploreList />
    </div>
  );
}
