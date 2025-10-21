import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <section className="w-[80dvw] mx-auto">
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
