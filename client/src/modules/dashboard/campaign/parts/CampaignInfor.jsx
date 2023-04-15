import React from 'react';

const CampaignInfor = ({amount,text,size}) => {
    return (
       
        <div className="flex flex-col gap-y-1">
          <h4 className={` font-semibold text-text2 ${size==="big"?"text-xl":"text-sm"}`}>{amount}</h4>
          <span className={`text-text4 ${size==="big"?"text-base":"text-xs"}`}>{text}</span>
        </div>
        
    );
};

export default CampaignInfor;