import { Shopify, Magento, Data, Webflow, DotNet, Logo } from "@/icons";
import React from "react";

const OneStopCard = ({ data }: { data: any }) => {
  return (
    <div className="flex-1 bg-white h-[224px] max-w-[730px] lg:max-w-[85vw] md:max-w-[90vw] rounded-[7px] py-[18px] pl-7 md:px-4 pr-[26px]">
      <label className="block text-base text-[#202229] leading-[23.8px] pl-[1px]">
        {data.title}
      </label>
      <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-x-5 lg:gap-y-5  items-center mt-[15px]">
        {data.title !== "IT & Development" && (
          <div className="space-y-3">
            <div className="h-[96px] md:h-[70px] w-[96px] md:w-[70px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center mb-[48px]">
              <Logo className="w-[25px] h-[15px] rotate-180" />
            </div>
          </div>
        )}
        {data.skills.map((skill: any, i: number) => (
          <div className="space-y-3" key={i}>
            <div className="h-[96px] md:h-[70px] w-[96px] md:w-[70px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
              {skill.icon}
            </div>
            <label className="block max-w-[70px] mx-auto text-center font-semibold text-sm">
              {skill.name}
            </label>
          </div>
        ))}
        {data.title === "IT & Development" && (
          <div className="space-y-3">
            <div className="h-[96px] md:h-[70px] w-[96px] md:w-[70px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center mb-[48px]">
              <Logo className="w-[25px] h-[15px] " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneStopCard;
