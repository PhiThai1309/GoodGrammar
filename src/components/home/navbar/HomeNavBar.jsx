import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavBar.css";

const HomeNavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img id="logo" src={require("../../../assets/logo.png")} alt="" /> */}
          <p className="logo">Good {<br />} Grammar</p>
        </div>
        <div className="navbar-links">
          <button className="dotted-btn">Sign up</button>

          <Link to="grammar">
            <button className="filled-btn">Log in</button>
          </Link>
        </div>
      </div>
      <div className="blur_background"></div>
    </div>
  );
};

export default HomeNavBar;
