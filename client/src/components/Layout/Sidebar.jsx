import React, { useState } from "react";
import { TfiHome } from "react-icons/tfi";
import { FaMinus, FaPlus } from "react-icons/fa";
import data from "@/utils/SidebarData";

const Sidebar = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleMenu = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close if already open
          : [...prev, index] // Open if not already open
    );
  };
  return (
    <div className="w-[310px] border-r-2  bg-white shadow-2xl min-h-full md:flex md:flex-col hidden fixed">
      <h1 className="font-semibold tracking-wide ml-4">Menu</h1>
      <div className="flex items-center gap-3 py-2 px-6 text-[#5e81f4] border-l-4 border-l-[#5e81f4]">
        <TfiHome size={16} />
        <h1 className="font-bold tracking-wide text-[1rem]">Dashboard</h1>
      </div>
      <div>
        {data.navMain.map((section, index) => (
          <div key={section.title}>
            <div
              className={`flex items-center gap-3 py-2 px-6 border-l-4 mt-2 ${
                openIndexes.includes(index)
                  ? "text-[#5e81f4] border-[#5e81f4]"
                  : "text-gray-600 border-transparent"
              }`}
            >
              <TfiHome size={16} />
              <h1 className="font-semibold tracking-wide text-[1rem]">
                {section.title}
              </h1>
              <span
                className="ml-auto cursor-pointer"
                onClick={() => toggleMenu(index)}
              >
                {openIndexes.includes(index) ? (
                  <FaMinus size={12} />
                ) : (
                  <FaPlus size={12} />
                )}
              </span>
            </div>
            {openIndexes.includes(index) && (
              <ul className="mx-9 flex flex-col gap-2 border-l-2 border-[#5e81f4]">
                {section.items.map((item) => (
                  <li
                    key={item.title}
                    className={`text-[#666] text-sm pl-5 hover:text-[#5e81f4] tracking-wide${
                      item.isActive ? "font-bold" : ""
                    }`}
                  >
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
