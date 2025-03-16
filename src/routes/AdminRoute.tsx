import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user } = useAuth();
  return user && user.role === "Admin" ? <>{children}</> : <Navigate to="/login" replace />;
};

export default AdminRoute;
