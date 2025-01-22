import { Navigate, Outlet } from "react-router-dom";
import Layout from "@/pages/Dashboards/Layout";

const PrivateRoutes = () => {
  const token = localStorage.getItem("authToken"); 
  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
