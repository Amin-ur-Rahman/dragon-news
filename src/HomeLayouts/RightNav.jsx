import React, { useContext } from "react";

import SocialLogin from "../Components/SocialLogin";
import FindUs from "../Components/FindUs";
import { AuthContext } from "../Contexts/CreateContext";

const RightNav = () => {
  const { runningUser } = useContext(AuthContext);
  return (
    <div>
      <h1>{runningUser && runningUser.email}</h1>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNav;
