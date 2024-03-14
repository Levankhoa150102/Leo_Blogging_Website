import React from "react";
import PostCategory from "./PostCategory_Otm";
import PostTitle from "./PostTitle_Otm";
import PostInfo from "./PostInfo_Otm";

const PostFeatureItem = () => {
  return (
    <div className="post-feature relative">
      <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)] rounded-lg"></div>
      <div className="post-content p-4 absolute">
        <div className="post-feature-1 flex justify-between items-center">
          <PostCategory className="bg-gray-100">Kiến thức</PostCategory>

          <PostInfo
            className="text-white"
            date="Mar 23"
            authorName="Andy"
            dot="bg-white"
          ></PostInfo>
        </div>
        <PostTitle className="text-white text-xl">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
      </div>
    </div>
  );
};
export default PostFeatureItem;
