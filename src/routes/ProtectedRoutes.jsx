import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  // Kiểm tra token, cookie hoặc localStorage
  const isLogin = false;
  return !isLogin ? <Navigate to={"/"} /> : children;
}
