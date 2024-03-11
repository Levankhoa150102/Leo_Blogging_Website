import React from "react";
import PostNewsItem from "../post/PostNewsItem";
import PostNewsLarge from "../post/PostNewstLarge";
import Heading from "../../components/Layout/heading";
import PostItem from "../post/PostItem";

const HomeNewest = () => {
  return (
    <div className="feature-container">
      <Heading>Mới nhất</Heading>
      <div className="flex mb-8">
        <PostNewsLarge></PostNewsLarge>
        <div className="bg-newpost rounded-lg grid ml-8 ">
          <PostNewsItem></PostNewsItem>
          <PostNewsItem></PostNewsItem>
          <PostNewsItem></PostNewsItem>
        </div>
      </div>
      <div className=" grid grid-cols-4 grid">
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </div>
    </div>
  );
};
export default HomeNewest;
