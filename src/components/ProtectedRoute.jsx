import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../features";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn,", isLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};

export default ProtectedRoute;
