import React from "react";

const PostNewsItem = () => {
  return (
    <div className="p-5 flex border-b-gray-200 border-b-2">
      <div className="postnew-img">
        <img
          srcSet="/laptop_room.jpg 3x"
          alt="laptop_room"
          className="rounded-lg"
        />
      </div>
      <div className="postnew-content ml-3 flex flex-col justify-around">
        <button className="max-w-28 px-3 py-2 bg-white text-gray-500 rounded-lg font-medium">
          Kiến thức
        </button>
        <div className="post-feature-2 my-2 max-w-lg  text-xl font-semibold">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
        <div className=" text-gray-500 text-sm flex items-center">
          <span>Mar 23</span>
          <span className="mx-2 w-0.5 h-0.5 inline-block bg-gray-500   rounded-full"></span>
          <span>Andiez Le</span>
        </div>
      </div>
    </div>
  );
};
export default PostNewsItem;
