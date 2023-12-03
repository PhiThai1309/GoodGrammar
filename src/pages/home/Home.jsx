import React from "react";
import "./Home.css";
import {
  HomeNavBar,
  HomeHeading,
  HomeFeature,
  TrustedBy,
  HomeContact,
  HomeFooter,
} from "../../components";

const Home = () => {
  return (
    <div className="home_container">
      <HomeNavBar></HomeNavBar>
      <div className="home_heading_background">
        <HomeHeading></HomeHeading>
      </div>
      <TrustedBy></TrustedBy>
      <HomeFeature></HomeFeature>
      <HomeContact></HomeContact>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
