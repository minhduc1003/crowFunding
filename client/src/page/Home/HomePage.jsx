import React from "react";
import Heading from "../../components/common/Heading";
import CampaignGrid from "../../modules/dashboard/campaign/CampaignGrid";
import CampaignItems from "../../modules/dashboard/campaign/CampaignItems";
import { v4 } from "uuid";
import CampaignFeature from "../../modules/dashboard/campaign/CampaignFeature";
import Gap from "../../components/common/Gap";
const HomePage = () => {
  return (
    <>
      <>
        <Heading number={4}>Your Campaign</Heading>
        <CampaignFeature></CampaignFeature>
        <Gap></Gap>
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItems key={v4()}></CampaignItems>
            ))}
        </CampaignGrid>
        <Gap></Gap>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItems key={v4()}></CampaignItems>
            ))}
        </CampaignGrid>
        <Gap></Gap>
      </>
    </>
  );
};

export default HomePage;
