import { Category, Profile, Skill } from "@/icons";
import React from "react";
import {
  Shopify,
  Magento,
  Data,
  Webflow,
  DotNet,
  Logo,
  Figma,
  Photoshop,
  Illustrator,
  Unreal,
  Cinema,
  LogoWhite,
} from "@/icons";
import Link from "next/link";
import OneStopLeft from "./OneStopLeft";
import OneStopCard from "./OneStopCard";

const cardOne = {
  title: "IT & Development",
  skills: [
    {
      name: "Shopify Developer",
      icon: <Shopify className="w-[39px] h-[40px] md:w-[29px] md:h-[30px]" />,
    },
    {
      name: "Magento Developer",
      icon: <Magento className="w-[32px] md:w-[24px] h-[40px] md:h-[30px]" />,
    },
    {
      name: "Data Scientist",
      icon: <Data className="w-[42px] md:w-[33px]  h-[39px] md:h-[27px]" />,
    },
    {
      name: "Webflow Developer",
      icon: <Webflow className="w-[43px] md:w-[33px] h-[30px] md:h-[23px]" />,
    },
    {
      name: "Dot Net Developer",
      icon: <DotNet className="w-[69px] md:w-[47px] h-[40px] md:h-[33px]" />,
    },
  ],
};

const cardTwo = {
  title: "Design & Creative",
  skills: [
    {
      name: "UX Designer",
      icon: <Figma className="w-[26px] md:w-[19px] h-[39px] md:h-[27px]" />,
    },
    {
      name: "Graphics Designer",
      icon: <Photoshop className="w-[48px] md:w-[33px] h-[48px] md:h-[33px]" />,
    },
    {
      name: "Illustration Artist",
      icon: (
        <Illustrator className="w-[47px] md:w-[35px] h-[44px] md:h-[41px]" />
      ),
    },
    {
      name: "Unreal Engine",
      icon: <Unreal className="w-[55px] md:w-[44px] h-[55px] md:h-[44px]" />,
    },
    {
      name: "Cinema 4D",
      icon: <Cinema className="w-[53px] md:w-[44px] h-[44px]" />,
    },
  ],
};

const OneStop = () => {
  return (
    <section>
      <div className="h-[132.99px] md:h-[100px] w-full bg-[url('/img/pattern.png')] bg-cover"></div>
      <div className="pt-[183px] lg:pt-[130px] pb-[148px] lg:pb-[110px] bg-[url('/img/bg1.png')] bg-cover app-container">
        <div className="w-[977px] lg:w-[75vw] md:w-[85vw] mx-auto">
          <h4 className="text-center font-bold text-[54px] lg:text-[48px]  md:text-[42px] sm:text-[36px] leading-[64px] lg:leading-[58px] md:leading-[48px]">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h4>
        </div>

        <div className="mt-[90px] lg:mt-[50px] space-y-[30px] lg:space-y-[50px]">
          <div className="flex justify-between items-center lg:flex-col lg:gap-y-8 ">
            <OneStopLeft title="Find Dev and IT professionals to scale your business." />
            <OneStopCard data={cardOne} />
          </div>
          <div className="flex justify-between items-center lg:flex-col lg:gap-y-8">
            <OneStopLeft title="Explore Creative individuals with a keen eye for detail." />
            <OneStopCard data={cardTwo} />
          </div>
          <div className="flex md:flex-col-reverse justify-between items-center md:items-start md:gap-y-8 lg:w-[75vw] md:w-[85vw] mx-auto">
            <Link href={"#"} className="custom-btn ">
              <label>Explore More</label>
              <span>
                <LogoWhite className="w-[25px] h-[15px]" />
              </span>
            </Link>
            <p className="text-[22px] leading-[22px] w-[730px] lg:w-full font-light lg:flex-1 lg:text-end md:text-start">
              <span className="font-bold">30 more</span> to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStop;
