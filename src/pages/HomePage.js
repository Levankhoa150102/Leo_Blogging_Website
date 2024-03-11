import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase_web/firebase-config";
import { Button } from "../components/button";
import HomeBanner from "../modules/home/HomeBanner";
import Layout from "../components/Layout/layout";
import PostFeatureItem from "../modules/post/PostFeatureItem";
import HomeFeature from "../modules/home/HomeFeature";
import HomeNewest from "../modules/home/HomeNewest";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
      {/* <Button onClick={handleSignOut}>Sign out</Button> */}
    </div>
  );
};
export default HomePage;
