import React from "react";
import { NavLink } from "react-router-dom";

const PostImage = ({ src, alt, className, size, to = null }) => {
  if (to)
    return (
      <NavLink to={to}>
        <div className="postnew-img">
          <img
            srcSet={`${src} ${size ? size : ""}`}
            alt={alt || "image"}
            className={`rounded-lg ${className} `}
          />
        </div>
      </NavLink>
    );
  return (
    <div className="postnew-img">
      <img
        srcSet={`${src} ${size ? size : ""}`}
        alt={alt || "image"}
        className={`rounded-lg ${className} `}
      />
    </div>
  );
};
export default PostImage;
