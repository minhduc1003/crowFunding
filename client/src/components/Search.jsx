import React, { useState } from "react";
import CampaignAuthor from "../modules/dashboard/campaign/parts/CampaignAuthor";
import SearchItems from "./SearchItems";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50 lg:block hidden">
      <div className="bg-white rounded-full w-full max-w-[458px] shadow-sdprimary p-3 flex items-center dark:bg-inherit dark:shadow-darkShadow ">
        <div className="flex-2 px-5">
          <input
            className="bg-transparent placeholder:text-text4  text-text1 text-sm w-full outline-none dark:text-white"
            type="text"
            placeholder="Do fundrise now"
          ></input>
        </div>
        <button className="w-80  h-10 rounded-full flex items-center justify-center bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="absolute md:w-[843px] w-full top-full left-0 bg-white  translate-y-5 rounded-3xl  ">
          <div className="flex items-center justify-between p-3 mb-5 bg-graySoft rounded-t-3xl">
            <span className="font-medium text-sm pl-4 underline">
              See all 10,124 fundraisier
            </span>
            <button className="flex items-center justify-center w-[72px] h-[50px] bg-[#F9E3E3] text-red-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 flex flex-col gap-y-5">
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
            <SearchItems></SearchItems>
          </div>
          <div className="p-6">
            <h3 className="text-sm font-semibold mb-4">Related Searchs</h3>
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-text2">education fund</p>
              <p className="text-sm text-text2">schoralship fund</p>
              <p className="text-sm text-text2">education and schools fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
