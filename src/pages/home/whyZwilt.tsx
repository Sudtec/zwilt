import React from "react";
import { ListIcon, LogoWhite } from "@/icons";
import Link from "next/link";

const riskData = [
  {
    title: "We pick the best for you to select.",
  },
  {
    title: "Thousands of vetted candidates in dozens of categories.",
  },
  {
    title: "Risk-free resource swapping for the best fit.",
  },
];
const WhyZwilt = () => {
  return (
    <div className="app-container why-sections bg-gradient-to-b from-[#fefeff] to-[#edefff] py-[186px] -skew-y-[2deg] transform overflow-x-scroll ">
      <div className="transform skew-y-[2deg] flex items-center gap-x-[95px] ">
        <div className="min-w-[380px] space-y-[37px]">
          <h5 className="font-bold text-[54px] leading-[64px]">
            Why choose Zwilt?
          </h5>
          <p className="text-[22px] font-light leading-[32px] mr-[54px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="min-w-[1300px] h-[652px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
          <div>
            <h5 className="max-w-[464px] font-bold leading-[64px] text-[54px]">
              Onboard without the risk.
            </h5>
            <div className="mt-[37px] mb-[44px]">
              {riskData.map((item, i) => (
                <div className="flex items-center gap-x-[16px]" key={i}>
                  <ListIcon className="w-[18px] h-[7px]" />
                  <span className="text-[22px] font-light leading-[32px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <Link href={"#"} className="btn learn">
              <label>Learn More</label>
              <span>
                <LogoWhite className="w-[25px] h-[15px]" />
              </span>
            </Link>
          </div>
          <div className="">
            <div className="absolute w-[278px] h-[157px] bg-[url('/img/onboard-img-1.png')] bg-cover left-[659px] top-[42px] rounded-[17px]">
              
            </div>
            <div className="absolute w-[347px] h-[174px] bg-[url('/img/onboard-card-2.png')] bg-cover left-[602px] bottom-[41px] rounded-[17px] drop-shadow-lg">
              
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="min-w-[1300px] h-[652px] bg-slate-400"></div>
        <div className="min-w-[1380px] h-[652px]">
          <div className="w-[1300px] h-[652px] bg-slate-400 "></div>
        </div>
      </div>
    </div>
  );
};

export default WhyZwilt;
