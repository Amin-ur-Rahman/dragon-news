import React, { useContext } from "react";
import icon from "../assets/user.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/CreateContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const Navbar = () => {
  const handleLogOut = () => {
    return signOut(auth).then(console.log("user logged out"));
  };
  const { runningUser } = useContext(AuthContext);
  return (
    <div className="flex justify-between mx-auto w-full py-10">
      <div></div>
      <div className="flex items-center justify-center gap-4 text-accent font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/career">career</NavLink>
      </div>
      <div className="flex gap-4 w-max">
        <img src={icon} className="rounded-[50%]" alt="" />

        {runningUser ? (
          <NavLink>
            <button
              onClick={handleLogOut}
              type="button"
              className="btn btn-primary "
            >
              Log Out
            </button>
          </NavLink>
        ) : (
          <NavLink to="/auth/login">
            <button type="button" className="btn btn-primary ">
              Log in
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
