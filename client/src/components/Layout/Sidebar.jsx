import React, { useState } from "react";
import { TfiHome } from "react-icons/tfi";
import { FaMinus, FaPlus } from "react-icons/fa";
import data from "@/utils/SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleMenu = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-[320px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg min-h-full md:flex md:flex-col hidden fixed transition-all duration-300 ease-in-out">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-blue-600">Menu</h1>
      </div>

      <div className="flex items-center gap-3 py-3 px-6 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-l-blue-600 dark:border-l-blue-400 transition-colors duration-200">
        <TfiHome className="text-blue-600 dark:text-blue-400" size={18} />
        <h1 className="font-medium text-[0.95rem]">Dashboard</h1>
      </div>

      <div className="py-4  flex-1 overflow-y-auto">
        {data.navMain.map((section, index) => (
          <div key={section.title} className="mb-6">
            <div
              className={`flex items-center gap-3 py-3 px-6  border-l-4 cursor-pointer  transition-all duration-200 ${
                openIndexes.includes(index)
                  ? "text-blue-400 border-blue-400 bg-blue-900/20"
                  : "text-gray-600 border-transparent hover:border-gray-200"
              }`}
            >
              <TfiHome size={18} />
              <h1 className="font-medium text-[0.95rem] flex-1">
                {section.title}
              </h1>
              <span
                className="p-1 rounded-md  transition-colors"
                onClick={() => toggleMenu(index)}
              >
                {openIndexes.includes(index) ? (
                  <FaMinus size={12} className="text-blue-600" />
                ) : (
                  <FaPlus size={12} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndexes.includes(index) ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="mx-6 flex flex-col border-l-2 border-blue-600/20 my-2">
                {section.items.map((item) => (
                  <li key={item.title} className="relative">
                    <Link
                      to={`${item.url}`}
                      className={`block py-2 pl-4 text-[0.9rem] text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors relative before:absolute before:left-[-4px] before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity ${
                        item.isActive
                          ? "text-blue-600 font-medium before:opacity-100"
                          : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
