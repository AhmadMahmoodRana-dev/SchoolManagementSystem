import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import { Context } from "@/context/Context";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { toogleSidebar, setToogleSidebar } = useContext(Context);
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-auto min-h-[90vh] flex mt-[77px]">
        {toogleSidebar ? <Sidebar /> : null}
        <div className="w-full ml-[310px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
