import { Logo, Zwilt } from "@/icons";
import Link from "next/link";
import React from "react";

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
  return (
    <header
      className="fixed h-[60px] bg-[#525AA0] flex justify-between items-center z-10 top-[36px] left-3 sm:left-4 lg:left-11 xl:left-20 2xl:left-32 right-3 sm:right-4 lg:right-11 xl:right-20 2xl:right-32 rounded-[15px] px-[30px]"
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
            <li key={link.name} className="mx-[20px]">
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
        <button className="text-[14px] font-semibold text-white">Log In</button>

        <button className="bg-white rounded-[15px] text-[14px] text-[#202229] h-[43px] w-[102px]">
          Join Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;
