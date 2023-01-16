import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreList from "../../components/ExploreList/ExploreList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import ExploreTiles from "../../components/ExploreTiles/ExploreTiles";

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
<h3>{post.title}</h3>
        </div>
      ))}
      <ExploreList />
    </div>
  );
}
