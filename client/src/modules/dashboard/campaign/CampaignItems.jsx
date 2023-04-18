import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignInfor from "./parts/CampaignInfor";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";

const CampaignItems = () => {
  return (
    <div>
      <CampaignImage className={"h-[200px]"}></CampaignImage>

      <div className="px-5 py-4 ">
        <CampaignCategory>Education</CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex item-start justify-between gap-x-5 mb-5">
          <CampaignInfor
            amount={"$2,000"}
            text={"Raised of $1,900"}
          ></CampaignInfor>
          <CampaignInfor amount={"173"} text={"Total backers"}></CampaignInfor>
        </div>
        <CampaignAuthor author={"Mahfuzul Nabil"}></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItems;
