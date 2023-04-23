import React from "react";
import Heading from "../../components/common/Heading";
import CampaignGrid from "../../modules/dashboard/campaign/CampaignGrid";
import CampaignItems from "../../modules/dashboard/campaign/CampaignItems";
import { v4 } from "uuid";
import CampaignFeature from "../../modules/dashboard/campaign/CampaignFeature";
import Gap from "../../components/common/Gap";
import useGetCampaignData from "../../hooks/useGetCampaignData";
const HomePage = () => {
  const { data } = useGetCampaignData();
  return (
    <>
      <>
        <Heading number={4}>Your Campaign</Heading>
        <CampaignFeature data={data && data[1]}></CampaignFeature>
        <Gap></Gap>
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {data &&
            data
              .filter((item) => item.AmountPrefilled >= 160)
              .map((data) => (
                <CampaignItems key={v4()} data={data}></CampaignItems>
              ))}
        </CampaignGrid>
        <Gap></Gap>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {data &&
            data
              .slice(0, 4)
              .map((data) => (
                <CampaignItems key={v4()} data={data}></CampaignItems>
              ))}
        </CampaignGrid>
        <Gap></Gap>
      </>
    </>
  );
};

export default HomePage;
