import Buttons from "@/components/FriendCardComponent/Button";
import Image from "next/image";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { PiArchiveLight } from "react-icons/pi";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";

const friendsDataFetch = async () => {
  const res = await fetch("https://b13-a7.vercel.app/data.json");
  const data = await res.json();
  return data;
};

const friendDetailPage = async ({ params }) => {
  const { id } = await params;

  const Friends = await friendsDataFetch();

  const friend = Friends.find((friend) => friend.id === Number(id));
  console.log(id, friend);

  return (
    <div className="flex w-full max-w-[1110px] gap-6 mx-auto py-20 px-3">
      <div className="w-full max-w-[350px]">
        <div className="flex flex-col justify-center items-center gap-3 text-center p-6 rounded-lg bg-white [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]">
          <Image src={friend.picture} width={80} alt={"sd"} height={80} />
          <p
            className={`${friend.status === "On Track" ? "bg-[#244D3F]" : friend.status === "Overdue" ? "bg-[#EF4444]" : "bg-[#EFAD44]"} p-2 rounded-full  text-white font-medium text-[12px]`}
          >
            {friend.status}
          </p>
          <div className="mb-2 flex gap-2">
            {friend.tags.map((tag, index) => (
              <p
                className="bg-[#CBFADB] text-[#244D3F] p-[8px] rounded-[100px] text-[12px] font-medium uppercase"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
          <p>{`"${friend.bio}"`}</p>
          <p>Preferred: email</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button className="active:scale-98 bg-white p-4 rounded-sm border border-[#E9E9E9] flex justify-center items-center gap-[8px] font-medium text-[#1F2937]">
            <RiNotificationSnoozeLine className="w-4 h-4 stroke-[1px]" />
            Snooze 2 Weeks
          </button>
          <button className="bg-white p-4 active:scale-98  rounded-sm border border-[#E9E9E9] flex justify-center items-center gap-[8px] font-medium text-[#1F2937]">
            <PiArchiveLight className="w-4 h-4 stroke-[1px]" /> Archive
          </button>
          <button className="text-red-500 bg-white p-4 active:scale-98 rounded-sm border border-[#E9E9E9] flex justify-center items-center gap-[8px] font-medium text-[#1F2937]">
            {" "}
            <RiDeleteBin5Line className="w-4 h-4 stroke-[1px]" />
            Delete
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-6 ">
          <div className="bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)] text-center">
            <h2 className="text-[#244D3F] text-[25px] font-semibold">
              {friend.days_since_contact}
            </h2>
            <p className="text-[#64748B] text-[17px]">Days Since Contact</p>
          </div>
          <div className="bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)] text-center">
            <h2 className="text-[#244D3F] text-[25px] font-semibold">
              {friend.goal}
            </h2>
            <p className="text-[#64748B] text-[17px]">Goal (Days)</p>
          </div>
          <div className="bg-white rounded-lg  p-8 [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)] text-center">
            <h2 className="text-[#244D3F] text-[25px] font-semibold">
              {new Date(friend.next_due_date).toLocaleDateString("en-US", {month: "short",day: "numeric",year: "numeric",})}
            </h2>
            <p className="text-[#64748B] text-[17px]">Next Due</p>
          </div>
        </div>
        <div className="bg-white mt-3.5 p-6 rounded-lg [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium text-[#244D3F]">Relationship Goal</h2>
            <button className="btn ">Edit</button>
          </div>
          <p className="text-[18px] text-[#64748B]">
            Connect every <span className="font-bold text-[#1F2937] text-lg">30 days</span>
          </p>
        </div>
        <div className="bg-white mt-3.5 p-6 rounded-lg [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]">
          <p className="text-xl font-medium text-[#244D3F] mb-4">Quick Check-In</p>
          <div className="grid lg:grid-cols-3 gap-4 text-center justify-center">
            <Buttons />
          </div>
        </div>
        <div className="bg-white mt-6  mt-3.5 p-6 rounded-lg [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-[#244D3F]">Recent Interactions</h2>
            <button className="btn items-center justify-center   bg-[#F8FAFC] p-4 rounded-lg"><FaHistory /> Full History</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default friendDetailPage;
