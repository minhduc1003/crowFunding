import React from "react";
import TopBar from "../modules/dashboard/TopBar";
import SideBar from "../modules/dashboard/SideBar";
import { Outlet } from "react-router-dom";
const LayoutDashBoard = () => {
  return (
    <div className="bg-lite w-full p-10">
      <div className="fixed inset-0 z-30 bg-black bg-opacity-40 hidden"></div>
      <TopBar></TopBar>
      <div className="flex gap-10 items-start">
        <SideBar></SideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
