import React from "react";
import { LogoOrange } from "@/icons";

const Faq = () => {
  return (
    <div className="bg-[#F3F3F3]  -skew-y-[2deg] transform py-[134px]">
      <div className="transform skew-y-[2deg] ">
        <h4 className="font-bold text-[54px] lg:text-[48px] md:text-[42px] sm:text-[36px] leading-[54px] md:leading-[48px] text-[#202229] text-center">
          Frequently asked questions
        </h4>
        <div className="pt-[88px]">
          <div className="flex items-center justify-between border-y border-y-[#D6D6D6] h-[112px] md:h-[95px] relative">
            <label className="absolute left-0 top-0 bottom-0 w-[230px] md:w-auto md:pr-4  border-r border-r-[#D6D6D6] h-full  flex items-center justify-center md:justify-start md:pl-4 text-[22px] md:text-[18px] sm:text-[14px] font-semibold ">
              General
            </label>

            <label className="flex-1 h-full  flex items-center justify-center md:justify-end  md:pr-4 text-[22px] md:text-[18px] sm:text-[14px] font-light">
              I want to work part-time, is that possible
            </label>
          </div>
          {/* TODO: rEUSABLE*/}
          <div className="flex items-center justify-between border-b border-b-[#D6D6D6] h-[112px] relative">
            <label className="flex-1 h-full  flex items-center justify-center md:justify-between text-[22px] md:text-[18px] sm:text-[14px] md:pl-4 font-light">
              I want to work part-time, is that possible
            </label>
            <LogoOrange className="w-[26px] h-[16px] absolute right-[90px] top-[50%] transform -translate-y-1/2 sm:right-3" />
          </div>

          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start md:justify-center text-[22px] md:text-[18px] sm:text-[14px] font-semibold ">
              How does the payment works?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px]">
            <label className="h-full w-[390px]  flex items-center justify-start md:justify-center text-[22px] md:text-[18px] sm:text-[14px] font-light ">
              How much can I earn?
            </label>
          </div>
          <div className="flex items-center justify-between border-y border-y-[#D6D6D6] h-[112px] relative">
            <label className="absolute left-0 top-0 bottom-0 w-[230px] md:w-auto md:pr-4 border-r border-r-[#D6D6D6] h-full  flex items-center justify-center text-[22px] md:text-[18px] sm:text-[12px] font-semibold bg-[#E8E8E8] lg:hidden">
              General
            </label>
            <label className="absolute left-[230px] top-0 bottom-0 w-[299px] lg:left-0 lg:w-auto lg:px-4 border-r border-r-[#D6D6D6] h-full  flex items-center justify-center  text-[22px] md:text-[16px] sm:text-[14px] font-semibold ">
              Joining Process
            </label>

            <label className="flex-1 h-full  flex items-center justify-center lg:justify-end lg:pr-4 text-[22px] md:text-[18px] sm:text-[12px] font-light">
              I want to work part-time, is that possible
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start md:justify-center text-[22px] md:text-[18px] sm:text-[14px] font-light ">
              How long are the average projects?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start md:justify-center text-[22px] md:text-[18px] sm:text-[14px] font-light ">
              How long are the average projects?
            </label>
          </div>
          <div className="flex items-center justify-center border-b border-b-[#D6D6D6] h-[112px] bg-[#E8E8E8]">
            <label className="h-full w-[390px]  flex items-center justify-start md:justify-center text-[22px] md:text-[18px] sm:text-[14px] font-light ">
              How much can I earn?
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
