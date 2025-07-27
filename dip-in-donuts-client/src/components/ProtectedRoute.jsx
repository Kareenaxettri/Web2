// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRoles }) {
  // Get user role from localStorage or context
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const role = JSON.parse(user).role;

  // Check if role is allowed to access this route
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}