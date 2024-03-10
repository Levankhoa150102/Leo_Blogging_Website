import React from "react";

const AuthenticationPage = ({ children }) => {
  return (
    <div>
      <div className="page-container">
        <img srcSet="/logoLeo.png" alt="logo" className="w-20 h-20 m-auto" />
        <h1 className="text-4xl font-semibold  text-center text-primary">
          LEO Blogging
        </h1>
        {children}
      </div>
    </div>
  );
};
export default AuthenticationPage;
