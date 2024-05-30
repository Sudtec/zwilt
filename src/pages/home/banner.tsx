"use client";
import { Logo } from "@/icons";
import Image from "next/image";
import React from "react";

const tabs = ["IT & Development", "Design and Creative"];

const itData = [
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

const designData = [
  "Graphic Designer",
  "UI/UX Designer",
  "Web Designer",
  "Graphic Designer",
  "UI/UX Designer",
  "Web Designer",
  "Graphic Designer",
  "UI/UX Designer",
  "Web Designer",
  "Graphic Designer",
  "UI/UX Designer",
];

const HomeBanner = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [currentData, setCurrentData] = React.useState(itData);

  const handleTabChange = (newTab: string) => {
    console.log(newTab, "newTab");
    setCurrentData(newTab === tabs[0] ? itData : designData);
  };

  return (
    <section className="min-h-screen app-container flex flex-col items-center justify-center">
      <div className="w-[671px] lg:w-[75vw] md:w-[85vw]">
        <div className="font-bold text-[54px] lg:text-[48px] md:text-[42px] sm:text-[36px] text-center leading-[64px] lg:leading-[58px] md:leading-[49px]">
          Finding the right fit{" "}
          <div className="h-[43px] md:h-[34px]  w-[68px] md:w-[50px] relative inline-flex">
            <Image src="/img/user.gif" alt="heart" fill />
          </div>
          has never been easier.
        </div>
        <p className="text-[#202229] text-[22px] md:text-[20px] sm:text-[18px] text-center font-light pb-[30px] pt-[20px]">
          With our rigorous pre-vetting process, you&apos;ll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <div className="relative border-[1.5px] border-[#F0F0F0] h-[74px] md:h-[64px] rounded-[15px] overflow-hidden">
          <input
            placeholder="Looking for design |"
            className="h-full pl-[27px] w-full border-0 outline-none"
          />
          <button className="absolute right-0 top-0 h-full w-[74px] bg-[#FFBE2E] flex items-center justify-center rounded-[15px]">
            <Logo className="fill-[#202229]" />
          </button>
        </div>
      </div>

      <div className="w-[920px] lg:w-[85vw]   rounded-[15px] py-[15px] px-[65px]  md:px-[35px] sm:px-[10px] bg-[#F8F8F8] mt-[40px]">
        <div className="inline-flex bg-[#D2D2D2] rounded-[15px] mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                handleTabChange(tab);
              }}
              className={`${
                activeTab === tab ? "bg-[#C7F4C2] font-semibold" : "font-[400]"
              } px-[30px] md:px-3 py-[15px] text-[16px] md:text-[14px] text-[#202229] rounded-[15px]`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-2 mt-[23px] gap-y-[18px]">
          {currentData.map((item, i) => (
            <div
              key={i}
              className={` text-[16px] md:text-[14px] sm:text-[12px] font-normal ${
                i === 6 ? "font-semibold text-[#202229]" : "text-[#959595]"
              }`}
            >
              {item}
            </div>
          ))}
          <div className="text-[#959595] text-[16px] md:text-[14px] font-normal">
            <button className="font-semibold text-[#202229] ">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
