import React from "react";
import { NavLink } from "react-router-dom";

const PostTitle = ({ children, className, to }) => {
  if (to) {
    return (
      <div
        className={` ${className} my-3 max-w-xl  font-semibold leading-7 hover:opacity-40`}
      >
        <NavLink to={to}>{children}</NavLink>
      </div>
    );
  }
  return (
    <div className={` ${className} my-3 max-w-xl  font-semibold leading-7`}>
      {children}
    </div>
  );
};
export default PostTitle;
