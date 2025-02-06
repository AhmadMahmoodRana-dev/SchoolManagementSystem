import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Context = createContext();
const ContextProvider = (props) => {
  const [toogleSidebar, setToogleSidebar] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        values
      );
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/");
      setLoginError("");
    } catch (error) {
      setLoginError(
        error.response?.data?.message || "An error occurred during login"
      );
    } finally {
      setSubmitting(false);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };


  const [profileOpen, setProfile] = useState(false)



  // ############################################## Attendence ###################################################

  const [isCheckIn, setIsCheckIn] = useState(false);
  const [user, setUser] = useState(null);
  const [storeSingleUserAttendence, setStoreSingleUserAttendence] = useState([]);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData")) || null;
    if (storedUser) {
      setUser(storedUser);
    }
    const getCheckIn = JSON.parse(localStorage.getItem("isCheckIn")) || false;
    if (getCheckIn) {
      setIsCheckIn(getCheckIn);
    }

  }, []);

  useEffect(() => {
    if (user?.id) {
      getSingleUserAttendance();
    }
  }, [user]);


  // SINGLE USER ATTENDANCE API CALL

  const getSingleUserAttendance = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/attendence/attendance/${user?.id}`);
      setStoreSingleUserAttendence(data.data)
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };


  // CHECK IN API CALL

  const checkInFunction = async () => {
    if (!user?.id) return;

    try {
      await axios.post("http://localhost:4000/api/attendence/checkin", {
        username: user.username,
        role: user.role,
        id: user.id,
      });
      getSingleUserAttendance();
      localStorage.setItem("isCheckIn", JSON.stringify(true))
      setIsCheckIn(true);
      toast.success("Checked in successfully!");
    } catch (error) {
      toast.error("Check-in failed. Please try again.");
      console.error("Check-in failed:", error);
    }
  };

  // CHECK OUT API CALL

  const checkOutFunction = async () => {
    if (!user?.id) return;

    try {
      await axios.post("http://localhost:4000/api/attendence/checkout", {
        username: user.username,
        role: user.role,
        id: user.id,
      });
      getSingleUserAttendance();
      localStorage.setItem("isCheckIn", JSON.stringify(false))
      setIsCheckIn(false)
      toast.success("Checked out successfully!");
    } catch (error) {
      toast.error("Check-out failed. Please try again.");
      console.error("Check-out failed:", error);
    }
  };







  const contextValue = {
    toogleSidebar,
    setToogleSidebar,
    handleSubmit,
    handleLogout,
    profileOpen, setProfile,
    isCheckIn, setIsCheckIn,
    checkOutFunction, checkInFunction,
    storeSingleUserAttendence, user
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
