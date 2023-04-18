import React from "react";
import Button from "../../../components/Button";

const CampaignSupport = () => {
  return (
    <div className="mb-16">
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white shadow-sdprimary w-full py-7 px-6 flex flex-col items-center rounded-lg">
        <p className="text-xl mb-8 text-text3 font-bold ">
          Pledge without reward
        </p>
        <input
          placeholder="$10"
          className="w-full p-4 border border-solid border-text4 text-text4 rounded-md mb-5"
        ></input>
        <div className="p-5 bg-[#F6F6F6] mb-5 rounded-md">
          <h3 className="font-semibold text-sm mb-5">
            Back it because you believe in it.
          </h3>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind={"secondary"} className={"w-full"}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
