import React, { useEffect, useState } from "react";
import { AuthContext } from "./CreateContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  const [runningUser, setRunningUser] = useState(null);

  const [loading, setLoading] = useState(true);
  console.log(runningUser, loading);
  // const [newUser, setNewUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => response)
      .catch((error) => console.log(error));
  };

  const updateUserProfile = (userName, url) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: url,
    })
      .then(console.log("Profile updated"))
      .catch((error) => console.log(error, "something went wrong!"));
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setRunningUser(user);
      } else {
        setRunningUser(null);
        console.log("no user found!");
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const user = {
    updateUserProfile,
    firstName: "amin",
    runningUser,
    createUser,
    loginUser,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
