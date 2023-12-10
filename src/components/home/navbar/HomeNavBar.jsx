import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavBar.css";
import Signoutbtn from "../../../pages/login/Logout";
const HomeNavBar = () => {
  return (
    // <ClerkProvider publishableKey={clerkPubKey}>
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img id="logo" src={require("../../../assets/logo.png")} alt="" /> */}
          <p className="logo">Good {<br />} Grammar</p>
        </div>
        <div className="navbar-links">
          {/* <Link to="signup"> */}
          <button className="dotted-btn">Sign up</button>
          {/* </Link> */}

          <Signoutbtn />

          <Link to="login">
            <button className="filled-btn">Log in</button>
          </Link>
        </div>
      </div>
      <div className="blur_background"></div>
    </div>
    // </ClerkProvider>
  );
};

export default HomeNavBar;
