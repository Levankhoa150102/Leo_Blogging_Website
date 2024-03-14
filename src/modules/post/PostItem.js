import React from "react";
import PostCategory from "./PostCategory_Otm";
import PostTitle from "./PostTitle_Otm";
import PostInfo from "./PostInfo_Otm";
import PostImage from "./PostImage_Otm";

const PostItem = () => {
  return (
    <div className="rounded-lg my-8 h-52 w-60">
      <PostImage
        src="/laptop_room.jpg"
        size="4x"
        to="/"
        className="h-52 w-60 object-cover"
      ></PostImage>
      <div className="postnew-content mt-4 flex flex-col justify-around">
        <PostCategory className="bg-gray-100">Kiến thức</PostCategory>
        <PostTitle className="text-lg" to="/">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo date="Mar 23" authorName="Andy"></PostInfo>
      </div>
    </div>
  );
};
export default PostItem;
