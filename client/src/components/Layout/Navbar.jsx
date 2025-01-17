import React, { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Context } from "@/context/Context";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const {toogleSidebar, setToogleSidebar} = useContext(Context);
  
  return (
    <nav className="border-b border-gray-100 fixed bg-white w-full h-[70px] flex justify-between px-6 md:px-8 items-center z-40 shadow-sm">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setToogleSidebar(!toogleSidebar)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <HiMenuAlt2 className="text-gray-600 text-xl" />
        </button>
        <h1 className="logo font-semibold text-xl text-gray-800">AHMAD</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2.5 hover:bg-gray-100 rounded-lg relative transition-colors duration-200">
          <FaBell className="text-gray-600 text-lg" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 ml-1">
          <CgProfile className="text-gray-600 text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
