// import { useAuth } from "./context";
import { Navigate, useLocation } from "react-router-dom";
const RequiresAuth = ({ children }) => {
  const location = useLocation();
  // const { authState } = useAuth();

  // console.log(authState);
  // const { token } = authState;
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
