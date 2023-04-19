import React from "react";
import { Dropdown } from "./dropdown/index";

const LableDropDown = ({ name, lable, item, placeholder, setValue }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mt-5  text-text2 text-sm block font-bold  "
      >
        {lable}
      </label>
      <Dropdown>
        <Dropdown.Select placeholder={placeholder}></Dropdown.Select>
        <Dropdown.List>
          <Dropdown.Option onClick={setValue}>{item}</Dropdown.Option>
          <Dropdown.Option onClick={setValue}>{item}</Dropdown.Option>
          <Dropdown.Option onClick={setValue}>{item}</Dropdown.Option>
          <Dropdown.Option onClick={setValue}>{item}</Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default LableDropDown;
