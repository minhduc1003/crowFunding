import React from "react";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import Heading from "../components/common/Heading";
import Gap from "../components/common/Gap";
import CampaignGrid from "../modules/dashboard/campaign/CampaignGrid";
import CampaignItems from "../modules/dashboard/campaign/CampaignItems";
import CampaignFeature from "../modules/dashboard/campaign/CampaignFeature";
import Button from "../components/Button";

const CampaignPage = () => {
  return (
    <LayoutDashBoard>
      <div className="mb-10 bg-white w-full px-8 py-7 flex items-center justify-between shadow-sdprimary">
        <div className="flex gap-x-5 items-start">
          <div className="w-[54px] h-[54px] rounded-full bg-secondary flex items-center justify-center text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1 ">
            <h3 className="text-2xl font-semibold mb-1">Create Your Campaign</h3>
            <p className="text-text3 text-sm mb-3">Jump right into our editor and create your first Virtue campaign!</p>
            <p className="text-primary text-sm">Need any help? Learn More...</p>
          </div>
        </div>
        <Button className={"py-4 px-6"} kind={"ghost"} href={"/Start-Campaign"}>Create campaign</Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type={"col1"}>
        <CampaignFeature type={"col1"}></CampaignFeature>
        <CampaignFeature type={"col1"}></CampaignFeature>
        <CampaignFeature type={"col1"}></CampaignFeature>
      </CampaignGrid>
      <Gap></Gap>
      <Button className={"mx-auto w-fit block py-3 px-10"}  kind={"ghost"}>See more+</Button>
    </LayoutDashBoard>
  );
};

export default CampaignPage;
