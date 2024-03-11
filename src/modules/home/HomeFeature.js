import React, { Fragment } from "react";
import PostFeatureItem from "../post/PostFeatureItem";
import Heading from "../../components/Layout/heading";

const HomeFeature = () => {
  return (
    <div className="feature-container">
      <Heading>Bài viết nổi bật</Heading>
      <div className="grid grid-cols-3">
        <PostFeatureItem></PostFeatureItem>
        <PostFeatureItem></PostFeatureItem>
        <PostFeatureItem></PostFeatureItem>
      </div>
    </div>
  );
};

export default HomeFeature;
