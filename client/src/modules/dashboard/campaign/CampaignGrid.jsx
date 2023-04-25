import React from "react";

const CampaignGrid = ({ children, type }) => {
  if (type == "col1")
    return <div className="grid grid-cols-1 gap-y-10">{children}</div>;
  return (
    <div className="grid grid-rows-1  gap-y-7 lg:gap-x-7 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default CampaignGrid;
