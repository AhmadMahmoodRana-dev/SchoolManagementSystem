import React from "react";
import { RiHome4Line } from "react-icons/ri";

const CommonHeader = ({firstName,SecondName}) => {
  return (
    <div className="header w-full h-11 rounded-xl border bg-white flex gap-3 items-center px-2">
      <h1 className="font-semibold">{firstName}</h1>
      <hr className=" w-[1px] h-[50%] bg-black" />
      <div className="icon-container flex gap-3 items-center">
        <RiHome4Line size={18} />
        <h1 className="tracking-wider font-serif">- {SecondName}</h1>
      </div>
    </div>
  );
};

export default CommonHeader;
