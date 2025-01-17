import { DashboardSmallCardContainer } from "@/components/AdminDashboard/DashboardSmallCard";
import DashboarMainTable from "@/components/AdminDashboard/DashboarMainTable";
import DashboarSecondaryTable from "@/components/AdminDashboard/DashboarSecondaryTable";
import WelcomeVerifyMessage from "@/components/AdminDashboard/WelcomeVerifyMessage";

const AdminHome = () => {
  return (
    <div className="bg-[#f6f7fb]">
      <DashboardSmallCardContainer />
      <div className="w-full h-auto px-4">
        {/* <WelcomeVerifyMessage /> */}
        <div className="grid gap-4 mt-4 pb-10 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <DashboarMainTable />
          <DashboarSecondaryTable />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
