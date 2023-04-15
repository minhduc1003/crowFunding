import React from "react";

const CampaignDesc = ({children,className="text-sm mb-4"}) => {
  return (
    <>
      
      <p className={`text-text3 ${className}`}>
        {children}
      </p>
    </>
  );
};

export default CampaignDesc;
