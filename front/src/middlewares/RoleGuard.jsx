import { Navigate } from "react-router";

export function RoleGuard({ allowedRoles, children }) {
  const userRole = localStorage.getItem("role");

  if (allowedRoles.includes(userRole)) {
    return children;
  } else {
    // return <Navigate to="/login" />;
    return <Navigate to="/auth/login" replace />;
  }
}
