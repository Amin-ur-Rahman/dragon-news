import React from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Login With</h1>
      <div className="space-y-2">
        <button className="btn text-secondary w-full bg-white border border-secondary">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="btn text-primary bg-white border border-primary w-full ">
          <VscGithubInverted size={24}></VscGithubInverted> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
