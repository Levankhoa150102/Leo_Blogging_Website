import React from "react";

const PostInfo = ({ date = "", authorName = "", dot, className }) => {
  return (
    <div className={`text-sm font-semibold flex items-center ${className}`}>
      <span>{date}</span>
      <span
        className={`mx-2 w-0.5 h-0.5 inline-block rounded-full ${
          dot ? dot : "bg-black"
        }`}
      ></span>
      <span>{authorName}</span>
    </div>
  );
};
export default PostInfo;
