import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

const FindUs = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-semibold mb-4">Find Us</h1>
      <p className="flex py-2 px-4 gap-2 font-semibold border border-indigo-600 rounded-sm items-center w-full text-left mb-2">
        <SiFacebook className="text-indigo-600  " size={24}></SiFacebook>
        Facebook
      </p>
      <p className="flex py-2 px-4 gap-2 font-semibold border border-gray-600 rounded-sm items-center w-full text-left mb-2">
        <RiTwitterXLine className="text-gray-600  " size={24}></RiTwitterXLine>
        Twitter
      </p>
      <p className="flex py-2 px-4 gap-2 font-semibold border border-pink-600 rounded-sm items-center w-full text-left mb-2">
        <FaInstagram className="text-pink-600  " size={24}></FaInstagram>
        Instagram
      </p>
    </div>
  );
};

export default FindUs;
