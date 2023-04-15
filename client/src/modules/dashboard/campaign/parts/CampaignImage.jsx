import React from 'react';

const CampaignImage = ({image="https://i.pinimg.com/564x/1d/18/59/1d18595741914b0e3a585fb6e9ade49f.jpg",className="h-[158px]"}) => {
    return (
        <div className={className}>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </div>

    );
};

export default CampaignImage;