"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import MyLink from "./MyLink";

const MobileMenu = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl text-[#244D3F]"
      >
        {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>

      {open && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-4 z-50">
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              <MyLink item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;