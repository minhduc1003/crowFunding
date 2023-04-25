import React from "react";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-sdprimary rounded-lg w-full mb-10 dark:bg-darkSecondary dark:shadow-darkShadow">
      <img
        src="https://i.pinimg.com/564x/10/e8/13/10e8131edd75b69a7e8ab6830beadbb9.jpg"
        className="object-cover rounded-lg w-full h-[232px]"
        alt=""
      />
      <div className="p-5">
        <div className="h-fit w-fit py-1 px-4 rounded-md bg-secondary bg-opacity-80 text-white mb-5">
          Featured
        </div>
        <h2 className="text-text1 font-semibold text-xl mb-3 dark:text-white">
          Special One Camera
        </h2>
        <h3 className="text-sm font-medium mb-5 dark:text-white">
          $2,724 USD
          <span className="text-[#EB5757] ml-3">$2,724 USD (12% OFF)</span>
        </h3>
        <p className="text-text1 font-medium text-base mb-1 dark:text-text4">
          Estimated Shipping
        </p>
        <div className="text-text2 text-sm flex flex-col gap-y-5">
          <p>October 2022</p>
          <p>
            <strong className="dark:text-white mr-1">05</strong> claimed
          </p>
          <p>Ships worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPerk;
