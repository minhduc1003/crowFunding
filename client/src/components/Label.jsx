import React, { useState } from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Label = ({ name, label, placeholder,className, type,control,...rest }) => {
    const [show,setShow]=useState(false)
  const {field}= useController({
    control,
    name,
    defaultValue:""
  })
  if (name === "password")
    return (
      <>
        <label className="mt-5 text-text2 text-sm block  " htmlFor={name}>
          {label}
        </label>
        <div className="relative " >
          <input
            type={show?"text":"password"}
            name={name}
            id={name}
            autoComplete="off"
            className={`rounded-lg w-full py-4 pr-12 px-6 border border-solid outline-none focus:placeholder:text-transparent border-strock dark:border-darkStroke dark:bg-inherit dark:text-white text-text2 mt-3 ${className}`}
            placeholder={placeholder}
            autoFocus={false}
           {...field}
           {...rest}
          />
          <div onClick={()=>setShow(!show) } className='absolute top-[40%] right-5 cursor-pointer'> <img  src={show?'./Eye On.png':'./Eye Off.png'}></img></div>
        </div>
      </>
    );
  return (
    <>
      <label className="mt-5 text-text2 text-sm block  " htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        className={`rounded-lg w-full py-4 px-6 border border-solid outline-none dark:border-darkStroke dark:bg-inherit dark:text-white focus:placeholder:text-transparent border-strock text-text mt-3 ${className}`}
        placeholder={placeholder}
        autoFocus={false}
        {...field}
       {...rest}
      />
    </>
  );
};
Label.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Label;
