import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase_web/firebase-config";
const menuLinks = [
  {
    url: "/#",
    title: "Home",
  },
  {
    url: "/#",
    title: "Blog",
  },
  {
    url: "/#",
    title: "Contact",
  },
];
const handleSignOut = () => {
  signOut(auth);
};
const Header = () => {
  const { userInfo } = useAuth();
  return (
    //
    <div className="header-container flex justify-between items-center px-5">
      <div className="flex-1 header-left flex items-center ">
        <NavLink to="/">
          <img srcSet="/logoLeo.png" alt="logo" className="w-14 h-14" />
        </NavLink>
        <ul className="header-nav p-5 font-semibold text-xl">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.url} className="">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right flex items-center">
        <div className="header-search relative mx-5">
          <input
            type="text"
            placeholder="Search posts..."
            // className="py-4 px-3 rounded-lg border-solid focus:outline-none  focus:ring-2 focus:ring-primary focus:border-transparent ease-linear transition-all duration-150"
            className="Auth-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute right-4 top-7 text-grayDark    "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {!userInfo ? (
          <Button type="button" to="/sign-up">
            Sign Up
          </Button>
        ) : (
          <NavLink to="/profile" className="navlink">
            <div className="flex items-center text-primary py-2 px-3 rounded-lg border border-red relative">
              <img srcSet="/logoLeo.png" alt="logo" className="w-9 h-9 mr-2" />
              <p>{userInfo?.displayName}</p>
            </div>
          </NavLink>
        )}
        {/* className=" text-white font-semibold bg-primary hover:opacity-50 rounded-lg px-6 py-4 ml-3" */}
      </div>
    </div>
  );
};
export default Header;
