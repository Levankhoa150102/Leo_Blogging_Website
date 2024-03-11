import React from "react";

const PostItem = () => {
  return (
    <div className="rounded-lg my-8 h-52 w-60">
      <div className="postnew-img">
        <img
          srcSet="/laptop_room.jpg 4x"
          alt="laptop_room"
          className="rounded-lg h-52 w-60 object-cover"
        />
      </div>
      <div className="postnew-content mt-4 flex flex-col justify-around">
        <button className="max-w-24 px-3 py-2 bg-gray-200 text-sm  text-gray-700 font-semibold rounded-lg">
          Kiến thức
        </button>
        <div className="post-feature-2 my-3 max-w-lg  text-lg font-bold">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
        <div className="text-sm font-semibold flex items-center">
          <span>Mar 23</span>
          <span className="mx-2 w-0.5 h-0.5 inline-block bg-black rounded-full"></span>
          <span>Andiez Le</span>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
