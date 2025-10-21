import React, { useContext } from "react";
import { AuthContext } from "./CreateContext";
import { Navigate, useLocation } from "react-router";
import LoadingFallback from "./LoadingFallback";

const PrivateRoute = ({ children }) => {
  const { runningUser, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <LoadingFallback></LoadingFallback>;
  }

  return runningUser ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/auth/login"></Navigate>
  );
};

export default PrivateRoute;
