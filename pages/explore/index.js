import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreList from "../../components/ExploreList/ExploreList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import ExploreTiles from "../../components/ExploreCard/ExploreCard";

export default function index() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <ExploreTiles />
      <h1>Explore Page</h1>
      <ExploreList />
    </div>
  );
}
