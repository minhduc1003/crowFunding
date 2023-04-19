import React from "react";
import { sideBar } from "../../constant/sidebar";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-full md:w-[72px] md:h-[733px] rounded-3xl shadow-sdprimary px-[14px] py-10 flex justify-center flex-col md:gap-10 flex-shrink-0">
      {sideBar.map((link) => (
        <NavLink
          key={link.name}
          to={link.url}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl  last:mt-auto last:!bg-white six-child:!text-icon-color six-child:!bg-inherit last:shadow-sdprimary last:!text-icon-color  w-full p-5 text-primary bg-[#F1FBF7]"
              : "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary  w-full p-5"
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
