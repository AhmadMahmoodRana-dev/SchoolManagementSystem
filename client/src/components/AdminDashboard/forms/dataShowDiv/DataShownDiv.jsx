import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiaUserEditSolid } from "react-icons/lia";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useApisStore from "@/store/Apis.store";
const DataShownDiv = ({name,role,id,url,key1}) => {
    const {deleteData} = useApisStore()
  return (
    <div className="info-box  bg-white dark:bg-gray-800/20 dark:shadow-inner dark:shadow-blue-800/20 rounded-lg flex  flex-col justify-center items-center shadow-lg h-[230px]">
      <Avatar className="w-[80px] h-[80px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-xs dark:text-blue-400 text-gray-500 mt-4">{name}</h1>
      <p className="text-[12px] dark:text-blue-400 text-gray-700 tracking-wider font-semibold">
        {role}
      </p>
      <div className="events-container flex gap-4 mt-4">
        <div className="icon-holder bg-[#7068e4] w-8 h-8 rounded-full text-white flex justify-center items-center">
          <HiMagnifyingGlass size={18} />
        </div>
        <div className="icon-holder bg-[#6c8df6] w-8 h-8 rounded-full text-white flex justify-center items-center">
          <LiaUserEditSolid size={18} />
        </div>
        <div className="icon-holder bg-[#fb8992] w-8 h-8 rounded-full text-white flex justify-center items-center">
          <MdOutlineDeleteSweep size={18} onClick={() => deleteData(url,id,key1)} />
        </div>
      </div>
    </div>
  );
};

export default DataShownDiv;
