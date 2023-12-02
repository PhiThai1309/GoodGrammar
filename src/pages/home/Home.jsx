import React from "react";
import HomeNavBar from "../../components/home/navbar/HomeNavBar";
import "./Home.css";
import HomeHeading from "../../components/home/heading/HomeHeading";
import TrustedBy from "../../components/home/trustedBy/TrustedBy";
import HomeFeature from "../../components/home/feature/HomeFeature";

const Home = () => {
  return (
    <div className="home_container">
      <HomeNavBar></HomeNavBar>
      <div className="home_heading_background">
        <HomeHeading></HomeHeading>
      </div>
      <TrustedBy></TrustedBy>
      <HomeFeature></HomeFeature>
    </div>
  );
};

export default Home;
