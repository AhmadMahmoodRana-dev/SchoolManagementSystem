import React, { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Context } from "@/context/Context";

const Navbar = () => {
  const {toogleSidebar, setToogleSidebar} = useContext(Context)
  return (
    <nav className="border-b-2 fixed bg-white w-full h-[77px] flex justify-between px-12 items-center">
      <h1 className="logo font-bold text-2xl cursor-pointer" onClick={() => setToogleSidebar(!toogleSidebar)}>AHMAD</h1>
      <div className="flex gap-5">
        <FaBell size={20}/>
        <CgProfile size={20}/>
      </div>
    </nav>
  );
};

export default Navbar;
