import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/button";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <NavLink to="/">
        <img srcSet="/logoLeo.png 10x" alt="logo" className="" />
      </NavLink>
      <h1 className="text-6xl font-bold my-5">Oops! Page not found (404)</h1>
      <Button type="button" to="/">
        Back to home
      </Button>
    </div>
  );
};
export default NotFoundPage;
