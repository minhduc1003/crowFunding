import React from "react";
import Search from "../../components/Search";
import DashBoardFund from "./DashBoardFund";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-14">
        <img srcSet="./Logo.png 2x" alt="" />
        <Search></Search>
      </div>
      <div className="flex items-center gap-x-10">
        <DashBoardFund></DashBoardFund>
        <button className="bg-secondary outline-none text-white rounded-lg px-6 py-3">
          Start a campaign
        </button>
        <div className="w-12 h-12 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover"
            src="./user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
