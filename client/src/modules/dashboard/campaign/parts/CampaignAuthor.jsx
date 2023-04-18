import React from "react";

const CampaignAuthor = ({ image = "/user.png", author }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="w-8 h-8 ">
        <img
          src={image}
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <p className="text-xs text-text3">
        By
        <span className="font-semibold text-text2 ml-2">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
