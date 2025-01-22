import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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


const [profileOpen,setProfile] = useState(false)


  const contextValue = {
    toogleSidebar,
    setToogleSidebar,
    handleSubmit,
    handleLogout,
    profileOpen,setProfile
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
