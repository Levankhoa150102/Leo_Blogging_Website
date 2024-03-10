import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase_web/firebase-config";
import { Button } from "../components/button";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
    console.log("Sign outed");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
};
export default HomePage;
