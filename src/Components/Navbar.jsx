import React from "react";
import icon from "../assets/user.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto w-full my-10">
      <div></div>
      <div className="flex items-center justify-center gap-4 text-accent font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/career">career</NavLink>
      </div>
      <div className="flex gap-4 w-max">
        <img src={icon} alt="" />
        <button type="button" className="btn btn-primary">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
