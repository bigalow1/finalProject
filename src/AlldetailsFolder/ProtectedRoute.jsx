// src/AlldetailsFolder/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { User } = useAuth();

  if (!User) {
    return <Navigate to="/CheckoutPage" replace />;
  }

  return children;
};

export default ProtectedRoute;
