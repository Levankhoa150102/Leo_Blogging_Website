import React from "react";
import { Button } from "../../components/button";

const HomeBanner = () => {
  return (
    <div className="banner-container flex justify-around items-center">
      <div className="max-w-xl text-white ">
        <h1 className="text-4xl font-medium my-5">Leo Blogging</h1>
        <p className="leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button width="w-50" bg="bg-white" color="text-primary" to="/sign-up">
          Get Started
        </Button>
      </div>
      <div className="flex-2">
        <img srcSet="/banner_img.png 5x" alt="" className="" />
      </div>
    </div>
  );
};
export default HomeBanner;
