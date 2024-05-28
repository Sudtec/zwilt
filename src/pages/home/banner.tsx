"use client";
import { Logo } from "@/icons";
import Image from "next/image";
import React from "react";

const tabs = ["IT & Development", "Design and Creative"];

const data = [
  "Python Developer",
  "Data Scientist",
  "Shopify Developer",
  "Shopify Developer",
  "Front End Developer",
  "Python Developer",
  "MERN Stack Developer",
  "Shopify Developer",
  "Full Stack Developer",
  "Full Stack Developer",
  "Python Developer",
];

const HomeBanner = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  return (
    <section className="min-h-screen app-container flex flex-col items-center justify-center">
      <div className="w-[671px]">
        <div className="font-bold text-[54px] text-center">
          Finding the right fit{" "}
          <div className="h-[43px] w-[68px] relative inline-flex">
            <Image src="/img/user.gif" alt="heart" fill />
          </div>
          has never been easier.
        </div>
        <p className="text-[#202229] text-[22px] text-center">
          With our rigorous pre-vetting process, you&apos;ll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <div className="relative border-[1.5px] border-[#F0F0F0] h-[74px] rounded-[15px]">
          <input
            placeholder="Looking for design |"
            className="h-full pl-[27px] w-full border-0"
          />
          <button className="absolute right-0 top-0 h-full w-[74px] bg-[#FFBE2E] flex items-center justify-center rounded-[15px]">
            <Logo className="fill-[#202229]" />
          </button>
        </div>
      </div>

      <div className="w-[920px] rounded-[15px] py-[15px] px-[65px] bg-[#F8F8F8] mt-[40px]">
        <div className="inline-flex bg-[#D2D2D2] rounded-[15px] mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "bg-[#C7F4C2] font-semibold" : "font-medium"
              } px-[30px] py-[15px] text-[16px] text-[#202229] rounded-[15px]`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 mt-[23px] gap-y-[18px]">
          {data.map((item) => (
            <div key={item} className="text-[#959595] text-[16px] font-normal">
              {item}
            </div>
          ))}
          <div className="text-[#959595] text-[16px] font-normal">
            <button className="font-semibold text-[#202229]">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
