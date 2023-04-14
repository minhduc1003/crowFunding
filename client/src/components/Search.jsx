import React from "react";

const Search = () => {
  return (
    <div className="bg-white rounded-full w-full max-w-[458px] shadow-sdprimary p-3 flex items-center">
      <div className="flex-2 px-5">
        <input
          className="bg-transparent placeholder:text-text4  text-text1 text-sm w-full outline-none"
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
  );
};

export default Search;
