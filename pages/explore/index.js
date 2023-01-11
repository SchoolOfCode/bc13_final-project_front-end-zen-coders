import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ExploreList from '../../components/ExploreList/ExploreList';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function index() {
  return (
    <div>
      <SearchBar />
      <h1>Explore Page</h1>
      <ExploreList />
    </div>
  );
}
