"use client"
import Link from "next/link";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { PiChartLine } from "react-icons/pi";
import { usePathname } from "next/navigation";

const MyLink = ({ item }) => {
    const ahref = item.path
    const pathname = usePathname()
  return (
    <Link 
      className={`flex items-center justify-center gap-2 text-[#64748B] font-medium ${pathname === ahref ? 'bg-[#244D3F] px-[17px] py-[12px] rounded-[4px] text-[white]': ''}`}
      href={item.path}
    >
      {item.text === "Home" && <RiHome2Line  className="w-[20px] h-[20px] font-bold stroke-[1px]" />}
      {item.text === "Timeline" && <RiTimeLine className="w-[20px] h-[20px] font-bold stroke-[1px]" />}
      {item.text === "Stats" && <PiChartLine className="w-[20px] h-[20px] font-bold stroke-[10px]" />} {item.text}
    </Link>
  );
};

export default MyLink;
