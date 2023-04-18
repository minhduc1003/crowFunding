import React from "react";
import Search from "../../components/Search";
import DashBoardFund from "./DashBoardFund";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link to={"/"} className="flex items-center gap-x-14 ">
        <img srcSet="/Logo.png 2x" alt="" />
        <Search></Search>
      </Link>
      <div className="flex items-center gap-x-10">
        <DashBoardFund></DashBoardFund>
        <Button kind={"secondary"} href={"/Start-Campaign"}>
          Start a campaign
        </Button>
        <div className="w-12 h-12 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover"
            src="/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
