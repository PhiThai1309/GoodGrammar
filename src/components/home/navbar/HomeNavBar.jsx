import React from "react";
import { Link } from "react-router-dom";
import { UserButton, useAuth, useClerk } from "@clerk/clerk-react";
import "./HomeNavBar.css";
// import Signoutbtn from "../../../pages/login/Logout";

const HomeNavBar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  function loggedIn() {
    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
      return (
        <Link to="login">
          <button className="filled-btn">Log in</button>
        </Link>
      );
    } else {
      return (
        <div className="flex_common">
          <Link to="grammar">
            <button className="dotted-btn">Access</button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      );
    }
  }

  return (
    // <ClerkProvider publishableKey={clerkPubKey}>
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img id="logo" src={require("../../../assets/logo.png")} alt="" /> */}
          <p className="logo">Good {<br />} Grammar</p>
        </div>
        <div className="navbar-links">
          {/* <button className="dotted-btn" onClick={() => clerk.openSignUp()}>
            Sign up
          </button> */}
          {loggedIn()}
        </div>
      </div>
      <div className="blur_background"></div>
    </div>
    // </ClerkProvider>
  );
};

export default HomeNavBar;
