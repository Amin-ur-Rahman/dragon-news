import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const theDay = format(new Date(), "EEEE, MMMM d, yyyy");
  return (
    <div className="flex flex-col text-center items-center py-5 gap-5">
      <img className="w-md" src={logo} alt="site heading" />
      <h3 className="text-accent">Journalism Without Fear or Favour</h3>
      <p className="text-gray-500 font-semibold ">{theDay}</p>
      {import.meta.env.VITE_myname}
    </div>
  );
};

export default Header;
