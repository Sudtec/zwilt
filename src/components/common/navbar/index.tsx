"use client";
import { Logo, Zwilt, Toggler, Close } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { Drawer, ActionIcon, Button } from "rizzui";
// import { Drawer } from "rizzui";

const links = [
  {
    name: "Find Work",
    href: "/",
  },
  {
    name: "Find Talent",
    href: "/",
  },
  {
    name: "Articles",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];

function Navbar() {
  const screenSize = useScreenSize();
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      {screenSize.width > 1024 ? (
        <header
          className=" h-[60px] mx-20 lg:mx-11 md:mx-4 sm:mx-3 mt-[36px]  bg-[#525AA0] flex justify-between items-center rounded-[15px] px-[30px] lg:hidden"
          style={{
            boxShadow: "0px 15px 25px 0px #00000026",
          }}
        >
          <Link href="/" className="flex items-center">
            <Zwilt className="w-[72px] h-[25.23px]" />
            <Logo className="fill-[#FFBE2E] w-[34.16px] h-[21.37px]" />
          </Link>

          <div className="">
            <ul className="flex">
              {links.map((link) => (
                <li key={link.name} className="mx-[20px] lg:mx-4">
                  <Link href={link.href}>
                    <span className="text-white text-[14px] font-medium">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-5">
            <button className="text-[14px] font-semibold text-white">
              Log In
            </button>

            <button className="bg-white rounded-[15px] text-[14px] text-[#202229] h-[43px] w-[102px]">
              Join Now
            </button>
          </div>
        </header>
      ) : (
        <>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}

              <header
                className=" h-[60px]  lg:mx-11 md:mx-4 sm:mx-3 mt-[36px]  bg-[#525AA0] flex justify-between items-center rounded-[15px] px-[30px]"
                style={{
                  boxShadow: "0px 15px 25px 0px #00000026",
                }}
              >
                <Link href="/" className="flex items-center">
                  <Zwilt className="w-[72px] h-[25.23px]" />
                  <Logo className="fill-[#FFBE2E] w-[34.16px] h-[21.37px]" />
                </Link>
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  <Toggler className="text-white h-8 w-8" />
                </label>
              </header>
            </div>
            <div className="drawer-side z-[9999]">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul
                className="menu p-4 w-80 min-h-full  text-base-content bg-[#525AA0] py-9 px-6
              "
              >
                {/* Sidebar content here */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <Zwilt className="w-[72px] h-[25.23px]" />
                    <Logo className="fill-[#FFBE2E] w-[34.16px] h-[21.37px]" />
                  </div>
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-button "
                  >
                    <Close className="text-white h-8 w-8" />
                  </label>
                </div>

                {links.map((link, i) => (
                  <li
                    key={link.name}
                    className={`py-2 border-b border-b-[#D6D6D6] ${
                      i === 0 && "border-t border-t-[#D6D6D6]"
                    }`}
                  >
                    <Link href={link.href}>
                      <span className="text-white text-[14px] font-medium">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <div className="flex flex-col space-y-6 mt-8">
                  <button className="text-[14px] font-semibold text-white border border-[#D6D6D6] py-3 rounded-[15px]">
                    Log In
                  </button>

                  <button className="bg-white rounded-[15px] text-[14px] text-[#202229] h-[43px] w-full">
                    Join Now
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
