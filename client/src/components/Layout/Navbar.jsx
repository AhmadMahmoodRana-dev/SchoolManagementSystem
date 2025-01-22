import React, { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Context } from "@/context/Context";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
const Navbar = () => {
  const { toogleSidebar, setToogleSidebar,handleLogout,setProfile,profile } = useContext(Context);
  
  const handleSidebarToggle = () => {
    setToogleSidebar(!toogleSidebar);
  };

  return (
    <nav className="border-b border-gray-100 dark:border-gray-700 fixed bg-white dark:bg-gray-800 w-full h-[70px] flex justify-between px-6 md:px-8 items-center z-40 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-3">
        <button 
          onClick={handleSidebarToggle}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 ${
            !toogleSidebar ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          aria-label="Toggle Sidebar"
        >
          <HiMenuAlt2 
            className={`text-gray-600 dark:text-blue-600 text-xl transform transition-transform duration-300 ${
              !toogleSidebar ? 'rotate-180' : ''
            }`} 
          />
        </button>
        <h1 className="logo font-semibold text-xl text-gray-800 dark:text-blue-600">AHMAD</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative transition-colors duration-200">
          <FaBell className="text-gray-600 dark:text-gray-300 text-lg" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
        </button>
        <button onClick={() => setProfile(!profile)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 ml-1">
          <CgProfile className="text-gray-600 dark:text-gray-300 text-xl" />
        </button>
        <button onClick={() => handleLogout()} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 ml-1">
          <IoLogOutOutline className="text-gray-600 dark:text-gray-300 text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
