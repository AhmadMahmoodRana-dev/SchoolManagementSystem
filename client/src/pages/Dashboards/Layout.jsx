import  { useContext } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import { Context } from "@/context/Context";

const Layout = ({ children }) => {
  const { toogleSidebar } = useContext(Context);

  return (
    <div className="w-full min-h-screen h-auto bg-[#d4e4ff]">
      <Navbar />
      <div className={`w-full ${toogleSidebar ? "min-h-[calc(100vh-70px)]" : "min-h-[calc(100vh)]"}  flex pt-[70px] `}>
        {toogleSidebar ? <Sidebar /> : null}
        <div
          className={`flex-1 transition-all duration-300 ${
            toogleSidebar ? "md:ml-[320px]" : null
          } ${toogleSidebar ? "sm:p-6 p-0" : "p-0"} `}
        >
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
