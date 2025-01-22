import { useContext } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import { Context } from "@/context/Context";

const Layout = ({ children }) => {
  const { toogleSidebar } = useContext(Context);

  return (
    <div className="w-full min-h-screen h-auto bg-[#d4e4ff] dark:bg-gray-900 transition-colors duration-300">
     <Navbar/>
      <div className={`w-full ${toogleSidebar ? "min-h-[calc(100vh-70px)]" : "min-h-[calc(100vh)]"} flex pt-[70px]`}>
        {toogleSidebar && <Sidebar />}
        <div
          className={`flex-1 transition-all duration-300 ${
            toogleSidebar ? "md:ml-[320px]" : ""
          } ${toogleSidebar ? "sm:p-6 p-8" : "p-8"}`}
        >
          <div className="w-full h-full dark:text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
