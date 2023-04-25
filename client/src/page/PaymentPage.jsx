import React from "react";
import Button from "../components/Button";

const PaymentPage = () => {
  return (
    <div className="max-w-[600px] w-full mx-auto mt-10">
      <h2 className="text-text1 font-bold  text-2xl mb-3 text-center dark:text-white">
        Connect Your Payment Processor
      </h2>
      <p className="text-text3 text-center max-w-[500px] mx-auto mb-5 lg:mb-14">
        To Start Processing credit card payments and donations, you will need to
        select either Paypal or Payoneer
      </p>
      <div className="flex gap-5 lg:gap-10 items-center justify-center flex-col lg:flex-row">
        <div className="shadow-sdprimary bg-white py-9 px-6 rounded-lg max-w-[280px] w-full dark:bg-darkSecondary dark:shadow-none">
          <img className="block w-fit mx-auto" src="/Paypal.png" alt="" />
          <p className="text-text3 text-sm my-7 text-center">
            Get paid directly via Paypal.
          </p>
          <Button kind={"secondary"} className={"w-full"}>
            Connect
          </Button>
        </div>
        <div className="shadow-sdprimary dark:shadow-none bg-white py-9 px-6 rounded-lg max-w-[280px] w-full dark:bg-darkSecondary">
          <img className="block w-fit mx-auto" src="/Payoneer.png" alt="" />
          <p className="text-text3 text-sm my-7 text-center">
            Get paid directly via Paypal.
          </p>
          <Button kind={"secondary"} className={"w-full"}>
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
