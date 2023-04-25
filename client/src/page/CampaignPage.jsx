import React, { useEffect, useState } from "react";
import Heading from "../components/common/Heading";
import Gap from "../components/common/Gap";
import CampaignGrid from "../modules/dashboard/campaign/CampaignGrid";
import CampaignItems from "../modules/dashboard/campaign/CampaignItems";
import CampaignFeature from "../modules/dashboard/campaign/CampaignFeature";
import Button from "../components/Button";
import axios from "axios";
import useGetCampaignData from "../hooks/useGetCampaignData";

const CampaignPage = () => {
  const { data } = useGetCampaignData();
  const dataLength = data?.length;
  const [increment, setIncrement] = useState(3);
  return (
    <>
      <div className="mb-10 bg-white w-full px-8 py-7 flex items-center justify-between shadow-sdprimary flex-col lg:flex-row gap-y-5 dark:bg-darkSecondary dark:shadow-darkShadow">
        <div className="flex gap-x-5 items-start">
          <div className="w-[54px] h-[54px] rounded-full bg-secondary bg-opacity-60 flex items-center justify-center text-white ">
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
            <h3 className="text-2xl font-semibold mb-1 dark:text-white">
              Create Your Campaign
            </h3>
            <p className="text-text3 text-sm mb-3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <p className="text-primary text-sm">Need any help? Learn More...</p>
          </div>
        </div>
        <Button
          className={"py-3 px-6 font-semibold"}
          kind={"ghost"}
          href={"/Start-Campaign"}
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type={"col1"}>
        {data &&
          data
            .slice(0, increment)
            .map((item) => (
              <CampaignFeature key={item.id} data={item}></CampaignFeature>
            ))}
      </CampaignGrid>
      <Gap></Gap>
      <Button
        onClick={() => setIncrement(increment + 1)}
        className={"mx-auto w-fit block py-3 px-10"}
        kind={"ghost"}
        disabled={increment === dataLength}
      >
        See more+
      </Button>
    </>
  );
};

export default CampaignPage;
