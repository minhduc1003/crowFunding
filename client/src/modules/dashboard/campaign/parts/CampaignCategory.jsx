import React from "react";
import IconFolder from "../../../../icons/iconFolder";

const CampaignCategory = ({ children, className }) => {
  return (
    <div
      className={`flex items-center gap-x-3 text-text3 text-xs font-medium mb-4 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{children}</span>
    </div>
  );
};

export default CampaignCategory;
