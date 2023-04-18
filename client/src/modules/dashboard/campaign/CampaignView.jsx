import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignInfor from "./parts/CampaignInfor";
import Button from "../../../components/Button";
import CampaignAuthorPlus from "./parts/CampaignAuthorPlus";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItems from "./CampaignItems";
import { v4 } from "uuid";
import ReactModal from "react-modal";
import Label from "../../../components/Label";

const CampaignView = () => {
  return (
    <>
      <ReactModal
        isOpen={false}
        overlayClassName={
          "fixed inset-0 bg-black bg-opacity-40 z-[1000] flex items-center justify-center"
        }
        className={
          "z-50 outline-none max-w-[512px] p-10 w-full rounded-2xl bg-white max-h-[90vh] overflow-auto scroll-hidden"
        }
      >
        <div className="flex justify-end mb-5 p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-text3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-text1 font-bold text-2xl mb-10 text-center">
          Back this project
        </h2>
        <h3 className="text-text2 font-medium mb-5">
          Enter the contribute amount
        </h3>
        <input
          placeholder="$10"
          autoComplete="off"
          className={`rounded-lg w-full py-4 px-6 border border-solid outline-none dark:border-darkStroke dark:bg-inherit dark:text-white focus:placeholder:text-transparent border-strock text-text mb-5 `}
        />
        <p className="text-text3 text-sm mb-5">
          Contribution are not associatied with perks
        </p>
        <Button kind={"primary"} className={"!px-10 mb-5"}>
          Continue
        </Button>
        <div className="mb-5">
          <CampaignPerk></CampaignPerk>
          <Button kind={"secondary"} className={"w-full"}>
            Get this perk
          </Button>
        </div>
        <div className="mb-5">
          <CampaignPerk></CampaignPerk>
          <Button kind={"secondary"} className={"w-full"}>
            Get this perk
          </Button>
        </div>
        <div className="mb-5">
          <CampaignPerk></CampaignPerk>
          <Button kind={"secondary"} className={"w-full"}>
            Get this perk
          </Button>
        </div>
      </ReactModal>
      <div className="w-full h-[120px] bg-[url(https://png.pngtree.com/thumb_back/fw800/back_pic/03/95/58/6757ed1f5681d28.jpg)] bg-cover bg-no-repeat p-10 text-white text-2xl font-bold flex items-center justify-center gap-x-5 rounded-xl   mb-10 ">
        <p>Education</p>
      </div>

      <div
        className={`flex items-start gap-x-10 w-full max-w-[1440px] mb-[100px]`}
      >
        <div className="flex-4">
          <CampaignImage className={"h-[398px] w-full "}></CampaignImage>
          <div className="mt-10 flex justify-center gap-x-5 ">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="/Logo.png"
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                ></img>
              ))}
          </div>
        </div>
        <div className="flex-5">
          <CampaignCategory className="!text-sm">Architecture</CampaignCategory>
          <CampaignTitle className="text-xl font-bold mb-6">
            Remake - We Make architecture exhibition
          </CampaignTitle>
          <CampaignDesc className="text-md mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDesc>
          <CampaignAuthorPlus></CampaignAuthorPlus>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-center gap-x-10 mb-4 ">
            <CampaignInfor
              size="big"
              amount={"$2,000"}
              text={"Raised of $2,500"}
            ></CampaignInfor>
            <CampaignInfor
              size="big"
              amount={"$2,000"}
              text={"Raised of $2,500"}
            ></CampaignInfor>
            <CampaignInfor
              size="big"
              amount={"$2,000"}
              text={"Raised of $2,500"}
            ></CampaignInfor>
          </div>
          <Button kind={"primary"} className={"w-full"}>
            Back this project
          </Button>
        </div>
      </div>

      <div className="max-w-[1600px] mb-10">
        <div className="flex items-center justify-between shadow-sdprimary bg-white p-5 rounded-xl mb-6">
          <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
            <span className="cursor-pointer text-secondary">Campaign</span>
            <span className="cursor-pointer ">Campaign</span>
            <span className="cursor-pointer ">Risks</span>
            <span className="cursor-pointer ">FAQ</span>
            <span className="cursor-pointer ">Updates</span>
            <span className="cursor-pointer ">Comments</span>
          </div>
          <Button kind={"primary"} className={"!px-9 !py-4"}>
            Back this project
          </Button>
        </div>
        <div className="grid gap-x-[124px] grid-cols-[2fr,1fr]">
          <div>
            <h2 className="text-lg font-semibold mb-5">Story</h2>
            <div className="story">
              <img src="https://i.pinimg.com/564x/10/e8/13/10e8131edd75b69a7e8ab6830beadbb9.jpg"></img>
              <p>
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
              <img src="https://i.pinimg.com/564x/10/e8/13/10e8131edd75b69a7e8ab6830beadbb9.jpg"></img>
              <p>
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
              <img src="https://i.pinimg.com/564x/10/e8/13/10e8131edd75b69a7e8ab6830beadbb9.jpg"></img>
              <p>
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
              <img src="https://i.pinimg.com/564x/10/e8/13/10e8131edd75b69a7e8ab6830beadbb9.jpg"></img>
              <p>
                Capture everything in 4k, with extended battery life and pro-g
                inspired features. Choose from three 4k recording modes: UHD, HD
                and cinematic 24p. Use the Wi-Fi feature to connect and stream
                your footage wirelessly directly to your iOS and Android
                smartphones or tablets for instant sharing. The monitor has a
                3.5" touch screen for easy navigation and built-in wifi that
                automatically connects to the last used smartphone or tablet
                once paired.
              </p>
            </div>
          </div>
          <div>
            <CampaignSupport></CampaignSupport>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px]">
        <h2 className="text-lg font-semibold mb-5">
          You also may be interested in
        </h2>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItems key={v4()}></CampaignItems>
            ))}
        </CampaignGrid>
      </div>
    </>
  );
};

export default CampaignView;
