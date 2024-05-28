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

const OneStop = () => {
  return (
    <section>
      <div className="h-[132.99px] w-full bg-[url('/img/pattern.png')] bg-cover"></div>
      <div className="pt-[183px] pb-[148px] bg-[url('/img/bg1.png')] bg-cover app-container">
        <div className="w-[977px] mx-auto">
          <h4 className="text-center font-bold text-[54px] leading-[64px]">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h4>
        </div>

        <div className="mt-[90px] space-y-[30px]">
          <div className="flex justify-between items-center">
            <div className="w-[380px]">
              <h4 className="text-[#202229] text-[24px] font-medium">
                Find Dev and IT professionals to scale your business.{" "}
              </h4>

              <div className="grid grid-cols-2 gap-y-2 mt-5">
                <div className="flex items-center gap-x-2">
                  <Skill />
                  <span className="text-[16px] text-[#202229CC]">
                    989 Skills
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Category />
                  <span className="text-[16px] text-[#202229CC]">
                    45 Sub-Categories
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Profile />
                  <span className="text-[16px] text-[#202229CC]">
                    1011 Profiles
                  </span>
                </div>
              </div>
            </div>
            {/* TODO: Remove the Height Later and Make the Component Reusable*/}
            <div className="flex-1 bg-white h-[224px] max-w-[730px] rounded-[7px] py-[18px] pl-7 pr-[26px]">
              <label className="block text-base text-[#202229] leading-[23.8px] pl-[1px]">
                IT & Development
              </label>
              <div className="flex justify-between items-center mt-[15px]">
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Shopify className="w-[39px] h-[40px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Shopify Developer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Magento className="w-[32px] h-[40px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Magento Developer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Data className="w-[42px] h-[39px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Data Scientist
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Webflow className="w-[43px] h-[30px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Webflow Developer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <DotNet className="w-[69px] h-[40px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Dot Net Developer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center mb-[48px]">
                    <Logo className="w-[25px] h-[15px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[380px]">
              <h4 className="text-[#202229] text-[24px] font-medium">
                Explore Creative individuals with a keen eye for detail.{" "}
              </h4>

              <div className="grid grid-cols-2 gap-y-2 mt-5">
                <div className="flex items-center gap-x-2">
                  <Skill />
                  <span className="text-[16px] text-[#202229CC]">
                    989 Skills
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Category />
                  <span className="text-[16px] text-[#202229CC]">
                    45 Sub-Categories
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Profile />
                  <span className="text-[16px] text-[#202229CC]">
                    1011 Profiles
                  </span>
                </div>
              </div>
            </div>
            {/* TODO: Remove the Height Later and Make the Component Reusable*/}
            <div className="flex-1 bg-white h-[224px] max-w-[730px] rounded-[7px] py-[18px] pl-7 pr-[26px]">
              <label className="block text-base text-[#202229] leading-[23.8px] pl-[1px]">
                Design & Creative
              </label>
              <div className="flex justify-between items-center mt-[15px]">
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center mb-[48px]">
                    <Logo className="w-[25px] h-[15px] rotate-180" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Figma className="w-[26px] h-[39px]" />
                  </div>
                  <label className="block max-w-[79px] mx-auto text-center font-semibold text-sm">
                    UX Designer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Photoshop className="w-[48px] h-[48px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Graphics Designer
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Illustrator className="w-[47px] h-[44px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Illustration Artist
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Unreal className="w-[55px] h-[55px]" />
                  </div>
                  <label className="block max-w-[81px] mx-auto text-center font-semibold text-sm">
                    Unreal Engine
                  </label>
                </div>
                <div className="space-y-3">
                  <div className="h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <Cinema className="w-[53px] h-[53px]" />
                  </div>
                  <label className="block max-w-[70px] mx-auto text-center font-semibold text-sm">
                    Cinema 4D
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link href={"#"} className="btn ">
              <label>Explore More</label>
              <span>
                <LogoWhite className="w-[25px] h-[15px]" />
              </span>
            </Link>
            <p className="text-[22px] leading-[22px] w-[730px] font-light">
              <span className="font-bold">30 more</span> to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStop;
