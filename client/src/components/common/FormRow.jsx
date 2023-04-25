import React from "react";

const FormRow = ({ children }) => {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 gap-[45px]  ">
      {children}
    </div>
  );
};

export default FormRow;
