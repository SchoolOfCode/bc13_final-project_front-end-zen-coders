import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
//import ExploreTiles from "../../components/ExploreCard/ExploreCard";

export const getStaticProps = async () => {

  const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data}
  }
}


export default function index({ posts}) {
  return (
    <div>
      <SearchBar />
      <Filter />
      {/* <ExploreTiles /> */}
      <h1>Explore Page</h1>
      {posts.map (post => (
        <div key= {post.id}>
<ExploreCard title = {post.title} />
        </div>
      ))}
     
    </div>
  );
}
