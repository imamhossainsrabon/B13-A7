import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

const Buttons = () => {
  return (
    <>
      <button className="btn flex-col items-center justify-center bg-[#F8FAFC] p-4 rounded-lg h-24">
        <TbPhoneCall className="w-6 h-6" />
        <p>Call</p>
      </button>
      <button className="btn flex-col items-center justify-center   bg-[#F8FAFC]  rounded-lg h-24">
        <MdOutlineTextsms className="w-6 h-6" />
        <p>Text</p>
      </button>
      <button className="btn flex-col items-center justify-center   bg-[#F8FAFC] p-4 rounded-lg h-24">
        <IoVideocamOutline className="w-6 h-6" />
        <p>Video</p>
      </button>
    </>
    
  );
};

export default Buttons;
