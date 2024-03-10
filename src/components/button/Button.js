import React, { Children } from "react";
import SpinnerLoading from "../loading/Loading";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading, disabled } = props;
  const child = !!isLoading ? <SpinnerLoading></SpinnerLoading> : children; //convert to boolean
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        {...props}
        className={`w-full bg-gradient-to-r from-[#00A7B4] to-[#A4D96C] text-white font-medium py-4 px-8 my-5 rounded-md ${
          disabled ? "btn-disabled" : ""
        }`}
      >
        {child}
      </button>
    </div>
  );
};
export default Button;
