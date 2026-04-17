import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import MyLink from "@/components/shared/Navbar/MyLink";
import MobileMenu from "@/components/shared/Navbar/MobileMenu";

const navItems = [
  { path: "/", text: "Home" },
  { path: "/timeline", text: "Timeline" },
  { path: "/stats", text: "Stats" },
];

const Navbar = () => {
  return (
    <div className="shadow-2xs py-5 relative">
      <div className="flex w-full max-w-[1110px] mx-auto justify-between items-center px-4">
        <Image
          src={Logo}
          width={141}
          height={31}
          alt="logo"
          className="w-[141px] h-[31px] object-contain"
        />

        <ul className="hidden md:flex gap-4 justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <MyLink item={item} />
            </li>
          ))}
        </ul>

        <MobileMenu navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;