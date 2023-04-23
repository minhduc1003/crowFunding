import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignInfor from "./parts/CampaignInfor";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImage from "./parts/CampaignImage";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const CampaignItems = ({ data }) => {
  return (
    <Link to={`/Campaign/${slugify(data?.title)}`}>
      <CampaignImage
        className={"h-[200px]"}
        image={data?.MainImage?.url}
      ></CampaignImage>

      <div className="px-5 py-4 ">
        <CampaignCategory>{data?.category}</CampaignCategory>
        <CampaignTitle>{data?.title}</CampaignTitle>
        <CampaignDesc>{data?.Description}</CampaignDesc>
        <div className="flex item-start justify-between gap-x-5 mb-5">
          <CampaignInfor
            amount={data?.Goal}
            text={"Raised of $1,900"}
          ></CampaignInfor>
          <CampaignInfor
            amount={data?.AmountPrefilled}
            text={"Total backers"}
          ></CampaignInfor>
        </div>
        <CampaignAuthor author={data?.Author}></CampaignAuthor>
      </div>
    </Link>
  );
};

export default CampaignItems;
