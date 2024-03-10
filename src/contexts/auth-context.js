import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function Authprovider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = {
    userInfo,
    setUserInfo,
  };
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
