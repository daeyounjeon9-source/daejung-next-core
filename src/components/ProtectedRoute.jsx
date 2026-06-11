import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole = "admin" }) {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={requiredRole === "admin" ? "/admin-login" : "/login"} replace state={{ from: location.pathname }} />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to={requiredRole === "admin" ? "/admin-login" : "/login"} replace state={{ from: location.pathname, roleBlocked: true }} />;
  }

  return children;
}
