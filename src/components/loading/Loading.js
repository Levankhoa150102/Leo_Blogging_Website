import React from "react";

const SpinnerLoading = ({ size = "40px", borderSize = "5px" }) => {
  return (
    <div className="w-10 h-10 border-white border-4 border-r-transparent border-r-4 rounded-full mx-auto animate-spin"></div>
  );
};
export default SpinnerLoading;
