import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase_web/firebase-config";

const AuthContext = createContext();

function Authprovider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = {
    userInfo,
    setUserInfo,
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });
  });
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { Authprovider, useAuth };
