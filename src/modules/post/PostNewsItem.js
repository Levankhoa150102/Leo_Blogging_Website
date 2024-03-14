import React from "react";
import PostCategory from "./PostCategory_Otm";
import PostTitle from "./PostTitle_Otm";
import PostInfo from "./PostInfo_Otm";
import PostImage from "./PostImage_Otm";

const PostNewsItem = () => {
  return (
    <div className="p-5 flex border-b-gray-200 border-b-2">
      <PostImage src="/laptop_room.jpg" size="3x" to="/"></PostImage>
      <div className="postnew-content ml-3 flex flex-col justify-around">
        <PostCategory className="bg-gray-100">Kiến thức</PostCategory>
        <PostTitle className="text-xl">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo
          date="Mar 23"
          authorName="Andy"
          className="text-gray-500"
          dot="bg-gray-500"
        ></PostInfo>
      </div>
    </div>
  );
};
export default PostNewsItem;
