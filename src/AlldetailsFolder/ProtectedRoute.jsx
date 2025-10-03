// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, initialized } = useAuth();
  const location = useLocation();

  // If auth is still initializing (restoring from localStorage), don't redirect yet
  if (!initialized) return null; // or a spinner component while loading

  if (!user) {
    // Redirect to login, keeping track of where they wanted to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
