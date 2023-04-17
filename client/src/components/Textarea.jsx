import React from "react";

const Textarea = ({ name, label, placeholder }) => {
  return (
    <div>
      <label
        className="mt-5 text-text2 text-sm block font-bold  "
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className=" h-[111px] resize-none rounded-xl w-full py-4 pr-12 px-6 border border-solid outline-none focus:placeholder:text-transparent border-strock dark:border-darkStroke dark:bg-inherit dark:text-white text-text2 mt-3"
      ></textarea>
    </div>
  );
};

export default Textarea;
