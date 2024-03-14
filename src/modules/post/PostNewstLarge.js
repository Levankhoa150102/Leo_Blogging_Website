import React from "react";
import PostCategory from "./PostCategory_Otm";
import PostTitle from "./PostTitle_Otm";
import PostInfo from "./PostInfo_Otm";
import PostImage from "./PostImage_Otm";

const PostNewsLarge = ({ className, subClassName }) => {
  return (
    <div className={`rounded-lg ${className}`}>
      <PostImage src="/laptop_room.jpg"></PostImage>
      <div
        className={`postnew-content mt-2 flex flex-col ${
          subClassName ? subClassName : "justify-around"
        } `}
      >
        <PostCategory className="bg-newpost">Kiến thức</PostCategory>
        <PostTitle className="text-2xl">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo date="Mar 23" authorName="Andy"></PostInfo>
      </div>
    </div>
  );
};
export default PostNewsLarge;
