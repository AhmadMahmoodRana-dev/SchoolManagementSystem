import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Auth/Login";
import AdminHome from "./pages/Admin/AdminHome";
import EmployeeAddPage from "./pages/Client/Employees/EmployeeAddPage";
import AddClassPage from "./pages/Client/Class/AddClassPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeShownPage from "./pages/Client/Employees/EmployeeShownPage";
import ClassShownPage from "./pages/Client/Class/ClassShownPage";
import StudentAddPage from "./pages/Client/Student/StudentAddPage";
import StudentShownPage from "./pages/Client/Student/StudentShownPage";
import EmployeUserPage from "./pages/Client/Employees/EmployeUserPage";
import StudentUserPage from "./pages/Client/Student/StudentUserPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ProfileSection from "./components/Layout/ProfileSection";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<AdminHome/>} />
              <Route path="/form/add-employee" element={<EmployeeAddPage/>} />
              <Route path="/table/shown-employee" element={<EmployeeShownPage/>} />
              <Route path="/table/employee-user" element={<EmployeUserPage/>} />
              <Route path="/form/add-class" element={<AddClassPage/>} />
              <Route path="/table/shown-class" element={<ClassShownPage/>} />
              <Route path="/form/add-student" element={<StudentAddPage/>} />
              <Route path="/table/Shown-student" element={<StudentShownPage/>} />
              <Route path="/table/student-user" element={<StudentUserPage/>} />
            </Route>
          </Routes>
          <ThemeToggle />
          <ToastContainer />
          <ProfileSection/>
      </div>
    </ThemeProvider>
  );
}
