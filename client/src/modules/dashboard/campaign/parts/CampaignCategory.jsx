import React from 'react';
import { Link } from 'react-router-dom';
import IconFolder from '../../../../icons/iconFolder';

const CampaignCategory = ({children,className}) => {
    return (
        <Link
          to={"/"}
          className={`flex items-center gap-x-3 text-text3 text-xs font-medium mb-4 ${className}`}
        >
          <IconFolder></IconFolder>
          <span>{children}</span>
        </Link>
    );
};

export default CampaignCategory;