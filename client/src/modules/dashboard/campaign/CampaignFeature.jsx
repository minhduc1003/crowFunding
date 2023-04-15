import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignInfor from "./parts/CampaignInfor";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignCategory from "./parts/CampaignCategory";

const CampaignFeature = () => {
  return (
    <div className="flex items-start gap-x-[30px] w-full max-w-[1048px] ">
      <CampaignImage className="h-[266px] w-full flex-1"></CampaignImage>
      <div className="p-5 flex-1">
        <CampaignCategory className="!text-sm">Architecture</CampaignCategory>
        <CampaignTitle className="text-xl font-bold mb-6">Remake - We Make architecture exhibition</CampaignTitle>
        <CampaignDesc className="text-md mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-center gap-x-10 ">
          <CampaignInfor size="big" amount={"$2,000"} text={"Raised of $2,500"}></CampaignInfor>
          <CampaignInfor  size="big" amount={"$2,000"} text={"Raised of $2,500"}></CampaignInfor>
          <CampaignInfor  size="big" amount={"$2,000"} text={"Raised of $2,500"}></CampaignInfor>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
