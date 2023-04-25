import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({
  placeholder = "search your counttry you want to pick",
  ...props
}) => {
  const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 z-10 p-2 bg-white dark:bg-darkSoft dark:text-white">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-4 border border-gray-200 dark:border-darkStroke rounded outline-none dark:bg-darkSoft"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
