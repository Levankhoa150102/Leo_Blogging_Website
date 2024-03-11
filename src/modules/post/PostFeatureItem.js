import React from "react";
import { Button } from "../../components/button";

const PostFeatureItem = () => {
  return (
    <div className="post-feature relative">
      <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)] rounded-lg"></div>
      <div className="post-content p-4 absolute">
        <div className="post-feature-1 flex justify-between items-center">
          <button className="px-3 py-2 bg-white text-gray-500 rounded-lg font-medium">
            Kiến thức
          </button>
          <div className="text-sm text-white flex items-center mx-5">
            <span>Mar 23</span>
            <span className="mx-2 w-0.5 h-0.5 inline-block bg-white rounded-full"></span>
            <span>Andiez Le</span>
          </div>
        </div>
        <div className="post-feature-2 my-5 text-white  text-xl font-semibold">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
      </div>
    </div>
  );
};
export default PostFeatureItem;
