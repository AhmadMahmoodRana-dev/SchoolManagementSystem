import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Auth/Login";
import AdminHome from "./pages/Admin/AdminHome";
import EmployeeAddPage from "./pages/Admin/Employees/EmployeeAddPage";
import AddClassPage from "./pages/Admin/Class/AddClassPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeShownPage from "./pages/Admin/Employees/EmployeeShownPage";
import ClassShownPage from "./pages/Admin/Class/ClassShownPage";
import StudentAddPage from "./pages/Admin/Student/StudentAddPage";
import StudentShownPage from "./pages/Admin/Student/StudentShownPage";
import EmployeUserPage from "./pages/Admin/Employees/EmployeUserPage";
import StudentUserPage from "./pages/Admin/Student/StudentUserPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ProfileSection from "./components/Layout/ProfileSection";
import AssignSubjects from "./pages/Admin/Subjects/AssignSubjects";
import AllSubjects from "./pages/Admin/Subjects/AllSubjects";
import StudentDashboard from "./pages/Client/StudentDashboard";

export default function App() {
  const user = JSON.parse(localStorage.getItem("userData"));
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
            {user && user.role === "Admin" ? (
              <Route path="/" element={<AdminHome />} />
            ) : (
              <Route path="/" element={<StudentDashboard />} />
            )}
            {user && user.role === "Admin" ? (
              <>
                <Route
                  path="/form/add-employee"
                  element={<EmployeeAddPage />}
                />
                <Route
                  path="/table/shown-employee"
                  element={<EmployeeShownPage />}
                />
                <Route
                  path="/table/employee-user"
                  element={<EmployeUserPage />}
                />
                <Route path="/form/add-class" element={<AddClassPage />} />
                <Route path="/table/shown-class" element={<ClassShownPage />} />
                <Route path="/form/add-student" element={<StudentAddPage />} />
                <Route
                  path="/table/Shown-student"
                  element={<StudentShownPage />}
                />
                <Route
                  path="/table/student-user"
                  element={<StudentUserPage />}
                />
                <Route
                  path="/form/assign-subject"
                  element={<AssignSubjects />}
                />
                <Route path="/table/shown-subject" element={<AllSubjects />} />
              </>
            ) : null}
          </Route>
        </Routes>
        <ThemeToggle />
        <ToastContainer />
        <ProfileSection />
      </div>
    </ThemeProvider>
  );
}
