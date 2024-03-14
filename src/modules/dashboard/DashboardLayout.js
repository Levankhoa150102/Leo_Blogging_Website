import React, { Fragment } from "react";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <Fragment>
      <DashboardHeader></DashboardHeader>
      <div className="main-dashboard">
        <SideBar></SideBar>
        <div className="content flex-1 p-5 shadow-md ">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
};
export default DashboardLayout;
