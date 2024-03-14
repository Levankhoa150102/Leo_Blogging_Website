import React from "react";
import { NavLink } from "react-router-dom";

const PostCategory = ({ children, className, to = "/" }) => {
  return (
    // <NavLink to={to}>
    //   <button
    //     className={`max-w-24 px-3 py-2  ${className}  text-sm  text-gray-500 font-semibold rounded-lg hover:opacity-40`}
    //   >
    //     {children}
    //   </button>
    // </NavLink>
    <NavLink
      to={to}
      className={`max-w-24 px-3 py-2  ${className}  text-sm text-center  text-gray-500 font-semibold rounded-lg hover:opacity-40`}
    >
      {children}
    </NavLink>
  );
};
export default PostCategory;
