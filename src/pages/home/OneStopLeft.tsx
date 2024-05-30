import React from "react";
import { Category, Profile, Skill } from "@/icons";

const OneStopLeft = ({ title }: { title: string }) => {
  return (
    <div className="w-[380px] lg:w-full ">
      <h4 className="text-[#202229] text-[24px] font-medium lg:text-center">
        {title}
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 mt-5">
        <div className="flex items-center lg:justify-center gap-x-2">
          <Skill />
          <span className="text-[16px] sm:text-[12px] text-[#202229CC]">
            989 Skills
          </span>
        </div>
        <div className="flex items-center lg:justify-center gap-x-2">
          <Category />
          <span className="text-[16px] sm:text-[12px] text-[#202229CC]">
            45 Sub-Categories
          </span>
        </div>
        <div className="flex items-center lg:justify-center gap-x-2">
          <Profile />
          <span className="text-[16px] sm:text-[12px] text-[#202229CC]">
            1011 Profiles
          </span>
        </div>
      </div>
    </div>
  );
};

export default OneStopLeft;
