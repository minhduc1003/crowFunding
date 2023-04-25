import React from "react";

const Heading = ({ children, number = null, className = "" }) => {
  return (
    <h2
      className={`text-lg font-semibold text-text1 mb-5 dark:text-white ${className}`}
    >
      {children}
      {number && <span className="text-secondary ml-2">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
