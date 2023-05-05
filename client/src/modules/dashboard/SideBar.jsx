import React from "react";
import { sideBar } from "../../constant/sidebar";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../utils/auth";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../store/auth/auth-slice";
import useDarkMode from "../../hooks/useDarkMode";

const SideBar = ({ handleClick = () => {} }) => {
  const dispatch = useDispatch();
  const [dark, setDark] = useDarkMode();
  return (
    <div className="w-full  lg:w-[72px] lg:h-[733px] rounded-3xl shadow-sdprimary px-[14px] py-10 flex justify-center flex-col lg:gap-10 flex-shrink-0 dark:shadow-darkShadow">
      {sideBar.map((link) => {
        if (link.url === "/logout") {
          return (
            <Link
              onClick={() => dispatch(authLogOut())}
              className="flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-xl text-icon-color  w-full p-5"
              key={link.name}
            >
              <span>{link.icon}</span>
              <span className="lg:hidden">{link.name}</span>
            </Link>
          );
        }
        if (link.url === "/dark") {
          return (
            <div
              onClick={() => setDark(!dark)}
              className="mt-auto bg-white shadow-sdprimary dark:bg-darkSecondary dark:shadow-darkShadow flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-xl text-icon-color   w-full p-5"
            >
              <span>{link.icon}</span>
              <span className="lg:hidden">{link.name}</span>
            </div>
          );
        }

        return (
          <NavLink
            onClick={handleClick}
            key={link.name}
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-xl w-full p-5 text-primary bg-[#F1FBF7] dark:bg-darkSecondary "
                : "flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-xl text-icon-color  w-full p-5 "
            }
          >
            <span>{link.icon}</span>
            <span className="lg:hidden">{link.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
