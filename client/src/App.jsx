import { Route, Routes } from "react-router-dom";

import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminHome from "./pages/Admin/AdminHome";
import EmployeeAddPage from "./pages/Client/Employees/EmployeeAddPage";
import ShownEmployee from "./components/AdminDashboard/forms/Employees/ShownEmployee";
import AddClassPage from "./pages/Client/Class/AddClassPage";

export default function App() {
  return (
    <div className="flex w-full h-screen bg-black">
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<AdminHome/>} />
          <Route path="/form/add-employee" element={<EmployeeAddPage/>} />
          <Route path="/form/add-class" element={<AddClassPage/>} />
          <Route path="/table/shown-employee" element={<ShownEmployee/>} />
        </Route>
      </Routes>
    </div>
  );
}
