import React, { useContext } from "react";
import { RiHome4Line } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { Context } from "@/context/Context";

const CommonHeader = ({ firstName, SecondName }) => {
  const { toogleSidebar } = useContext(Context);
  return (
    <div
      className={`w-full bg-white dark:bg-blue-900/20 dark:border-0 rounded-lg shadow-sm border border-gray-100 flex items-center px-4 py-3.5 ${
        !toogleSidebar ? "mt-5" : "mt-0"
      }`}
    >
      <div className="flex items-center gap-2 dark:text-blue-400 text-gray-600">
        <RiHome4Line className="text-lg" />
        <span className="font-medium text-[0.95rem]">{firstName}</span>
        <HiChevronRight className="text-lg text-gray-400 dark:text-blue-400" />
        <span className="text-[0.95rem] text-gray-500 dark:text-blue-400">
          {SecondName}
        </span>
      </div>
    </div>
  );
};

export default CommonHeader;
