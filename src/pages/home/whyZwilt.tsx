import React from "react";
import {
  ListIcon,
  ListGreen,
  ListOrange,
  LogoWhite,
  Star,
  Rating,
} from "@/icons";
import Link from "next/link";
import Image from "next/image";

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

const openBook = [
  {
    title: "Easy and transparent one-to-one chat with candidates.",
  },
  {
    title: "Simple and convenient payment methods.",
  },
  {
    title: "Review past ratings.",
  },
];
const stayInLoop = [
  {
    title: "Track your staff activity down to every minute with screenshots.",
  },
  {
    title: "Comprehensive timesheet data to process payments.",
  },
  {
    title: "Create projects to organize and assign tasks more effectively.",
  },
];

const WhyZwilt = () => {
  return (
    <div className="app-container why-sections bg-gradient-to-b from-[#fefeff] to-[#edefff] py-[186px] -skew-y-[2deg] transform overflow-x-scroll ">
      <div className="transform skew-y-[2deg] flex items-center gap-x-[95px] ">
        <div className="flex items-center gap-x-5">
          <div className="w-[380px] sm:w-[70vw] space-y-[37px] lg:space-y-5 mr-9">
            <h5 className="font-bold text-[54px] lg:text-[46px] md:text-[38px] leading-[64px]">
              Why choose Zwilt?
            </h5>
            <p className="text-[22px] lg:text-[18px] font-light leading-[32px] mr-[54px]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div className="w-[1300px] lg:w-[1000px]  h-[652px] lg:h-[500px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
            <div>
              <h5 className="max-w-[464px] font-bold leading-[64px] text-[54px] lg:text-[46px] md:text-[38px]">
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
              <Link href={"#"} className="custom-btn learn">
                <label>Learn More</label>
                <span>
                  <LogoWhite className="w-[25px] h-[15px]" />
                </span>
              </Link>
            </div>

            <Image
              src={"/img/card-1-img.png"}
              alt={"Card 1"}
              width={658}
              height={569}
              className="lg:w-[470px] lg:h-[365px]"
            />
          </div>
          <div className="w-[1300px] lg:w-[1000px]  h-[652px] lg:h-[500px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
            <div>
              <h5 className="max-w-[239px] font-bold leading-[64px] text-[54px] lg:text-[46px] md:text-[38px] ">
                An open book.
              </h5>
              <div className="mt-[37px] mb-[44px]">
                {openBook.map((item, i) => (
                  <div className="flex items-center gap-x-[16px]" key={i}>
                    <ListOrange className="w-[18px] h-[7px]" />
                    <span className="text-[22px] font-light leading-[32px]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <Link href={"#"} className="custom-btn learn">
                <label>Learn More</label>
                <span>
                  <LogoWhite className="w-[25px] h-[15px]" />
                </span>
              </Link>
            </div>
            <Image
              src={"/img/card-2-img.png"}
              alt={"Card 2"}
              width={577}
              height={451}
              className="lg:w-[520px] lg:h-[425px]"
            />
          </div>
          <div className="w-[1380px] lg:w-[1080px] h-[652px] lg:h-[500px]">
            <div className="w-[1300px] lg:w-[1000px]  h-[652px] lg:h-[500px] bg-[#fff] shadow-md rounded-[20px] pl-[58px] py-[41px] pr-[40px] flex items-center justify-between relative">
              <div>
                <h5 className="max-w-[279px] font-bold leading-[64px] text-[54px] lg:text-[46px] md:text-[38px] ">
                  Stay in the loop.
                </h5>
                <div className="mt-[37px] mb-[44px]">
                  {stayInLoop.map((item, i) => (
                    <div className="flex items-center gap-x-[16px]" key={i}>
                      <ListGreen className="w-[18px] h-[7px]" />
                      <span className="text-[22px] font-light leading-[32px]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href={"#"} className="custom-btn learn">
                  <label>Learn More</label>
                  <span>
                    <LogoWhite className="w-[25px] h-[15px]" />
                  </span>
                </Link>
              </div>
              <Image
                src={"/img/card-3-img.png"}
                alt={"Card 2"}
                width={542}
                height={564}
                className="lg:w-[510px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyZwilt;
