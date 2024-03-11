import React, { Children } from "react";
import SpinnerLoading from "../loading/Loading";
import { NavLink } from "react-router-dom";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  width,
  bg,
  color,
  ...props
}) => {
  const { isLoading, disabled, to } = props;
  const child = !!isLoading ? <SpinnerLoading></SpinnerLoading> : children; //convert to boolean
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <button
          type={type}
          {...props}
          className={` ${width ? width : "w-full"} ${bg ? bg : "bg-primary"} ${
            color ? color : "text-white"
          }
            hover:opacity-50 font-medium py-4 px-8 my-5 rounded-md ${
              disabled ? "btn-disabled" : ""
            }`}
        >
          {child}
        </button>
      </NavLink>
    );
  }
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        {...props}
        className={`${width ? width : "w-full"} ${bg ? bg : "bg-primary"} ${
          color ? color : "text-white"
        }  hover:opacity-50 font-medium py-4 px-8 my-5 rounded-md ${
          disabled ? "btn-disabled" : ""
        }`}
      >
        {child}
      </button>
    </div>
  );
};
export default Button;
