import React, { useState } from "react";
import TopBar from "../modules/dashboard/TopBar";
import SideBar from "../modules/dashboard/SideBar";
import { Outlet } from "react-router-dom";
const LayoutDashBoard = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`bg-lite w-full p-10 dark:bg-darkbg ${
        !show ? "h-[100vh]" : "h-full"
      } `}
    >
      <div className="fixed inset-0 z-30 bg-black bg-opacity-40 hidden"></div>
      <TopBar onClick={() => setShow(!show)}></TopBar>
      <div
        className={`lg:flex lg:gap-10 lg:items-start `}
        // onClick={() => setShow(!show)}
      >
        <div className={`${show ? "hidden" : ""} lg:block`}>
          <SideBar></SideBar>
        </div>
        <div className={`lg:flex-3 ${show ? "" : "hidden"} lg:block`}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
