import React from "react";

const CampaignTitle = ({ children, className = " mb-1 font-semibold" }) => {
  return (
    <>
      <h3 className={` text-text1 dark:text-white ${className}`}>{children}</h3>
    </>
  );
};

export default CampaignTitle;
