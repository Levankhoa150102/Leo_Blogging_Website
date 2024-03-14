import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <NavLink to="/" className="flex items-center">
        <img srcSet="/logoLeo.png" alt="logo" className="w-14 h-14 mx-3 " />
        <p className="text-2xl text-primary font-bold">Leo Blogging</p>
      </NavLink>
      <div className="account-side flex items-center mx-5">
        <Button to="/manage/add-post">Write new post</Button>
        {/* <img
          srcSet="/avatar.jpg"
          alt="avatar"
          className="w-12 h-12 mx-5 rounded-full object-cover cursor-pointer border-2 border-gray-200"
        /> */}
      </div>
    </div>
  );
};
export default DashboardHeader;
