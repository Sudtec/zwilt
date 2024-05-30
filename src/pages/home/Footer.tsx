"use client";
import React, { useState } from "react";
import { Logo, LogoWhite, Zwilt } from "@/icons";
import Link from "next/link";
import SkewBg from "@/components/common/skewBg";

const listone = [
  {
    name: "Find Work",
    href: "/",
  },
  {
    name: "Find Talent",
    href: "/",
  },
  {
    name: "Categories",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
];
const listtwo = [
  {
    name: "Data Science",
    href: "/",
  },
  {
    name: "IT & Networking",
    href: "/",
  },
  {
    name: "Web & Mobile",
    href: "/",
  },
];
const listthree = [
  {
    name: "FAQ’s",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];
const listfour = [
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "LinkedIn",
    href: "/",
  },
  {
    name: "Twitter",
    href: "/",
  },
];
function Footer() {
  const [toggleform, settoggleform] = useState(false);
  return (
    <footer className="">
      <SkewBg bgColor="bg-gradient-to-b from-[#0C0C0C] to-[#202229] ">
        <div className="p-20 md:p-5">
          <SkewBg bgColor="bg-[#525AA0] ">
            <div className="flex flex-col justify-center items-center p-3 mt-7 mb-4">
              <p className=" text-[50px] text-white max-w-[600px] text-center leading-[64px] xl:text-[36px] xl:leading-[48px] sm:text-[20px] sm:leading-[24px]">
                Need a job done, and done well? Get started
              </p>
              <form
                className={` max-w-[700px] w-full mt-4 showform  ${
                  toggleform ? "md:h-auto" : "hideform"
                } `}
              >
                <div className="flex gap-4 mb-3 md:block">
                  <div className="flex-1">
                    <input
                      placeholder="Enter your name |"
                      className="w-full bg-transparent border-b border-[#969FEF] py-3 placeholder:text-[#969FEF] md:text-center"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      placeholder="Enter your email |"
                      className=" w-full bg-transparent border-[#969FEF] border-b py-3 placeholder:text-[#969FEF] md:text-center md:my-6"
                    />
                  </div>
                </div>
                <div className="sm:block">
                  <input
                    className="w-full bg-transparent border-b border-[#969FEF] text-center py-3 placeholder:text-[#969FEF]"
                    placeholder="Enter your message |"
                  />
                </div>
              </form>
              <button
                onClick={() => settoggleform(!toggleform)}
                className={`btnfooter ${toggleform ? "" : "rotate-90"} mt-9`}
              >
                <span>
                  <LogoWhite className="w-[25px] h-[15px]" />
                </span>
              </button>
            </div>
          </SkewBg>
          <div className="text-[#fff] mt-32 flex gap-24 lg:block">
            <div className="w-[332px] lg:w-full lg:mb-[48px]">
              <Link href="/" className="flex items-center">
                <Zwilt className="w-[72px] h-[25.23px]" />
                <Logo className="fill-[#FFBE2E] w-[34.16px] h-[21.37px]" />
              </Link>
              <p className="mt-7 text-[#FFFFFFCC] mb-[56px]">
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>

              <p className="opacity-40 text-white mb-4 text-[14px]">
                LINKS AND REDIRECTS
              </p>
              <div className="flex gap-2 justify-between lg:justify-start">
                <button className="footerbtn">Hire now</button>
                <button className="footerbtn">Apply now</button>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-[54px] leading-[64px] font-semibold max-w-[779px] -mt-3 mb-16 xl:text-[36px] xl:leading-[48px] lg:text-[32px] lg:mb-10 sm:text-[20px] sm:leading-[24px]">
                Connecting the right people to the right businesses.
              </h3>
              <div className="flex justify-between flex-wrap">
                {/* LIST ONE */}
                <div className="md:w-[40%]">
                  <h4 className="opacity-40 text-white mb-4 text-[14px]">
                    PLATFORM
                  </h4>
                  <ul>
                    {listone.map((data, i) => (
                      <li key={i}>
                        <Link
                          href={data.href}
                          className="text-[18px] py-2 mb-4 underlinetext xl:text-[14px]"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LIST TWO */}
                <div className="md:w-[40%]">
                  <h4 className="opacity-40 text-white mb-4 text-[14px]">
                    CATEGORIES
                  </h4>
                  <ul>
                    {listtwo.map((data, i) => (
                      <li key={i}>
                        <Link
                          href={data.href}
                          className="text-[18px] py-2 mb-4 underlinetext xl:text-[14px]"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LIST THREE */}
                <div className="md:w-[40%]">
                  <h4 className="opacity-40 text-white mb-4 text-[14px]">
                    HELP
                  </h4>
                  <ul>
                    {listthree.map((data, i) => (
                      <li key={i}>
                        <Link
                          href={data.href}
                          className="text-[18px] py-2 mb-4 underlinetext xl:text-[14px]"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LIST FOUR  */}
                <div className="md:w-[40%]">
                  <h4 className="opacity-40 text-white mb-4 text-[14px]">
                    GET IN TOUCH @
                  </h4>
                  <ul>
                    {listfour.map((data, i) => (
                      <li key={i}>
                        <Link
                          href={data.href}
                          className="text-[18px] py-2 mb-4 underlinetext xl:text-[14px]"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkewBg>
      <div className=" pt-14 pb-3 -mt-7 bg-[#202229] text-white z-10">
        <div className="undertwo"></div>
        <div className="flex justify-between px-20 pt-3 md:block md:text-center md:px-5">
          <p className="md:mb-[10px]">All rights reserved by Zwilt</p>
          <div className="flex gap-8 md:justify-center">
            <Link href="/" className="underline  opacity-60 ">
              Privacy Policy
            </Link>
            <Link href="/" className="underline opacity-60 ">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
