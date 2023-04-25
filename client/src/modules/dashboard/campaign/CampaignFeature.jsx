import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignInfor from "./parts/CampaignInfor";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignCategory from "./parts/CampaignCategory";
import slugify from "react-slugify";
import { Link } from "react-router-dom";

const CampaignFeature = ({ type, data }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const endDate = new Date(data?.EndDate);
  const firstDate = new Date(data?.StartDate);
  const dateRemain = Math.round(Math.abs((firstDate - endDate) / oneDay));

  return (
    <Link to={`/Campaign/${slugify(data?.title)}`}>
      <div
        className={`flex items-start gap-x-[30px] w-full max-w-[1048px] flex-col lg:flex-row `}
      >
        <CampaignImage
          image={data?.MainImage?.url}
          className={
            type === "col1"
              ? "w-[583px] h-[266px] flex-1"
              : "h-[266px] w-full flex-1"
          }
        ></CampaignImage>
        <div className="p-5 flex-1">
          <CampaignCategory className="!text-sm">
            {data?.category || "Architecture"}
          </CampaignCategory>
          <CampaignTitle className="text-xl font-bold mb-6 dark:text-white">
            {data?.title || " Remake - We Make architecture exhibition"}
          </CampaignTitle>
          <CampaignDesc className="text-md mb-6">
            {data?.Description ||
              "Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation"}
          </CampaignDesc>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-center gap-x-10 ">
            <CampaignInfor
              size="big"
              amount={data?.Goal || "$2,000"}
              text={"Raised of $2,500"}
            ></CampaignInfor>
            <CampaignInfor
              size="big"
              amount={data?.AmountPrefilled || "$2,000"}
              text={"Total backers"}
            ></CampaignInfor>
            <CampaignInfor
              size="big"
              amount={dateRemain || "$2,000"}
              text={"Days left"}
            ></CampaignInfor>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignFeature;
