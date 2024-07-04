import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (user?.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
