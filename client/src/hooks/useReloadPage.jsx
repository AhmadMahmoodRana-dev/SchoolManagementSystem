import { useLocation, useNavigate } from "react-router-dom";

const useReloadPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const reloadPage = () => {
    const currentPath = location.pathname;
    navigate("/"); // Temporarily navigate away
    setTimeout(() => {
      navigate(currentPath); // Return to the original path
    }, 0); // Delay to ensure route updates correctly
  };

  return reloadPage;
};

export default useReloadPage;
