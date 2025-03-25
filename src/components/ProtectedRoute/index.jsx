import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

function ProtectedRoute({ children }) {
  const jwtToken = Cookies.get("jwt_token");

  return jwtToken ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
