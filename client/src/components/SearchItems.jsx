import React from "react";

const SearchItems = () => {
  return (
    <div className="flex gap-x-5 items-center">
      <img
        src="https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png"
        alt=""
        className="w-[50px] h-[50px] rounded-lg "
      ></img>
      <div className="flex-1 text-sm">
        <h3 className="mb-1 ">Education fund for Durgham Family</h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
};

export default SearchItems;
