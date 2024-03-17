import React from "react";
import Search from "../../components/Search";
import DashBoardFund from "./DashBoardFund";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TopBar = ({ onClick = () => {} }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-x-14 ">
        <Link to={"/"}>
          <img srcSet="/Logo.png 2x" alt="" />
        </Link>
        <Search></Search>
      </div>
      <div className="flex items-center gap-x-10">
        {/* <DashBoardFund></DashBoardFund> */}
        {user===undefined?<Button kind={"secondary"} href={"/sign-in"}>
          login
        </Button>:<Button kind={"secondary"} href={"/Start-Campaign"}>
          Start a campaign
        </Button>}
        <div className="w-12 h-12 rounded-full lg:block hidden">
          <img
            className="w-full h-full rounded-full object-cover "
            src="/user.png"
            alt=""
          />
        </div>
        <div className="text-text3 cursor-pointer  lg:hidden" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
