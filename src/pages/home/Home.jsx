import React from "react";
import "./Home.css";
import { HomeNavBar, HomeHeading, HomeFeature, TrustedBy } from '../../components'

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
