"use client";
import SkewBg from "@/components/common/skewBg";
import React, { useState } from "react";
import Image from "next/image";
import { Groovehq, Groovehqwhite, Lefticon, Righticon } from "@/icons";

const Testimonial: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div>
      <SkewBg bgColor="bg-[#202229]">
        <div className="flex w-full justify-end relative -top-20">
          <Image
            src="/img/quote.png"
            alt="quote"
            width={221}
            height={175}
            className="mr-[21px]"
          />
        </div>

        <div className="mt-[70px] flex space-x-[183px]">
          <div className=" ml-[78px] text-[#fff] ">
            <div className="font-[700] text-[54px] w-[379px] leading-[64px] flex h-[192px]">
              <span>
                How it worked for Jason{" "}
                <span>
                  <Image
                    src="/img/jason.svg"
                    alt="Jason Makki"
                    width={57}
                    height={57}
                    className="rounded-full inline"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </span>{" "}
                at <Groovehq width={192} height={51} />
              </span>
            </div>

            <div className="mt-[44px] font-[400] leading-[32px] text-[22px] w-[461px]">
              <p className="opacity-80">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since.
              </p>
            </div>

            <div className="flex space-x-4 mt-[44px]">
              <Lefticon width={49.79} height={49.79} />
              <Righticon width={49.79} height={49.79} />
            </div>
          </div>

          <div className="mt-[84px]">
            <div className="flex items-center">
              {isHovered ? (
                <Image
                  src="/img/jason.svg"
                  alt="Jason Makki"
                  width={99}
                  height={99}
                  className={`rounded-[40.05px] mr-[16.21px] ${
                    isHovered ? "fadeIn ease-in-out" : ""
                  }`}
                />
              ) : (
                <div
                  className={`w-[99px] h-[99px] rounded-[40.05px] bg-[#AF7CFF] flex items-center justify-center mr-[16.21px] ${
                    !isHovered ? "fadeIn" : ""
                  }`}
                >
                  <Groovehqwhite width={76} height={21} />
                </div>
              )}

              <div className="text-white">
                <h1 className="font-[600] text-[34px] leading-[22px] mb-[3px]">
                  Jason Makki
                </h1>
                <p className="opacity-40 font-[500] text-[16px] leading-[40px]">
                  Engineer at{" "}
                  {isHovered ? <span>FOGHORN LLC</span> : <span>GROOVE</span>}
                </p>
                <p className="leading-[18px] opacity-40 font-[500] text-[16px]">
                  {isHovered ? (
                    <span>California</span>
                  ) : (
                    <span>San Francisco</span>
                  )}
                </p>
              </div>
            </div>

            <div>
              <p className="opacity-80 w-[499px] text-white mt-[59px] text-[22px] leading-[32px] mb-[197px]">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </SkewBg>
    </div>
  );
};

export default Testimonial;
