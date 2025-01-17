import React from "react";
import { RiHome4Line } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";

const CommonHeader = ({firstName, SecondName}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 flex items-center px-4 py-3.5">
      <div className="flex items-center gap-2 text-gray-600">
        <RiHome4Line className="text-lg" />
        <span className="font-medium text-[0.95rem]">{firstName}</span>
        <HiChevronRight className="text-lg text-gray-400" />
        <span className="text-[0.95rem] text-gray-500">{SecondName}</span>
      </div>
    </div>
  );
};

export default CommonHeader;
